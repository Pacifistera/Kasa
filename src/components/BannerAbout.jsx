import bannerAbout from '../assets/banner-about.svg';
import '../styles/BannerAbout.scss';

function BannerAbout() {
  return (
    <div className="banner-about">
      <img src={bannerAbout} alt="Banner de la page A propos" />
    </div>
  );
}

export default BannerAbout;
