import useCommentList from "@/components/Comment/useComments";
import { BoardName, CommentList } from "@/types/comment";
import { createContext, PropsWithChildren, useContext } from "react";

interface CommentsProviderProps extends PropsWithChildren {
  name: BoardName;
  initialData: CommentList;
}

interface CommentContextProps {
  name: BoardName;
  comments: CommentList;
  handleLoad: () => void;
  refreshComments: () => void;
  isLoading: boolean;
  error: Error | null;
}

const CommentsContext = createContext<CommentContextProps | null>(null);

export default function CommentsProvider({
  children,
  name,
  initialData,
}: CommentsProviderProps) {
  const { comments, handleLoad, refreshComments, isLoading, error } =
    useCommentList(name, initialData);

  const value = {
    name,
    comments,
    handleLoad,
    refreshComments,
    isLoading,
    error,
  };

  return (
    <CommentsContext.Provider value={value}>
      {children}
    </CommentsContext.Provider>
  );
}

export function useComments() {
  const context = useContext(CommentsContext);
  if (!context) {
    throw new Error(
      "useComments는 CommentsProvider 내부에서만 사용가능합니다."
    );
  }

  return context;
}
