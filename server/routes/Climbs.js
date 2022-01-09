//handle get and post requests

const express = require("express");
const router = express.Router();
const { Climbs } = require("../models");

router.get("/", async (req, res) => {
  const listClimbs = await Climbs.findAll();
  res.json(listClimbs);
});

router.post("/", async (req, res) => {
  const climb = req.body;
  await Climbs.create(climb);
  res.json(climb);
});

module.exports = router;
