
import express from "express";
import ChequeCollections from "../../models/Cheques/ChequeCollectionModel.js";
import auth from "../Auth.js";
const router = express.Router();

router.post("/searchbydatecheque", auth, async (req, res) => {
  
  
  const branchexist = await ChequeCollections.find({
    $and: [{ chequedate: {$lte:req.body.todate} }, { userid: req.userId }, { $or: [{firmid: req.body.chequeFirmid}, {firmname: req.body.chequefirmname}] }],
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