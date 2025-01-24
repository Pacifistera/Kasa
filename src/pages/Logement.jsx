import Caroussel from '../components/Caroussel';
import getDataLogements from '../API/fetch-data';
import { useParams, useNavigate } from 'react-router';
import { useState, useEffect } from 'react';
import '../styles/Logement.scss';
import BlocDescription from '../components/BlocDescription';
import BlocEquip from '../components/BlocEquip';
import Rating from '../components/Rating';

function Logement() {
  const { id } = useParams();
  const [logements, setLogements] = useState([]);
  const [logement, setLogement] = useState(null); // Ajout d'un state pour le logement

  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      const data = await getDataLogements();
      setLogements(data);
    };
    fetchData();
  }, []);

  useEffect(() => {
    if (logements.length > 0) {
      const found = logements.find((logement) => logement.id === id);
      setLogement(found);

      if (!found) {
        navigate('/404');
      }
    }
  }, [logements, id]);

  // Protection contre le rendu avant le chargement des données
  if (!logement) {
    return <div className="loading">Chargement...</div>;
  }

  return (
    logement &&
    logements && (
      <>
        <div className="bloc-logement">
          {logement.pictures && <Caroussel pictures={logement.pictures} />}
          <div className="bloc-logement-title">
            <h1>{logement.title}</h1>
            <h2>{logement.location}</h2>
          </div>
          <div className="bloc-logement-tags">
            {logement.tags.map((tag) => (
              <div key={tag}>{tag}</div>
            ))}
          </div>
          <div className="bloc-logement-description">
            <BlocDescription
              title="Description"
              description={logement.description}
            />
            <BlocEquip title="Equipements" equipments={logement.equipments} />
          </div>
          <div className="bloc-logement-host">
            <div className="host-info">
              <img src={logement.host.picture} alt={logement.host.name} />
              <div className="host-name">
                {logement.host.name.split(' ').map((namePart, index) => (
                  <span key={index}>{namePart}</span>
                ))}
              </div>
            </div>
            <div className="host-rating">
              <Rating rating={logement.rating} />
            </div>
          </div>
        </div>
      </>
    )
  );
}

export default Logement;
