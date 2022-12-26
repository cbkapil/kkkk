
import express from "express";
import auth from "../Auth.js"
import ChequeSlips from '../../models/ChequeSlips.js'
const router = express.Router();

router.get("/getdocno", auth, async (req, res) => {
  const GetDocno = await ChequeSlips.find({
userid: req.userId 
  });
  if (GetDocno) {
    return res.status(200).send(GetDocno);
  } else {
    res.json({
      message: "error",
      status: false,
    });
  }
});

export default router;
