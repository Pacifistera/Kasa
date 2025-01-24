import { NavLink } from 'react-router-dom';
import '../styles/Nav.scss';

function Nav() {
  return (
    <nav>
      <NavLink to="/" className={({ isActive }) => (isActive ? 'active' : '')}>
        Accueil
      </NavLink>
      <NavLink
        to="/contact"
        className={({ isActive }) => (isActive ? 'active' : '')}
      >
        À propos
      </NavLink>
    </nav>
  );
}

export default Nav;
