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

// auth 버튼 활성화
const InputEmail = document.querySelector('#email');
const InputPassword = document.querySelector('#password');
const AuthBtn = document.querySelector('.auth-btn');

function AuthBtnActive() {
  console.log('sdf');
  if (InputEmail.value && InputPassword.value) {
    AuthBtn.classList.add('active');
  } else {
    AuthBtn.classList.remove('active');
  }
}

InputEmail.addEventListener('input', AuthBtnActive);
InputPassword.addEventListener('input', AuthBtnActive);
