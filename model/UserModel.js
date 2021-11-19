const mongoose = require("mongoose");
const { ObjectId } = mongoose.Schema.Types;

const userSchema = new mongoose.Schema(
 {
  username: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  },
  name: {
   type: String,
   required: true
  },
  email: {
    type: String,
    required: true
  },
  isAdmin: {
    type: Boolean,
    default: false,
  },
 },
 { timestamps: true }
);
const User = mongoose.model("user", userSchema);

module.exports = User;
