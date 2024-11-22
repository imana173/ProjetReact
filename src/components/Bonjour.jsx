import React from 'react'; 
import PropTypes from  "prop-types"; 

Bonjour.propTypes = { 
    name: PropTypes.string.isRequired, 
    setName: PropTypes.func.isRequired 
  };
  

function Bonjour({ name, setName }) {
  return (
    <div className="card"> 
      <h1>Bonjour {name}</h1> 
      <input 
        type="text" // Champ de saisie de type texte
        placeholder="Entrez votre nom" // Texte d'indication pour guider l'utilisateur
        onChange={(event) => setName(event.target.value)} // Mettre à jour l'état 'name' lorsque la valeur de l'entrée change
      />
    </div>
  );
}

export default Bonjour; 


