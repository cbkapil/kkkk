import FirmModel from "../models/FirmModel";
import express from "express";
import BankLinkage from "../../client/src/component/Pages/bankLinkage";
const router = express.Router();

router.get("/getbanklink", async (req, res) => {
  let firmDatas = await UserData.findById(req.userId).populate(firmid);
  if (!firmDatas) {
    res.status(500).json({ message: "user not found" });
  }
  res.status(200).send({ firmDatas });

  console.log(
    "lollllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllll",
    firmDatas
  );
});

export default router;
