import UserBank from "../models/UserBank.js";
import express from "express";
import auth from "./Auth.js";
const router = express.Router();

router.get("/getlist", auth, async (req, res) => {
  let bankDatas = await UserBank.find({ user: req.userId });

  try {
    res.send(bankDatas);
  } catch (error) {
    console.log(error);
  }
});

export default router;
