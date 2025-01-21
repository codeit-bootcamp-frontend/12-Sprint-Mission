import styled from "styled-components";
import icFacebook from "../assets/ic_facebook.svg";
import icTwitter from "../assets/ic_twitter.svg";
import icYoutube from "../assets/ic_youtube.svg";
import icInstagram from "../assets/ic_instagram.svg";

const FooterContainer = styled.footer`
  padding: 32px 0;
  background-color: var(--gray-scale-900);
  color: var(--gray-scale-400);
`;
const FooterWrap = styled.div`
  display: grid;
  grid-template: repeat(2, 1fr) / repeat(3, 1fr);
  gap: 10px;
  max-width: 1920px;
  padding: 0 200px;
  @media (max-width: 1199px) {
    padding: 0 24px;
  }
  @media (max-width: 767px) {
    grid-template: 1fr / 1fr;
    grid-template-areas: "link sns" "copy . ";
    gap: 0;
    padding: 0 32px;
  }
`;
const Copyright = styled.p`
  display: flex;
  justify-content: flex-start;
  color: var(--gray-scale-550);
  @media (max-width: 767px) {
    grid-area: copy;
    padding-top: 70px;
  }
`;
const FooterLink = styled.div`
  display: flex;
  justify-content: center;
  gap: 30px;
  text-align: center;
  color: var(--gray-scale-300);
  @media (max-width: 767px) {
    grid-area: link;
    justify-content: flex-start;
  }
`;
const FooterLinkTxt = styled.a`
  font-weight: var(--font-weight-regular);
`;
const FooterSnsLink = styled.div`
  display: flex;
  gap: 20px;
  justify-content: flex-end;
  align-items: center;
  @media (max-width: 767px) {
    grid-area: sns;
  }
`;
const FooterSnsLinkTxt = styled.a`
  vertical-align: middle;
`;
const FooterSnsLinkImg = styled.img`
  display: block;
`;

function Footer() {
  return (
    <FooterContainer>
      <FooterWrap>
        <Copyright>©codeit - 2024</Copyright>
        <FooterLink>
          <FooterLinkTxt href="/privacy.html">Privacy Policy</FooterLinkTxt>
          <FooterLinkTxt href="/faq.html">FAQ</FooterLinkTxt>
        </FooterLink>
        <FooterSnsLink>
          <FooterSnsLinkTxt href="" target="_blank" rel="noopener noreferrer">
            <FooterSnsLinkImg src={icFacebook} alt="페이스북" />
          </FooterSnsLinkTxt>
          <FooterSnsLinkTxt href="" target="_blank" rel="noopener noreferrer">
            <FooterSnsLinkImg src={icTwitter} alt="트위터" />
          </FooterSnsLinkTxt>
          <FooterSnsLinkTxt href="" target="_blank" rel="noopener noreferrer">
            <FooterSnsLinkImg src={icYoutube} alt="유튜브" />
          </FooterSnsLinkTxt>
          <FooterSnsLinkTxt href="" target="_blank" rel="noopener noreferrer">
            <FooterSnsLinkImg src={icInstagram} alt="인스타그램" />
          </FooterSnsLinkTxt>
        </FooterSnsLink>
      </FooterWrap>
    </FooterContainer>
  );
}

export default Footer;
