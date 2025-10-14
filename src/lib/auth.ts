/**
 * @fileoverview Authentication utility functions
 * Provides helper functions for password hashing and session management
 */
import { hash, compare } from "bcryptjs";
import { getServerSession } from "next-auth/next";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";

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
