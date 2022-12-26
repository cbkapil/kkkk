import FirmData from "../models/Firm/FirmModel.js";
import UserData from "../models/UserData.js";
import express from "express";
import auth from "./Auth.js";
import UserBranch from "../models/UserBranch.js";
const router = express.Router();

router.put("/update/:id", auth, async (req, res) => {
  console.log("helloooooo", req.params.id);

  try {
    console.log(req.body.newData);

    await UserBranch.findByIdAndUpdate(
      req.params.id,
      {
        bank: req.body.newDatabank,
        account: req.body.newData.account,
        branch: req.body.newData.branch,
        ifsc: req.body.newData.ifsc,
        firmname: req.body.newData.firmname,
      },
      { new: true }
    );

    res.status(200).json({ message: "Firm Data added", status: true });
  } catch (err) {
    console.log(err);
  }
});

export default router;
