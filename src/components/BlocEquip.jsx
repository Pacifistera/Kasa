import arrow from '../assets/chap.svg';
import '../styles/BlocEquip.scss';
import { useState } from 'react';
import PropTypes from 'prop-types';

function BlocEquip({ title, equipments }) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleAccordion = () => {
    if (isOpen) {
      setIsOpen(false);
    } else {
      setIsOpen(true);
    }
  };

  return (
    <div className="bloc-equip ">
      <div className="bloc-equip-title">
        <h3>{title}</h3>
        <img
          className={isOpen ? 'arrow-up' : ''}
          onClick={toggleAccordion}
          src={arrow}
          alt="Flèche vers le bas"
        />
      </div>
      <p className={isOpen ? 'text-equip open' : 'text-equip'}>
        {equipments.map((equipment) => (
          <li key={equipment}>{equipment}</li>
        ))}
      </p>
    </div>
  );
}

BlocEquip.propTypes = {
  title: PropTypes.string.isRequired,
  equipments: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default BlocEquip;
