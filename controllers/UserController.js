const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");
const User = require('../model/UserModel.js')
const { ObjectId } = require("mongodb");

exports.createUser = async (req, res) => {
  const {
    username,
    name,
    email,
    password,
  } = req.body

  User({
    username,
    name,
    email,
    password,
  })
  .save()
  .then((result) => {
    res.status(201).json({result})
  })
  .catch((err) => {
    res.status(500).json({message: err})
  })
}

exports.viewAllUser = async (req, res) => {
  User.find()
  .then(result => {
    res.status(201).json({result})
  })
  .catch(err => {
    res.status(500).json({message: err})
  }) 
}

exports.viewUser = async (req, res) => {
  const _id = req.params.id
  User.find({_id})
  .then(result => {
    res.status(201).json({result})
  })
  .catch(err => {
    res.status(500).json({message: err})
  }) 
}

exports.updateUser = async (req, res) => {
  const _id = req.params.id
  const {
    username,
    name,
    email,
    password,
  } = req.body

  try {
    const updateOneUser = await User.findByIdAndUpdate({_id}, 
      {
        username,
        name,
        email,
        password,
      }).exec()
    if(!updateOneUser) return res.status(500).json({message: "No user found"})
    return res.status(201).json({message: "Successfully updated"})
  } catch(err) {
    return res.status(500).json({message: err})
  }
}
exports.deleteUser = async (req, res) => {
  const _id = req.params.id
  try {
    const deleteOneUser = await User.findByIdAndDelete({_id}).exec()

    if(!deleteOneUser) return res.status(500).json({message: "No user found"})

    return res.status(201).json({message: "Successfully deleted"})
  } catch(err) {
    res.status(500).json({message: err})
  }
}