/**
 * @fileoverview NextAuth type declarations
 * Extends NextAuth types to include custom user properties
 */
import NextAuth, { DefaultSession } from "next-auth";

declare module "next-auth" {
  interface Session {
    user: {
      id: string;
      role: string;
      branch?: string;
      position?: string;
      department?: string;
      managedBranches?: string[];
      photo?: string;
    } & DefaultSession["user"];
  }

  interface User {
    id: string;
    role: string;
    branch?: string;
    position?: string;
    department?: string;
    managedBranches?: string[];
    photo?: string;
  }
}

declare module "next-auth/jwt" {
  interface JWT {
    id: string;
    role: string;
    branch?: string;
    position?: string;
    department?: string;
    managedBranches?: string[];
    photo?: string;
  }
}
