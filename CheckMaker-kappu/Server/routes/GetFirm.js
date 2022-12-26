import UserData from "../models/UserData.js";
import express from "express";
import auth from "./Auth.js";
const router = express.Router();

router.get("/getuser/", auth, async (req, res) => {
  let firmDatas = await UserData.findById(req.userId).populate({
    path: "firmid",
    populate: [{ path: "bankLink" }],
  });
  if (!firmDatas) {
    console.log("error");
  }
  res.status(200).json({ firmDatas });

  console.log(
    "lollllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllll",
    firmDatas
  );
});

export default router;
