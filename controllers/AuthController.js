const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");
const User = require('../model/UserModel.js')
const { ObjectId } = require("mongodb");
const CryptoJS = require('crypto-js')

exports.registerAuth = async (req, res) => {
  const {
    username,
    name,
    email,
    password,
  } = req.body

  if (password.length < 6){
    return res.status(422).json({message: 'Password too short. Should atleast be 6 characters'})
  }

  const newUser = await User.findOne({username}).lean()
  const newMail = await User.findOne({email}).lean()
  if(newUser){
    return res.status(422).json({message: 'Username is already inuse'})
  }
  if(newMail){
    return res.status(422).json({message: 'Email is already inuse'})
  }

  const user = new User({
    username,
    name,
    email,
    password: CryptoJS.AES.encrypt(
      password,
      process.env.SECRET
    ).toString()
  })
  try {
    user.save()
    res.status(201).json({message: "Successfully created"})
  } 
  catch(err){
    return res.status(500).json({message: err})
  }
}

exports.loginAuth = async (req, res) => {
  try {
    const checkUsername = await User.findOne({username: req.body.username})
    if(!checkUsername) return res.status(422).json({message: "Invalid username"})

    const hashedPassword = CryptoJS.AES.decrypt(
      checkUsername.password,
      process.env.SECRET
    );
    const OriginalPassword = hashedPassword.toString(CryptoJS.enc.Utf8);
    if(OriginalPassword !== req.body.password) return res.status(422).json({message: "Invalid password"});

    const accessToken = jwt.sign(
      {
        id: checkUsername._id,
        isAdmin: checkUsername.isAdmin,
      },
      process.env.JWT_SECRET,
      {expiresIn:"3d"}
    );
    return res.status(201).json({userType: checkUsername.isAdmin, accessToken});
  } catch(err) {
    return res.status(500).json({message: err})
  }
}
