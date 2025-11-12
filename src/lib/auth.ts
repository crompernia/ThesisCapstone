/**
 * @fileoverview Authentication utility functions
 * Provides helper functions for password hashing and session management
 */
import { hash, compare } from "bcrypt";
import { getServerSession } from "next-auth/next";
import { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import { DrizzleAdapter } from "@auth/drizzle-adapter";
import { getDb } from "@/lib/db";
import { accounts } from "@/lib/schema";
import { nextAuthUsers, nextAuthAccounts, nextAuthSessions, verificationTokens } from "../../drizzle/schema";
import { eq } from "drizzle-orm";

export const authOptions: NextAuthOptions = {
  session: {
    strategy: "jwt",
  },
  providers: [
    CredentialsProvider({
      id: "employee-credentials",
      name: "Employee Login",
      credentials: {
        employeeId: { label: "Employee ID", type: "text" },
        password: { label: "Password", type: "password" }
      },
      async authorize(credentials) {
        if (!credentials?.employeeId || !credentials?.password) {
          console.error("Employee login: Missing credentials");
          return null;
        }

        try {
          const db = await getDb();
          const [user] = await db
            .select()
            .from(accounts)
            .where(eq(accounts.employeeNumber, credentials.employeeId));

          if (!user) {
            console.error("Employee login: User not found", credentials.employeeId);
            return null;
          }

          // Allow Board of Directors to login as admin even with employee credentials
          if (user.position === "Board of Directors") {
            // Return admin session for BOD members
            console.log("Board of Directors login successful:", user.id);
            return {
              id: user.id,
              email: user.email,
              name: `${user.firstName} ${user.lastName}`,
              role: "Admin", // Override role to Admin for BOD
            };
          }

          // Allow HR role users to login as HR even with employee credentials
          if (user.role === "HR") {
            // Return HR session for HR users
            console.log("HR login successful:", user.id);
            return {
              id: user.id,
              email: user.email,
              name: `${user.firstName} ${user.lastName}`,
              role: "HR",
            };
          }

          if (user.role !== "Employee") {
            console.error("Employee login: Invalid role", user.role);
            return null;
          }

          const isPasswordValid = await compare(credentials.password, user.password);

          if (!isPasswordValid) {
            console.error("Employee login: Invalid password");
            return null;
          }

          if (user.status !== "Active") {
            console.error("Employee login: Inactive account");
            return null;
          }

          console.log("Employee login successful:", user.id);
          return {
            id: user.id,
            email: user.email,
            name: `${user.firstName} ${user.lastName}`,
            role: user.role,
          };
        } catch (error) {
          console.error("Employee login error:", error);
          return null;
        }
      }
    }),
    CredentialsProvider({
      id: "hr-credentials",
      name: "HR Login",
      credentials: {
        email: { label: "Email", type: "email" },
        password: { label: "Password", type: "password" }
      },
      async authorize(credentials) {
        if (!credentials?.email || !credentials?.password) {
          console.error("HR login: Missing credentials");
          return null;
        }

        try {
          const db = await getDb();
          const [user] = await db
            .select()
            .from(accounts)
            .where(eq(accounts.email, credentials.email));

          if (!user) {
            console.error("HR login: User not found", credentials.email);
            return null;
          }

          if (user.role !== "HR") {
            console.error("HR login: Invalid role", user.role);
            return null;
          }

          const isPasswordValid = await compare(credentials.password, user.password);

          if (!isPasswordValid) {
            console.error("HR login: Invalid password");
            return null;
          }

          if (user.status !== "Active") {
            console.error("HR login: Inactive account");
            return null;
          }

          console.log("HR login successful:", user.id);
          return {
            id: user.id,
            email: user.email,
            name: `${user.firstName} ${user.lastName}`,
            role: user.role,
          };
        } catch (error) {
          console.error("HR login error:", error);
          return null;
        }
      }
    }),
    CredentialsProvider({
      id: "admin-credentials",
      name: "Admin Login",
      credentials: {
        email: { label: "Email", type: "email" },
        password: { label: "Password", type: "password" }
      },
      async authorize(credentials) {
        console.log("Admin login: Starting authorization for:", credentials?.email);

        if (!credentials?.email || !credentials?.password) {
          console.error("Admin login: Missing credentials");
          return null;
        }

        try {
          const db = await getDb();
          console.log("Admin login: Database connection established");

          console.log("Admin login: Looking for user with email:", credentials.email);

          const [user] = await db
            .select()
            .from(accounts)
            .where(eq(accounts.email, credentials.email));

          if (!user) {
            console.error("Admin login: User not found", credentials.email);
            console.log("Admin login: Available admin emails in DB:");
            const admins = await db.select({ email: accounts.email, role: accounts.role, firstName: accounts.firstName, lastName: accounts.lastName }).from(accounts).where(eq(accounts.role, "Admin"));
            console.log("Available admins:", admins);
            return null;
          }

          console.log("Admin login: Found user:", {
            id: user.id,
            name: `${user.firstName} ${user.lastName}`,
            email: user.email,
            role: user.role,
            status: user.status
          });

          if (user.role !== "Admin") {
            console.error("Admin login: Invalid role", user.role, "expected Admin");
            return null;
          }

          console.log("Admin login: Checking password...");
          const isPasswordValid = await compare(credentials.password, user.password);
          console.log("Admin login: Password valid:", isPasswordValid);

          if (!isPasswordValid) {
            console.error("Admin login: Invalid password for user", user.email);
            return null;
          }

          if (user.status !== "Active") {
            console.error("Admin login: Inactive account", user.status, "for user", user.email);
            return null;
          }

          console.log("Admin login successful:", user.id, user.email);
          return {
            id: user.id,
            email: user.email,
            name: `${user.firstName} ${user.lastName}`,
            role: user.role,
          };
        } catch (error) {
          console.error("Admin login error:", error);
          return null;
        }
      }
    })
  ],
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.id = user.id;
        token.role = user.role;
      }
      return token;
    },
    async session({ session, token }) {
      if (session.user) {
        session.user.id = token.id as string;
        session.user.role = token.role as string;
      }
      return session;
    }
  },
  pages: {
    signIn: "/",
    error: "/",
  },
  secret: process.env.NEXTAUTH_SECRET,
  debug: process.env.NODE_ENV === "development",
};

/**
 * Hash a password using bcrypt
 * @param password - Plain text password
 * @returns Hashed password
 */
export async function hashPassword(password: string): Promise<string> {
  return await hash(password, 12);
}

/**
 * Verify a password against a hash
 * @param password - Plain text password
 * @param hashedPassword - Hashed password to compare against
 * @returns True if password matches, false otherwise
 */
export async function verifyPassword(password: string, hashedPassword: string): Promise<boolean> {
  return await compare(password, hashedPassword);
}

/**
 * Get the current session from server components
 * @returns Session object or null if not authenticated
 */
export async function getSession() {
  return await getServerSession(authOptions);
}

/**
 * Check if user is authenticated
 * @returns True if user is authenticated, false otherwise
 */
export async function isAuthenticated(): Promise<boolean> {
  const session = await getSession();
  return !!session?.user;
}

/**
 * Check if user has a specific role
 * @param role - Role to check for
 * @returns True if user has the role, false otherwise
 */
export async function hasRole(role: string): Promise<boolean> {
  const session = await getSession();
  return session?.user?.role === role;
}

/**
 * Get current user ID
 * @returns User ID or null if not authenticated
 */
export async function getCurrentUserId(): Promise<string | null> {
  const session = await getSession();
  return session?.user?.id || null;
}
