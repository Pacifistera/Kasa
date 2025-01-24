import BannerAbout from '../components/BannerAbout';
import { about } from '../Utils/about';
import BlocAbout from '../components/BlocAbout';

function About() {
  return (
    <>
      <BannerAbout />
      {about.map((about, index) => (
        <BlocAbout title={about.title} text={about.text} key={index} />
      ))}
    </>
  );
}

export default About;
