window.onload = function () {
  const form = document.querySelector('.form');
  const email = form.querySelector('#email');
  const nickname = form.querySelector('#nickname');
  const passwordList = document.querySelectorAll('.password');
  const visibility_toggle = document.querySelectorAll('.visibility_toggle');
  const button = form.querySelector('button');

  let [isEmailValid, isNicknameValid, isPwValid, isPwcheckValid] = [
    false,
    false,
    false,
    false,
  ];

  //
  //
  //

  // 이메일 유효성 검사 함수 정의
  function emailValidCheck(e) {
    const alertList = e.target.parentNode.parentNode.querySelectorAll('.alert');

    const emailValid = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(
      email.value.trim()
    );
    if (e.target.value === '') {
      alertList[0].style.display = 'block';
      alertList[1].style.display = 'none';
      e.target.style.border = '1px solid #F74747';
      isEmailValid = false;
    } else if (!emailValid) {
      alertList[0].style.display = 'none';
      alertList[1].style.display = 'block';
      e.target.style.border = '1px solid #F74747';
      isEmailValid = false;
    } else {
      alertList[0].style.display = 'none';
      alertList[1].style.display = 'none';
      e.target.style.border = 'none';
      isEmailValid = true;
    }
  }

  //
  //
  //

  // 닉네임 유효성 검사 함수 정의
  function nicknameValidCheck(e) {
    const alertList = e.target.parentNode.parentNode.querySelectorAll('.alert');
    if (e.target.value === '') {
      alertList[0].style.display = 'block';
      e.target.style.border = '1px solid #F74747';
      isNicknameValid = false;
    } else {
      alertList[0].style.display = 'none';
      e.target.style.border = 'none';
      isNicknameValid = true;
    }
  }

  //
  //
  //

  // 비밀번호 유효성 검사 함수 정의
  function pwValidCheck(e) {
    const alertList = e.target.parentNode.parentNode.querySelectorAll('.alert');
    if (passwordList[0].value === '') {
      alertList[0].style.display = 'block';
      alertList[1].style.display = 'none';
      e.target.style.border = '1px solid #F74747';
      isPwValid = false;
    } else if (passwordList[0].value.length < 8) {
      alertList[0].style.display = 'none';
      alertList[1].style.display = 'block';
      e.target.style.border = '1px solid #F74747';
      isPwValid = false;
    } else {
      alertList[0].style.display = 'none';
      alertList[1].style.display = 'none';
      e.target.style.border = 'none';
      isPwValid = true;
    }
  }

  //
  //
  //

  // 비밀번호 확인 유효성 검사 함수 정의
  function pwCheckValid(e) {
    const alertList = e.target.parentNode.parentNode.querySelectorAll('.alert');
    if (passwordList[1].value === passwordList[0].value) {
      alertList[0].style.display = 'none';
      e.target.style.border = 'none';
      isPwcheckValid = true;
    } else {
      alertList[0].style.display = 'block';
      e.target.style.border = '1px solid #F74747';
      isPwcheckValid = false;
    }
  }

  if (button.textContent === '회원가입') {
    // 회원가입 페이지에서 동작 코드

    //
    //
    //

    // 이벤트 등록, keyup 이벤트가 발생해도 동작하는 코드를 추가했습니다.
    email.addEventListener('focusout', emailValidCheck);
    nickname.addEventListener('focusout', nicknameValidCheck);
    passwordList[0].addEventListener('focusout', pwValidCheck);
    passwordList[1].addEventListener('focusout', pwCheckValid);

    email.addEventListener('keyup', emailValidCheck);
    nickname.addEventListener('keyup', nicknameValidCheck);
    passwordList[0].addEventListener('keyup', pwValidCheck);
    passwordList[1].addEventListener('keyup', pwCheckValid);

    //
    //
    //

    // 버튼 활성화 코드, 모두 제대로 입력되는 동시에 버튼이 활성화될 수 있도록 keyup이벤트를 적용했습니다.
    form.addEventListener('keyup', () => {
      if (isEmailValid && isNicknameValid && isPwValid && isPwcheckValid) {
        button.disabled = false;
        button.style.backgroundColor = '#3182f6';
      } else {
        button.disabled = true;
        button.style.backgroundColor = '#9ca3af';
      }
    });
  } else {
    // 로그인 페이지에서 동작하는 코드

    //
    //
    //

    // 이벤트 등록, keyup 이벤트가 발생해도 동작하는 코드를 추가했습니다.
    email.addEventListener('focusout', emailValidCheck);
    passwordList[0].addEventListener('focusout', pwValidCheck);

    email.addEventListener('keyup', emailValidCheck);
    passwordList[0].addEventListener('keyup', pwValidCheck);

    //
    //
    //

    // 모두 제대로 입력되는 동시에 버튼이 활성화될 수 있도록 keyup이벤트를 적용했습니다.
    form.addEventListener('keyup', () => {
      if (isEmailValid && isPwValid) {
        button.disabled = false;
        button.style.backgroundColor = '#3182f6';
      } else {
        button.disabled = true;
        button.style.backgroundColor = '#9ca3af';
      }
    });
  }

  // 비밀번호 보이게했다 안보이게했다하는 토글
  visibility_toggle.forEach((toggle, index) => {
    toggle.addEventListener('click', (e) => {
      if (e.target.classList.contains('on')) {
        e.target.classList.toggle('on');
        e.target.src = 'img/authorization/visibility_toggle_off.svg';
        passwordList[index].type = 'password';
      } else {
        e.target.classList.toggle('on');
        e.target.src = 'img/authorization/visibility_toggle_on.svg';
        passwordList[index].type = 'text';
      }
    });
  });
};
