const express = require('express');
const dotenv = require('dotenv');
const morgan = require('morgan');
const connectDB = require('./config/db');

const departments = require('./routes/departments');
const employees = require('./routes/employees');

dotenv.config({ path: './config/config.env' });

connectDB();

const PORT = process.env.PORT || 8000;

app = express();

app.use(express.json());

if (process.env.NODE_ENV === 'development') {
  app.use(morgan('dev'));
};

app.use('/api/v1/departments', departments);
app.use('/api/v1/employees', employees);

const server = app.listen(
  PORT,
  console.log(`Server running in ${process.env.NODE_ENV} node on port ${PORT}`)
);

process.on('unhandledRejection', (err) => {
  console.log(`Error: ${err.message}`);
  server.close(() => process.exit(1));
})