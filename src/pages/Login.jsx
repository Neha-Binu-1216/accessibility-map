import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Login() {
  const navigate = useNavigate();

  const [showUserLogin, setShowUserLogin] = useState(false);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleUserLogin = (event) => {
    event.preventDefault();

    if (email === "" || password === "") {
      alert("Please enter email and password.");
      return;
    }

    alert("User login successful!");

    navigate("/home");
  };

  return (
    <div className="login-page">

      {/* NAVBAR */}

      <nav className="navbar">

        <div className="logo">
          AccessibilityMap ♿
        </div>

      </nav>


      {/* LOGIN CARD */}

      <div className="login-container">

        {!showUserLogin ? (

          <>
            <div className="login-header">

              <div className="login-main-icon">
                ♿
              </div>

              <h1>
                Welcome to AccessibilityMap
              </h1>

              <p>
                Choose how you want to continue
              </p>

            </div>


            <div className="login-choice">

              {/* USER */}

              <button
                className="login-choice-button"
                onClick={() => setShowUserLogin(true)}
              >

                <span className="choice-icon">
                  👤
                </span>

                <span className="choice-text">

                  <strong>
                    User Login
                  </strong>

                  <small>
                    Find accessible places
                  </small>

                </span>

                <span className="choice-arrow">
                  →
                </span>

              </button>


              {/* ADMIN */}

              <button
                className="login-choice-button admin-choice"
                onClick={() => navigate("/admin-login")}
              >

                <span className="choice-icon">
                  🛠️
                </span>

                <span className="choice-text">

                  <strong>
                    Admin Login
                  </strong>

                  <small>
                    Manage places and information
                  </small>

                </span>

                <span className="choice-arrow">
                  →
                </span>

              </button>

            </div>

          </>

        ) : (

          /* USER LOGIN FORM */

          <>

            <div className="login-header">

              <div className="login-main-icon">
                👤
              </div>

              <h1>
                User Login
              </h1>

              <p>
                Login to find accessible places
              </p>

            </div>


            <form onSubmit={handleUserLogin}>

              <div className="login-group">

                <label>
                  Email Address
                </label>

                <input
                  type="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(event) =>
                    setEmail(event.target.value)
                  }
                  required
                />

              </div>


              <div className="login-group">

                <label>
                  Password
                </label>

                <input
                  type="password"
                  placeholder="Enter your password"
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
                Login
              </button>

            </form>


            <button
              className="back-login-button"
              onClick={() => setShowUserLogin(false)}
            >
              ← Back to Login Options
            </button>

          </>

        )}

      </div>

    </div>
  );
}

export default Login;
