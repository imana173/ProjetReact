import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

function BookDetails() {
  const { id } = useParams(); // Récupérer l'ID du livre à partir des paramètres de l'URL
  const [book, setBook] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchBook = async () => {
      try {
        const response = await fetch(`/books/${id}`);
        if (!response.ok) {
          throw new Error(`Erreur HTTP ! Status: ${response.status}`);
        }
        const data = await response.json();
        setBook(data); // Mettre à jour l'état 'book' avec les données récupérées
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchBook();
  }, [id]);

  if (loading) {
    return <p>Chargement des détails du livre...</p>;
  }

  if (error) {
    return <p>Erreur : {error}</p>;
  }

  return (
    <div>
      {book ? (
        <div>
          <h2>{book.name}</h2>
          
        </div>
      ) : (
        <p>Aucun livre trouvé</p>
      )}
    </div>
  );
}

export default BookDetails;
