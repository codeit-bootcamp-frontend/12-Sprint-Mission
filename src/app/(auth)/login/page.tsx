import { redirect } from "next/navigation";
import AuthContainer from "@/components/auth/AuthContainer";
import LoginForm from "@/components/auth/LoginForm";
import { auth } from "@/auth";

export default async function LoginPage() {
  const session = await auth();

  if (session) {
    redirect("/");
  }

  return (
    <AuthContainer>
      <LoginForm />
    </AuthContainer>
  );
}
