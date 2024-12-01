import { useState } from "react";
import FileInput from "./FileInput";
import "./AddProductForm.css";

function sanitize(type, value) {
  switch (type) {
    case "number":
      return Number(value) || 0;

    default:
      return value;
  }
}

const INITIAL_VALUES = {
  images: null,
  name: "",
  description: "",
  price: "",
  tasgs: null,
};

function AddProductForm({
  initialValues = INITIAL_VALUES,
  initialPreview,
  onSubmit,
}) {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submittingError, setSubmittingError] = useState(null);
  const [values, setValues] = useState(initialValues);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("images", values.images);
    formData.append("name", values.name);
    formData.append("description", values.description);
    formData.append("price", values.price);
    formData.append("tasgs", values.tasgs);
    try {
      setSubmittingError(null);
      setIsSubmitting(true);
      await onSubmit(formData);
    } catch (error) {
      setSubmittingError(error);
      return;
    } finally {
      setIsSubmitting(false);
    }
    setValues(initialValues);
  };

  const handleChange = (name, value) => {
    setValues((prevValues) => ({
      ...prevValues,
      [name]: value,
    }));
  };

  const handleInputChange = (e) => {
    const { name, value, type } = e.target;
    handleChange(name, sanitize(type, value));
  };

  return (
    <form onSubmit={handleSubmit} className="form">
      <div className="register">
        <h3 className="formtitle">상품 등록하기</h3>
        <button
          type="submit"
          disabled={isSubmitting}
          className="registerButton"
        >
          등록
        </button>
      </div>
      <div className="formdatas">
        <label className="formlabel"> 상품 이미지 </label>
        <FileInput
          name="images"
          initialPreview={initialPreview}
          value={values.images}
          onChange={handleChange}
        />
      </div>
      <div className="formdatas">
        <label className="formlabel"> 상품명 </label>
        <input
          className="forminput"
          name="name"
          value={values.name}
          onChange={handleInputChange}
          placeholder="상품명을 입력해주세요"
        />
      </div>
      <div className="formdatas">
        <label className="formlabel"> 상품 소개 </label>
        <textarea
          className="inputtextarea"
          name="description"
          value={values.description}
          onChange={handleInputChange}
          placeholder="상품 소개를 입력해주세요"
        />
      </div>
      <div className="formdatas">
        <label className="formlabel"> 판매가격 </label>
        <input
          className="forminput"
          name="price"
          value={values.price}
          onChange={handleInputChange}
          placeholder="판매 가격을 입력해주세요"
        />
      </div>
      <div className="formdatas">
        <label className="formlabel"> 태그 </label>
        <input
          className="forminput"
          name="tasgs"
          value={values.tasgs}
          onChange={handleInputChange}
          placeholder="태그를 입력해주세요"
        />
      </div>
      {submittingError && <p>{submittingError.message}</p>}
    </form>
  );
}

export default AddProductForm;
