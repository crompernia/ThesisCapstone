/**
 * @fileoverview Authentication utility functions
 * Provides helper functions for password hashing and session management
 */
import { hash, compare } from "bcryptjs";
import { getServerSession } from "next-auth/next";
import { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import { getDb } from "@/lib/db";
import { accounts } from "@/lib/schema";
import { eq } from "drizzle-orm";

export const authOptions: NextAuthOptions = {
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
          return null;
        }

        try {
          const db = await getDb();
          const [user] = await db
            .select()
            .from(accounts)
            .where(eq(accounts.employeeNumber, credentials.employeeId));

          if (!user) {
            return null;
          }

          if (user.role !== "Employee") {
            return null;
          }

          const isPasswordValid = await compare(credentials.password, user.password);

          if (!isPasswordValid) {
            return null;
          }

          if (user.status !== "Active") {
            return null;
          }

          return {
            id: user.id,
            email: user.email,
            name: `${user.firstName} ${user.lastName}`,
            role: user.role,
            branch: user.branch ?? undefined,
            position: user.position ?? undefined,
            department: user.department ?? undefined,
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
          return null;
        }

        try {
          const db = await getDb();
          const [user] = await db
            .select()
            .from(accounts)
            .where(eq(accounts.email, credentials.email));

          if (!user) {
            return null;
          }

          if (user.role !== "HR") {
            return null;
          }

          const isPasswordValid = await compare(credentials.password, user.password);

          if (!isPasswordValid) {
            return null;
          }

          if (user.status !== "Active") {
            return null;
          }

          return {
            id: user.id,
            email: user.email,
            name: `${user.firstName} ${user.lastName}`,
            role: user.role,
            managedBranches: user.managedBranches || [],
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
        if (!credentials?.email || !credentials?.password) {
          return null;
        }

        try {
          const db = await getDb();
          const [user] = await db
            .select()
            .from(accounts)
            .where(eq(accounts.email, credentials.email));

          if (!user) {
            return null;
          }

          if (user.role !== "Admin") {
            return null;
          }

          const isPasswordValid = await compare(credentials.password, user.password);

          if (!isPasswordValid) {
            return null;
          }

          if (user.status !== "Active") {
            return null;
          }

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
        token.branch = user.branch;
        token.position = user.position;
        token.department = user.department;
        token.managedBranches = user.managedBranches;
      }
      return token;
    },
    async session({ session, token }) {
      if (session.user) {
        session.user.id = token.id as string;
        session.user.role = token.role as string;
        session.user.branch = token.branch as string;
        session.user.position = token.position as string;
        session.user.department = token.department as string;
        session.user.managedBranches = token.managedBranches as string[];
      }
      return session;
    }
  },
  pages: {
    signIn: "/",
    error: "/",
  },
  session: {
    strategy: "jwt",
    maxAge: 24 * 60 * 60, // 24 hours
  },
  secret: process.env.NEXTAUTH_SECRET,
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
