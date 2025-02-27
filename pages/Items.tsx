import { useEffect, useState } from "react";
import { getProductData } from "../src/api/api";
import Nav from "../src/components/Nav";
import ItemCard from "../src/components/ItemCard";
import Bestitem from "../src/components/Bestitem";
import styles from "./Items.module.css";
import Link from "next/link";
import Image from "next/image";

interface Item {
  id: number;
  name: string;
  price: number;
  images: string[];
  favoriteCount?: number;
}

interface ProductResponse {
  list: Item[];
}

export default function Items() {
  const [itemList, setItemList] = useState<Item[]>([]);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const products: ProductResponse = await getProductData({
          orderBy: "recent",
        });
        setItemList(products.list);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    fetchProduct();
  }, []);

  return (
    <div>
      <Nav />
      <div className={styles.container}>
        <section className={styles.bestItems}>
          <div className={styles.items_title}>베스트 상품</div>
          <div className={styles.bestItemsBox}>
            <Bestitem />
          </div>
        </section>
        <section className={styles.totalItems}>
          <div className={styles.item_bar}>
            <div className={`${styles.items_title} ${styles.item}`}>
              전체 상품
            </div>
            <div className={`${styles.searchBox} ${styles.item}`}>
              <input
                className={styles.item_input}
                placeholder="검색할 상품을 입력해주세요"
              />
              <Image
                src="/image/SearchIcon.svg"
                className={styles.search_icon}
                width={20}
                height={20}
                alt="검색"
              />
            </div>
            <Link href="/Additem" className={styles.item}>
              <button className={styles.itemAdd_button}>상품 등록하기</button>
            </Link>

            <div className={`${styles.item} ${styles.select}`}>
              <select>
                <option>최신순</option>
                <option>인기순</option>
              </select>
            </div>
          </div>
          <div className={styles.totalItemsBox}>
            {itemList?.map((item) => (
              <ItemCard
                className={styles.totalItem}
                item={item}
                key={`all-item-${item.id}`}
              />
            ))}
          </div>
        </section>
      </div>
      {/* 페이지네이션 영역 구현하지않음 */}
      {/* <section className={styles.pagenation_box}>
        <button className={styles.page_button}>
          <img src={arrowLeft} alt="페이지 이전 화살표" />
        </button>
        <button className={`${styles.page_button} ${styles.active}`}></button>
        <button className={styles.page_button}>
          <img src={arrowRight} alt="페이지 다음 화살표" />
        </button>
      </section> */}
    </div>
  );
}
