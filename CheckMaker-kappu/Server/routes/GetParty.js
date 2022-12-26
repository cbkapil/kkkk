
import express from "express";
import UserData from "../models/UserData.js";
import auth from "./Auth.js";
const router = express.Router();



router.get("/getparty", auth,async (req, res) => {
    console.log(req.userId)
  let partyDatas = await UserData.findById(req.userId).populate('partyLink');
  if (!partyDatas) {
    res.status(500).json({ message: "user not found" });
  }
  res.status(200).send({ partyDatas });

  console.log(
    "lollllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllll",
    partyDatas
  );
});

export default router;
