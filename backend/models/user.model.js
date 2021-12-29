const mongoose = require("mongoose")

const userSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true
  },
  name: {
    type: String,
    required: true
  },
  uid: {
    type: String,
    required: true
  },
  createdAt: {
    type: Date,
    required: true,
    default: new Date
  },
  introduction: {
    type: String,
  }
})

module.exports = mongoose.model("User", userSchema)