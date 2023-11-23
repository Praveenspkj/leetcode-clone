// models/yourModel.js
const mongoose = require("mongoose");
var db = require("../config/database");
const e = require("express");

const tagsSchema = new mongoose.Schema({
  // Define your schema fields here

  name: String,
});

const tagsModel = mongoose.model("tags", tagsSchema);

class tagsModelFunctions {
  async fetchAll() {
    return await tagsModel.find();
  }

  async fetchByObjectId(arr) {
    var tags = [];
    for (let index = 0; index < arr.length; index++) {
      var temp = await tagsModel.findById(arr[index]);
      tags.push(temp["name"]);
    }
    return tags;
  }
}

module.exports = new tagsModelFunctions();
