import partyData from "../../models/PartyModel.js";
import express from "express";
import auth from "../Auth.js";
const router = express.Router();

router.get("/getcustomerdata", auth  ,async (req, res) => {
  let partyDatas = await partyData.find({userid:req?.userId});

  try {
    res.send(partyDatas);
    console.log("partddddddddd", partyDatas)
  } catch (error) {
    console.log(error);
  }
});

export default router;
