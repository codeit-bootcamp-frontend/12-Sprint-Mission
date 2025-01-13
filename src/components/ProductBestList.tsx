import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import style from "./ProductBestList.module.css"

interface BestItemProps{

  id: number;
  images: string[];
  name: string;
  price: number;
  favoriteCount: number;

}

export default function ProductBestList() {

  const [bestItem, setBestItem] = useState<BestItemProps[]>([]);
  const noImage = 'https://via.placeholder.com/222?text=No+Image';

  async function getBestItems() {

    try {

      const response = await axios.get('https://panda-market-api.vercel.app/products?page=1&pageSize=4&orderBy=favorite')
      const result = response.data.list;

      setBestItem(result);

    } catch (error) {
      console.log('error :', error);
    }

  };

  useEffect(() => {
    getBestItems()
  }, [])

  return (
    <ul className={`${style.cardList} ${style.bestCardBox}`}>
      {
        bestItem.map((data, i) => {
          return (
            <li key={i}>
              <Link to={`${data.id}`}>
                <div className={style.imgBox}>
                  <img src={Array.isArray(data.images) && data.images.length > 0 ? data.images[0] : noImage} alt={data.name} />
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