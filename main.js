const form = document.getElementById("form");

form.addEventListener("focusin", (event) => {
  event.target.style.background = "pink";
});
form.addEventListener("focusout", (event) => {
  event.target.style.background = "";
});

$(document).ready(function () {
  // 공통 오류 메시지 함수
  function showErrorMessage(elementId, message) {
    $("#" + elementId)
      .text(message)
      .css({
        "color": "red",
        "font-size": "12px",
        "visibility": "visible"
      });
  }

  function hideErrorMessage(elementId) {
    $("#" + elementId).css("visibility", "hidden");
  }

  // 이메일 검증
  $("#email").on("focusout", function () {
    var email = $(this).val();
    var emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;

    if (email == "" || !emailPattern.test(email)) {
      $(this).addClass("error");
      showErrorMessage("error-messagea1", "잘못된 형식의 이메일입니다.");
    } else {
      $(this).removeClass("error");
      hideErrorMessage("error-messagea1");
    }
  });

  // 비밀번호 검증
  $("#password").on("focusout", function () {
    var password = $(this).val();
    var passwordPattern = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/;
    
    if (password === "" || !passwordPattern.test(password)) {
      $(this).addClass("error");
      showErrorMessage("error-messagea2", "비밀번호는 8자리 입력해주세요.");
    } else {
      $(this).removeClass("error");
      hideErrorMessage("error-messagea2");
    }
  });
});