import { Link } from "react-router-dom";

function Admin() {
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

        </div>

      </nav>


      <div className="login-container">

        <div className="login-header">

          <h1>
            Admin Dashboard
          </h1>

          <p>
            Welcome to the AccessibilityMap admin area.
          </p>

        </div>


        <div style={{ textAlign: "center" }}>

          <p>
            Admin can manage accessibility information
            and places from here.
          </p>

          <br />

          <Link
            to="/explore"
            className="login-button"
            style={{
              display: "block",
              textDecoration: "none"
            }}
          >
            View Places
          </Link>

        </div>

      </div>

    </div>
  );
}

export default Admin;