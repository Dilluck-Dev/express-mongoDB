const User = require("../models/model");

const getData = async (req, res) => {
  const data = await User.find();
  res.status(200).json(data);
};

const postData = async (req, res) => {
  const { name, age } = req.body;
  //   console.log(name);

  const data = await User.create({
    name,
    age,
  });

  res.status(200).json({ data });
};
module.exports = {
  getData,
  postData,
};
