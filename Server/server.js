const express = require("express");
const app = express();
require("dotenv").config();
const port = process.env.PORT;

app.use(express.json());

app.get("/", (req, res) => {
  res.json({
    message: "Hello World!",
    status: 200,
  });
});

app.listen(port, () => {
  console.log(`Running on port ${port}`);
});