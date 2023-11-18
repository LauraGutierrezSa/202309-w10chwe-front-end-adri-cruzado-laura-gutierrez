import FooterStyled from "./FooterStyled";

interface FooterProps {
  text: string;
}

const Footer = ({ text }: FooterProps): React.ReactElement => {
  return (
    <FooterStyled className="footer">
      <span className="footer__copyright-notice">{text}</span>
      <div className="footer__icons">
        <a
          className="footer__social-media-link"
          href="https://www.instagram.com/"
        >
          <img
            alt="Instagram icon"
            width="30px"
            height="30px"
            src="/images/icons/instagramLogo.svg"
            aria-label="Instagram icon that redirects to Robopedia's Instagram profile."
            className="footer__icon"
          />
        </a>
        <a className="footer__social-media-link" href="https://www.x.com/">
          <img
            alt="X icon"
            width="30px"
            height="30px"
            src="/images/icons/xLogo.svg"
            aria-label="X icon that redirects to Robopedia's X profile."
            className="footer__icon"
          />
        </a>
      </div>
    </FooterStyled>
  );
};

export default Footer;
