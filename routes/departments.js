const express = require('express');
const router = express.Router();

const {
  makeDepartment, 
  getDepartments,
} = require('../controllers/departments');

router.route('/')
  .post(makeDepartment)
  .get(getDepartments);

module.exports = router;