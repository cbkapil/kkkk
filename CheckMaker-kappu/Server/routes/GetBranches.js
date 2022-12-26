import UserBranch from "../models/UserBranch.js";
import express from "express";
import auth from "./Auth.js";
const router = express.Router();

router.post("/getbranches", auth, async (req, res) => {
  const { firmid, bankid ,chequeFirmid, chequeBankid} = req.body;
  console.log("USERID=>>>",req.userId);
  console.log("CASH BANK ID=>>>",bankid);
  console.log("CHEQUE BANK ID=>>>",chequeBankid);
  console.log("CHEQUE FIRM ID=>>>",chequeFirmid);
  const GetBranch = await UserBranch.find({
    $and: [{ userid: req.userId }, { firmid: firmid || chequeFirmid}, { bank: bankid ||chequeBankid }],
  });
  if (GetBranch) {
    return res.status(200).send(GetBranch);
  } else {
    res.json({
      message: "error",
      status: false,
    });
  }
});

export default router;
