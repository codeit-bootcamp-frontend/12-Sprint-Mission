document.addEventListener('DOMContentLoaded', () => {
  const visibility_toggle = document.querySelectorAll('.visibility_toggle');
  const password = document.querySelectorAll('.password');

  visibility_toggle.forEach((toggle, index) => {
    toggle.addEventListener('click', (e) => {
      if (e.target.classList.contains('on')) {
        e.target.classList.toggle('on');
        e.target.src = 'img/for_signup_&_login/visibility_toggle_off.svg';
        password[index].type = 'password';
      } else {
        e.target.classList.toggle('on');
        e.target.src = 'img/for_signup_&_login/visibility_toggle_on.svg';
        password[index].type = 'text';
      }
    });
  });

  const button = document.querySelector('button');

  button.addEventListener('click', () => {
    if (password[0].value !== password[1].value) {
      alert('비밀번호가 일치하지 않습니다.');
    }
  });
});
