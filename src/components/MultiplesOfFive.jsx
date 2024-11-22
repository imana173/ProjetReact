import React, { useState } from 'react'; // Importer React et le hook useState depuis la bibliothèque 'react'

function MultiplesOfFive() {
  const [showMultiples, setShowMultiples] = useState(false); // Déclarer un état pour contrôler l'affichage des multiples de 5

  const numbers = Array.from({ length: 100 }, (_, i) => i + 1); // Créer un tableau de nombres de 1 à 100

  // Filtrer les multiples de 5 si showMultiples est vrai, sinon afficher tous les nombres
  const displayedNumbers = showMultiples ? numbers.filter((num) => num % 5 === 0) : numbers;

  return (
    <div className="card"> {/* Conteneur pour le bouton et la liste des nombres */}
      <button onClick={() => setShowMultiples(!showMultiples)}> {/* Bouton pour basculer l'affichage des multiples de 5 */}
        {showMultiples ? 'Afficher tous les nombres' : 'Afficher les multiples de 5'}
      </button>
      <ul>
        {displayedNumbers.map((number) => (
          <li key={number}>{number}</li>)
        )}
      </ul>
    </div>
  );
}

export default MultiplesOfFive; // Exporter le composant MultiplesOfFive comme exportation par défaut





