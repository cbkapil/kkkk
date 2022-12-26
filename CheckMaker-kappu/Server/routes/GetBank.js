import MasterBankData from "../models/MasterBankModel.js";
import express from "express";
import auth from "./Auth.js";
const router = express.Router();

router.get("/getbank", auth, async (req, res) => {
  let bankDatas = await MasterBankData.find();

  try {
    res.send(bankDatas);
  } catch (error) {
    console.log(error);
  }
});

export default router;
