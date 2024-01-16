require("dotenv").config();
const express = require("express");
const { default: helmet } = require("helmet");
const cors = require("cors");
const path = require("path");
const authRouter = require("./routes/auth");
const app = express();
app.use(express.json());
app.use(express.static(path.join(__dirname, "public")));
app.use(helmet());
app.use(
  cors({
    origin: "*",
  })
);

app.use("/auth", authRouter);
app.get("/", (req, res) => {
  return res.sendFile(path.join(__dirname, "public", "index.html"));
});
module.exports = app;
