import {
  queryOptions,
  useMutation,
  useQueryClient,
} from "@tanstack/react-query";
import {
  changeUserPassword,
  updateUser,
  getUser,
  getUserActivity,
  uploadProfileImage,
} from "./user.service";
import { ChangePasswordFormType, EditProfileFormType } from "./user.schema";

export const getUserOptions = queryOptions({
  queryKey: ["user"],
  queryFn: getUser,
});

export const getUserActivityOptions = queryOptions({
  queryKey: ["user-activity"],
  queryFn: getUserActivity,
});

export function useChangePassword() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (params: ChangePasswordFormType) => changeUserPassword(params),
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["user"],
      });
    },
  });
}

export function useUpdateUser() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: async (formData: EditProfileFormType) => {
      if (formData.image instanceof File) {
        const { url } = await uploadProfileImage(formData.image);
        formData.image = url;
      }
      return updateUser(formData);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["user"],
      });
    },
  });
}
