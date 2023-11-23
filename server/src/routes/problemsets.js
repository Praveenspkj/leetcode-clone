const express = require("express");
var router = express.Router();

const problem_model = require("../models/problem_model");

router.route("/").get(async function (req, res) {
  const alldata = await problem_model.fetchAll();
  res.json({ message: "Data fetched successfully", data: alldata });
});

module.exports = router;
