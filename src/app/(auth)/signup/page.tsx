import { redirect } from "next/navigation";
import AuthContainer from "@/components/auth/AuthContainer";
import SignupForm from "@/components/auth/SignupForm";
import { auth } from "@/auth";

export default async function SignupPage() {
  const session = await auth();

  if (session) {
    redirect("/");
  }

  return (
    <AuthContainer mode="signup">
      <SignupForm />
    </AuthContainer>
  );
}
