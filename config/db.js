const mongoose = require("mongoose");
const allData = require("../models/ali");

const connectDB = async () => {
  const conn = await mongoose.connect(process.env.MONGO_URI, {
    useNewURLParser: true,
    useUnifiedTopology: true,
  });
  console.log(`MongoDB Connected: ${conn.connection.host}`);
};

// run();

/* async function run() {
  try {
    const all = await allData.create({
      locations: [
        { department: "grizzly", people: ["ali", "jonathan"] },
        { department: "surfers", people: ["mike", "jonathan"] },
      ],
      employees: [
        {
          firstName: "ali",
          dayForceId: 123,
          schedule: {
            monday: { shift: "08:00AM - 04:00PM", department: "grizzly" },
            tuesday: { shift: "08:00AM - 04:00PM", department: "grizzly" },
            wednesday: { shift: "08:00AM - 04:00PM", department: "grizzly" },
            thursday: { shift: "08:00AM - 04:00PM", department: "grizzly" },
            friday: { shift: "08:00AM - 04:00PM", department: "grizzly" },
            saturday: { shift: "08:00AM - 04:00PM", department: "grizzly" },
            sunday: { shift: "08:00AM - 04:00PM", department: "grizzly" },
          },
        },
        {
          firstName: "jonathan",
          dayForceId: 321,
          schedule: {
            monday: { shift: "08:00AM - 04:00PM", department: "grizzly" },
            tuesday: { shift: "08:00AM - 04:00PM", department: "grizzly" },
            wednesday: { shift: "08:00AM - 04:00PM", department: "grizzly" },
            thursday: { shift: "08:00AM - 04:00PM", department: "grizzly" },
            friday: { shift: "08:00AM - 04:00PM", department: "grizzly" },
            saturday: { shift: "08:00AM - 04:00PM", department: "grizzly" },
            sunday: { shift: "08:00AM - 04:00PM", department: "grizzly" },
          },
        },
      ],
    });
    console.log(all);
  } catch (e) {
    console.log(e.message);
  }
} */

module.exports = connectDB;
