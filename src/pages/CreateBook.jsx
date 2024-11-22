import React, { useContext } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext.jsx';
import 'bootstrap/dist/css/bootstrap.min.css';

function CreateBook() {
  const { token } = useContext(AuthContext); // Récupérer le token du contexte
  const navigate = useNavigate();

  return (
    <div className="container mt-5">
      <h2 className="text-center mb-4">Créer un Nouveau Livre</h2>
      <Formik
        initialValues={{
          id: '',
          name: '',
        }}
        onSubmit={async (values) => {
          try {
            console.log('Tentative de création avec les valeurs :', values);
            if (!token) {
              console.error('Token non disponible, connexion requise');
              alert('Vous devez être connecté pour créer un livre.');
              return;
            }

            const response = await fetch('/books', {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`, // Ajouter le token à l'en-tête de la requête
              },
              body: JSON.stringify(values),
            });

            if (response.ok) {
              const data = await response.json();
              console.log('Livre créé avec succès:', data);
              alert('Livre créé avec succès');
              navigate('/'); // Rediriger vers la page d'accueil après création
            } else {
              console.error('Erreur lors de la création du livre', response.statusText);
              alert(`Erreur lors de la création du livre : ${response.statusText}`);
            }
          } catch (error) {
            console.error('Erreur lors de la requête de création du livre', error);
          }
        }}
      >
        <Form>
          <div className="form-group mb-3">
            <label htmlFor="id">ID</label>
            <Field
              className="form-control"
              type="number"
              name="id"
              id="id"
            />
            <ErrorMessage
              name="id"
              component="div"
              className="text-danger"
            />
          </div>
          <div className="form-group mb-3">
            <label htmlFor="name">Nom du Livre</label>
            <Field
              className="form-control"
              type="text"
              name="name"
              id="name"
            />
            <ErrorMessage
              name="name"
              component="div"
              className="text-danger"
            />
          </div>
          <button type="submit" className="btn btn-primary">
            Créer le Livre
          </button>
        </Form>
      </Formik>
    </div>
  );
}

export default CreateBook;
