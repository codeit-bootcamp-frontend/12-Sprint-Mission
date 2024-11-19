// index.html > sec2 문구 반응형 처리
function addLineBreakIfNeeded() {
  // 현재 창 너비 확인
  if (window.innerWidth > 1199) {
    const hotItemText = document.getElementById("hotItemText");
    const searchText = document.getElementById("searchText");
    const registerText = document.getElementById("registerText");

    // 이미 <br>이 추가되어 있지 않은지 확인
    if (!searchText.innerHTML.includes("<br>")) {
      // 문자열을 나눠서 <br> 태그 추가
      hotItemText.innerHTML = "인기 상품을<br>확인해 보세요";
      searchText.innerHTML = "구매를 원하는<br>상품을 검색하세요";
      registerText.innerHTML = "판매를 원하는<br>상품을 등록하세요";
    }
  } else {
    // 화면이 커지면 <br> 태그 제거
    document.getElementById("hotItemText").innerHTML = "인기 상품을 확인해 보세요";
    document.getElementById("searchText").innerHTML = "구매를 원하는 상품을 검색하세요";
    document.getElementById("registerText").innerHTML = "판매를 원하는 상품을 등록하세요";
  }
}

// footer-bar 버튼 변수 선언
const footerBar = document.querySelector(".footer-bar");
const copyRight = document.querySelector(".copyRight");

function moveCopyRight() {
  if (window.innerWidth < 768) {
    footerBar.appendChild(copyRight);
  } else {
    footerBar.insertBefore(copyRight, footerBar.firstChild);
  }
}

// header-bar 로고 변수 선언 moblie
const logoImg = document.querySelector(".logoImg");
const logoDiv = document.querySelector(".logo");

function correctionLogo() {
  if(window.innerWidth < 768) {
    logoImg.remove();
  } else {
    logoDiv.insertBefore(logoImg, logoDiv.firstChild);
  }
}

// 페이지 로드 시와 창 크기 변경 시 함수 실행
["load", "resize"].forEach(event => {
  window.addEventListener(event, addLineBreakIfNeeded);
  window.addEventListener(event, moveCopyRight);
  window.addEventListener(event, correctionLogo);
});
