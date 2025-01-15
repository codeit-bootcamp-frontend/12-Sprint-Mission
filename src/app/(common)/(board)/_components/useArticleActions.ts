import { ArticleFormType } from "@/schemas/article";
import {
  addArticle,
  deleteArticle,
  modifyArticle,
  toggleLike,
  uploadArticleImage,
} from "@service/article";

export default function useArticleActions(articleId?: number) {
  async function handleLike(flag: boolean) {
    if (!articleId) return;

    return toggleLike(articleId, flag);
  }

  async function handleArticleAdd(formData: ArticleFormType) {
    try {
      if (formData.image instanceof File) {
        const { url } = await uploadArticleImage(formData.image);
        formData.image = url;
      }

      await addArticle(formData);
    } catch (err) {
      throw err;
    }
  }

  async function handleArticleModify(formData: ArticleFormType) {
    if (!articleId) return;

    try {
      if (formData.image instanceof File) {
        const { url } = await uploadArticleImage(formData.image);
        formData.image = url;
      }

      await modifyArticle(articleId, formData);
    } catch (err) {
      throw err;
    }
  }

  async function handleArticleDelete() {
    if (!articleId) return;

    return deleteArticle(articleId);
  }

  return {
    handleLike,
    handleArticleAdd,
    handleArticleModify,
    handleArticleDelete,
  };
}
