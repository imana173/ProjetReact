import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

function Register() {
  const navigate = useNavigate(); // Initialiser navigate

  return (
    <div className="container mt-5">
      <h2 className="text-center mb-4">Inscription</h2>
      <Formik
        initialValues={{
          firstname: '',
          lastname: '',
          email: '',
          password: '',
          confirmPassword: '',
        }}
        onSubmit={async (values) => {
          try {
            // Faire la requête POST pour enregistrer l'utilisateur
            const response = await fetch('/auth/register', {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json',
              },
              body: JSON.stringify(values),
            });

            if (response.ok) {
              // Si l'inscription est réussie, rediriger vers la page de connexion
              alert('le compte a bien été crée')
              navigate('/login');
            } else {
              console.error('Erreur lors de l\'inscription');
            }
          } catch (error) {
            console.error('Erreur lors de la requête d\'inscription', error);
          }
        }}
      >
        <Form>
          <div className="form-group mb-3">
            <label htmlFor="firstname">Prénom</label>
            <Field
              className="form-control"
              type="text"
              name="firstname"
              id="firstname"
            />
            <ErrorMessage
              name="firstname"
              component="div"
              className="text-danger"
            />
          </div>
          <div className="form-group mb-3">
            <label htmlFor="lastname">Nom</label>
            <Field
              className="form-control"
              type="text"
              name="lastname"
              id="lastname"
            />
            <ErrorMessage
              name="lastname"
              component="div"
              className="text-danger"
            />
          </div>
          <div className="form-group mb-3">
            <label htmlFor="email">Email</label>
            <Field
              className="form-control"
              type="email"
              name="email"
              id="email"
            />
            <ErrorMessage
              name="email"
              component="div"
              className="text-danger"
            />
          </div>
          <div className="form-group mb-3">
            <label htmlFor="password">Mot de passe</label>
            <Field
              className="form-control"
              type="password"
              name="password"
              id="password"
            />
            <ErrorMessage
              name="password"
              component="div"
              className="text-danger"
            />
          </div>
          <div className="form-group mb-3">
            <label htmlFor="confirmPassword">Confirmez le mot de passe</label>
            <Field
              className="form-control"
              type="password"
              name="confirmPassword"
              id="confirmPassword"
            />
            <ErrorMessage
              name="confirmPassword"
              component="div"
              className="text-danger"
            />
          </div>
          <button type="submit" className="btn btn-primary">
            S'inscrire
          </button>
        </Form>
      </Formik>
    </div>
  );
}

export default Register;
