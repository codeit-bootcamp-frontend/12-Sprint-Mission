import { auth } from "@/auth";
import EditProfileForm from "../_components/EditProfileForm";
import { redirect } from "next/navigation";
import { getUser } from "@/service/user";

export default async function EditProfilePage() {
  const session = await auth();
  if (!session) {
    redirect("/login");
  }

  const userInfo = await getUser();
  if (!userInfo) {
    redirect("/login");
  }

  const { nickname, image } = userInfo;

  return <EditProfileForm nickname={nickname} image={image} />;
}
