const express = require("express");
const { ProductModel } = require("../models/Product.model");

const ProductRouter = express.Router();

/**
 * @swagger
 * tags:
 *  name: products
 *  description: All the Api routes releated to user
 */

/**
 * @swagger
 * /create:
 *   post:
 *       summary: This will help you to create products
 *       tags: [products]
 *       responses:
 *            200:
 *                description: For creation of Products
 *            400:
 *                description: Incorrect Request
 */

ProductRouter.post("/create", async (req, res) => {
  try {
    const product = new ProductModel(req.body);
    await product.save();
    res.status(200).json({ msg: "Product successfully created..." });
  } catch (err) {
    res.status(400).json({ err: "Something went wrong..." });
  }
});

// all filter with search is here

/**
 * @swagger
 * /:
 *   get:
 *       summary: This will get all the products
 *       tags: [products]
 *       responses:
 *            200:
 *                description: For getting all the products also you can do filter by param passin as /products?title="" also you can do searching by this
 *            400:
 *                description: Incorrect Request
 */

ProductRouter.get("/", async (req, res) => {
  const filter = {};
  if (req.query.title) {
    filter.title = { $eq: req.query.title };
  }
  if (req.query.brand) {
    filter.brand = { $eq: req.query.brand };
  }
  if (req.query.gender) {
    filter.gender = { $eq: req.query.gender };
  }
  if (req.query.type) {
    filter.type = { $eq: req.query.type };
  }
  if (req.query.model) {
    filter.model = { $eq: req.query.model };
  }
  if (req.query.size) {
    filter.size = { $eq: req.query.size };
  }
  const product = await ProductModel.find(filter);
  res.send(product);
});

/**
 * @swagger
 * /:id:
 *   get:
 *       summary: This will get products by id
 *       tags: [products]
 *       responses:
 *            200:
 *                description: For getting products by id
 *            400:
 *                description: Incorrect Request
 */

ProductRouter.get("/:id", async (req, res) => {
  const productID = req.params.id;
  const product = await ProductModel.find({ _id: productID });
  res.send(product);
});

/**
 * @swagger
 * /price_sort/:s:
 *   get:
 *       summary: This will get you sort by price
 *       tags: [products]
 *       responses:
 *            200:
 *                description: For getting sort by price so asc for ascending and desc for descending
 *            400:
 *                description: Incorrect Request
 */

ProductRouter.get("/price_sort/:s", async (req, res) => {
  const { s } = req.params;
  try {
    let product;
    if (s === "asc") {
      product = await ProductModel.find().sort({ price: 1 });
    } else if (s === "desc") {
      product = await ProductModel.find().sort({ price: -1 });
    }
    res.send(product);
  } catch (err) {
    res.status(400).json({ err: err.message });
  }
});

/**
 * @swagger
 * /discount/:s:
 *   get:
 *       summary: This will get you sort by discount
 *       tags: [products]
 *       responses:
 *            200:
 *                description: For getting sort by discount so asc for ascending and desc for descending
 *            400:
 *                description: Incorrect Request
 */

ProductRouter.get("/discount/:s", async (req, res) => {
  const { s } = req.params;
  try {
    let product;
    if (s === "asc") {
      product = await ProductModel.find().sort({ offer_percent: 1 });
    } else if (s === "desc") {
      product = await ProductModel.find().sort({ offer_percent: -1 });
    }
    res.send(product);
  } catch (err) {
    res.status(400).json({ err: err.message });
  }
});

/**
 * @swagger
 * /update/:id:
 *   patch:
 *       summary: This will get you to update by id
 *       tags: [products]
 *       responses:
 *            200:
 *                description: For updating data product if it has any wrong thing
 *            400:
 *                description: Incorrect Request
 */

ProductRouter.patch("/update/:id", async (req, res) => {
  const payload = req.body;
  const productID = req.params.id;
  await ProductModel.findByIdAndUpdate({ _id: productID }, payload);
  res
    .status(200)
    .json({ msg: `Product with id ${productID} has been updated` });
});

/**
 * @swagger
 * /delete/:id:
 *   delete:
 *       summary: This will help you in deleting a product
 *       tags: [products]
 *       responses:
 *            200:
 *                description: For deleting any product by id
 *            400:
 *                description: Incorrect Request
 */
ProductRouter.delete("/delete/:id", async (req, res) => {
  const productID = req.params.id;
  await ProductModel.findByIdAndDelete({ _id: productID });
  res.status(200).json({ msg: `Device with id ${productID} has been deleted` });
});

/**
 * @swagger
 * /page/:page:
 *   get:
 *       summary: This will help you in pageinition process
 *       tags: [products]
 *       responses:
 *            200:
 *                description: do /page/1 to get data of front page in one page there are 15 products and over all there are 5 pages total
 *            400:
 *                description: Incorrect Request
 */
ProductRouter.get("/page/:page", async (req, res) => {
  try {
    const page = Number(req.params.page);
    const product = await ProductModel.find()
      .skip((page - 1) * 15)
      .limit(15);
    res.json(product);
  } catch (err) {
    res.status(400).json({ err: err.message });
  }
});

module.exports = {
  ProductRouter,
};
