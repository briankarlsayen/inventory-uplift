const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");
const User = require('../model/UserModel.js')
const { ObjectId } = require("mongodb");

exports.login = async (req, res) => {
  const { username, password } = req.body;
  try {
    const checkUsername = User.find({username})
    if(!checkUsername) return res.status(422).json({message: "Invalid username"})
  
    User.findOne({username, password})
  } catch(err) {
    res.status(500).json({message: err})
  }
}