import starFull from '../assets/star-full.svg';
import starEmpty from '../assets/star-empty.svg';
import '../styles/Rating.scss';
import PropTypes from 'prop-types';

function Rating({ rating }) {
  const stars = [1, 2, 3, 4, 5];

  return (
    <div className="rating">
      {stars.map((star, index) => (
        <img
          key={index}
          src={star <= rating ? starFull : starEmpty}
          alt={star <= rating ? 'étoile pleine' : 'étoile vide'}
          className="star"
        />
      ))}
    </div>
  );
}

Rating.propTypes = {
  rating: PropTypes.string.isRequired,
};

export default Rating;
