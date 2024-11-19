// input 값 기준설정
const EMAIL_REGEXP = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
const PASSWORD_MIN_LEN = 8;

// 이메일, 닉네임, 비밀번호, 비밀번호 확인의 각 부모태그(div) id
const formContainer = document.querySelector('.form-container');
const emailField = document.querySelector('#email-field');
const niknameField = document.querySelector('#nikname-field');
const passwordField = document.querySelector('#password-field');
const passwordRepeatField = document.querySelector('#password-repeat-field');
// 각각 에러메세지 태그
const emailErrorMessage = document.querySelector('#email-field .error-message');
const niknameErrorMessage = document.querySelector('#nikname-field .error-message');
const passwordErrorMessage = document.querySelector('#password-field .error-message');
const passwordRepeatErrorMessage = document.querySelector('#password-repeat-field .error-message');

// input값이 변하면 발생하는 이벤트 추가
formContainer.addEventListener('input', handleFormInput);

function handleFormInput(e) {
  const input = e.target;
  const form = e.currentTarget;

  switch (input.name) {
    case 'email': {
      const mailValueCheck = form['email'].value;
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

    case 'nikname': {
      const niknameCheck = form['nikname'].value;
      niknameField.classList.toggle('warning', !niknameCheck);
      niknameErrorMessage.textContent = niknameCheck
      ? ''
      : '닉네임을 입력해주세요.';
      break;
    }
    
    case 'password': {
      const password = form['password'].value;
      const passwordLengthCheck = password.length >= PASSWORD_MIN_LEN
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

    case 'password-repeat': {
      const password = form['password'].value; // 비교하는 용도
      const passwordRepeat = form['password-repeat'].value;
      const passwordEqualityCheck = password === passwordRepeat;
      passwordRepeatField.classList.toggle('warning', !passwordEqualityCheck);
      passwordRepeatErrorMessage.textContent = passwordEqualityCheck
      ? ''
      : '비밀번호가 일치하지 않습니다..';

      break;
    }
  }
}

// input값이 변하면 disabled을 동작시키는 이벤트 추가
const btnBox = document.querySelector('.box');

function activeBtn() {
  const btn = document.querySelector('.join');
  const btnEmail = document.querySelector('.btn-email').value;
  const btnNikname = document.querySelector('.btn-nikname').value;
  const btnPassword = document.querySelector('.btn-password').value;
  const btnPasswordRepeat = document.querySelector('.btn-password-repeat').value;

  btn.disabled = !(EMAIL_REGEXP.test(btnEmail) && (btnNikname) &&
  (btnPassword.length >= PASSWORD_MIN_LEN) && (btnPasswordRepeat === btnPassword))
}

btnBox.addEventListener('input', activeBtn)

// 버튼 활성화 시 클릭하면 페이지 이동하는 함수
function page() {
  window.location.href = ''
}

// 패스워드 토글 아이콘
const btnToggle = document.querySelector('.btn1-toggle');
const btnToggleField = document.querySelector('.btn1-toggle-field');
const btnPassword = document.querySelector('#password-field .btn-password');
const img1 = document.querySelector('.icon1-toggle');

btnToggle.addEventListener('click', function(e) {
  btnPassword.classList.toggle('active')
  
  if(btnPassword.type === 'password') {
    btnPassword.type = 'text';
    img1.setAttribute("src", "/img/btn_visibility_on.png");
  } else {
    btnPassword.type = 'password';
    img1.setAttribute("src", "/img/btn_visibility_off.png");
  }
})

// 패스워드 확인 토글 아이콘
const repeatBtnToggle = document.querySelector('.btn2-toggle');
const repeatBtnToggleField = document.querySelector('.btn2-toggle-field');
const repeatBtnPassword = document.querySelector('#password-repeat-field .btn-password-repeat');
const img2 = document.querySelector('.icon2-toggle');

repeatBtnToggle.addEventListener('click', function(e) {
  repeatBtnPassword.classList.toggle('active')
  
  if(repeatBtnPassword.type === 'password') {
    repeatBtnPassword.type = 'text';
    img2.setAttribute("src", "/img/btn_visibility_on.png");
  } else {
    repeatBtnPassword.type = 'password';
    img2.setAttribute("src", "/img/btn_visibility_off.png");
  }
})
