import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';
import Home from './pages/Home';
import BookDetails from './pages/BookDetails';
import Welcome from './pages/Welcome';
import Register from './pages/Register';
import Login from './pages/Login';
import CreateBook from './pages/CreateBook';
import PrivateRoute from './components/PrivateRoute';
import Navbar from './components/Navbar'; // Importer Navbar
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <AuthProvider>
      <Router>
        <Navbar /> {/* Inclure la barre de navigation */}
        <div className="container mt-4">
          <Routes>
            {/* Routes publiques */}
            <Route path="/register" element={<Register />} />
            <Route path="/login" element={<Login />} />

            {/* Routes privées */}
            <Route path="/" element={<PrivateRoute element={<Home />} />} />
            <Route path="/welcome" element={<PrivateRoute element={<Welcome />} />} />
            <Route path="/create-book" element={<PrivateRoute element={<CreateBook />} />} />

            {/* Route privée pour les détails */}
            <Route path="/books/:id" element={<PrivateRoute element={<BookDetails />} />} />
          </Routes>
        </div>
      </Router>
    </AuthProvider>
  );
}

export default App;
