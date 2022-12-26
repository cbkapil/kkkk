
import Party from '../../models/PartyModel.js'
import express from "express";
import auth from "../Auth.js";
import docData from '../../models/Cheques/ChequeDocket.js';
const router = express.Router();

router.post("/senddocketdata", auth, async (req, res) => {
  console.log("xxxxxxxxxxxxxx", req.userId);
  const {
   docids
  } = req.body;


  console.log(docids)
  try {
    const userPromises = docids.map(user => {
      return new Promise((resolve, reject) => {
        const dataa = new docData({
          docno:2,
          docid:[{docids:user}]

        });
        
        dataa.save((error, result) => {
          if (error) {
            reject(error)
          } else{
          resolve(result)
        console.log('kkkkkk',result)
        };
        })
      })
    });

    res.status(201).json({ message: "Firm Data added", status: true });
  } catch (err) {
    console.log(err);
  }
});

export default router;
