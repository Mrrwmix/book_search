const express = require("express");
const router = express.Router();
const Saved = require("../models/Saved");
const axios = require("axios");

router.get("/api/books", (req, res) => {
  axios(`https://www.googleapis.com/books/v1/volumes?q=test`)
    .then(resp => {
      res.setHeader("Access-Control-Allow-Origin", "http://localhost:3000");
      res.setHeader(
        "Access-Control-Allow-Methods",
        "GET, POST, OPTIONS, PUT, PATCH, DELETE"
      );
      res.setHeader(
        "Access-Control-Allow-Headers",
        "X-Requested-With,content-type"
      );
      res.setHeader("Access-Control-Allow-Credentials", true);
      res.json(resp.data.items);
      console.log(resp.data.items);
    })
    .catch(err => {
      console.error(err);
      res.status(500).send("Nothing received!");
    });
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

router.delete("/api/books/:id", (req, res) => {
  let deleteMe = req.params.id;
});

module.exports = router;
