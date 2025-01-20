import SubTitle from "../components/SubTitle";
import "./AddItemPage.css";
import removeIcon from "./../assets/icon_remove.svg";
import FormItem from "../components/FormItem";
import { useState, useEffect, FormEventHandler } from "react";
import FormLabel from "../components/FormLabel";
import "./../components/FormLabel.css";
import { ItemInputQuery } from "../types/Query";

const AddItemPage = () => {
  const [fakeTag, setFakeTag] = useState("");
  const [inputValue, setInputValue] = useState({
    name: "",
    introduce: "",
    price: "",
    imgFile: "",
    tag: "",
  });

  const tagList = inputValue.tag.split("|");

  // 질문하기 const handleSubmit = (e : React.FormEvent<HTMLFormElement>) => {    <- handler의 차이 마우스 올렸을땐 handler가 있지만 오류가 남.. 빼야 오류가 없음
  const handleSubmit: FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();
  };

  const handleChange = (name: ItemInputQuery, value: string) => {
    if (name === "price") {
      const priceValue = value.replaceAll(",", "");
      const nextPrice = Number(priceValue) || 0;
      setInputValue((prev) => ({
        ...prev,
        [name]: nextPrice.toLocaleString(),
      }));
    } else if (name === "tag") {
      setInputValue((prev) => ({
        ...prev,
        [name]: prev[name] ? `${prev[name]}|${value}` : value,
      }));
    } else {
      setInputValue((prev) => ({
        ...prev,
        [name]: value,
      }));
    }
  };

  // 질문하기 name에 string이 들어가는데 이유를 모르겠음 일단 as사용해서 오류 없앰. as 를 사용하는게 맞는지 모르겠음.
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    handleChange(name as ItemInputQuery, value);
  };

  const handleFakeTag = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFakeTag(e.target.value);
  };

  const handleTagChange = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      e.preventDefault();
      handleChange("tag", fakeTag);
      // 질문하기 e.target.value에 주로 사용되던데 이유를 모르겠음.
      e.currentTarget.value = "";
      setFakeTag("");
    }
  };

  const handleTagRemove = (tagName: string) => {
    setInputValue((prev) => {
      const tagUpdate = prev.tag
        .split("|")
        .filter((tag) => tag !== tagName)
        .join("|");

      return {
        ...prev,
        tag: tagUpdate,
      };
    });
  };

  const [submitCheck, setSubmitCheck] = useState(true);
  useEffect(() => {
    if (inputValue.name && inputValue.introduce && inputValue.price && inputValue.price !== "0" && inputValue.tag) {
      setSubmitCheck(false);
    } else {
      setSubmitCheck(true);
    }
  }, [inputValue]);

  return (
    <form onSubmit={handleSubmit}>
      <main className="main">
        <div className="inner">
          <div className="tit_box">
            <SubTitle name="상품 등록하기" />
            <div className="add_submit">
              <button type="submit" className="btn_blue sml" disabled={submitCheck}>
                등록
              </button>
            </div>
          </div>
          <div className="add_form">
            <ul className="add_form_list">
              <FormItem labelName="상품이미지" type="file" id="add_img" name="imgFile" className="imgFile" value={inputValue.imgFile} onChange={handleChange} />
              <FormItem labelName="상품명" type="text" id="add_name" name="name" className="inp_reset" value={inputValue.name} onChange={handleInputChange} placeholder="상품명을 입력해주세요" />
              <FormItem labelName="상품 소개" type="textarea" id="add_introduce" name="introduce" className="inp_reset" value={inputValue.introduce} onChange={handleInputChange} placeholder="상품 소개를 입력해주세요" />
              <FormItem labelName="판매 가격" type="text" id="add_price" name="price" className="inp_reset" value={inputValue.price} onChange={handleInputChange} placeholder="판매 가격을 입력해주세요" />
              <li>
                <FormLabel htmlFor="add_tag" labelName="태그" />
                <div className="input_box">
                  <input type="text" id="add_tag" className="inp_reset" placeholder="태그를 입력해주세요" onKeyDown={handleTagChange} onChange={handleFakeTag} value={fakeTag} />
                </div>
                {inputValue.tag && (
                  <ul className="tag_list">
                    {tagList.map((el, idx) => (
                      <li key={idx}>
                        <span>#{el}</span>
                        <button type="button" className="btn_reset remove" onClick={() => handleTagRemove(el)}>
                          <img src={removeIcon} alt={`${el} 삭제하기`} />
                        </button>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            </ul>
          </div>
        </div>
      </main>
    </form>
  );
};

export default AddItemPage;
