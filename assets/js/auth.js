import AuthForm from "/assets/js/authForm.js";
import { toggleVisibility } from "./authUtils.js";

//form validation 실행
const form = new AuthForm(".form");
form.init();

//password 가리기/보이기 실행
toggleVisibility(".form");
