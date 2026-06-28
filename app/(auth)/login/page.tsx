import { AuthForm, AuthShell } from "@/components/auth";

export default function LoginPage() {
  return (
    <AuthShell
      title="Login"
      description="Sign in to continue reviewing customer feedback across your workspace."
    >
      <AuthForm mode="login" />
    </AuthShell>
  );
}
