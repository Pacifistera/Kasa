import { NavLink } from 'react-router-dom';
import '../styles/404.scss';

function Error404() {
  const textError = "Oups! La page que vous demandez n'existe pas.";

  return (
    <div className="bloc-error">
      <h1>404</h1>
      <p>{textError}</p>
      <NavLink to="/">Retourner sur la page d'accueil</NavLink>
    </div>
  );
}

export default Error404;
