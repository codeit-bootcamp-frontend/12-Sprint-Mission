const commonInput = document.querySelectorAll('.input');
const emailInput = document.querySelector('#email');
const pwInput = document.querySelector('#password');
const errorMessage = document.querySelector('.errorText');
const loginBtn = document.querySelector('.loginBtn')
const toggleBtn = document.querySelectorAll('.pwToggleBtn');
const inputBox = document.querySelector('.inputBox')
const nicknameInput = document.querySelector('#nickname')
const pwRecheck = document.querySelector('#pwRecheck')

//이메일 유효성 검사
function emailChk(email) {

  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return regex.test(email);

}

//이메일 체크
emailInput.addEventListener('focusout', function (e) {

  if (!e.target.value || !emailChk(e.target.value)) {
    e.target.closest('.inputBox').classList.add('error');
    return false;
  } else {
    e.target.closest('.inputBox').classList.remove('error');
  }

});

//비밀번호 체크
pwInput.addEventListener('focusout', function (e) {

  if (!e.target.value || e.target.value.length < 8) {
    e.target.closest('.inputBox').classList.add('error');
    return false;
  } else {
    e.target.closest('.inputBox').classList.remove('error');
  }

});

//비밀번호 재확인 체크
pwRecheck.addEventListener('focusout', function (e) {

  if (pwInput.value !== pwRecheck.value || e.target.value === '') {
    e.target.closest('.inputBox').classList.add('error');
    return false;
  } else {
    e.target.closest('.inputBox').classList.remove('error');
  }

});

//닉네임 체크
nicknameInput.addEventListener('focusout', function (e) {

  if (e.target.value === '') {
    e.target.closest('.inputBox').classList.add('error');
    return false;
  } else {
    e.target.closest('.inputBox').classList.remove('error');
  }

});

//버튼 활성화
function btnActive() {

  const isEmailValid = emailChk(emailInput.value);
  const isPwValid = pwInput.value.length >= 8;
  const isPwRecheckVaild = pwInput.value === pwRecheck.value;

  if (isEmailValid && isPwValid && isPwRecheckVaild) {
    loginBtn.disabled = false;
  } else {
    loginBtn.disabled = true;
  }

}

//버튼 이동
function btnMove() {

  if (!loginBtn.disabled) {
    window.location.href = 'signin.html';
  }

}

emailInput.addEventListener('input', btnActive);
pwInput.addEventListener('input', btnActive);
pwRecheck.addEventListener('input', btnActive);
nicknameInput.addEventListener('input', btnActive);
loginBtn.addEventListener('click', btnMove);

//비밀번호 보기, 숨기기
for (let i = 0; i < toggleBtn.length; i++) {

  toggleBtn[i].addEventListener('click', pwToggle)

}

function pwToggle(e) {

  if (e.target.classList.contains('hidden')) {
    e.target.classList.remove('hidden');
    e.target.querySelector('span').textContent = '비밀번호 보기';
  } else {
    e.target.classList.add('hidden');
    e.target.querySelector('span').textContent = '비밀번호 숨기기';
  }

}


