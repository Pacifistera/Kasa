import logo from '../assets/LOGO.svg';
import Nav from './Nav';
import { Link } from 'react-router-dom';
import '../styles/Header.scss';

function Header() {
  return (
    <header>
      <div className="header-logo">
        <Link to="/">
          <img src={logo} alt="Logo de Kasa" />
        </Link>
      </div>
      <Nav />
    </header>
  );
}

export default Header;
