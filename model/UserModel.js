const mongoose = require("mongoose");
const { ObjectId } = mongoose.Schema.Types;

const userSchema = new mongoose.Schema(
 {
  name: {
   type: String,
  },
  branchId: {
    type: ObjectId
  },
  isDeleted: {
    type: Boolean,
    default: false
  }
 },
 { timestamps: true }
);
const User = mongoose.model("user", userSchema);

module.exports = User;
