import UserBank from "../models/UserBank.js";
import express from "express";
import auth from "./Auth.js";
const router = express.Router();

router.post("/createuserBank", auth, async (req, res) => {
  const { bankname, user } = req.body;
  const bankexist = await UserBank.findOne({
    $and: [{ bankname: bankname }, { user: req.userId }],
  });
  if (!bankexist) {
    try {
      const data = new UserBank({
        bankname: bankname,
        user: req.userId,
      });
      const dataRegister = data.save({ upsert: true });

      res.status(201).json({ message: "Bank Data added", status: true });
    } catch (err) {
      console.log(err);
    }
  } else {
    res.json({
      message:
        "This Bank is Already added in your List . Please go to Banklink page",
      status: false,
    });
  }
});

export default router;
