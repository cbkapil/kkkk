import Party from "../models/PartyModel.js";
import UserData from "../models/UserData.js";
import express from "express";
import auth from "./Auth.js";
const router = express.Router();

router.post("/createparty", auth, async (req, res) => {
  console.log("xxxxxxxxxxxxxx", req.userId);
  const {
    customername,
    email,
    address,
    city,
    state,
    pincode,
    phonenumber,
    phonenumber2,
  } = req.body;
  console.log(customername);
  const bankexist = await Party.findOne({
    $and: [{ partyname: customername }, { userid: req.userId }],
  });
  if (!bankexist) {
    try {
      const data = new Party({
        partyname: customername,
        email: email,
        address: address,
        city: city,
        state: state,
        pincode: pincode,
        phonenumber: phonenumber,
        phonenumber2: phonenumber2,
        userid: req.userId,
      });
      const dataRegister = await data.save();
      console.log("dataa", dataRegister);
      const partyid = dataRegister._id;
      console.log(partyid);
      const branchlink = UserData.findByIdAndUpdate(
        req.userId,
        { $push: { partyLink: partyid } },
        function (err, data) {
          if (err) throw err;
          else if (data) {
            console.log("Party Added");
            console.log("firmlink", data);
          }
        }
      );

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
