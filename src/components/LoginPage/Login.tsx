import { useState } from "react";
import "./Login.scss";
import { Link, useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet";
import { useAuth } from "../ContextFolder/AuthContext"; // Assuming your AuthContext provides a login function

function Login() {
  const [username, setUsername] = useState("lendsqr@gmail.com"); // Default value
  const [password, setPassword] = useState("password123"); // Default value
  const [showPassword, setShowPassword] = useState(false);
  const [errorMessage, setErrorMessage] = useState(""); // State for error message
  const navigate = useNavigate(); // Hook to navigate programmatically
  const { login } = useAuth(); // Destructure the login function from the context

  const validUsername = "lendsqr@gmail.com"; // Valid login username
  const validPassword = "password123"; // Valid login password

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage(""); // Clear previous error messages

    // Simple validation
    if (!username || !password) {
      setErrorMessage("Please enter both username and password.");
      return;
    }

    // Check credentials
    if (username !== validUsername) {
      setErrorMessage("This username is not registered.");
    } else if (password !== validPassword) {
      setErrorMessage("Incorrect password. Please try again.");
    } else {
      // Successful login: Call the login function and redirect to the dashboard
      login(); // Assuming login is updating the context or localStorage to track logged-in state
      navigate("/dashboard"); // Redirect to the dashboard page
    }
  };

  return (
    <>
      <Helmet>
        <title>Landsqr Assessment || Login Page</title>
      </Helmet>
      <div className="login-container">
        <div className="top-logo">
          <Link to="/">
            <img src="/logo.png" alt="Logo" />
          </Link>
        </div>
        <div className="container">
          <div className="bg-log">
            <img src="/loginbg.png" alt="Background" />
          </div>

          <form onSubmit={handleSubmit}>
            <div className="top-txt">
              <h1>Welcome!</h1>
              <p>Enter details to login.</p>
            </div>
            <input
              type="email"
              placeholder="Email"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
            <div className="password-container">
              <input
                type={showPassword ? "text" : "password"}
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
              <span
                className="show-password-btn"
                onClick={() => setShowPassword(!showPassword)}>
                {showPassword ? "Hide" : "Show"}
              </span>
            </div>
            <Link to="/forgot-password">Forgot password?</Link>

            {/* Error message start */}
            {errorMessage && (
              <div className="error-message">{errorMessage}</div>
            )}
            {/* Error message end */}

            <button className="btn-submit" type="submit">
              Login
            </button>
          </form>
        </div>
      </div>
    </>
  );
}

export default Login;
