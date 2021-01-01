import express from "express";
import data from "../data.js";
import User from "../models/userModel.js";
import bcrypt  from "bcryptjs";
import expressAsynchHandler from "express-async-handler";
import { generateToken } from "../utils.js";
import pkg from 'bcryptjs'

const {hashSync} = pkg
const userRouter = express.Router();

userRouter.get(
  "/seed",
  expressAsynchHandler(async (req, res) => {
    const createdUsers = await User.insertMany(data.users);
    res.send({ createdUsers });
  })
);

userRouter.post(
  "/signin",
  expressAsynchHandler(async (req, res) => {
    const user = await User.findOne({ email: req.body.email });
    if (user) {
      if (bcrypt.compareSync(req.body.password, user.password)) {
        res.send({
          _id: user.id,
          name: user.name,
          email: user.email,
          isAdmin: user.isAdmin,
          token: generateToken(user),
        });
        return;
      }
    }
    res.status(401).send({ message: "invalid email or password" });
  })
);

userRouter.post(
  "/register",
  expressAsynchHandler(async (req, res) => {
    const user = new User({
      name: req.body.name,
      email: req.body.email,
      password: bcrypt.hashSync(req.body.password, 8),
    });
    const createdUser = await user.save()
    res.send({
      _id: createdUser.id,
      name: createdUser.name,
      email: createdUser.email,
      isAdmin: createdUser.isAdmin,
      token: generateToken(createdUser),
    })
  })
);
export default userRouter;
