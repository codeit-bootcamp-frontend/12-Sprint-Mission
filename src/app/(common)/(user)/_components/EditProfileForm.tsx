"use client";

import { Avatar, Button } from "@/components/ui";
import styles from "./EditProfileForm.module.scss";
import useFormWithError from "@/hooks/useFormWithError";
import { zodResolver } from "@hookform/resolvers/zod";
import { editProfileFormSchmea, EditProfileFormType } from "@/schemas/user";
import { Form } from "@/components/Field";
import { ChangeEvent, useEffect, useRef } from "react";
import action from "../editProfile/action";
import { useRouter } from "next/navigation";
import FormControl from "./FormControl";

export default function EditProfileForm({
  nickname,
  image,
}: {
  nickname: string;
  image: string;
}) {
  const {
    formError,
    watch,
    setValue,
    handleSubmit,
    formState: { isSubmitting, isValid },
  } = useFormWithError<EditProfileFormType>({
    resolver: zodResolver(editProfileFormSchmea),
    defaultValues: {
      image: image || undefined,
    },
  });
  const router = useRouter();

  const imageValue = watch("image");
  const preview =
    imageValue instanceof File ? URL.createObjectURL(imageValue) : imageValue;

  const fileRef = useRef<HTMLInputElement>(null);
  useEffect(() => {
    return () => {
      if (preview && imageValue instanceof File) {
        URL.revokeObjectURL(preview);
      }
    };
  }, [preview, imageValue]);

  function handleFileChange(e: ChangeEvent<HTMLInputElement>) {
    if (!e.target.files) return;

    const files = e.target.files;
    setValue("image", files[0]);

    if (fileRef.current) {
      fileRef.current.value = "";
    }
  }

  async function onSubmit(data: EditProfileFormType) {
    const response = await action(data);
    if (response.success) {
      router.replace("/mypage");
    } else {
      throw new Error(response.message);
    }
  }

  return (
    <Form
      isLoading={isSubmitting}
      error={formError}
      onSubmit={handleSubmit(onSubmit)}
    >
      <input
        type="file"
        accept="image/*"
        className="a11y"
        ref={fileRef}
        onChange={handleFileChange}
      />
      <Avatar nickname={nickname} img={preview} className={styles.pic} />

      <div className={styles.picButton}>
        <Button
          type="button"
          variant="outlined"
          onClick={() => fileRef.current?.click()}
        >
          사진변경
        </Button>
      </div>

      <FormControl>
        <Button color="secondary" variant="text" onClick={() => router.back()}>
          취소
        </Button>
        <Button type="submit" disabled={!isValid}>
          저장
        </Button>
      </FormControl>
    </Form>
  );
}
