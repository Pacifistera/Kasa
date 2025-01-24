import { useState } from 'react';
import '../styles/Caroussel.scss';
import arrowLeft from '../assets/arrow-left.svg';
import arrowRight from '../assets/arrow_right.svg';
import PropTypes from 'prop-types';

function Caroussel({ pictures }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Si pas d'images ou une seule image, on cache les boutons de navigation
  const shouldShowNavigation = pictures && pictures.length > 1;

  const goToNext = () => {
    setCurrentIndex(
      currentIndex === pictures.length - 1 ? 0 : currentIndex + 1
    );
  };

  const goToPrevious = () => {
    setCurrentIndex(
      currentIndex === 0 ? pictures.length - 1 : currentIndex - 1
    );
  };

  // Si pas d'images, on retourne null ou un message
  if (!pictures || pictures.length === 0) {
    return null;
  }

  return (
    <div className="caroussel">
      {shouldShowNavigation && (
        <button className="caroussel-button prev" onClick={goToPrevious}>
          <img src={arrowLeft} alt="Précédent" />
        </button>
      )}

      <div className="caroussel-content">
        <img
          src={pictures[currentIndex]}
          alt={`Slide ${currentIndex + 1}`}
          className="caroussel-image"
        />
        {shouldShowNavigation && (
          <div className="caroussel-counter">
            {currentIndex + 1}/{pictures.length}
          </div>
        )}
      </div>

      {shouldShowNavigation && (
        <button className="caroussel-button next" onClick={goToNext}>
          <img src={arrowRight} alt="Suivant" />
        </button>
      )}
    </div>
  );
}

Caroussel.propTypes = {
  pictures: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default Caroussel;
