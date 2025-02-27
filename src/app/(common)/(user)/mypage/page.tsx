import Profile from "@/components/user/Profile";
import Activity from "@/components/user/Activity";
import { getQueryClient } from "@/util/getQueryClient";
import { dehydrate, HydrationBoundary } from "@tanstack/react-query";
import { getUserActivityOptions, getUserOptions } from "@/service/user.queries";

// build시에 ssg로 빌드되는것을 막기위해서
export const dynamic = "force-dynamic";

export default async function UserPage() {
  const queryClient = getQueryClient();

  queryClient.prefetchQuery(getUserOptions);
  queryClient.prefetchQuery(getUserActivityOptions);

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <Profile />
      <Activity />
    </HydrationBoundary>
  );
}
