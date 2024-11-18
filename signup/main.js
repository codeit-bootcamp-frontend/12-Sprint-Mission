
//이메일 input 노드 가져오기
const emailInput = document.querySelector('#email');
const emailContainer = document.querySelectorAll('.signup-form__group')[0];

//올바른 이메일 유효셩 체크
function emailCheck(email) {
  vaildEmail = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/i;
  if (vaildEmail.test(email)) {
    return true;
  } else {
    return false;
  }
};

//닉네임 input 노드 가져오기
const nameInput = document.querySelector('#name');
const nameContainer = document.querySelectorAll('.signup-form__group')[1];


//비밀번호 input 노드 가져오기
const passwordInput = document.querySelector('#password');
const passwordContainer = document.querySelectorAll('.signup-form__group')[2];

//올바른 비밀번호 유효성 체크
function passwordCheck(password) {
  if (password.length >= 8) {
    return true;
  } else {
    return false;
  }
};

//비밀번호 확인 input 노드 가져오기
const confirmPasswordInput = document.querySelector('#confirm-password');
const confirmPasswordContainer = document.querySelectorAll('.signup-form__group')[3];

//비밀번호 일치 확인
function passwordConfirm(password) {
  if (passwordInput.value === password) {
    return true;
  } else {
    return false;
  }
}


//회원가입 버튼 ON/OFF 상태
const signupBtn = document.querySelectorAll('.signup-form__btn')[0];
function signupBtnState() {
  if (emailCheck(emailInput.value) && passwordCheck(passwordInput.value)
    && nameInput.value && passwordConfirm(confirmPasswordInput.value)) {
    //input에 유효한 값을 입력하면
    //'로그인'버튼 활성화와 페이지 이동
    signupBtn.classList.add('signup-form__btn-hover');
    signupBtn.disabled = false;
  } else {
    //input에 빈 값이 있거나 에러 메세지가 있으면
    //'로그인' 버튼 비활성화와 페이지 이동 막기
    signupBtn.classList.remove('signup-form__btn-hover');
    signupBtn.disabled = true;
  }
};

//이메일 에러메세지 없으면 만들어줌
let emailError = false;
function emailcreateMsg(node) {
  const errorMsg = document.createElement('p');
  if (emailError == false) {
    node.append(errorMsg);
    node.lastElementChild.classList.add('signup-form__msg');
    node.children[1].classList.add('signup-form__error');
    emailError = true;
  }
};
//이메일 에러메세지 있으면 없애줌
function emailremoveMsg(node) {
  if (emailError == true) {
    node.lastElementChild.remove();
    node.children[1].classList.remove('signup-form__error');
    emailError = false;
  }
};

//비밀번호 에러메세지 없으면 만들어줌
let passwordError = false;
function passwordcreateMsg(node) {
  const errorMsg = document.createElement('p');
  if (passwordError == false) {
    node.append(errorMsg);
    node.lastElementChild.classList.add('signup-form__msg');
    node.children[1].classList.add('signup-form__error');
    passwordError = true;
  }
};

//비밀번호 에러메세지 있으면 없애줌
function passwordremoveMsg(node) {
  if (passwordError == true) {
    node.lastElementChild.remove();
    node.children[1].classList.remove('signup-form__error');
    passwordError = false;
  }
};

//닉네임 에러메세지 없으면 만들어줌
let nameError = false;
function namecreateMsg(node) {
  const errorMsg = document.createElement('p');
  if (nameError == false) {
    node.append(errorMsg);
    node.lastElementChild.classList.add('signup-form__msg');
    node.children[1].classList.add('signup-form__error');
    nameError = true;
  }
};

//닉네임 에러메세지 있으면 없애줌
function nameremoveMsg(node) {
  if (nameError == true) {
    node.lastElementChild.remove();
    node.children[1].classList.remove('signup-form__error');
    nameError = false;
  }
};

//비밀번호 확인 에러메세지 없으면 만들어줌
let passwordConfirmError = false;
function passwordConfirmcreateMsg(node) {
  const errorMsg = document.createElement('p');
  if (passwordConfirmError == false) {
    node.append(errorMsg);
    node.lastElementChild.classList.add('signup-form__msg');
    node.children[1].classList.add('signup-form__error');
    passwordConfirmError = true;
  }
};

//비밀번호 확인 에러메세지 있으면 없애줌
function passwordConfirmremoveMsg(node) {
  if (passwordConfirmError == true) {
    node.lastElementChild.remove();
    node.children[1].classList.remove('signup-form__error');
    passwordConfirmError = false;
  }
};


//이메일 input에서 focus out할때
emailInput.addEventListener('focusout', function () {
  if (emailInput.value == '') {
    //1. 값이 없을 경우
    console.log('이메일');
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
  signupBtnState()
});

//닉네임 input에서 focus out할때
nameInput.addEventListener('focusout', function () {
  if (nameInput.value == '') {
    console.log('닉네임');
    namecreateMsg(nameContainer);
    nameContainer.lastElementChild.innerHTML = '닉네임을 입력해주세요.'
  } else {
    nameremoveMsg(nameContainer);
  }
  signupBtnState()
});

//비밀번호 input에서 focus out할때
passwordInput.addEventListener('focusout', function () {
  if (passwordInput.value == '') {
    //1. 값이 없을 경우
    console.log('비밀번호');
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
  signupBtnState()
});

//비밀번호 확인 input에서 focus out할때
confirmPasswordInput.addEventListener('focusout', function () {
  if (confirmPasswordInput.value == '') {
    //1. 값이 없을 경우
    console.log('비밀번호');
    passwordConfirmcreateMsg(confirmPasswordContainer);
    confirmPasswordContainer.lastElementChild.innerHTML = '비밀번호를 입력해주세요.';
  } else {
    //2. 값이 있을 경우
    if (passwordCheck(confirmPasswordInput.value)) {
      //2-1  8자 이상일 경우
      if (passwordConfirm(confirmPasswordInput.value)) {
        passwordConfirmremoveMsg(confirmPasswordContainer);
      } else {
        passwordConfirmcreateMsg(confirmPasswordContainer);
        confirmPasswordContainer.lastElementChild.innerHTML = '비밀번호가 일치하지 않습니다.';
      }

    } else {
      //2-2. 8자 미만일 경우
      passwordConfirmcreateMsg(confirmPasswordContainer);
      confirmPasswordContainer.lastElementChild.innerHTML = '비밀번호를 8자 이상 입력해주세요.';
    }
  }
  signupBtnState()
});

const blindImgFirst = document.querySelectorAll('.signup-form__input-blind')[0];
blindImgFirst.addEventListener('click', function () {
  if (blindImgFirst.getAttribute('src') == '/img/btn_visibility_off_24px.png') {
    blindImgFirst.setAttribute('src', '/img/btn_visibility_on_24px.png');
    passwordInput.setAttribute('type', 'text');
  } else {
    blindImgFirst.setAttribute('src', '/img/btn_visibility_off_24px.png');
    passwordInput.setAttribute('type', 'password');
  }
})

const blindImgSecond = document.querySelectorAll('.signup-form__input-blind')[1];
blindImgSecond.addEventListener('click', function () {
  if (blindImgSecond.getAttribute('src') == '/img/btn_visibility_off_24px.png') {
    blindImgSecond.setAttribute('src', '/img/btn_visibility_on_24px.png');
    confirmPasswordInput.setAttribute('type', 'text');
  } else {
    blindImgSecond.setAttribute('src', '/img/btn_visibility_off_24px.png');
    confirmPasswordInput.setAttribute('type', 'password');
  }
})
