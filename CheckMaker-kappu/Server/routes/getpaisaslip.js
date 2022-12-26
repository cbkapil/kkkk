import express from "express";
import FirmData from "../models/Firm/FirmModel.js";
;
import UserSlips from "../models/UserSlips.js"
import auth from "./Auth.js";

const router = express.Router();

router.get("/getpaisaslip",auth, async (req, res) => {
    console.log(req.userId)

  let CashSlips = await UserSlips.find({userid:req.userId})
  if (!CashSlips) {
    res.status(500).json({ message: "data not found" });
  }
  else{
  res.status(200).send({ CashSlips});

  console.log(
    "lol",
    CashSlips
  );}
});

export default router;