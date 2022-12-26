import UserSlips from "../models/UserSlips.js";
import UserData from "../models/UserData.js";
import express from "express";
import auth from "./Auth.js";
const router = express.Router();

router.post("/generateslip", auth, async (req, res) => {
  console.log(req.userId);
  const {
    amount2k,
    amount500,
    amount200,
    amount100,
    amount50,
    amount20,
    amount10,
    amount5,
    amountCoins,
    firmid,
    bankid,
    userid,
    brancid,
    accountfin,
    totalamount,
    firmnamee,
    total,
    docdate,
    depositdate,
    total2k,
    total500,
    total200,
    total100,
    total50,
    total20,
    total10,
    total5,
  } = req?.body;
  console.log("pppp", amount200);

  try {
    const data = new UserSlips({
      userid: req.userId,
      firmid: req.body.firmid,
      bankname: req.body.bankid,
      branch: req.body.branchid,
      account: req.body.accountfin,
      firmname: req.body.firmnamee,
      depositdate: req.body.depositdate,
      docdate: req.body.docdate,
      twothousand: [{ quantity: req.body.amount2k, amount: req.body.total2k }],
      fivehundered: [
        { quantity: req.body.amount500, amount: req.body.total500 },
      ],
      twohundered: [
        { quantity: req?.body?.amount200, amount: req?.body?.total200 },
      ],
      onehundered: [
        { quantity: req.body.amount100, amount: req.body.total100 },
      ],
      fifty: [{ quantity: req.body.amount50, amount: req.body.total50 }],
      twenty: [{ quantity: req.body.amount20, amount: req.body.total20 }],
      ten: [{ quantity: req.body.amount10, amount: req.body.total10 }],
      five: [{ quantity: req.body.amount5, amount: req.body.total5 }],
      coins: req.body.amountCoins,
      totalamount: req.body.total,
    });
    console.log("dgfdgfdfhdhf",data.coins);
    const dataRegister = await data.save();
    console.log("lol", dataRegister);
    let slipid = dataRegister._id;
    let usersid = dataRegister.userid;

    const firmlink = UserData.findOneAndUpdate(
      usersid,
      { $push: { slips: slipid } },
      function (err, data) {
        if (err) throw err;
        else if (data) {
          console.log("Slip added");
          console.log("firmlink", data);
        }
      }
    );

    res.status(201).json({ message: "Firm Data added", status: true,data:data });
  } catch (err) {
    console.log(err);
  }
});

export default router;
