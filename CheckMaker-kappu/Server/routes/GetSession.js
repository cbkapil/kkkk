
import express from "express";
import mongoose from "mongoose";
import UserData from "../models/UserData.js";
import Auth from "./Auth.js";

const router = express.Router();

router.get("/getsession",Auth, async (req, res) => {
  console.log(req.userId)
  let User = await UserData.find({_id:req.userId

    
})
  if (!User) {
    res.status(500).json({ message: "user not found" });
  } else{
  res.status(200).send({ User}); }

  console.log(
    "l",
    User
  );
});

export default router;
