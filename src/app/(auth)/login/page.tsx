import { redirect } from "next/navigation";
import AuthContainer from "../_components/AuthContainer";
import LoginForm from "../_components/LoginForm";
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
