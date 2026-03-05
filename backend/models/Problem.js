const mongoose = require("mongoose");

const ProblemSchema = new mongoose.Schema({

title:String,
difficulty:String,
description:String,
inputExample:String,
outputExample:String

});

module.exports = mongoose.model("Problem", ProblemSchema);