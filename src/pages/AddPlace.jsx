import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function AddPlace() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "",
    area: "",
    category: "",
    latitude: "",
    longitude: "",

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

  const handleChange = (event) => {
    const {
      name,
      value,
      type,
      checked,
    } = event.target;

    setFormData({
      ...formData,
      [name]:
        type === "checkbox"
          ? checked
          : value,
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await fetch(
        "http://localhost:5000/api/places",
        {
          method: "POST",

          headers: {
            "Content-Type": "application/json",
          },

          body: JSON.stringify({
            ...formData,

            latitude: Number(
              formData.latitude
            ),

            longitude: Number(
              formData.longitude
            ),
          }),
        }
      );

      if (response.ok) {
        alert("Place added successfully!");

        navigate("/explore");
      } else {
        alert("Failed to add place.");
      }

    } catch (error) {

      console.error(
        "Error adding place:",
        error
      );

      alert("Something went wrong.");
    }
  };

  return (
    <div className="add-place-page">

      {/* Navbar */}

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
            Login
          </Link>

        </div>

      </nav>


      {/* Form */}

      <div className="form-container">

        <div className="form-header">

          <h1>
            Add an Accessible Place
          </h1>

          <p>
            Help your community discover places
            that are easier to access.
          </p>

        </div>


        <form onSubmit={handleSubmit}>


          {/* Place Information */}

          <div className="form-section">

            <h2>
              📍 Place Information
            </h2>


            {/* Place Name */}

            <div className="form-group">

              <label>
                Place Name
              </label>

              <input
                type="text"
                name="name"
                placeholder="Example: City Library"
                value={formData.name}
                onChange={handleChange}
                required
              />

            </div>


            {/* Area */}

            <div className="form-group">

              <label>
                Area / City
              </label>

              <input
                type="text"
                name="area"
                placeholder="Example: Kochi"
                value={formData.area}
                onChange={handleChange}
                required
              />

            </div>


            {/* Category */}

            <div className="form-group">

              <label>
                Type of Place
              </label>

              <select
                name="category"
                value={formData.category}
                onChange={handleChange}
                required
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


            {/* Latitude and Longitude */}

            <div className="location-row">

              <div className="form-group">

                <label>
                  Latitude
                </label>

                <input
                  type="number"
                  name="latitude"
                  placeholder="9.9312"
                  step="any"
                  value={formData.latitude}
                  onChange={handleChange}
                  required
                />

              </div>


              <div className="form-group">

                <label>
                  Longitude
                </label>

                <input
                  type="number"
                  name="longitude"
                  placeholder="76.2673"
                  step="any"
                  value={formData.longitude}
                  onChange={handleChange}
                  required
                />

              </div>

            </div>

          </div>


          {/* Accessibility Features */}

          <div className="form-section">

            <h2>
              ♿ Accessibility Features
            </h2>

            <p className="section-description">
              Select the accessibility facilities
              available at this place.
            </p>


            <div className="accessibility-options">


              {/* Wheelchair */}

              <label className="accessibility-option">

                <input
                  type="checkbox"
                  name="wheelchair"
                  checked={formData.wheelchair}
                  onChange={handleChange}
                />

                <div>

                  <strong>
                    ♿ Wheelchair Access
                  </strong>

                  <span>
                    Suitable for wheelchair users
                  </span>

                </div>

              </label>


              {/* Ramp */}

              <label className="accessibility-option">

                <input
                  type="checkbox"
                  name="ramp"
                  checked={formData.ramp}
                  onChange={handleChange}
                />

                <div>

                  <strong>
                    ↗️ Ramp
                  </strong>

                  <span>
                    Ramp available at the place
                  </span>

                </div>

              </label>


              {/* Step-free */}

              <label className="accessibility-option">

                <input
                  type="checkbox"
                  name="stepFreeEntrance"
                  checked={
                    formData.stepFreeEntrance
                  }
                  onChange={handleChange}
                />

                <div>

                  <strong>
                    🚪 Step-free Entrance
                  </strong>

                  <span>
                    Entrance without stairs
                  </span>

                </div>

              </label>


              {/* Elevator */}

              <label className="accessibility-option">

                <input
                  type="checkbox"
                  name="elevator"
                  checked={formData.elevator}
                  onChange={handleChange}
                />

                <div>

                  <strong>
                    🛗 Elevator / Lift
                  </strong>

                  <span>
                    Elevator available
                  </span>

                </div>

              </label>


              {/* Accessible Toilet */}

              <label className="accessibility-option">

                <input
                  type="checkbox"
                  name="accessibleToilet"
                  checked={
                    formData.accessibleToilet
                  }
                  onChange={handleChange}
                />

                <div>

                  <strong>
                    🚻 Accessible Toilet
                  </strong>

                  <span>
                    Accessible restroom available
                  </span>

                </div>

              </label>


              {/* Accessible Parking */}

              <label className="accessibility-option">

                <input
                  type="checkbox"
                  name="accessibleParking"
                  checked={
                    formData.accessibleParking
                  }
                  onChange={handleChange}
                />

                <div>

                  <strong>
                    🅿️ Accessible Parking
                  </strong>

                  <span>
                    Parking suitable for accessibility needs
                  </span>

                </div>

              </label>


              {/* Tactile Signs */}

              <label className="accessibility-option">

                <input
                  type="checkbox"
                  name="tactileSigns"
                  checked={
                    formData.tactileSigns
                  }
                  onChange={handleChange}
                />

                <div>

                  <strong>
                    👁️ Tactile / Braille Signs
                  </strong>

                  <span>
                    Tactile or Braille information available
                  </span>

                </div>

              </label>


              {/* Sign Language */}

              <label className="accessibility-option">

                <input
                  type="checkbox"
                  name="signLanguage"
                  checked={
                    formData.signLanguage
                  }
                  onChange={handleChange}
                />

                <div>

                  <strong>
                    🤟 Sign-language Support
                  </strong>

                  <span>
                    Sign-language assistance available
                  </span>

                </div>

              </label>


              {/* Quiet Area */}

              <label className="accessibility-option">

                <input
                  type="checkbox"
                  name="quietArea"
                  checked={
                    formData.quietArea
                  }
                  onChange={handleChange}
                />

                <div>

                  <strong>
                    🤫 Quiet / Low-sensory Area
                  </strong>

                  <span>
                    Quieter area available
                  </span>

                </div>

              </label>


              {/* Accessible Seating */}

              <label className="accessibility-option">

                <input
                  type="checkbox"
                  name="accessibleSeating"
                  checked={
                    formData.accessibleSeating
                  }
                  onChange={handleChange}
                />

                <div>

                  <strong>
                    💺 Accessible Seating
                  </strong>

                  <span>
                    Suitable seating available
                  </span>

                </div>

              </label>


            </div>

          </div>


          {/* Submit */}

          <button
            type="submit"
            className="add-place-button"
          >
            + Add Place
          </button>


        </form>

      </div>

    </div>
  );
}

export default AddPlace;

