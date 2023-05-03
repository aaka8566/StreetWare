const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
  first_name: String,
  second_name: String,
  email: String,
  gender: String,
  age: Number,
  pass: String,
});

const UserModel = mongoose.model("user", userSchema);

module.exports = {
  UserModel,
};
