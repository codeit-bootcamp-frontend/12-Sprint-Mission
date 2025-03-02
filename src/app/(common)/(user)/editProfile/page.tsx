import EditProfileForm from "@/components/user/EditProfileForm";
import { getQueryClient } from "@/util/getQueryClient";
import { getUserOptions } from "@/service/user.queries";
import { dehydrate, HydrationBoundary } from "@tanstack/react-query";

// build시에 ssg로 빌드되는것을 막기위해서
export const dynamic = "force-dynamic";

export default function EditProfilePage() {
  const queryClient = getQueryClient();

  void queryClient.prefetchQuery(getUserOptions);

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <EditProfileForm />
    </HydrationBoundary>
  );
}
