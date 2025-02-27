import EditProfileForm from "@/components/user/EditProfileForm";
import { getQueryClient } from "@/util/getQueryClient";
import { getUserOptions } from "@/service/user.queries";
import { dehydrate, HydrationBoundary } from "@tanstack/react-query";

export default async function EditProfilePage() {
  const queryClient = getQueryClient();

  queryClient.prefetchQuery(getUserOptions);

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <EditProfileForm />
    </HydrationBoundary>
  );
}
