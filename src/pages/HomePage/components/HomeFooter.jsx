import React from "react";
import facebookLogo from "../../../assets/images/social/facebook-logo.svg";
import twitterLogo from "../../../assets/images/social/twitter-logo.svg";
import youtubeLogo from "../../../assets/images/social/youtube-logo.svg";
import instagramLogo from "../../../assets/images/social/instagram-logo.svg";

const socialMediaLinks = [
  {
    href: "https://www.facebook.com/",
    alt: "페이스북",
    imgSrc: facebookLogo,
    label: "판다마켓 페이스북",
  },
  {
    href: "https://twitter.com/",
    alt: "트위터",
    imgSrc: twitterLogo,
    label: "판다마켓 트위터",
  },
  {
    href: "https://www.youtube.com/",
    alt: "유튜브",
    imgSrc: youtubeLogo,
    label: "판다마켓 유튜브",
  },
  {
    href: "https://www.instagram.com/",
    alt: "인스타그램",
    imgSrc: instagramLogo,
    label: "판다마켓 인스타그램",
  },
];

function HomeFooter() {
  return (
    <footer>
      <div id="copyright">©codeit - 2024</div>
      <div id="footerMenu">
        <a href="privacy.html">Privacy Policy</a>
        <a href="faq.html">FAQ</a>
      </div>
      <div id="socialMedia">
        {socialMediaLinks.map(({ href, alt, imgSrc, label }, index) => (
          <a
            key={index}
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={label}
          >
            <img src={imgSrc} alt={alt} width="20" />
          </a>
        ))}
      </div>
    </footer>
  );
}

export default HomeFooter;
