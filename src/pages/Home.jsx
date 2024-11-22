import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css'; // Importer Bootstrap
import Bonjour from '../components/Bonjour'; // Importer le composant Bonjour

function Home() {
  const [name, setName] = useState(''); // Déclarer une variable d'état 'name' et une fonction 'setName' pour la mettre à jour
  const [books, setBooks] = useState([]); // Déclarer une variable d'état 'books' et une fonction 'setBooks' pour la mettre à jour
  const [loading, setLoading] = useState(true); // Ajouter un état de chargement

  useEffect(() => {
    const fetchBooks = async () => {
      try {
        const response = await fetch('/books');
        if (!response.ok) {
          throw new Error('Erreur réseau lors de la récupération des livres');
        }
        const data = await response.json();
        console.log('Données récupérées:', data); 
        setBooks(data); 
      } catch (error) {
        console.error('Erreur lors de la récupération des livres:', error);
      } finally {
        setLoading(false); 
      }
    };

    fetchBooks(); 
  }, []); // Le tableau de dépendances vide signifie que l'effet s'exécute une seule fois au montage du composant

  return (
    <div className="container mt-5">
      <div className="card p-4 mb-4">
        <Bonjour name={name} setName={setName} />  {/*appel de la fonction Bonjour qui se trouve dans components*/}
      </div>
      <h1 className="text-center mb-4">Accueil</h1>
      {loading ? (
        <div className="d-flex justify-content-center align-items-center" style={{ height: '200px' }}>
          <div className="spinner-border" role="status">
            <span className="visually-hidden">Chargement des livres...</span>
          </div>
        </div>
      ) : books.length > 0 ? (
        <div className="row">
          {books.map((book) => (
            <div key={book._id} className="col-md-6 col-lg-4 mb-4">
              <div className="card h-100">
                <div className="card-body d-flex flex-column">
                  <h5 className="card-title">{book.name}</h5>
                  <Link to={`/books/${book.id}`} className="btn btn-primary mt-auto">
                    Voir les détails
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <p className="text-center">Aucun livre disponible</p>
      )}
    </div>
  );
}

export default Home; 




