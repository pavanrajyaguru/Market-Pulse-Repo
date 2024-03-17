
import React from 'react';
import { Route, Navigate } from 'react-router-dom';

const ProtectedRoute = ({ isLoggedIn, fallback, ...rest }) => {
  return isLoggedIn ? <Route {...rest} /> : <Route {...rest} />
//   <Navigate to={fallback} replace />;
};

export default ProtectedRoute;