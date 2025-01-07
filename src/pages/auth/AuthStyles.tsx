import styled from "styled-components";

export const AuthContainer = styled.main`
  padding: 24px 16px;
  max-width: 432px;
  margin: 0 auto;

  @media (min-width: 768px) {
    max-width: 640px;
    padding: 48px 0;
  }

  @media (min-width: 1280px) {
    padding: 60px 0;
  }
`;

export const LogoHomeLink = styled.a`
  display: block;
  margin-bottom: 24px;
  text-align: center;

  img {
    width: 198px;

    @media (min-width: 768px) {
      width: 396px;
    }
  }

  @media (min-width: 1280px) {
    margin-bottom: 40px;
  }
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 24px;
`;

export const AuthSwitch = styled.div`
  font-weight: 500;
  font-size: 15px;
  text-align: center;
  margin: 0;

  a {
    color: #3182f6;
    text-decoration: underline;
    text-underline-offset: 2px;
    margin: 0;
    padding: 0;
    display: inline-block;
  }
`;

export const SubmitButton = styled.button`
  background-color: var(--blue);
  color: #ffffff;
  padding: 14.5px 33.5px;
  border-radius: 999px;
  font-size: 16px;
  font-weight: bold;
  border: none;
  cursor: pointer;
  width: 100%;

  &:hover {
    background-color: #1967d6;
  }

  &:focus {
    background-color: #1251aa;
  }

  &:disabled {
    background-color: #9ca3af;
    cursor: default;
  }
`;
