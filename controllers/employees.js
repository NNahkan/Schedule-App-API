const Employee = require('../models/Employee');

// Create New Employee
// POST/api/v1/employees
exports.makeEmployee = async (req, res, next) => {
  console.log(req.body);
  try {
    const employee = await Employee.create(req.body);
    res.status(200).json({ success: true, data: employee })
  } catch (err) {
    res.status(400).json({ success: false })
  }
}

// Get All Employees
// GET/api/v1/employees
exports.getEmployees = async (req, res, next) => {
  try {
    const employees = await Employee.find();
    res.status(200).json({ success: true, data: employees })
  } catch (err) {
    res.status(400).json({ success: false })
  }
}