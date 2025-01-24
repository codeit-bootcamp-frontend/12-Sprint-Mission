import Head from "next/head";
import ItemsListNav from "../../components/app/ItemListNav";
import UploadForm from "../../components/items/additem/UploadForm";

function addItemPage() {
  return (
    <>
      <Head>
        <title>상품 등록 - 판다마켓</title>
      </Head>
      <ItemsListNav />
      <UploadForm />
    </>
  );
}

export default addItemPage;
