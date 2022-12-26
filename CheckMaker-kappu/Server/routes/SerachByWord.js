import Chequeslips from "../models/ChequeSlips.js";
import express from "express";
import auth from "./Auth.js";
const router = express.Router();

router.post("/searchbyword", auth, async (req, res) => {
  
  const searchexist = await Chequeslips.find(
    {
        $and: [
            {
                $or: [
                    {partyname: req.body.searchtext},
                    {firmname: req.body.searchtext}
                ]
            },
            {
                "userid": req.userId
            }
        ]
    }
  );
  if (searchexist) {
    return res.status(200).send(searchexist);
  } else {
    res.json({
      message: "error",
      status: false,
    });
  }
});

export default router;
