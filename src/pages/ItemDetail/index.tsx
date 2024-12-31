import Header from 'components/layouts/UI/Header';
import ItemInfo from 'components/layouts/ItemDetailPageLayout/ItemInfo';
import ItemQueryForm from 'components/layouts/ItemDetailPageLayout/ItemQueryForm';
import ItemQueryList from 'components/layouts/ItemDetailPageLayout/ItemQueryList';
import BackLinkButton from 'components/layouts/ItemDetailPageLayout/BackLinkButton';

const ItemDetail = () => {
  return (
    <>
      <Header />
      <ItemInfo />
      <ItemQueryForm />
      <ItemQueryList />
      <BackLinkButton />
    </>
  );
};

export default ItemDetail;
