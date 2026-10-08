const mongoose = require("mongoose");

const placeSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },

  area: {
    type: String,
    required: true,
  },

  category: {
    type: String,
    required: true,
  },

  latitude: {
    type: Number,
    required: true,
  },

  longitude: {
    type: Number,
    required: true,
  },

  wheelchair: {
    type: Boolean,
    default: false,
  },

  ramp: {
    type: Boolean,
    default: false,
  },

  stepFreeEntrance: {
    type: Boolean,
    default: false,
  },

  elevator: {
    type: Boolean,
    default: false,
  },

  accessibleToilet: {
    type: Boolean,
    default: false,
  },

  accessibleParking: {
    type: Boolean,
    default: false,
  },

  tactileSigns: {
    type: Boolean,
    default: false,
  },

  signLanguage: {
    type: Boolean,
    default: false,
  },

  quietArea: {
    type: Boolean,
    default: false,
  },

  accessibleSeating: {
    type: Boolean,
    default: false,
  },
});

module.exports = mongoose.model("Place", placeSchema);