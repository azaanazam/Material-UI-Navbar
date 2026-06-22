import { Navigate } from 'react-router-dom';

const ProtectedRoute = ({ children }) => {
  const user = localStorage.getItem('user');

  // Agar user login nahi hai, to Login page par bhej do
  if (!user) {
    return <Navigate to="/login" replace />;
  }

  // Agar login hai, to jo page request kiya hai wo dikha do
  return children;
};

export default ProtectedRoute;