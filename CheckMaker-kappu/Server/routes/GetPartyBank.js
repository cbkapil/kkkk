import partyData from "../models/PartyModel.js";
import express from "express";
import auth from "./Auth.js";
const router = express.Router();

router.post("/getpartybank", auth, async (req, res) => {
  
  const {customerid}=req.body 
  console.log("xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx",customerid)
  const PartyExist = await partyData.find({
    $and: [{ _id: customerid }, { userid: req.userId }],
  });
  if (PartyExist) {
    return res.status(200).send(PartyExist);
  } else {
    res.json({
      message: "error",
      status: false,
      
    });
  }
});

export default router;
