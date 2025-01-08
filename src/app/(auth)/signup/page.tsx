import { redirect } from "next/navigation";
import AuthContainer from "../_components/AuthContainer";
import SignupForm from "../_components/SignupForm";
import { auth } from "@/app/api/auth/auth";

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
