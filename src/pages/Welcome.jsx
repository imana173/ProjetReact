import React from 'react';
import PropTypes from 'prop-types'; // Importer PropTypes pour la validation des props
import Bonjour from '../components/Bonjour'; // Importer le composant Bonjour
import MultiplesOfFive from '../components/MultiplesOfFive'; // Importer le composant MultiplesOfFive

function Welcome() {
  const [name, setName] = React.useState(''); // Déclarer une variable d'état 'name' et une fonction 'setName' pour la mettre à jour, la valeur initiale est une chaîne vide
  const [count, setCount] = React.useState(0); // Déclarer une variable d'état 'count' et une fonction 'setCount' pour gérer le compteur

  return (
    <div>
      <Bonjour name={name} setName={setName} /> {/* Utiliser le composant Bonjour et passer 'name' et 'setName' comme props */}

      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}> {/* Bouton pour incrémenter le compteur */}
          count is {count}
        </button>
      </div>

      <MultiplesOfFive /> {/* Utiliser le composant MultiplesOfFive pour afficher la liste des nombres */}
    </div>
  );
}

Welcome.propTypes = { // Définir les types de props attendus pour le composant Bonjour
  name: PropTypes.string.isRequired, // La prop 'name' doit être une chaîne de caractères et est requise
  setName: PropTypes.func.isRequired // La prop 'setName' doit être une fonction et est requise
};

export default Welcome; // Exporter le composant Welcome comme exportation par défaut

