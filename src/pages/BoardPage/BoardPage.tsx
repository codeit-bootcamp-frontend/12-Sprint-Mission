import BestArticlesSection from "./components/BestArticlesSection";
import AllIArticlesSection from "./components/AllIArticlesSection";
import { Container } from "../../styles/CommonStyles";

const NoticeBoardPage: React.FC = () => {
  return (
    <Container>
      <BestArticlesSection />
      <AllIArticlesSection />
    </Container>
  );
};

export default NoticeBoardPage;
