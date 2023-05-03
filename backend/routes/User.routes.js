const express = require("express");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const { UserModel } = require("../models/User.models");
const { User_validate } = require("../middleware/User.validator");

const userRouter = express.Router();

/**
 * @swagger
 * tags:
 *  name: users
 *  description: All the Api routes releated to user
 */

/**
 * @swagger
 * /register:
 *   post:
 *       summary: This will help you in creating new users 
 *       tags: [users]
 *       responses:
 *            200:
 *                description: For signing In
 *            400:
 *                description: Incorrect Request
 */

userRouter.post("/register", User_validate, async (req, res) => {
  const { first_name, second_name, email, gender, pass, age } = req.body;
  try {
    bcrypt.hash(pass, 5, async (err, hash) => {
      if (err) {
        console.log(err.message);
        res.status(400).json({ err: err.message });
      } else {
        const user = await UserModel({
          first_name,
          second_name,
          email,
          gender,
          age,
          pass: hash,
        });
        await user.save();
        res.status(200).json({ msg: "New user has been registered" });
      }
    });
  } catch (error) {
    res.status(400).json({ err: error.message });
  }
});

/**
 * @swagger
 * /login:
 *   post:
 *       summary: This will help you in gettin login 
 *       tags: [users]
 *       responses:
 *            200:
 *                description: for Loging In
 *            400:
 *                description: Incorrect Request
 */

userRouter.post("/login", async (req, res) => {
  const { email, pass } = req.body;
  try {
    const user = await UserModel.find({ email });
    if (user.length > 0) {
      bcrypt.compare(pass, user[0].pass, async (err, result) => {
        if (result) {
          let token = jwt.sign({ userID: user[0]._id }, "masai");
          res.status(200).json({ msg: "Logged in", token: token });
        } else {
          res.status(400).json({ err: err.message });
        }
      });
    } else {
      res.status(400).json({ msg: "wrong credentials!!! Try again..." });
    }
  } catch (error) {
    res.status(400).json({ err: error.message });
  }
});

/**
 * @swagger
 * /admin:
 *   post:
 *       summary: This will help you in login as admin 
 *       tags: [users]
 *       responses:
 *            200:
 *                description: for Loging In
 *            400:
 *                description: Incorrect Request
 */

userRouter.post("/admin", async (req, res) => {
  const { email, pass } = req.body;
  try {
    if (email === "admin@123" && pass === "admin") {
      res.status(200).json({ msg: "Admin logged inn..." });
    } else {
      res.status(400).json({ msg: "wrong credentials!!! Try again..." });
    }
  } catch (error) {
    res.status(400).json({ msg: "wrong credentials!!! Try again..." });
  }
});

module.exports = { userRouter };
