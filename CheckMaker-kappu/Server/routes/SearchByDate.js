import Chequeslips from "../models/ChequeSlips.js";
import express from "express";
import auth from "./Auth.js";
const router = express.Router();

router.post("/searchbydate", auth, async (req, res) => {
  
  
  const branchexist = await Chequeslips.find({
    $and: [{ chequedate: {$gte:req.body.startDate,$lte:req.body.endDate} }, { userid: req.userId }],
  });
  if (branchexist) {
    return res.status(200).send(branchexist);
  } else {
    res.json({
      message: "error",
      status: false,
      
    });
  }
});

export default router;
