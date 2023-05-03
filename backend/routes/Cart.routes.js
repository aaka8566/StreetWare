const express = require("express");
const { CartModel } = require("../models/Cart.model");

const cartRouter = express.Router();

/**
 * @swagger
 * tags:
 *  name: cart
 *  description: All the Api routes releated to user
 */

/**
 * @swagger
 * /:
 *   get:
 *       summary: To get all the data of the cart as per the user login
 *       tags: [cart]
 *       responses:
 *            200:
 *                description: For creation of Products
 *            400:
 *                description: Incorrect Request
 */

cartRouter.get("/", async (req, res) => {
  const products = await CartModel.find({ user: req.body.user });
  res.send(products);
});

/**
 * @swagger
 * /add:
 *   get:
 *       summary: To add a new product in the cart
 *       tags: [cart]
 *       responses:
 *            200:
 *                description: For additin of data in cart
 *            400:
 *                description: Incorrect Request
 */
cartRouter.post("/add", async (req, res) => {
  const payload = req.body;
  const cart = new CartModel(payload);
  await cart.save();
  res.status(200).json({ msg: "Product successfully added..." });
});

/**
 * @swagger
 * cart/delete/:id:
 *   delete:
 *       summary: To delete a product
 *       tags: [cart]
 *       responses:
 *            200:
 *                description: For deletion of a product by id please do delete request not get one
 *            400:
 *                description: Incorrect Request
 */

cartRouter.delete("/delete/:id", async (req, res) => {
  const cartID = req.params.id;
  await CartModel.findByIdAndDelete({ _id: cartID });
  res.status(200).json({ msg: `Product with id ${cartID} has been deleted` });
});

/**
 * @swagger
 * /increase/:id:
 *   patch:
 *       summary: This will help you in patching or you can say in increasing quantities
 *       tags: [cart]
 *       responses:
 *            200:
 *                description: For increasing quantity
 *            400:
 *                description: Incorrect Request
 */
cartRouter.patch("/increase/:id", async (req, res) => {
  let payload = req.body;
  const cartID = req.params.id;
  await CartModel.findByIdAndUpdate({ _id: cartID }, payload);
  res.status(200).json({ msg: `Product with id ${cartID} has been changed` });
});

module.exports = { cartRouter };
