import FirmData from "../models/Firm/FirmModel.js";
import express from "express";
import mongoose from "mongoose";
import Auth from "./Auth.js";

const router = express.Router();

router.get("/getfirm",Auth, async (req, res) => {
  console.log(req.userId)
  let firmDatas = await FirmData.find({userid:req.userId

    
})
  if (!firmDatas) {
    res.status(500).json({ message: "firm not found" });
  } else{
  res.status(200).send({ firmDatas }); }

  console.log(
    "lollllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllll",
    firmDatas
  );
});

export default router;
