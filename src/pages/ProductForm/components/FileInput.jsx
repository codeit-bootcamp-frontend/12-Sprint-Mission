import { useEffect, useState, useRef } from 'react';

// 보안을 위해서 웹 브라우저는 사용자의 파일 경로를 숨겨줌
// 이러한 특징 때문에 value prop을 지정할 수 없으므로 반드시 비제어 컴포넌트로 만들어야 함
// 비제어 컴포넌트는 state를 사용하지 않고, prop으로만 제어(?)

function FileInput({ name, value, onChange }) {
    const [preview, setPreview] = useState();
    const [example, setExample] = useState('product-preview__example--text');

    const inputRef = useRef();

    const handleChange = (e) => {
        const nextValue = e.target.files[0];
        // e.target.files로 선택한 파일을 가져옴. 콘솔창에서 FileList 유사배열 형태로 보여짐. 0번 인덱스에는 선택한 파일에 해당하는 객체가 담겨있음
        onChange(name, nextValue)
    }

    const handleClearClick = () => {
        const inputNode = inputRef.current;
        if (!inputNode) return; // inputNode의 값이 !없는 경우에는 return

        inputNode.value = '';
        onChange(name, null);
        // 부모 컴포넌트(ProductForm.jsx)에서 이미지 파일의 값이 null로 변경됨
        setPreview('');
        // img태그의 src={preview}를 ''로 하여 이미지 삭제
        setExample('product-preview__example--text');
        // 이미지 등록은 최대 1개까지 가능합니다. 문구 요소 클래스로 바꾸기
    }

    useEffect(() => {
        if (!value) return;
        // value의 값이 !없는 경우에는 return

        const nextPreview = URL.createObjectURL(value);
        // URL.createObjectURL()는 선택한 파일에 대한 URL을 가리키므로 이미지 미리보기에 사용할 수 있음
        setPreview(nextPreview);
        setExample('product-preview__example--text active');
        // 이미지 등록은 최대 1개까지 가능합니다. 문구 요소 active 추가된 클래스로 바꾸기
    }, [value]);

    return (
        <div className='product-form__item'>
            <p className='product-form__item--label'>상품 이미지</p>
            <div className='product-preview'>
                <div className='product-preview__example'>
                    <label className='product-preview__example--label' htmlFor="productImg">
                        이미지 등록
                    </label>
                    <p className={example}>이미지 등록은 최대 1개까지 가능합니다.</p>
                </div>
                <div className='product-preview__container'>
                    <img className='product-preview__img' src={preview} alt="이미지 미리보기"></img>
                    <input id="productImg" className='product-preview__input' type="file" onChange={handleChange} ref={inputRef}></input>
                    {/* ref={inputRef}로 DOM노드 가져오기 */}
                    {value && <button className='product-preview__button--delete' onClick={handleClearClick}>이미지 삭제</button>}
                    {/* value 값이 있을 때만 이미지 삭제 버튼 보이게 함 */}
                </div>
            </div>
        </div>
    )
}

export default FileInput;