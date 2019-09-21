const express = require("express");
const router = express.Router();
const Saved = require("../models/Saved");
const axios = require("axios");

router.get("/api/books", (req, res) => {
  console.log("I did something");
  axios("https://www.googleapis.com/books/v1/volumes?q=Bob")
    .then(resp => {
      console.log(resp);
      res.json(resp);
    })
    .catch(err => {
      console.error(err);
      res.status(500).send("Nothing received!");
    });
});

router.post("/api/books", (req, res) => {});

router.delete("/api/books/:id", (req, res) => {
  let deleteMe = req.params.id;
});

module.exports = router;
