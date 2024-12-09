import './Additem.css';
import Nav from '../components/Nav';
import Button from '../components/Button';
import Itemtitle from '../components/Itemtitle';
import Editsection from '../components/Editsection';
import Editinput from '../components/Editinput';

const Additem = () => {
  return (
    <div className="Additem">
      <Nav />
      {/* 아래는 상품등록 페이지 구현 */}
      <form className="edit">
        <div className="edit_title">
          <Itemtitle
            leftChild={'상품 등록하기'}
            rightChild={<Button text={'등록'} type={'register'} />}
          />
        </div>
        <div className="edit_info">
          <Editsection
            topChlid={'상품이미지'}
            center={<Editinput type={'img'} />}
          />
          <Editsection
            topChlid={'상품명'}
            center={
              <Editinput info={'name'} placeholder={'상품명을 입력해주세요'} />
            }
          />
          <Editsection
            topChlid={'상품 소개'}
            center={
              <Editinput
                info={'info'}
                placeholder={'상품 소개를 입력해주세요'}
              />
            }
          />
          <Editsection
            topChlid={'판매가격'}
            center={
              <Editinput
                info={'price'}
                placeholder={'판매 가격을 입력해주세요'}
              />
            }
          />
          <Editsection
            topChlid={'태그'}
            center={
              <Editinput info={'tag'} placeholder={'태그를 입력해주세요'} />
            }
            bottonChild={'태그달부분'}
          />
        </div>
      </form>
    </div>
  );
};

export default Additem;
