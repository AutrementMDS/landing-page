const express = require("express");
const path = require("path");
const app = express();
const dotenv = require("dotenv");
dotenv.config();

app.use(express.static(path.join(__dirname, "public")));

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "public/index.html"));
});

app.get("/CGU", (req, res) => {
  res.sendFile(path.join(__dirname, "public/CGU.html"));
});

app.get("/cookies", (req, res) => {
  res.sendFile(path.join(__dirname, "public/cookies.html"));
});

app.get("/confidentialite", (req, res) => {
  res.sendFile(path.join(__dirname, "public/confidentialite.html"));
});

app.listen(process.env.PORT, () =>
  console.log("listening on port " + process.env.PORT)
);
