import TotalItemTitle from '../TotalItemTitle/TotalItemTitle';
import ItemCard from '../ItemCard/ItemCard';
import PaginationBar from '../PaginationBar/PaginationBar';

const TotalItem = () => {
  const cards = [];

  return (
    <section className="total-items">
      <TotalItemTitle />
      {cards.map((value, index) => {
        return <ItemCard />;
      })}
      <PaginationBar />
    </section>
  );
};

export default TotalItem;
