import Link from "next/link";
import { Button, Input } from "@/components/ui";

interface AuthFormProps {
  mode: "login" | "signup";
}

export function AuthForm({ mode }: AuthFormProps) {
  const isSignup = mode === "signup";

  return (
    <form className="space-y-5">
      {isSignup ? (
        <label className="block">
          <span className="mb-2 block text-sm font-medium text-slate-700">
            Workspace name
          </span>
          <Input placeholder="Northstar Labs" />
        </label>
      ) : null}

      <label className="block">
        <span className="mb-2 block text-sm font-medium text-slate-700">
          Email
        </span>
        <Input type="email" placeholder="you@company.com" />
      </label>

      <label className="block">
        <span className="mb-2 block text-sm font-medium text-slate-700">
          Password
        </span>
        <Input type="password" placeholder="Enter your password" />
      </label>

      <Button type="submit" fullWidth>
        {isSignup ? "Create workspace" : "Sign in"}
      </Button>

      <p className="text-sm text-slate-600">
        {isSignup ? "Already have an account?" : "New to LOOP?"}{" "}
        <Link
          href={isSignup ? "/login" : "/signup"}
          className="font-medium text-blue-600 hover:text-blue-700"
        >
          {isSignup ? "Sign in" : "Create an account"}
        </Link>
      </p>
    </form>
  );
}

