const mongoose = require("mongoose");

const postSchema = mongoose.Schema(
  {
    name: {
      type: String,
      require: true,
    },
    age: {
      type: String,
      require: true,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("User", postSchema);
