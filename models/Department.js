const mongoose = require("mongoose");
// const EmployeeDetailsSchema = require('./EmployeeDetails');

const EmployeeDetailsSchema = new mongoose.Schema({
  firstName: {
    type: String,
    required: [true, "Please enter first name"],
    maxLength: [50, "First Name cannot be more than 50 characters"],
  },
  lastName: {
    type: String,
    required: [true, "Please enter last name"],
    maxLength: [50, "Last Name cannot be more than 50 characters"],
  },
  employeeId: {
    type: String,
    required: [true, "A unique key is required for all employees"],
  },
});

const DepartmentSchema = mongoose.Schema({
  departmentName: {
    type: String,
    required: [true, "A DEPARTMENT NAME is required"],
    maxLength: [100, "Department Name can be no longer than 100 characters"],
  },
  departmentEmployees: {
    type: Array,
    employeeList: [EmployeeDetailsSchema],
    default: undefined,
  },
});

module.exports = mongoose.model("Department", DepartmentSchema);
