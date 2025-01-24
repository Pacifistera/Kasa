import '../styles/Card.scss';
import getDataLogements from '../API/fetch-data';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

function Card() {
  const [logements, setLogements] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const data = await getDataLogements();
      setLogements(data);
    };
    fetchData();
  }, []);

  return (
    <>
      {logements.map((logement) => (
        <Link
          className="card"
          key={logement.id}
          to={`/fiche-logement/${logement.id}`}
        >
          <div className="card2">
            <img src={logement.cover} alt={logement.title} />
            <h2>{logement.title}</h2>
          </div>
        </Link>
      ))}
    </>
  );
}

export default Card;
