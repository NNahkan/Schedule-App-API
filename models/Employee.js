const mongoose = require('mongoose');
const { ObjectId } = mongoose.Schema;

const dayRequiredStatement = (day) => 
  `${day} is a required field, if there is no applicable data return a ${day} object with empty arrays`
;

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

const ShiftSchema = new mongoose.Schema({
  shift: {
    type: String,
  },
  department: {
    type: String
  }
})

const DaySchema = new mongoose.Schema({
  type: Array,
  shifts: [ShiftSchema],
})

const ScheduleSchema = new mongoose.Schema({
  monday: {
    type: DaySchema,
    required: [true, dayRequiredStatement('Monday')]
  },
  tuesday: {
    type: DaySchema,
    required: [true, dayRequiredStatement('Tuesday')]
  },
  wednesday: {
    type: DaySchema,
    required: [true, dayRequiredStatement('Wednesday')]
  },
  thursday: {
    type: DaySchema,
    required: [true, dayRequiredStatement('Thursday')]
  },
  friday: {
    type: DaySchema,
    required: [true, dayRequiredStatement('Friday')]
  },
  saturday: {
    type: DaySchema,
    required: [true, dayRequiredStatement('Saturday')]
  },
  sunday: {
    type: DaySchema,
    required: [true, dayRequiredStatement('Sunday')]
  },
})

const EmployeeSchema = new mongoose.Schema({
  personalDetails: {
    type: EmployeeDetailsSchema,
    // type: ObjectId,
    // ref: 'EmployeeDetails',
    required: [true, 'Personal Employee Details are required']
  },
  schedule: {
    type: ScheduleSchema,
    required: [true, 'Schedule is a required field']
  },
  createdOn: {
    type: Date,
    default: Date.now
  },
  updatedOn: {
    type: Date,
    default: Date.now
  },
})

module.exports = mongoose.model('Employee', EmployeeSchema)