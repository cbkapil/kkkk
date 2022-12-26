import FirmData from "../models/Firm/FirmModel.js";
import UserData from "../models/UserData.js";
import express from "express";
import auth from "./Auth.js";
import UserBranch from "../models/UserBranch.js";
const router = express.Router();

router.delete("/delete/:id", auth, async (req, res) => {
  console.log("helloooooo", req.params.id);

  try {
    await UserBranch.findByIdAndDelete(req.params.id);

    res.status(200).json({ message: "Firm Data added", status: true });
  } catch (err) {
    console.log(err);
  }
});

export default router;
