// App.tsx
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { AuthProvider } from "./components/ContextFolder/AuthContext"; 
import Login from "./components/LoginPage/Login";
import Dashboard from "./components/DashboardComp/Dashboard";
import UserDetail from "./components/UserDetail/UserDetail";
import UserFilter from "./components/UserFilter/UserFilter";
import ProtectedRoute from "./components/ContextFolder/ProtectedRoute"; 
import "./App.scss";

function App() {
  return (
    <AuthProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route
            path="/dashboard"
            element={
              <ProtectedRoute>
                <Dashboard />
              </ProtectedRoute>
            }
          />
          <Route
            path="/userfilter"
            element={
              <ProtectedRoute>
                <UserFilter />
              </ProtectedRoute>
            }
          />
          <Route
            path="/userdetail/:id"
            element={
              <ProtectedRoute>
                <UserDetail />
              </ProtectedRoute>
            }
          />
        </Routes>
      </Router>
    </AuthProvider>
  );
}

export default App;
