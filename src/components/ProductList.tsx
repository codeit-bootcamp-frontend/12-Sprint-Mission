import { Link } from "react-router-dom";
import style from "./ProductList.module.css"

interface Product {
  id: number;
  name: string;
  description: string;
  price: number;
  images: string;
  favoriteCount: number;
}

interface filterItems {
  filterItems: Product[];
}

export default function ProductList({ filterItems }: filterItems) {

  const noImage = 'https://via.placeholder.com/222x222?text=No+Image';

  return (

    <ul className={`${style.cardList} ${style.allCardBox}`}>
      {
        filterItems.map((data, i) => {
          return (
            <li key={i}>
              <Link to={`${data.id}`}>
                <div className={style.imgBox}>
                  <img src={data.images.length > 0 ? data.images : noImage} alt={data.name} />
                </div>

                <div className={style.textBox}>
                  <h4>
                    {data.name}
                  </h4>
                  <p className={style.price}>
                    {data.price}
                  </p>
                </div>

                <div className={style.likeBox}>
                  <span>
                    {data.favoriteCount}
                  </span>
                </div>
              </Link>
            </li>
          )
        })
      }
    </ul>

  )

}