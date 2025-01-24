import BannerHome from '../components/BannerHome';
import Card from '../components/Card';
import '../styles/Home.scss';

function Home() {
  return (
    <div className="container-home">
      <BannerHome />
      <div className="container-cards">
        <Card />
      </div>
    </div>
  );
}

export default Home;
