const express = require('express');
const router = express.Router();

const {
  makeEmployee,
  getEmployees
} = require('../controllers/employees');

router.route('/')
  .post(makeEmployee)
  .get(getEmployees);

module.exports = router;