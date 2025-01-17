'use server';

export async function submitArticle(formData: FormData) {
  return { success: true, message: '게시글 생성이 완료되었습니다.' };
}
