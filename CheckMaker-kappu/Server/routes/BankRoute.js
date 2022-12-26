import BankData from "../models/BankModel.js";
import express from "express";
const router = express.Router();

router.post("/createBank", async (req, res) => {
  const { bankname } = req.body;
  console.log(req.body.bankname);
  try {
    const data = new BankData({
      bankname,
    });
    const dataRegister = await data.save();

    res.status(201).json({ message: "Bank Data added", status: true });
  } catch (err) {
    console.log(err);
  }
});

export default router;
