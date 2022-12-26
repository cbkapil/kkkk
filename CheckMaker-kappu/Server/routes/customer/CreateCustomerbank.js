
import Party from '../../models/PartyModel.js'
import express from "express";
import auth from "../Auth.js";
const router = express.Router();

router.post("/createpartybank", auth, async (req, res) => {
  console.log("xxxxxxxxxxxxxx", req.userId);
  const {
   formValues
  } = req.body;
  try {
  formValues.map(user => {
      console.log("useridddddd",user._id);
      return new Promise((resolve, reject) => {
        var banklink = Party.findByIdAndUpdate(
            user.customerid,
            { $push: { customerbank: [{
              partybankname : user.customerbank,
              partybranch : user.customerbranch
            }]} },
            function (err, result) {
            if (err)
             {
              reject(  res.json({ message: "Failed to Add Bank", status: false }))
            }
            else{
            
              resolve()
              
             
            }}
          );
        
       
      })
    });

   
  } catch (err) {
    console.log(err);
  }
});

export default router;
