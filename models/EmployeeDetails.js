const mongoose = require('mongoose')

const EmployeeDetailsSchema = new mongoose.Schema({
  firstName: {
    type: String,
    required: [true, 'Please enter first name'],
    maxLength: [50, 'First Name cannot be more than 50 characters']
  },
  lastName: {
    type: String,
    required: [true, 'Please enter last name'],
    maxLength: [50, 'Last Name cannot be more than 50 characters']
  },
  employeeId: {
    type: String,
    required: [true, 'A unique key is required for all employees'],
  }
})

module.exports = mongoose.model('EmployeeDetails', EmployeeDetailsSchema);