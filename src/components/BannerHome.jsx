import bannerHome from '../assets/banner-home.svg';
import '../styles/BannerHome.scss';

function BannerHome() {
  const title = 'Chez vous, partout et ailleurs';
  return (
    <div className="banner-home">
      <img src={bannerHome} alt="Banner de la page d'accueil" />
      <h1>{title}</h1>
    </div>
  );
}

export default BannerHome;
