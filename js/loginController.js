import { isValidEmail, isValidpassword, onClickVisibility, isValidLoginButton } from '/js/validationUtils.js';

const inputEmail = document.querySelector('#email');
const inputPassword = document.querySelector('#password');
const passwordEye = document.querySelector('.visibility')

// 이메일 인풋박스 포커스 아웃 시 유효성 체크
inputEmail.addEventListener('focusout', (event) => {
    isValidEmail(event); 
    isValidLoginButton(); 
});

// 패스워드 인풋박스 포커스 아웃 시 유효성 체크
inputPassword.addEventListener('focusout', (event) => {
     isValidpassword(event);
     isValidLoginButton();
});

// 눈 모양 아이콘 클릭 시 패스워드 노출여부 적용
passwordEye.addEventListener('click', onClickVisibility);


