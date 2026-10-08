import { useEffect, useState } from "react";
import { Link, useSearchParams } from "react-router-dom";

import {
  MapContainer,
  TileLayer,
  Marker,
  Popup,
  useMap,
} from "react-leaflet";

import "leaflet/dist/leaflet.css";


function MapController({ places }) {

  const map = useMap();

  useEffect(() => {

    if (places.length > 0) {

      map.setView(
        [
          places[0].latitude,
          places[0].longitude,
        ],
        13
      );

    }

  }, [places, map]);

  return null;

}


function Explore() {

  const [places, setPlaces] = useState([]);

  const [filteredPlaces, setFilteredPlaces] =
    useState([]);


  const [searchParams] =
    useSearchParams();


  const area =
    searchParams.get("area") || "";


  const category =
    searchParams.get("category") || "";


  const needsText =
    searchParams.get("needs") || "";


  const selectedNeeds =
    needsText
      ? needsText.split(",")
      : [];


  useEffect(() => {

    fetch(
      "http://localhost:5000/api/places"
    )

      .then((response) =>
        response.json()
      )

      .then((data) => {

        setPlaces(data);

        let results = data;


        // Filter area

        if (area.trim() !== "") {

          results = results.filter(
            (place) =>
              place.area
                .toLowerCase()
                .includes(
                  area.toLowerCase()
                )
          );

        }


        // Filter category

        if (category !== "") {

          results = results.filter(
            (place) =>
              place.category === category
          );

        }


        // Filter accessibility

        if (selectedNeeds.length > 0) {

          results =
            results.filter((place) => {

              return selectedNeeds.every(
                (need) =>
                  place[need] === true
              );

            });

        }


        setFilteredPlaces(results);

      })

      .catch((error) => {

        console.error(
          "Error fetching places:",
          error
        );

      });

  }, [area, category, needsText]);


  return (

    <div className="explore-page">


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


      {/* Header */}

      <section className="explore-header">

        <h1>
          Suitable Accessible Places
        </h1>

        <p>
          Places matching your location,
          place type and accessibility needs.
        </p>

      </section>


      {/* Search summary */}

      <div className="search-message">

        <p>
          📍 Area:{" "}
          <strong>
            {area || "All areas"}
          </strong>
        </p>


        <p>
          🏢 Place type:{" "}
          <strong>
            {category || "All types"}
          </strong>
        </p>


        {selectedNeeds.length > 0 && (

          <p>
            ♿ Accessibility requirements:{" "}
            <strong>
              {selectedNeeds.length} selected
            </strong>
          </p>

        )}

      </div>


      {/* Map */}

      <div className="map-container">

        <MapContainer
          center={[
            9.9312,
            76.2673
          ]}
          zoom={13}
          style={{
            height: "500px",
            width: "100%",
          }}
        >

          <TileLayer
            attribution="&copy; OpenStreetMap contributors"
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />


          <MapController
            places={filteredPlaces}
          />


          {filteredPlaces.map(
            (place) => (

              <Marker
                key={place._id}
                position={[
                  place.latitude,
                  place.longitude,
                ]}
              >

                <Popup>

                  <strong>
                    {place.name}
                  </strong>

                  <br />

                  📍 {place.area}

                  <br />

                  🏢 {place.category}

                  <br /><br />


                  {place.wheelchair
                    ? "♿ Wheelchair ✓"
                    : "♿ Wheelchair ✗"}

                  <br />

                  {place.ramp
                    ? "↗️ Ramp ✓"
                    : "↗️ Ramp ✗"}

                  <br />

                  {place.stepFreeEntrance
                    ? "🚪 Step-free entrance ✓"
                    : "🚪 Step-free entrance ✗"}

                  <br />

                  {place.elevator
                    ? "🛗 Elevator ✓"
                    : "🛗 Elevator ✗"}

                  <br />

                  {place.accessibleToilet
                    ? "🚻 Accessible toilet ✓"
                    : "🚻 Accessible toilet ✗"}

                  <br />

                  {place.accessibleParking
                    ? "🅿️ Accessible parking ✓"
                    : "🅿️ Accessible parking ✗"}

                  <br />

                  {place.tactileSigns
                    ? "👁️ Tactile/Braille signs ✓"
                    : "👁️ Tactile/Braille signs ✗"}

                  <br />

                  {place.signLanguage
                    ? "🤟 Sign-language support ✓"
                    : "🤟 Sign-language support ✗"}

                  <br />

                  {place.quietArea
                    ? "🤫 Quiet area ✓"
                    : "🤫 Quiet area ✗"}

                  <br />

                  {place.accessibleSeating
                    ? "💺 Accessible seating ✓"
                    : "💺 Accessible seating ✗"}

                </Popup>

              </Marker>

            )
          )}

        </MapContainer>

      </div>


      {/* Results */}

      <div className="results-section">

        <h2>
          {filteredPlaces.length}
          {" "}suitable places found
        </h2>


        {filteredPlaces.length === 0 ? (

          <div className="no-results">

            <h3>
              No matching places found
            </h3>

            <p>
              Try another area, place type,
              or fewer accessibility requirements.
            </p>

          </div>

        ) : (

          <div className="results-grid">

            {filteredPlaces.map(
              (place) => (

                <div
                  className="result-card"
                  key={place._id}
                >

                  <h3>
                    {place.name}
                  </h3>

                  <p>
                    📍 {place.area}
                  </p>

                  <p>
                    🏢 {place.category}
                  </p>


                  <div className="result-features">

                    {place.wheelchair && (
                      <span>
                        ♿ Wheelchair
                      </span>
                    )}

                    {place.ramp && (
                      <span>
                        ↗️ Ramp
                      </span>
                    )}

                    {place.stepFreeEntrance && (
                      <span>
                        🚪 Step-free
                      </span>
                    )}

                    {place.elevator && (
                      <span>
                        🛗 Elevator
                      </span>
                    )}

                    {place.accessibleToilet && (
                      <span>
                        🚻 Toilet
                      </span>
                    )}

                    {place.accessibleParking && (
                      <span>
                        🅿️ Parking
                      </span>
                    )}

                    {place.tactileSigns && (
                      <span>
                        👁️ Tactile signs
                      </span>
                    )}

                    {place.signLanguage && (
                      <span>
                        🤟 Sign language
                      </span>
                    )}

                    {place.quietArea && (
                      <span>
                        🤫 Quiet area
                      </span>
                    )}

                    {place.accessibleSeating && (
                      <span>
                        💺 Seating
                      </span>
                    )}

                  </div>

                </div>

              )
            )}

          </div>

        )}

      </div>


      {/* Add place */}

      <div className="add-place-box">

        <h2>
          Know an accessible place?
        </h2>

        <p>
          Help others by adding its accessibility information.
        </p>

        <Link to="/add-place">
          + Add a place
        </Link>

      </div>


    </div>

  );

}

export default Explore;