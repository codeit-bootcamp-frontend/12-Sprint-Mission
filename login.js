const inputPush = document.getElementById("inputPush");

if (inputPush) {
  inputPush.addEventListener("focusout", (event) => {
    // 포커스를 벗어난 후 배경색을 핑크로 변경
    event.target.style.background = "pink";
    console.log("잘못된 이메일입니다!");
  });
} else {
  console.error("inputPush 요소를 찾을 수 없습니다.");
}
