const mongoose = require("mongoose");

const dayRequiredStatement = (day) => 
  `${day} is a required field, if there is no applicable data return a ${day} object with empty arrays`
;

const location = new mongoose.Schema({
  department: String,
  people: Array,
});

const ShiftSchema = new mongoose.Schema({
  shift: {
    type: String,
  },
  department: {
    type: String,
  },
});

const DaySchema = new mongoose.Schema({
   shifts: ShiftSchema,
});

const days = new mongoose.Schema({
  monday: {
    type: DaySchema,
    required: [true, dayRequiredStatement("Monday")],
  },
  tuesday: {
    type: DaySchema,
    required: [true, dayRequiredStatement("Tuesday")],
  },
  wednesday: {
    type: DaySchema,
    required: [true, dayRequiredStatement("Wednesday")],
  },
  thursday: {
    type: DaySchema,
    required: [true, dayRequiredStatement("Thursday")],
  },
  friday: {
    type: DaySchema,
    required: [true, dayRequiredStatement("Friday")],
  },
  saturday: {
    type: DaySchema,
    required: [true, dayRequiredStatement("Saturday")],
  },
  sunday: {
    type: DaySchema,
    required: [true, dayRequiredStatement("Sunday")],
  },
});

const department = new mongoose.Schema({
  department: String,
  position: String,
  salary: Number,
});

const employee = new mongoose.Schema({
  firstName: String,
   dayForceId: Number,
  schedule: days,
  departments: [department],
});

const allData = new mongoose.Schema({
  locations: {
    type: Array,
    location: [location],
    default: [{ department: "grizzly", people: ["ali", "jonathan"] }],
  },
  employees: [employee],
  preShifts: {
    type: Array,
    default: ["8:00AM - 11:00PM", "11:00AM - 9:00PM", "OFF", "N/A"],
    //  required: [true, " New preShifts for the app"],
  },
});

module.exports = mongoose.model("allData", allData);
