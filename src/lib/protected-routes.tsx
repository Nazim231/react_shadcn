import { useAuth } from '../../contexts/AuthContext';
import { Navigate, Outlet } from 'react-router';

export default function ProtectedRoute() {
  const { isLoggedIn } = useAuth();

  if (!isLoggedIn) {
    return <Navigate to="/login" />;
  }

  return <Outlet />;
}
