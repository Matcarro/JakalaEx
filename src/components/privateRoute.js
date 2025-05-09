import React from 'react';
import { Navigate } from 'react-router-dom';

const PrivateRoute = ({ children }) => {
  // Controllo semplice per autenticazione is base al token
  const isAuthenticated = !!localStorage.getItem('jwtToken');
  return isAuthenticated ? children : <Navigate to="/login" />;
};

export default PrivateRoute;
