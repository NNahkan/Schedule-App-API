const Department = require('../models/Department');

// Create New Department
// POST/api/v1/departments
exports.makeDepartment = async (req, res, next) => {
  try {
    const department = await Department.create(req.body);
    res.status(200).json({ success: true, data: department })
  } catch (err) {
    res.status(400).json({ success: false })
  }
}

// Get All Departments
// GET/api/v1/departments
exports.getDepartments = async (req, res, next) => {
  try {
    const departments = await Department.find();
    res.status(200).json({ success: true, data: departments })
  } catch (err) {
    res.status(400).json({ success: false })
  }
}

