import { 
    isValidEmail, 
    isValidpassword, 
    isValidConfirmPassword, 
    onClickVisibility,
    isValidNickname,
    isValidSignupButton,
} from '/js/validationUtils.js';

const inputEmail = document.querySelector('#email');
const inputPassword = document.querySelector('#password');
const inputConfirmPassword = document.querySelector('#confirmPassword');
const inputNickName = document.querySelector('#nickName');
const eyeButton = document.querySelector('.visibility')

// 이메일 인풋박스 포커스 아웃 시 유효성 체크
inputEmail.addEventListener('focusout', (event) => {
    isValidEmail(event); 
    isValidSignupButton(); 
});

// 닉네임 인풋박스 포커스 아웃 시 유효성 체크
inputNickName.addEventListener('focusout', (event) => {
     isValidNickname(event);
     isValidSignupButton();
});

// 비밀번호 인풋박스 포커스 아웃 시 유효성 체크
inputPassword.addEventListener('focusout', (event) => {
     isValidpassword(event);
     isValidSignupButton();
});

// 비밀번호 확인 인풋박스 포커스 아웃 시 유효성 체크
inputConfirmPassword.addEventListener('focusout', (event) => {
     isValidConfirmPassword(event);
     isValidSignupButton();
});

// 눈 모양 아이콘 클릭 시 비밀번호 노출여부 적용
eyeButton.addEventListener('click', onClickVisibility);
