import { Suspense } from "react";
import { Await, useLoaderData } from "react-router-dom";
import { getProduct } from "@service/product";
import { getProductComments } from "@service/comments";
import { PageWrapper } from "@components/Page";
import ProductDetail from "./components/ProductDetail";
import CommentForm from "./components/CommentForm";
import CommentList from "./components/CommentList";
import { BackToList } from "@components/Button/BackToList";
import { Loading } from "@components/ui/Loading";

export default function ItemDetailPage() {
  const { detail, comments } = useLoaderData();

  return (
    <PageWrapper>
      {/* critical */}
      <ProductDetail detail={detail} />

      {/* comment 작성 */}
      <CommentForm />

      {/* non critical */}
      <Suspense fallback={<Loading>상품 문의를 가져오는 중입니다....</Loading>}>
        <Await resolve={comments}>
          {(comments) => <CommentList comments={comments} />}
        </Await>
      </Suspense>

      <BackToList />
    </PageWrapper>
  );
}

async function loader({ params }) {
  const { id } = params;

  // 1. 첫번째 시도 : Promise.all
  // 두 요청이 병렬로 시작은 가능하나, 두 요청이 모두 끝나야 반환하므로, 원하는 케이스가 아님

  // 2. 두번째 시도 : 하나만 await
  // getProduct를 먼저 await하고 getProdcutComments는 promise상태로 담아서 보내기
  // getProduct의 await 때문에 코멘트 데이터 요청이 동시에 이뤄지지가 않음 (서비스 호출함수에서 임의로 시간지연으로 테스트해봄)
  //const detail = await getProduct(id);
  //const comments = getProductComments({ productId: id, limit: 5 });

  // 3. 해결한 방법
  // 두 요청을 거의 동시에 보내도록 우선 await없이 promise를 각 변수에 할당함
  // 여기서 미리 await을 작성하면 그 요청을 기다린후 다음줄의 코드가 실행되어서 동시에 요청이 안됨
  const detail = getProduct(id);
  const comments = getProductComments({ productId: id, limit: 5 });

  // detail에 담긴 promise를 기다린후에 리턴
  return { detail: await detail, comments };
}

ItemDetailPage.loader = loader;
