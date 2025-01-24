import logoNB from '../assets/logoNB.svg';
import '../styles/Footer.scss';

function Footer() {
  const text = '© 2025 Kasa. All rights reserved.';
  return (
    <footer>
      <div className="footer-logo">
        <img src={logoNB} alt="Logo de Kasa" />
      </div>
      <p>{text}</p>
    </footer>
  );
}

export default Footer;
