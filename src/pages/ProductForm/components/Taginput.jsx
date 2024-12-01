import { useState } from 'react';

function TagInput() {
    // 태그 입력 상태
    const [tag, setTag] = useState('');
    // 태그 리스트 상태
    const [tags, setTags] = useState([]);

    // 입력값 변경 핸들러
    const handleTagChange = (e) => {
        setTag(e.target.value); // 입력값 업데이트
    };

    // Enter 키 이벤트 핸들러
    const handleKeyPress = (e) => {
        if (e.key === 'Enter' && tag.trim()) { // Enter 키 감지 및 빈 값 방지
            e.preventDefault();
            setTags((prevTags) => [...prevTags, tag.trim()]); // 태그 추가
            setTag(''); // 입력 필드 초기화
        }
    };

    // 태그 삭제 핸들러
    const handleTagRemove = (myIndex) => {
        setTags((prevTags) => prevTags.filter((_, currentIndex) => currentIndex !== myIndex));
        // fillter : 배열 메소드 중 하나로, 주어진 조건을 만족하는 요소들로만 구성된 새로운 배열을 생성
        // prevTags 배열에서 각 요소를 순회하며, 현재 인덱스 currentIndex가 제거할 인덱스 myIndex와 같지 않은 경우에만 그 요소를 포함
        // myIndex와 일치하지 않는 요소들로 구성된 새로운 배열이 반환되어 setTags를 통해 상태가 업데이트
    };

    return (
        <div className='product-form__item'>
            <label htmlFor="productTag" className='product-form__item--label'>태그</label>
            <input
                id="productTag"
                className='product-form__item--input'
                value={tag}
                onChange={handleTagChange}
                onKeyDown={handleKeyPress} // 키 입력 이벤트 연결
                placeholder="태그를 입력해주세요."
            />
            <ul className='product-tags__list'>
                {/* 태그 리스트 출력 */}
                {tags.map((tag, myIndex) => (
                    <li
                        className='product-tags__list--item'
                        key={myIndex}>
                        <p className='product-tags__text'>#{tag}</p>
                        {tag && <button className='product-tags__button--delete' onClick={() => handleTagRemove(myIndex)}>태그 삭제</button>}
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default TagInput;
