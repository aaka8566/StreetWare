const mongoose = require("mongoose");

const productSchema = mongoose.Schema({
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
});

const ProductModel = mongoose.model("product", productSchema);

module.exports = { ProductModel };
