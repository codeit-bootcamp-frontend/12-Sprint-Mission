const authForm = document.querySelector(".auth-form");

const validCheck = {
  email: () => {},
  nickname: () => {},
  password: () => {},
  "password-confirm": () => {},
};

//input의 유효성 검사
authForm.addEventListener("focusout", ({ target }) => {
  validCheck[target.name]();
});

//form의 유효성 검사, 눈 모양 아이콘 클릭 이벤트
authForm.addEventListener("click", ({ target }) => {});
