import '../styles/blocAbout.scss';
import arrow from '../assets/chap.svg';
import { useState } from 'react';
import PropTypes from 'prop-types';

function BlocAbout({ title, text }) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleAccordion = () => {
    if (isOpen) {
      setIsOpen(false);
    } else {
      setIsOpen(true);
    }
  };

  return (
    <div className="container-about">
      <div className="container-bloc-about">
        <h3>{title}</h3>
        <img
          className={isOpen ? 'arrow-up' : ''}
          onClick={toggleAccordion}
          src={arrow}
          alt="Flèche vers le bas"
        />
      </div>

      <p className={isOpen ? 'text-about open' : 'text-about'}>{text}</p>
    </div>
  );
}

BlocAbout.propTypes = {
  title: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
};

export default BlocAbout;
