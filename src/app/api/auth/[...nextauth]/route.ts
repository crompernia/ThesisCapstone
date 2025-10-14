/**
 * @fileoverview NextAuth.js API route handler
 * Handles all authentication requests including sign in, sign out, and session management
 */
import NextAuth, { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import { compare } from "bcryptjs";
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

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
