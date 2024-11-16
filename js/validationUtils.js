// email
export function validateEmail(emailValue) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (emailValue === '') {
    return '이메일을 입력해주세요.';
  } else if (!emailRegex.test(emailValue)) {
    return '잘못된 이메일 형식입니다';
  }
  return '';
}

// password
export function validatePassword(passwordValue) {
  const pwRegex = /^(?=.*[a-zA-Z])(?=.*[!@#$%^*+=-])(?=.*[0-9]).{8,15}$/;
  if (passwordValue === '') {
    return '비밀번호를 입력해주세요.';
  } else if (!pwRegex.test(passwordValue)) {
    return '비밀번호는 영문, 숫자, 특수문자를 포함한 8~15자로 입력해주세요.';
  }
  return '';
}

// nickName
export function validateNickName(nickNameValue) {
  if (nickNameValue === '') {
    return '닉네임을 입력해주세요';
  }
  return '';
}

// confirmPw
export function validateConfirmPw(passwordValue, confirmPwValue) {
  if (confirmPwValue === '') {
    return '비밀번호를 한번 더 입력해주세요';
  } else if (confirmPwValue !== passwordValue) {
    return '비밀번호가 일치하지 않습니다';
  }
  return '';
}

export function togglePasswordVisibility(toggleButton, passwordField) {
  const eyeSlashIcon = 'img/btn_visibility_on.png';
  const eyeIcon = 'img/btn_visibility_off.png';

  toggleButton.addEventListener('click', () => {
    if (passwordField.type === 'password') {
      passwordField.type = 'text';
      toggleButton.querySelector('img').src = eyeIcon;
      toggleButton.querySelector('img').alt = '비밀번호 숨기기';
    } else {
      passwordField.type = 'password';
      toggleButton.querySelector('img').src = eyeSlashIcon;
      toggleButton.querySelector('img').alt = '비밀번호 보이기';
    }
  })
}