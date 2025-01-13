import { useEffect, useState } from "react"
import axios from "axios";
import style from "./ProductComment.module.css"

interface ProductCommentProps {
  id: number;
  productId: number;
  content: string;
  writer: {
    image?: string; 
    nickname: string;
  };
  updatedAt: string;

}

export default function ProductComment({ productId }: ProductCommentProps) {

  const [ProductComment, setProductComment] = useState<ProductCommentProps[]>([]);
  const [selectViewToggle, setSelectViewToggle] = useState('');
  const limit = 10; // 페이지당 댓글 수 (기본값 예시)

  function selectToggle(commentId: string) {
    setSelectViewToggle(selectViewToggle === commentId ? '' : commentId);
  }

  async function ProductInquiryInfo() {
    try {
      const response = await axios.get(`https://panda-market-api.vercel.app/products/${productId}/comments`, {
        params: {
          limit: limit,   // 페이지당 댓글 수
        },
      });
      setProductComment(response.data.list);
    } catch (error) {
      console.error("error:", error);
    }
  }

  useEffect(() => {

    ProductInquiryInfo();

  }, [productId])

  return (

    <div className={style.inquiryInfoList}>
      {
        ProductComment.length > 0 ? (
          ProductComment.map((data, i) => {
            return (
              <div className={style.box} key={i}>
                <p className={style.comment}>
                  {data.content}
                </p>
                <div className={style.productInquiryInfo}>
                  <div className={style.imgBox}>
                    <img src={data.writer.image ? data.writer.image : process.env.PUBLIC_URL + '/images/user_icon.svg'} alt={data.writer.nickname} />
                  </div>
                  <div className={style.textBox}>
                    <p className={style.writer}>
                      {data.writer.nickname}
                    </p>
                    <span className={style.time}>
                      {new Date(data.updatedAt).toLocaleDateString()}
                    </span>
                  </div>
                </div>
                <div className={style.selectBox}>
                  <button className={`${style.selectBtn} ${selectViewToggle ? `${style.active}` : ''}`} onClick={() => selectToggle(String(data.id))}>
                    <span className="blind">
                      수정, 삭제 선택 버튼
                    </span>
                  </button>
                  {
                    Number(selectViewToggle) === data.id && (
                      <div className={style.view}>
                        <button className={style.select}>수정하기</button>
                        <button className={style.select}>삭제하기</button>
                      </div>
                    )
                  }
                </div>
              </div>
            )
          })
        ) : (
          <p className={style.noInquiry}>
            아직 문의가 없어요
          </p>
        )
      }
    </div>

  )

}