 const allData = require("../models/ali");

exports.getData = async (req, res, next) => {
  try {
    const datas = await allData.find();
    res.status(200).json({ success: true, data: datas });
  } catch (err) {
    res.status(400).json({ success: false });
  }
};

 