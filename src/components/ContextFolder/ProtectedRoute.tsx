import { ReactNode, useEffect } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { useAuth } from "./AuthContext";

// Type the props to accept `children` as a ReactNode
interface ProtectedRouteProps {
  children: ReactNode;
}

const ProtectedRoute: React.FC<ProtectedRouteProps> = ({ children }) => {
  const { isAuthenticated } = useAuth();
  const location = useLocation(); // Get the current location for redirect after login

  useEffect(() => {
    // Check if the user is not authenticated and was redirected here by trying to access a protected page
    if (!isAuthenticated) {
      sessionStorage.setItem("redirectAfterLogin", location.pathname); // Store the attempted path
    }
  }, [isAuthenticated, location]);

  if (!isAuthenticated) {
    // If not authenticated, redirect to login page
    return <Navigate to="/" />;
  }

  return <>{children}</>; // If authenticated, render children
};

export default ProtectedRoute;
