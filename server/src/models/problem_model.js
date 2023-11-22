// models/yourModel.js
const mongoose = require("mongoose");
var db = require("../config/database");
var tags = require("../models/tags");

class problemsModelFunctions {
  async fetchAll() {
    var temp = await db
      .collection("problems")
      .aggregate([
        {
          $lookup: {
            from: "tags",
            localField: "tags",
            foreignField: "_id",
            as: "tags",
          },
        },
      ])
      .toArray();

    return temp;
  }
}

module.exports = new problemsModelFunctions();
