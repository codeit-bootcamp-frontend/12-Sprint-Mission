import styled from "styled-components";
import { ReactComponent as LoginHeaderImg } from "../assets/logo.svg";
import { Link } from "react-router-dom";
import { ReactComponent as VisibilityImg } from "../assets/btn_visibility_off.svg";
import { ReactComponent as IcGoogle } from "../assets/ic_google.svg";
import { ReactComponent as IcKakao } from "../assets/ic_kakao.svg";

const ContentWrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 640px;
  margin: 140px auto;
  gap: 40px;
  @media (max-width: 1199px) {
    width: inherit;
    padding: 0 24px;
  }
  @media (max-width: 767px) {
    padding: 0 16px;
  }
`;
const LoginHeader = styled.div`
  text-align: center;

  img {
    @media (max-width: 767px) {
      width: 80%;
    }
  }
`;
const LoginForm = styled.form`
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 24px;
  @media (max-width: 767px) {
    max-width: 400px;
  }
`;
const InputBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;

  label {
    font-size: 18px;
    line-height: 26px;
    font-weight: var(--font-weight-bold);
    color: var(--gray-scale-800);
  }
  input {
    padding: 16px 24px;
    background-color: var(--gray-scale-100);
    border-radius: 12px;
    border: none;
    font-size: 16px;
    line-height: 26px;
    font-weight: var(--font-weight-regular);
    color: var(--gray-scale-800);
  }
  input:focus {
    border-color: var(--main-bg-color);
  }
  input::placeholder {
    color: var(--gray-scale-400);
  }
  input.error-border {
    border: 1px solid var(--error);
  }
`;
const PasswordWrap = styled.div`
  display: grid;
  align-items: center;
  position: relative;
`;
const Button = styled.button`
  position: absolute;
  right: 16px;
  height: 24px;
  background: none;
  cursor: pointer;
`;
const ButtonSubmit = styled.button`
  padding: 16px 0;
  border: none;
  border-radius: 40px;
  background-color: var(--gray-scale-400);
  font-size: 20px;
  font-weight: var(--font-weight-semibold);
  line-height: 32px;
  color: var(--gray-scale-0);
  cursor: inherit;

  .abled {
    background-color: var(--primary-color-100);
    cursor: pointer;
  }
  .abled:hover {
    background-color: var(--primary-color-200);
  }
  .abled:active {
    background-color: var(--primary-color-300);
  }
`;
const LoginSns = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 16px 23px;
  border-radius: 8px;
  background-color: var(--main-bg-color-light);

  p {
    font-size: 16px;
    line-height: 26px;
    font-weight: var(--font-weight-medium);
  }
`;
const LoginSnsList = styled.div`
  display: grid;
  grid-template: 1fr / 1fr 1fr;
  gap: 16px;

  a {
    align-content: center;
  }
  img {
    display: block;
  }
`;
const Register = styled.p`
  font-size: 14px;
  text-align: center;
  font-weight: var(--font-weight-medium);

  a {
    color: var(--primary-color-100);
    text-decoration: underline;
  }
`;

function LoginPage() {
  return (
    <ContentWrap>
      <LoginHeader>
        <Link to="/">
          <LoginHeaderImg alt="로고이미지" />
        </Link>
      </LoginHeader>
      <LoginForm id="login-form" onsubmit="">
        <InputBox>
          <label for="login-email">이메일</label>
          <input
            type="email"
            id="login-email"
            name="login-email"
            placeholder="이메일을 입력해주세요"
          />
        </InputBox>
        <InputBox>
          <label for="login-password">비밀번호</label>
          <PasswordWrap>
            <input
              type="password"
              id="login-password"
              name="login-password"
              class="password"
              placeholder="비밀번호를 입력해주세요"
            />
            <Button id="viewToggle" class="hide" type="button">
              <VisibilityImg alt="비밀번호 가리기" class="toggle-img" />
            </Button>
          </PasswordWrap>
        </InputBox>
        <ButtonSubmit type="button" onclick="goItems()" disabled>
          로그인
        </ButtonSubmit>
        <LoginSns>
          <p>간편 로그인하기</p>
          <LoginSnsList>
            <Link to="https://www.google.com/" target="_blank">
              <IcGoogle alt="구글로 로그인" />
            </Link>
            <Link to="https://www.kakaocorp.com/page/" target="_blank">
              <IcKakao alt="카카오로 로그인" />
            </Link>
          </LoginSnsList>
        </LoginSns>
        <Register>
          판다마켓이 처음이신가요? <Link to="/signup">회원가입</Link>
        </Register>
      </LoginForm>
    </ContentWrap>
  );
}

export default LoginPage;
