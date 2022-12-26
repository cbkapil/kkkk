
import express from "express";
import FirmData from "../models/Firm/FirmModel.js";

const router = express.Router();

router.post("/getbank2", async (req, res) => {
    console.log('CashFirmid=>>>',req.body.firmid)
    console.log('ChequeFirmid',req.body.chequeFirmid)
  let GetBankFunctionCall = await FirmData.findById(req.body.firmid || req.body.chequeFirmid).populate('bankLink');
  if (! GetBankFunctionCall) {
    res.status(500).json({ message: "user not found" });
  }
  else{
  res.status(200).send({  GetBankFunctionCall });

  console.log(
    
   " GetBankFunctionCall=>>>", GetBankFunctionCall
  );}
});

export default router;
