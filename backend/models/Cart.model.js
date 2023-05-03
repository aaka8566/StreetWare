const mongoose = require("mongoose");

const cartSchema = mongoose.Schema({
  image: String,
  title: String,
  brand: String,
  price: Number,
  before_disc: Number,
  offer_percent: Number,
  gender: String,
  type: String,
  model: String,
  size: Array,
  Quantity: Number,
  user: String,
});

const CartModel = mongoose.model("cart", cartSchema);

module.exports = {
  CartModel,
};
