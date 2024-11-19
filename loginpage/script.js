// input 값 기준설정
const EMAIL_REGEXP = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
const PASSWORD_MIN_LEN = 8;

// 이메일, 닉네임, 비밀번호, 비밀번호 확인의 각 부모태그(div) id
const formContainer = document.querySelector('.form-container');
const emailField = document.querySelector('#email-field');
const passwordField = document.querySelector('#password-field');

// 각각 에러메세지 태그
const emailErrorMessage = document.querySelector('#email-field .error-message');
const passwordErrorMessage = document.querySelector('#password-field .error-message');


// input값이 변하면 발생하는 이벤트 추가
formContainer.addEventListener('input', handleFormInput);

function handleFormInput(e) {
  const input = e.target;
  const form = e.currentTarget;

  switch (input.name) {
    case 'username': {
      const mailValueCheck = form['username'].value;
      const mailFormCheck = EMAIL_REGEXP.test(mailValueCheck);

      if (!mailValueCheck) {
        emailField.classList.toggle('warning', !mailValueCheck);
        emailErrorMessage.textContent = mailValueCheck
      ? ''
      : '이메일을 입력해주세요.';
      } else {
        if (!mailFormCheck) {
          emailField.classList.toggle('warning', !mailFormCheck);
          emailErrorMessage.textContent = mailFormCheck
        ? ''
        : '잘못된 이메일 형식입니다.';
        } else {
          emailField.classList.toggle('warning', !mailFormCheck);
          emailErrorMessage.textContent = ''
        }
      }
      
      break;
    }
    case 'password': {
      const password = form['password'].value;
      const passwordLengthCheck = password.length >= PASSWORD_MIN_LEN;
      if (!password) {
        passwordField.classList.toggle('warning', !password);
        passwordErrorMessage.textContent = password
      ? ''
      : '비밀번호를 입력해주세요.';
      } else {
        if (!passwordLengthCheck) {
          passwordField.classList.toggle('warning', !passwordLengthCheck);
          passwordErrorMessage.textContent = passwordLengthCheck
        ? ''
        : `비밀번호는 ${PASSWORD_MIN_LEN}자 이상 입력해주세요.`;
        } else {
          passwordField.classList.toggle('warning', !passwordLengthCheck);
          passwordErrorMessage.textContent = ''
        }
      }
      
      break;
    }
  }
}

// input값이 변하면 disabled을 동작시키는 이벤트 추가
const btnBox = document.querySelector('.box');

function activeBtn() {
  const btn = document.querySelector('.button');
  const btnEmail = document.querySelector('.btn-email').value;
  const btnPassword = document.querySelector('.btn-password').value;

  btn.disabled = !(EMAIL_REGEXP.test(btnEmail) && (btnPassword.length >= PASSWORD_MIN_LEN));
}

btnBox.addEventListener('input', activeBtn);

// 버튼 활성화 시 클릭하면 페이지 이동하는 함수
function page() {
  window.location.href = ''
}

// 패스워드 토글 아이콘
const btnToggle = document.querySelector('.btn-toggle');
const btnToggleField = document.querySelector('.btn-toggle-field');
const btnPassword = document.querySelector('#password-field .btn-password');
const img = document.querySelector('.icon-toggle');

btnToggle.addEventListener('click', function(e) {
  btnPassword.classList.toggle('active')
  
  if(btnPassword.type === 'password') {
    btnPassword.type = 'text';
    img.setAttribute("src", "/img/btn_visibility_on.png");
  } else {
    btnPassword.type = 'password';
    img.setAttribute("src", "/img/btn_visibility_off.png");
  }
})
