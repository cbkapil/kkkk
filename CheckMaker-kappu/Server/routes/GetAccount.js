import UserBranch from "../models/UserBranch.js";
import express from "express";
import auth from "./Auth.js";
const router = express.Router();

router.post("/getaccount", auth, async (req, res) => {
  const { firmid, bankid, branchid ,chequeFirmid,
    chequeBankid,
    chequeBranchid,} = req.body;
  console.log('USERID=>>>',req.userId);
  console.log('CASH SLIP FIRM ID=>>>',firmid);
  console.log("CASH SLIP BANK ID=>>>",bankid);
  console.log("CASH SLIP BRANCH ID",branchid);
  console.log("CHEQUE SLIP FIRM ID",chequeFirmid);
   console.log("CHEQUE SLIP BANK ID ",chequeBankid);
console.log("CHEQUE SLIP BRANCH ID ",chequeBranchid)
  const GetAccountFunction = await UserBranch.find({
    $and: [
      { userid: req.userId },
      { firmid: firmid ||chequeFirmid},
      { bank: bankid || chequeBankid},
      { branch: branchid||chequeBranchid},
    ],
  });
  if (GetAccountFunction) {
    return res.send(GetAccountFunction);
  } else {
    res.json({
      message: "error",
      status: false,
    });
  }
});

export default router;
