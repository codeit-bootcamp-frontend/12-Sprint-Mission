import backArrowImg from '@/assets/images/ic_back.svg';
import { useNavigate } from 'react-router-dom';

const BackLinkButton = () => {
  const navigate = useNavigate();
  const onClick = () => {
    navigate('/items');
  };
  return (
    <button
      className="flex mx-auto mt-10 mb-24 py-2 px-6 rounded-full text-white bg-blue-500 hover:bg-blue-700"
      onClick={onClick}
    >
      <span>목록으로 돌아가기</span>
      <img src={backArrowImg} alt="아이템 목록 버튼" />
    </button>
  );
};

export default BackLinkButton;
