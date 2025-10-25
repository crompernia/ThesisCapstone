"use client";

import dynamic from "next/dynamic";
import { Logo } from "../components/logo";

const LoginForm = dynamic(() => import("../components/login-form").then(m => m.LoginForm), {
  ssr: false,
});

export default function LoginPage() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-muted/40 p-4">
      <div className="w-full max-w-md">
        <div className="flex justify-center mb-6">
          <Logo className="h-20 w-auto" />
        </div>
        <p className="text-black text-2xl text-center mb-8">
          Welcome back. Please login to your account.
        </p>

        <LoginForm />

        <p className="text-xs text-muted-foreground text-left mt-8">
          © {new Date().getFullYear()} Chumplace Inc. All rights reserved.
        </p>
      </div>
    </main>
  );
}