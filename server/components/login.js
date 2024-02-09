const express = require('express');
const User = require('../DatabaseSchema/user');
const bcrypt = require('bcryptjs');

const login = async (req,res) => { 
  try {
    console.log("hi ra lmao");
    const {email,password} = req.body;
    console.log("from backend login",email,password);
    const UserExists = await User.findOne({email:email});
    if(!UserExists){
      console.log("USER DOES NOT EXIST");
      return res.status(401).json({message:"Please Register first to login"});
    }

    // console.log(user);
    if(UserExists.verifyPassword(password)){
      console.log("USER LOGGED IN");

      return res.status(200).json({message:"User successfully logged in",token:await UserExists.generateToken(),userId:UserExists._id.toString()});
    }
    else{
      console.log("USER WRONG PASSWORD");
      return res.status(401).json({message:"Invalid credentials"});
    }
    
  } catch (error) {
    console.log(error);
    next(error);
  }
};

module.exports = login;