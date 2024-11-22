import React, { useContext } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext.jsx';
import 'bootstrap/dist/css/bootstrap.min.css';

function Login() {
  const navigate = useNavigate();
  const { login } = useContext(AuthContext);

  return (
    <div className="container mt-5">
      <h2 className="text-center mb-4">Connexion</h2>
      <Formik
        initialValues={{
          email: '',
          password: '',
        }}
        onSubmit={async (values) => {
          try {
            console.log('Tentative de connexion avec les valeurs :', values);
            const response = await fetch('/auth/login', {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json',
              },
              body: JSON.stringify({
                email: values.email,
                password: values.password,
              }),
            });

            if (response.ok) {
              const data = await response.json();
              console.log('Réponse de connexion:', data);

              // Utilisation de la fonction login pour mettre à jour le contexte
              login({
                user: {
                  firstname: data.firstname,
                  lastname: data.lastname,
                  email: data.email,
                },
                token: data.token,
              });

              alert('Connexion réussie');
              navigate('/'); // Rediriger vers la page d'accueil après connexion
            } else if (response.status === 401) {
              alert('Identifiants incorrects, veuillez réessayer.');
            } else {
              console.error('Erreur lors de la connexion', response.statusText);
            }
          } catch (error) {
            console.error('Erreur lors de la requête de connexion', error);
          }
        }}
      >
        <Form>
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
          <button type="submit" className="btn btn-primary">
            Se connecter
          </button>
        </Form>
      </Formik>
    </div>
  );
}

export default Login;

