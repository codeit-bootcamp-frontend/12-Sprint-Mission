// email
export function validateEmail(emailValue) {
  if (emailValue === '') {
    return '이메일을 입력해주세요.';
  } else if (!emailValue.includes('@')) {
    return '잘못된 이메일 형식입니다';
  }
  return '';
}

// password
export function validatePassword(passwordValue) {
  if (passwordValue === '') {
    return '비밀번호를 입력해주세요.';
  } else if (passwordValue.length < 8) {
    return '비밀번호를 8자 이상 입력해주세요.';
  }
  return '';
}