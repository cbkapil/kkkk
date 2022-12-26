import FirmData from "../models/Firm/FirmModel.js";
import UserData from "../models/UserData.js";
import express from "express";
import auth from "./Auth.js";
const router = express.Router();

router.post("/createFirm", auth, async (req, res) => {
  console.log(req.userId);
  const {
    firmname,
    email,
    gstin,
    pancard,
    address,
    city,
    state,
    pincode,
    phonenumber,
  } = req.body;
  // console.log(req.body.bankname);

  try {
    const data = new FirmData({
      firmname: firmname,
      email: email,
      gstin: gstin,
      pancard: pancard,
      address: address,
      city: city,
      state: state,
      pincode: pincode,
      phonenumber: phonenumber,
      userid: req.userId,
    });
    const dataRegister = await data.save();
    console.log("lol", dataRegister);
    let firmid = dataRegister._id;
    let usersid = dataRegister.userid;

    const firmlink = UserData.findOneAndUpdate(
      usersid,
      { $push: { firmid: firmid } },
      function (err, data) {
        if (err) throw err;
        else if (data) {
          console.log("firm linked to user");
          console.log("firmlink", data);
        }
      }
    );

    res.status(201).json({ message: "Firm Data added", status: true });
  } catch (err) {
    console.log(err);
  }
});

export default router;
