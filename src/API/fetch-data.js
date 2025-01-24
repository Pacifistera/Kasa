async function getDataLogements() {
  try {
    // Utilisez le chemin correct vers votre fichier JSON
    const response = await fetch('/src/assets/logements.json');

    // Vérifiez si la réponse est OK
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Erreur lors du chargement des données:', error);
    return [];
  }
}

export default getDataLogements;
