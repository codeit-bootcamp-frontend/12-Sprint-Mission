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
