const express = require("express");
const router = express.Router();
const Saved = require("../models/Saved");
const axios = require("axios");

router.get("/api/books", (req, res) => {
  Saved.find({})
    .then(resp => {
      console.log(resp);
      res.send(resp);
    })
    .catch(err => console.error(err));
});

router.post("/api/books", (req, res) => {
  console.log(`req.body is ${req.body.field}`);
  axios(`https://www.googleapis.com/books/v1/volumes?q=${req.body.field}`)
    .then(resp => {
      res.setHeader("Access-Control-Allow-Origin", "*");
      res.setHeader(
        "Access-Control-Allow-Methods",
        "GET, POST, OPTIONS, PUT, PATCH, DELETE"
      );
      res.setHeader(
        "Access-Control-Allow-Headers",
        "X-Requested-With,content-type"
      );
      res.setHeader("Access-Control-Allow-Credentials", true);
      res.send(resp.data.items);
      console.log(resp.data.items);
    })
    .catch(err => {
      console.error(err);
      res.status(500).send("Nothing received!");
    });
});

router.post("/api/saved", (req, res) => {
  console.log(`req.body is ${req.body}`);
  Saved.create(req.body)
    .then(function(added) {
      console.log(added);
      res.send(added);
    })
    .catch(err => console.error(err));
});

router.delete("/api/books/:id", (req, res) => {
  Saved.deleteOne({ _id: req.params.id })
    .then(function(deleted) {
      console.log(deleted);
      res.status(200).send("DELETED!");
    })
    .catch(err => console.error(err));
});

module.exports = router;
