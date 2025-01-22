import { auth } from "@/auth";
import { getUser } from "@/service/user";
import { redirect } from "next/navigation";
import Profile from "../_components/Profile";

export default async function UserPage() {
  const session = await auth();
  if (!session) {
    redirect("/");
  }

  const { nickname, image, createdAt } = await getUser();
  return (
    <div>
      <Profile nickname={nickname} image={image} createdAt={createdAt} />
    </div>
  );
}
