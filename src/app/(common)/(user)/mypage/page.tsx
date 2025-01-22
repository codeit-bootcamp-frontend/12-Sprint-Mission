import { auth } from "@/auth";
import { getUser, getUserActivity } from "@/service/user";
import { redirect } from "next/navigation";
import Profile from "../_components/Profile";
import Activity from "../_components/Activity";

export default async function UserPage() {
  const session = await auth();
  if (!session) {
    redirect("/");
  }

  const { nickname, image, createdAt } = await getUser();
  const { products, favorites } = await getUserActivity();

  return (
    <>
      <Profile nickname={nickname} image={image} createdAt={createdAt} />
      <Activity
        productsCount={Number(products.totalCount)}
        favoritesCount={Number(favorites.totalCount)}
      />
    </>
  );
}
