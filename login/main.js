
//이메일 input 노드 가져오기
const emailInput = document.querySelector('#email');
const emailContainer = document.querySelectorAll('.login-form__group')[0];

//올바른 이메일 유효셩 체크
function emailCheck(email) {
  vaildEmail = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/i;
  if (vaildEmail.test(email)) {
    return true;
  } else {
    return false;
  }
}

//비밀번호 input 노드 가져오기
const passwordInput = document.querySelector('#password');
const passwordContainer = document.querySelectorAll('.login-form__group')[1];

//올바른 비밀번호 유효성 체크
function passwordCheck(password) {
  if (password.length >= 8) {
    return true;
  } else {
    return false;
  }
}

//로그인 버튼 ON/OFF 상태
const loginBtn = document.querySelectorAll('.login-form__btn')[0];
function loginBtnState() {
  if (!emailCheck(emailInput.value) || !passwordCheck(password.value)) {
    //input에 빈 값이 있거나 에러 메세지가 있으면
    //'로그인' 버튼 비활성화와 페이지 이동 막기
    loginBtn.classList.remove('login-form__btn-hover');
    loginBtn.disabled = true;
  } else {
    //input에 유효한 값을 입력하면
    //'로그인'버튼 활성화와 페이지 이동
    loginBtn.classList.add('login-form__btn-hover');
    loginBtn.disabled = false;
  }
}

//이메일 에러메세지 없으면 만들어줌
let emailError = false;
function emailcreateMsg(node) {
  const errorMsg = document.createElement('p');
  if (emailError == false) {
    node.append(errorMsg);
    node.lastElementChild.classList.add('login-form__msg');
    node.children[1].classList.add('login-form__error');
    emailError = true;
  }
}
//이메일 에러메세지 있으면 없애줌
function emailremoveMsg(node) {
  if (emailError == true) {
    node.lastElementChild.remove();
    node.children[1].classList.remove('login-form__error');
    emailError = false;
  }
}

//비밀번호 에러메세지 없으면 만들어줌
let passwordError = false;
function passwordcreateMsg(node) {
  const errorMsg = document.createElement('p');
  if (passwordError == false) {
    node.append(errorMsg);
    node.lastElementChild.classList.add('login-form__msg');
    node.children[1].classList.add('login-form__error');
    passwordError = true;
  }
}

//비밀번호 에러메세지 있으면 없애줌
function passwordremoveMsg(node) {
  if (passwordError == true) {
    node.lastElementChild.remove();
    node.children[1].classList.remove('login-form__error');
    passwordError = false;
  }
}


//이메일 input에서 focus out할때
emailInput.addEventListener('focusout', function () {
  if (emailInput.value == '') {
    //1. 값이 없을 경우
    emailcreateMsg(emailContainer);
    emailContainer.lastElementChild.innerHTML = '이메일을 입력해주세요.'
  } else {
    //2. 값이 있을 경우
    if (emailCheck(emailInput.value)) {
      //2-1. 이메일 형식에 맞는 경우
      emailremoveMsg(emailContainer);
    } else {
      //2-2 이메일 형식에 맞지 않는 경우
      emailcreateMsg(emailContainer);
      emailContainer.lastElementChild.innerHTML = '잘못된 이메일 형식입니다.';
    }
  }
  loginBtnState();
})


//비밀번호 input에서 focus out할때
passwordInput.addEventListener('focusout', function () {
  if (passwordInput.value == '') {
    //1. 값이 없을 경우
    passwordcreateMsg(passwordContainer);
    passwordContainer.lastElementChild.innerHTML = '비밀번호를 입력해주세요.';
  } else {
    //2. 값이 있을 경우
    if (passwordCheck(passwordInput.value)) {
      //2-1  8자 이상일 경우
      passwordremoveMsg(passwordContainer);
    } else {
      //2-2. 8자 미만일 경우
      passwordcreateMsg(passwordContainer);
      passwordContainer.lastElementChild.innerHTML = '비밀번호를 8자 이상 입력해주세요.';
    }
  }
  loginBtnState();
})


const blindImg = document.querySelectorAll('.login-form__input-blind')[0];
blindImg.addEventListener('click', function () {
  if (blindImg.getAttribute('src') == '/img/btn_visibility_off_24px.png') {
    blindImg.setAttribute('src', '/img/btn_visibility_on_24px.png');
    passwordInput.setAttribute('type', 'text');
  } else {
    blindImg.setAttribute('src', '/img/btn_visibility_off_24px.png');
    passwordInput.setAttribute('type', 'password');
  }
})


