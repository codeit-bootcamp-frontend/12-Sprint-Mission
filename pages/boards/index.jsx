import AllArticlesSection from "@/components/board/AllIArticleSection.jsx";
import BestArticlesSection from "@/components/board/BestArticleSection.jsx";
import "@/styles/Boards.module.css";

export default function Boards() {
  return (
    <div className="container">
      <BestArticlesSection />
      <AllArticlesSection />
    </div>
  );
}
