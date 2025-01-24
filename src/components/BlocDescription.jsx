import arrow from '../assets/chap.svg';
import '../styles/BlocDescription.scss';
import { useState } from 'react';
import PropTypes from 'prop-types';

function BlocDescription({ title, description }) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleAccordion = () => {
    if (isOpen) {
      setIsOpen(false);
    } else {
      setIsOpen(true);
    }
  };

  return (
    <div className="bloc-description">
      <div className="bloc-description-title">
        <h3>{title}</h3>
        <img
          className={isOpen ? 'arrow-up' : ''}
          onClick={toggleAccordion}
          src={arrow}
          alt="Flèche vers le bas"
        />
      </div>
      <p className={isOpen ? 'text-description open' : 'text-description'}>
        {description}
      </p>
    </div>
  );
}

BlocDescription.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

export default BlocDescription;
