import express from "express";
import data from "../data.js";
import User from "../models/userModel.js";
import bcrypt from 'bcryptjs'
import expressAsynchHandler from 'express-async-handler'
import {generateToken} from '../utils.js'
const userRouter = express.Router();

userRouter.get(
  '/seed',
  expressAsynchHandler(async (req, res) => {
    //await User.remove({});//
    const createdUsers = await User.insertMany(data.users);
    res.send({ createdUsers });
  })
);

userRouter.post('/signin',expressAsynchHandler(async(req,res) =>{
  const user = await User.findOne({email:req.body.email})
  if(user) {
    if (bcrypt.compareSync(req.body.password, user.password)){
      res.send({
        _id:user.id,
        name:user.name,
        email:user.email,
        isAdmin:user.isAdmin,
        token:generateToken(user)
      })
      return
    }
  }
  res.status(401).send({message:'invalid email or password'})
}))

export default userRouter;
