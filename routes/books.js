const express = require("express");
const router = express.Router();
const Saved = require("../models/Saved");

router.get("/api/books", (req, res) => {
  fetch(
    "https://www.googleapis.com/books/v1/volumes?q=harry+potter&callback=handleResponse"
  )
    .then(resp => res.send(resp))
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
