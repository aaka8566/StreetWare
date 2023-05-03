const express = require("express");
const cors = require("cors");
const { userRouter } = require("./routes/User.routes");
const { connection } = require("./db");
const { ProductRouter } = require("./routes/Product.routes");
const { authenticate } = require("./middleware/auth.middleware");
const { cartRouter } = require("./routes/Cart.routes");
const app = express();
require("dotenv").config();
const swaggerJsdoc = require("swagger-jsdoc");
const swaggerUi = require("swagger-ui-express");

app.use(express.json());
app.use(cors());

const options = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "Api Documentation",
      version: "1.0.0",
    },
  },
  // *.js means select all the files present in the folder
  apis: ["./routes/*.js"],
};

const specification = swaggerJsdoc(options);
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(specification));

app.get("/", (req, res) => {
  res.status(200).json("Welcome to HomePage");
});

app.use("/users", userRouter);
app.use("/products", ProductRouter);
app.use(authenticate);
app.use("/cart", cartRouter);

app.listen(process.env.PORT, async () => {
  try {
    await connection;
    console.log("Connected to Atlas Server...");
  } catch (error) {
    console.log(error.message);
  }
  console.log(`Server is running at port ${process.env.port}...`);
});
