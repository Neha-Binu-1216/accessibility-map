import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();

  const [area, setArea] = useState("");
  const [category, setCategory] = useState("");

  const [needs, setNeeds] = useState({
    wheelchair: false,
    ramp: false,
    stepFreeEntrance: false,
    elevator: false,
    accessibleToilet: false,
    accessibleParking: false,
    tactileSigns: false,
    signLanguage: false,
    quietArea: false,
    accessibleSeating: false,
  });

  const handleNeedChange = (event) => {
    const { name, checked } = event.target;

    setNeeds({
      ...needs,
      [name]: checked,
    });
  };

  const handleSearch = (event) => {
    event.preventDefault();

    if (area.trim() === "") {
      alert("Please enter an area.");
      return;
    }

    if (category === "") {
      alert("Please select a place type.");
      return;
    }

    const selectedNeeds = Object.keys(needs)
      .filter((key) => needs[key])
      .join(",");

    const searchParams = new URLSearchParams({
      area: area,
      category: category,
      needs: selectedNeeds,
    });

    navigate(`/explore?${searchParams.toString()}`);
  };

  return (
    <div className="home-page">

      {/* ================= NAVBAR ================= */}

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

          <Link to="/admin-login">
            Admin
          </Link>

        </div>

      </nav>


      {/* ================= HERO SECTION ================= */}

      <section className="hero">

        <div className="hero-content">

          <h1>
            Find Places That
            <span> Work For You.</span>
          </h1>

          <p>
            Discover places based on your accessibility
            needs. Search for hospitals, restaurants,
            hotels, libraries and more.
          </p>


          {/* ================= SEARCH BOX ================= */}

          <div className="accessibility-search">

            <h2>
              Find Accessible Places
            </h2>

            <p className="search-description">
              Tell us where you are going and what
              accessibility support you need.
            </p>


            <form onSubmit={handleSearch}>

              {/* AREA */}

              <div className="search-group">

                <label>
                  Where?
                </label>

                <input
                  type="text"
                  placeholder="Enter area or city"
                  value={area}
                  onChange={(event) =>
                    setArea(event.target.value)
                  }
                />

              </div>


              {/* PLACE TYPE */}

              <div className="search-group">

                <label>
                  What type of place?
                </label>

                <select
                  value={category}
                  onChange={(event) =>
                    setCategory(event.target.value)
                  }
                >

                  <option value="">
                    Select a place type
                  </option>

                  <option value="Hospital / Healthcare">
                    🏥 Hospital / Healthcare
                  </option>

                  <option value="Restaurant / Cafe">
                    🍽️ Restaurant / Cafe
                  </option>

                  <option value="Shopping / Mall">
                    🛍️ Shopping / Mall
                  </option>

                  <option value="Hotel">
                    🏨 Hotel
                  </option>

                  <option value="School / College">
                    🏫 School / College
                  </option>

                  <option value="Government / Public Office">
                    🏛️ Government / Public Office
                  </option>

                  <option value="Library">
                    📚 Library
                  </option>

                  <option value="Leisure / Entertainment">
                    🎭 Leisure / Entertainment
                  </option>

                  <option value="Bank / ATM">
                    🏦 Bank / ATM
                  </option>

                  <option value="Other">
                    🏪 Other
                  </option>

                </select>

              </div>


              {/* ACCESSIBILITY NEEDS */}

              <div className="search-group">

                <label>
                  What accessibility support do you need?
                </label>


                <div className="accessibility-options">

                  <label className="checkbox-item">

                    <input
                      type="checkbox"
                      name="wheelchair"
                      checked={needs.wheelchair}
                      onChange={handleNeedChange}
                    />

                    <span>
                      ♿ Wheelchair access
                    </span>

                  </label>


                  <label className="checkbox-item">

                    <input
                      type="checkbox"
                      name="ramp"
                      checked={needs.ramp}
                      onChange={handleNeedChange}
                    />

                    <span>
                      🛝 Ramp
                    </span>

                  </label>


                  <label className="checkbox-item">

                    <input
                      type="checkbox"
                      name="stepFreeEntrance"
                      checked={needs.stepFreeEntrance}
                      onChange={handleNeedChange}
                    />

                    <span>
                      🚪 Step-free entrance
                    </span>

                  </label>


                  <label className="checkbox-item">

                    <input
                      type="checkbox"
                      name="elevator"
                      checked={needs.elevator}
                      onChange={handleNeedChange}
                    />

                    <span>
                      🛗 Elevator / Lift
                    </span>

                  </label>


                  <label className="checkbox-item">

                    <input
                      type="checkbox"
                      name="accessibleToilet"
                      checked={needs.accessibleToilet}
                      onChange={handleNeedChange}
                    />

                    <span>
                      🚻 Accessible toilet
                    </span>

                  </label>


                  <label className="checkbox-item">

                    <input
                      type="checkbox"
                      name="accessibleParking"
                      checked={needs.accessibleParking}
                      onChange={handleNeedChange}
                    />

                    <span>
                      🅿️ Accessible parking
                    </span>

                  </label>


                  <label className="checkbox-item">

                    <input
                      type="checkbox"
                      name="tactileSigns"
                      checked={needs.tactileSigns}
                      onChange={handleNeedChange}
                    />

                    <span>
                      🔤 Tactile / Braille signs
                    </span>

                  </label>


                  <label className="checkbox-item">

                    <input
                      type="checkbox"
                      name="signLanguage"
                      checked={needs.signLanguage}
                      onChange={handleNeedChange}
                    />

                    <span>
                      🤟 Sign-language support
                    </span>

                  </label>


                  <label className="checkbox-item">

                    <input
                      type="checkbox"
                      name="quietArea"
                      checked={needs.quietArea}
                      onChange={handleNeedChange}
                    />

                    <span>
                      🔇 Quiet / low-sensory area
                    </span>

                  </label>


                  <label className="checkbox-item">

                    <input
                      type="checkbox"
                      name="accessibleSeating"
                      checked={needs.accessibleSeating}
                      onChange={handleNeedChange}
                    />

                    <span>
                      🪑 Accessible seating
                    </span>

                  </label>

                </div>

              </div>


              {/* SEARCH BUTTON */}

              <button
                type="submit"
                className="search-button"
              >
                Find Suitable Places
              </button>

            </form>

          </div>

        </div>

      </section>


      {/* ================= FEATURES ================= */}

      <section className="features">

        <div className="section-heading">

          <span>
            WHY ACCESSIBILITYMAP?
          </span>

          <h2>
            Built Around Accessibility
          </h2>

          <p>
            Find information that matters to you.
          </p>

        </div>


        <div className="feature-grid">


          {/* Feature 1 */}

          <div className="feature-card">

            <div className="feature-icon">
              ♿
            </div>

            <h3>
              Accessibility First
            </h3>

            <p>
              Search for places based on specific
              accessibility requirements.
            </p>

          </div>


          {/* Feature 2 */}

          <div className="feature-card">

            <div className="feature-icon">
              📍
            </div>

            <h3>
              Location Based
            </h3>

            <p>
              Find suitable places in your selected
              area or city.
            </p>

          </div>


          {/* Feature 3 */}

          <div className="feature-card">

            <div className="feature-icon">
              🔎
            </div>

            <h3>
              Personalized Search
            </h3>

            <p>
              Select the accessibility features you
              need and get matching places.
            </p>

          </div>


          {/* Feature 4 */}

          <div className="feature-card">

            <div className="feature-icon">
              👥
            </div>

            <h3>
              Community Powered
            </h3>

            <p>
              Users can contribute information about
              accessible places.
            </p>

          </div>

        </div>

      </section>


      {/* ================= CTA ================= */}

      <section className="cta">

        <h2>
          Know an Accessible Place?
        </h2>

        <p>
          Help others by adding accessibility
          information about a place.
        </p>

        <Link
          to="/add-place"
          className="cta-button"
        >
          Add a Place
        </Link>

      </section>


      {/* ================= FOOTER ================= */}

      <footer>

        <div>

          <strong>
            AccessibilityMap ♿
          </strong>

          <p>
            Making accessibility information
            easier to discover.
          </p>

        </div>


        <div className="footer-links">

          <Link to="/home">
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

          <Link to="/admin-login">
            Admin Login
          </Link>

        </div>

      </footer>

    </div>
  );
}

export default Home;
