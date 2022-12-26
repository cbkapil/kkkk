import Chequeslips from'../models/ChequeSlips.js'
import express from "express";
import auth from "./Auth.js";
import UserBranch from "../models/UserBranch.js";
const router = express.Router();

router.put("/updatecheque/:id", auth, async (req, res) => {
  console.log("helloooooo", req.params.id);

  try {
    console.log(req.body.newData);

    await Chequeslips.findByIdAndUpdate(
      req.params.id,
      {
        accountno: req.body.newData.accountno,
       amount: req.body.newData.amount,
        bank: req.body.newData.bank,
        chequedate: req.body.newData.chequedate,
        firmname: req.body.newData.firmname,
        firmname: req.body.newData.firmname,
       partyname:req.body.newData.partyname,
       partybankname: req.body.newData.partybankname,
       partybranchname: req.body.newData.partybranchname,
      },
      { new: true }
    );

    res.status(200).json({ message: "Firm Data added", status: true });
  } catch (err) {
    console.log(err);
  }
});

export default router;
