document.addEventListener("DOMContentLoaded", () => {
  let isEmailValid = false;
  let isNicknameValid = false;
  let isPasswordValid = false;
  let isPasswordConfirmationValid = false;

  const loginForm = document.getElementById("loginForm");
  const signupForm = document.getElementById("signupForm");
  const emailInput = document.getElementById("email");
  const nicknameInput = document.getElementById("nickname");
  const passwordInput = document.getElementById("password");
  const passwordConfirmationInput = document.getElementById(
    "passwordConfirmation"
  );
  const submitButton = document.querySelector(
    '.auth-container form button[type="submit"]'
  );


  function showError(input, errorId) {
    const errorElement = document.getElementById(errorId);
    errorElement.style.display = "block";
    input.style.border = "1px solid #f74747";
  }

  
  function hideError(input, errorId) {
    const errorElement = document.getElementById(errorId);
    errorElement.style.display = "none";
    input.style.border = "none";
  }

  function validateEmailString(email) {
    const emailRegex = /^[A-Za-z0-9._%-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,4}$/;
    return emailRegex.test(email);
  }

  
  function checkEmailValidity() {
    const emailValue = emailInput.value.trim();

    isEmailValid = false;
    hideError(emailInput, "emailEmptyError");
    hideError(emailInput, "emailInvalidError");

    if (!emailValue) {
      showError(emailInput, "emailEmptyError");
    } else if (!validateEmailString(emailValue)) {
      showError(emailInput, "emailInvalidError");
    } else {
      isEmailValid = true;
      hideError(emailInput, "emailEmptyError");
      hideError(emailInput, "emailInvalidError");
    }
  
    updateSubmitButtonState();
  }

  
  function checkNicknameValidity() {
    const nicknameValue = nicknameInput.value.trim();
    isNicknameValid = false;
    hideError(nicknameInput, "nicknameEmptyError");

    if (!nicknameValue) {
      showError(nicknameInput, "nicknameEmptyError");
    } else {
      isNicknameValid = true;
      hideError(emailInput, "nicknameEmptyError");
    }
    updateSubmitButtonState();
  }

  
  function checkPasswordValidity() {
    const passwordValue = passwordInput.value.trim();
    isPasswordValid = false;

    hideError(passwordInput, "passwordEmptyError");
    hideError(passwordInput, "passwordInvalidError");

    if (!passwordValue) {
      showError(passwordInput, "passwordEmptyError");
    } else if (passwordValue.length < 8) {
      showError(passwordInput, "passwordInvalidError");
    } else {
      isPasswordValid = true;
      hideError(passwordInput, "passwordEmptyError");
      hideError(passwordInput, "passwordInvalidError");
    }
    updateSubmitButtonState();

    
    if (signupForm) {
      checkPasswordConfirmationValidity();
    }
  }

  
  function checkPasswordConfirmationValidity() {
    const passwordConfirmationValue = passwordConfirmationInput.value.trim();
    isPasswordConfirmationValid = false;

    hideError(passwordConfirmationInput, "passwordConfirmationError");
    hideError(passwordConfirmationInput, "passwordConfirmationInitError");

    if (!isPasswordValid) {
      showError(passwordConfirmationInput, "passwordConfirmationInitError");
    } else if (
      !passwordConfirmationValue ||
      passwordConfirmationValue !== passwordInput.value.trim()
    ) {
      showError(passwordConfirmationInput, "passwordConfirmationError");
    } else {
      isPasswordConfirmationValid = true;
      hideError(passwordConfirmationInput, "passwordConfirmationError");
      hideError(passwordConfirmationInput, "passwordConfirmationInitError");
    }
    updateSubmitButtonState();
  }

  function updateSubmitButtonState() {
    
    let isFormValid = isEmailValid && isPasswordValid;

    if (signupForm) {
      isFormValid =
        isFormValid && isNicknameValid && isPasswordConfirmationValid;
    }

    submitButton.disabled = !isFormValid;
  }

  
  if (emailInput) {
    emailInput.addEventListener("focusout", checkEmailValidity);
  }
  if (nicknameInput) {
    nicknameInput.addEventListener("focusout", checkNicknameValidity);
  }
  if (passwordInput) {
    passwordInput.addEventListener("input", checkPasswordValidity);
  }
  if (passwordConfirmationInput) {
    passwordConfirmationInput.addEventListener(
      "input",
      checkPasswordConfirmationValidity
    );
  }

  
  updateSubmitButtonState();

  if (loginForm) {
    loginForm.addEventListener("submit", function (event) {
      event.preventDefault(); // 
      window.location.href = "items.html";
    });
  }

  if (signupForm) {
    signupForm.addEventListener("submit", function (event) {
      event.preventDefault();
      window.location.href = "signup.html";
    });
  }

  
  function togglePasswordVisibility(event) {
    const button = event.currentTarget;
    const inputField = button.parentElement.querySelector("input");
    const toggleIcon = button.querySelector(".password-toggle-icon");

    const isPasswordVisible = inputField.type === "text";

    inputField.type = isPasswordVisible ? "text" : "password";

    toggleIcon.src = isPasswordVisible
      ? "images/icons/eye-visible.svg"
      : "images/icons/eye-invisible.svg";
    toggleIcon.alt = isPasswordVisible
      ? "비밀번호 표시 상태 아이콘"
      : "비밀번호 숨김 상태 아이콘";

    button.setAttribute(
      "aria-label",
      isPasswordVisible ? "비밀번호 숨기기" : "비밀번호 보기"
    );
  }

  const toggleButtons = document.querySelectorAll(".password-toggle-button"); 
  toggleButtons.forEach((button) =>
    button.addEventListener("click", togglePasswordVisibility)
  );
});
