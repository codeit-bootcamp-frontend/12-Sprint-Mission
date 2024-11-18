export function showInputError(inputEl, errorEl) {
  inputEl.classList.add('error');  // 빨간색 테두리 적용
  errorEl.style.display = 'block';  // 에러 메시지 표시
}

export function hideErrorMessage(inputEl, errorEl) {
  inputEl.classList.remove('error');  // 빨간색 테두리 제거
  errorEl.style.display = 'none';  // 에러 메시지 숨기기
}


// password의 눈 이미지
const passwordBox = document.querySelectorAll('.password-container');
const checkPasswordBtn = document.querySelectorAll('.check-password--img__button');

export function updatePasswordtype(e) {
  if(!e.target.classList.contains('show-password')) {
    checkPasswordBtn[0].classList.add('show-password');
    passwordBox[0].children[0].type = 'text';
  } else {
    checkPasswordBtn[0].classList.remove('show-password');
    passwordBox[0].children[0].type = 'password';
  }
};

export function updateCheckPasswordtype(e) {
  if(!e.target.classList.contains('show-password')) {
    checkPasswordBtn[1].classList.add('show-password');
    passwordBox[1].children[0].type = 'text';
  } else {
    checkPasswordBtn[1].classList.remove('show-password');
    passwordBox[1].children[0].type = 'password';
  }
};