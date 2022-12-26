
import express from "express";
import FirmData from "../models/Firm/FirmModel.js";
import UserData from "../models/UserData.js";
import auth from "./Auth.js";
import ChequeCollection from "../models/Cheques/ChequeCollectionModel.js"
import Chequeslip from "../models/ChequeSlips.js";

const router = express.Router();

router.get("/getchequeslips",auth, async (req, res) => {
    console.log(req.userId)

    let Chequeslips = await Chequeslip.find({userid:req.userId});
  if (!Chequeslips) {
    res.status(500).json({ message: "user not found" });
  }
  else{
  res.status(200).send({ Chequeslips});

  console.log(
    "lol",
    Chequeslips
  );}
});

export default router;
