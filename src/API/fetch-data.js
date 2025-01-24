import logements from '../assets/logements.json';

async function getDataLogements() {
  // try {
  //   // Utilisez si vrai fetch vers api
  //   const response = await fetch(
  //     'https://pacifistera.github.io/kasa/assets/logements.json'
  //   );

  //   if (!response.ok) {
  //     throw new Error(`HTTP error! status: ${response.status}`);
  //   }

  //   const data = await response.json();
  //   return data;
  // } catch (error) {
  //   console.error('Erreur lors du chargement des données:', error);
  //   return [];
  // }
  return logements;
}

export default getDataLogements;
