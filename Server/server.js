const express = require("express");
const app = express();
require("dotenv").config();
const dbConnect = require("./config/db");

const userRouter = require("./router/userRouter");

app.use(express.json());
dbConnect();

app.use("/user" , userRouter);

app.get("/", (req, res) => {
  res.json({
    message: "Hello World!",
    status: 200,
  });
});

const port = process.env.PORT;
app.listen(port, () => {
  console.log(`Running on port ${port}`);
});