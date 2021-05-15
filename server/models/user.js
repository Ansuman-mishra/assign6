const mongoose = require("mongoose");

let regSchema = new mongoose.Schema({
   name: {
      type: "string",
      required: true,
   },
   last: {
      type: "string",
      required: true,
   },
   phone: {
      type: "Number",
      required: true,
   },
   city: {
      type: "String",
      required: true,
   },
   message: {
      type: "string",
      required: true,
   },
   created: {
      type: "Date",
      default: Date.now,
   },
});

let user = mongoose.model("register", regSchema);

module.exports = user;
