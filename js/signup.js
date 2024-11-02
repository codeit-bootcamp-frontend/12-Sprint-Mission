// 비밀번호 눈 모양 버튼 구현
const PwEyeBtnOff = document.querySelector('.pw-eye-btn-off');
const PwEyeBtnOn = document.querySelector('.pw-eye-btn-on');
const PwInput = document.querySelector('#password');

function PwEyeBtnChange(e) {
  e.target.classList.add('done');
  if (e.target === PwEyeBtnOff) {
    PwEyeBtnOn.classList.remove('done');
    PwInput.setAttribute('type', 'text');
  } else {
    PwEyeBtnOff.classList.remove('done');
    PwInput.setAttribute('type', 'password');
  }
}

PwEyeBtnOn.addEventListener('click', PwEyeBtnChange);
PwEyeBtnOff.addEventListener('click', PwEyeBtnChange);

// 비밀번호 확인 눈 모양 버튼 구현
const PwCkEyeBtnOff = document.querySelector('.pw-ck-eye-btn-off');
const PwCkEyeBtnOn = document.querySelector('.pw-ck-eye-btn-on');
const PwCkInput = document.querySelector('#password-check');

function PwCkEyeBtnChange(e) {
  e.target.classList.add('done');
  if (e.target === PwCkEyeBtnOff) {
    PwCkEyeBtnOn.classList.remove('done');
    PwCkInput.setAttribute('type', 'text');
  } else {
    PwCkEyeBtnOff.classList.remove('done');
    PwCkInput.setAttribute('type', 'password');
  }
}

PwCkEyeBtnOn.addEventListener('click', PwCkEyeBtnChange);
PwCkEyeBtnOff.addEventListener('click', PwCkEyeBtnChange);

// auth 버튼 활성화
const InputEmail = document.querySelector('#email');
const InputNickname = document.querySelector('#nickname');
const InputPassword = document.querySelector('#password');
const InputPasswordCheck = document.querySelector('#password-check');
const AuthBtn = document.querySelector('.auth-btn');

function AuthBtnActive() {
  console.log('sdf');
  if (
    InputEmail.value &&
    InputNickname.value &&
    InputPassword.value &&
    InputPasswordCheck.value
  ) {
    AuthBtn.classList.add('active');
  } else {
    AuthBtn.classList.remove('active');
  }
}

InputEmail.addEventListener('input', AuthBtnActive);
InputNickname.addEventListener('input', AuthBtnActive);
InputPassword.addEventListener('input', AuthBtnActive);
InputPasswordCheck.addEventListener('input', AuthBtnActive);
