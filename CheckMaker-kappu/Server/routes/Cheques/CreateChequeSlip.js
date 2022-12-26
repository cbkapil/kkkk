import Chequeslips from "../models/ChequeSlips.js";
import UserData from "../models/UserData.js";
import express from "express";
import auth from "./Auth.js";
const router = express.Router();

router.post("/createchequeslip", auth, async (req, res) => {
  
  console.log(req.userId);
  const {
   chequeBankid,
   chequeBranchid,
   accountno,
   dataa,
   docno
   
  } = req?.body;
  
console.log("==========xcccccc",dataa)
  try {
    
    const userPromises = dataa.map(user => {
      console.log(user.partyname)
      return new Promise((resolve, reject) => {
        const emparray=[]
        const dataa = new Chequeslips({
          firmname:user.firmname,
           bank:chequeBankid ,
          branch: chequeBranchid,
          docno:docno,
          accountno:accountno ,
          partyname:user.partyname,
          partybankname:user.partybankname,
          partybranchname:user.partybranchname,
          chequeno:user.chequeno,
          amount:user.amount,
          chequedate:user.chequedate,
          firmid:user.firmid,
          userid:req.userId,
          partyid:user.partyid
        });
        
        dataa.save((error, result1) => {
          if (error) {
            reject(error)
          } else{
           
          resolve(result1)
          emparray.push(result1._id)
          console.log("me hu emp array ",emparray)
        console.log('kkkkkk',result1)
        
         UserData.findByIdAndUpdate(
                    req.userId,
                    { $push: { chequeslips: result1._id } },
                    function (err, result) {
                    if (err) {reject()}
                    else{
                     
                      resolve(result)}
                      
                    }
                  );};


        })
        console.log("emp array ",emparray)
        res.status(201).json({ message: "Cheque Data added", status: true  ,result:emparray});
      })
    });

  } catch (err) {
    console.log(err);
  }
});

export default router;
