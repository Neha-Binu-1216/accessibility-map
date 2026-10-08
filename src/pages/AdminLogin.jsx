import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function AdminLogin() {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();

    // Simple admin login for now
    if (
      email === "admin@accessibilitymap.com" &&
      password === "admin123"
    ) {
      alert("Admin login successful!");
      navigate("/admin");
    } else {
      alert("Invalid admin email or password.");
    }
  };

  return (
    <div className="login-page">

      <nav className="navbar">

        <div className="logo">
          AccessibilityMap ♿
        </div>

        <div className="nav-links">

          <Link to="/">
            Home
          </Link>

          <Link to="/explore">
            Explore
          </Link>

          <Link to="/add-place">
            Add Place
          </Link>

          <Link to="/login">
            User Login
          </Link>

        </div>

      </nav>


      <div className="login-container">

        <div className="login-header">

          <h1>
            Admin Login
          </h1>

          <p>
            Login to manage AccessibilityMap.
          </p>

        </div>


        <form onSubmit={handleSubmit}>

          <div className="login-group">

            <label>
              Admin Email
            </label>

            <input
              type="email"
              placeholder="Enter admin email"
              value={email}
              onChange={(event) =>
                setEmail(event.target.value)
              }
              required
            />

          </div>


          <div className="login-group">

            <label>
              Admin Password
            </label>

            <input
              type="password"
              placeholder="Enter admin password"
              value={password}
              onChange={(event) =>
                setPassword(event.target.value)
              }
              required
            />

          </div>


          <button
            type="submit"
            className="login-button"
          >
            Admin Login
          </button>

        </form>


        <p className="login-footer">

          Are you a user?

          <Link to="/login">
            {" "}User Login
          </Link>

        </p>

      </div>

    </div>
  );
}

export default AdminLogin;