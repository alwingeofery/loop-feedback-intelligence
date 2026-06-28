import { AuthForm, AuthShell } from "@/components/auth";

export default function SignupPage() {
  return (
    <AuthShell
      title="Sign up"
      description="Create a LOOP workspace and invite your team into a shared feedback intelligence hub."
    >
      <AuthForm mode="signup" />
    </AuthShell>
  );
}
