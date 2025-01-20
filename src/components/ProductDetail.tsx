
import style from "./ProductDetail.module.css"

interface ProductDetailProps {
  productDetail: {
    id: number;
    name: string;
    description: string;
    images: string;
    price: number;
    tags: string[];
    ownerNickname:string;
    favoriteCount:number;
    createdAt:number;
  };
}

export default function ProductDetail({ productDetail }: ProductDetailProps) {

  if (!productDetail) {
    return <div>상품을 찾을 수 없습니다.</div>;
  }

  return (
    <div className={style.detail}>
      <div className={style.imgBox}>
        <img src={productDetail.images} alt={productDetail.name} />
      </div>
      <div className={style.textBox}>
        <div className={style.productTop}>
          <p className={style.title}>
            {productDetail.name}
          </p>
          <span className={style.price}>
            {productDetail.price}원
          </span>
        </div>

        <div className={style.productIntroduction}>
          <span className={style.text}>
            상품소개
          </span>
          <p>
            {productDetail.description}
          </p>
        </div>

        <div className={style.productTag}>
          <span className={style.text}>
            상품태그
          </span>
          <div className={style.productTagList}>

            {
              (productDetail.tags || []).map((tag, i) => {
                return (
                  <em key={i}>
                    #{tag}
                  </em>
                )
              })
            }

          </div>
        </div>

        <div className={style.userBox}>
          <div className={style.imgBox}>
            <img src={process.env.PUBLIC_URL + '/images/user_icon.svg'} alt="" />
          </div>
          <div className={style.textBox}>
            <p className={style.userId}>
              {productDetail.ownerNickname}
            </p>
            <p className={style.regDate}>
              {new Date(productDetail.createdAt).toLocaleDateString()}
            </p>
          </div>
          <div className={style.likeBox}>
            <img src={process.env.PUBLIC_URL + '/images/detail_like_icon.svg'} alt="하트 아이콘" />
            <span>
              {productDetail.favoriteCount}
            </span>
          </div>
        </div>

      </div>
    </div>
  )

}