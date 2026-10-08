const express = require("express");
const cors = require("cors");
const connectDB = require("./db");
const Place = require("./models/Place");

const app = express();

const PORT = 5000;

app.use(cors());
app.use(express.json());


// Add sample places
const addSamplePlaces = async () => {
  try {
    const count = await Place.countDocuments();

    if (count === 0) {
      await Place.insertMany([
        {
          name: "City Library",
          area: "Kochi",
          category: "Library",
          latitude: 9.9312,
          longitude: 76.2673,
          wheelchair: true,
          ramp: true,
          stepFreeEntrance: true,
          elevator: true,
          accessibleToilet: true,
          accessibleParking: true,
          tactileSigns: true,
          signLanguage: false,
          quietArea: true,
          accessibleSeating: true
        },

        {
          name: "General Hospital",
          area: "Kochi",
          category: "Hospital / Healthcare",
          latitude: 9.9670,
          longitude: 76.2450,
          wheelchair: true,
          ramp: true,
          stepFreeEntrance: true,
          elevator: true,
          accessibleToilet: false,
          accessibleParking: true,
          tactileSigns: false,
          signLanguage: true,
          quietArea: false,
          accessibleSeating: true
        },

        {
          name: "Cafe Comfort",
          area: "Kochi",
          category: "Restaurant / Cafe",
          latitude: 9.9400,
          longitude: 76.2600,
          wheelchair: true,
          ramp: true,
          stepFreeEntrance: true,
          elevator: false,
          accessibleToilet: true,
          accessibleParking: false,
          tactileSigns: false,
          signLanguage: false,
          quietArea: true,
          accessibleSeating: true
        },

        {
          name: "City Mall",
          area: "Trivandrum",
          category: "Shopping / Mall",
          latitude: 8.5241,
          longitude: 76.9366,
          wheelchair: true,
          ramp: true,
          stepFreeEntrance: true,
          elevator: true,
          accessibleToilet: true,
          accessibleParking: true,
          tactileSigns: true,
          signLanguage: true,
          quietArea: false,
          accessibleSeating: true
        },

        {
          name: "Green Valley Hospital",
          area: "Trivandrum",
          category: "Hospital / Healthcare",
          latitude: 8.5074,
          longitude: 76.9520,
          wheelchair: true,
          ramp: true,
          stepFreeEntrance: true,
          elevator: true,
          accessibleToilet: true,
          accessibleParking: true,
          tactileSigns: false,
          signLanguage: true,
          quietArea: true,
          accessibleSeating: true
        },

        {
          name: "Seaside Cafe",
          area: "Kozhikode",
          category: "Restaurant / Cafe",
          latitude: 11.2588,
          longitude: 75.7804,
          wheelchair: true,
          ramp: true,
          stepFreeEntrance: true,
          elevator: false,
          accessibleToilet: true,
          accessibleParking: true,
          tactileSigns: false,
          signLanguage: false,
          quietArea: true,
          accessibleSeating: true
        },

        {
          name: "Central College",
          area: "Thrissur",
          category: "School / College",
          latitude: 10.5276,
          longitude: 76.2144,
          wheelchair: true,
          ramp: true,
          stepFreeEntrance: true,
          elevator: false,
          accessibleToilet: true,
          accessibleParking: false,
          tactileSigns: true,
          signLanguage: false,
          quietArea: true,
          accessibleSeating: true
        },

        {
          name: "Grand Stay Hotel",
          area: "Kochi",
          category: "Hotel",
          latitude: 9.9315,
          longitude: 76.2678,
          wheelchair: true,
          ramp: true,
          stepFreeEntrance: true,
          elevator: true,
          accessibleToilet: true,
          accessibleParking: true,
          tactileSigns: true,
          signLanguage: false,
          quietArea: true,
          accessibleSeating: true
        },

        {
          name: "Community Bank",
          area: "Kottayam",
          category: "Bank / ATM",
          latitude: 9.5916,
          longitude: 76.5222,
          wheelchair: true,
          ramp: true,
          stepFreeEntrance: true,
          elevator: false,
          accessibleToilet: false,
          accessibleParking: true,
          tactileSigns: true,
          signLanguage: false,
          quietArea: false,
          accessibleSeating: true
        },

        {
          name: "City Art Centre",
          area: "Kochi",
          category: "Leisure / Entertainment",
          latitude: 9.9318,
          longitude: 76.2670,
          wheelchair: true,
          ramp: true,
          stepFreeEntrance: true,
          elevator: true,
          accessibleToilet: true,
          accessibleParking: false,
          tactileSigns: true,
          signLanguage: true,
          quietArea: true,
          accessibleSeating: true
        }
      ]);

      console.log("Sample places added to MongoDB!");
    } else {
      console.log("Places already exist in MongoDB.");
    }
  } catch (error) {
    console.error("Error adding places:", error.message);
  }
};


// Connect MongoDB
connectDB().then(() => {
  addSamplePlaces();
});


// Home route
app.get("/", (req, res) => {
  res.send("AccessibilityMap Backend is working!");
});


// Get all places
app.get("/api/places", async (req, res) => {
  try {
    const places = await Place.find();

    res.json(places);
  } catch (error) {
    console.error("Error fetching places:", error);

    res.status(500).json({
      message: "Error fetching places"
    });
  }
});


// Add new place
app.post("/api/places", async (req, res) => {
  try {
    const newPlace = new Place(req.body);

    const savedPlace = await newPlace.save();

    res.status(201).json(savedPlace);
  } catch (error) {
    console.error("Error adding place:", error);

    res.status(500).json({
      message: "Error adding place"
    });
  }
});


// Start server
app.listen(PORT, () => {
  console.log(
    `Server running on http://localhost:${PORT}`
  );
});