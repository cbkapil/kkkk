import FirmData from "../models/Firm/FirmModel.js";
import UserData from "../models/UserData.js";
import express from "express";
import auth from "./Auth.js";
import UserBranch from "../models/UserBranch.js";
const router = express.Router();

router.post("/BankLink", auth, async (req, res) => {
  console.log(req.userId);
  var {
   firmid ,
   firmnamee,
    formValues
  } = req?.body;
  console.log("firmname",firmnamee);
  console.log("firmid",firmid);
  console.log("formValuessssssssssssssssssssssssssssssssssssssssssssssss",formValues);
var  firmid2=firmid
    try {

      var userPromises = formValues.map(user => {
        return new Promise((resolve, reject) => {
          var dataa = new UserBranch({
            userid: req?.userId,
            firmname: firmnamee,
            firmid: firmid,
            bank: user.bankname,
            branch: user.branch,
            ifsc: user.ifsc,
            account: user.accountno,
          });
          // console.log("banknamesssssssssssssssssssss", dataa.bankname);
          
          dataa.save((error, result) => {
            if (error) {
              reject(error)
            } else{
            resolve(result)
          console.log('kkkkkk',result)
          var banklink = FirmData.findByIdAndUpdate(
                      firmid2,
                      { $push: { bankLink: result._id } },
                      function (err, result) {
                      if (err) res.send("error");
                      else{
                        console.log(result)
                        res.status(201).json({ message: "Bank Data added", status: true });
                      }}
                    );};
          })
        })
      });
      
     
      
    } catch (error) {}

   
   
});

export default router;