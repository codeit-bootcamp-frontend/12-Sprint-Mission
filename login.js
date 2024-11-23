const input = document.querySelector(".inputPush:focus");

if (input) {
  input.onfocus = focus; // 포커스를 받을 때 호출할 함수
  input.onblur = blur; // 포커스를 벗어날 때 호출할 함수
}

function focus() {
  this.style.backgroundColor = "green"; // 포커스를 받으면 배경을 녹색으로 변경
}

function blur() {
  this.style.backgroundColor = ""; // 포커스를 벗어나면 배경을 원래 상태로 되돌림
}
