// import Chequeslips from "../models/ChequeSlips.js";
// import UserData from "../models/UserData.js";
// import express from "express";
// import auth from "./Auth.js";
// const router = express.Router();

// router.post("/createchequeslip", auth, async (req, res) => {
//   console.log(req.userId);
//   const {
//    chequeBankid,
//    chequeBranchid,
//    accountno,
//    dataa,
   
//   } = req?.body;
  

//   try {
//     const userPromises = dataa.map(user => {
//       return new Promise((resolve, reject) => {
//         const dataa = new Chequeslips({
//           firmname:user.firmname,
//            bank:chequeBankid ,
//           branch: chequeBranchid,
//           accountno:accountno ,
//           partyname:user.customer,
//           partybankname:user.customerbank,
//           partybranchname:user.customerbranch,
//           chequeno:user.chequeno,
//           amount:user.amount,
//           chequedate:user.chequedate,
//           firmid:user.firmid,
//           userid:req.userId,
//           partyid:user.partyid
//         });
        
//         dataa.save((error, result) => {
//           if (error) {
//             reject(error)
//           } else{
//           resolve(result)
//         console.log('kkkkkk',result)
//          UserData.findByIdAndUpdate(
//                     req.userId,
//                     { $push: { chequeslips: result._id } },
//                     function (err, result) {
//                     if (err) reject();
//                       resolve(result)
//                     }
//                   );};
//         })
//       })
//     });

//     res.status(201).json({ message: "Firm Data added", status: true });
//   } catch (err) {
//     console.log(err);
//   }
// });

// export default router;



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
  
  try {
    console.log("gaaaaaaaaaaaaaaaaaaaaaaaaa",docno)

    const userPromises = dataa.map(user => {
      return new Promise((resolve, reject) => {
        const dataa = new Chequeslips({
          firmname:user.firmname,
           bank:chequeBankid ,
          branch: chequeBranchid,
          accountno:accountno ,
          partyname:user.partyname,
          partybankname:user.partybankname,
          partybranchname:user.partybranchname,
          chequeno:user.chequeno,
          amount:user.amount,
          docno:docno
          ,
          chequedate:user.chequedate,
          firmid:user.firmid,
          userid:req.userId,
          partyid:user.partyid
        });
        
        dataa.save((error, result1) => {
          var emparray=[]
          if (error) {
            reject(error)
          } else{
           
          resolve(result1)

          emparray.push(result1._id)
          console.log("me hu emp arrayyyyy ",emparray)
        console.log('kkkkkk',result1)
        
         UserData.findByIdAndUpdate(
                    req.userId,
                    { $push: { chequeslips: result1._id } },
                    function (err, result) {
                    if (err) {reject()}
                    else{
                    
                      resolve(result)}
                     
                    }
                  )
                
                  };


        })
       
      })
    });
    res.status(201).json({ message: "Cheque Data added", status: true  })

  } catch (err) {
    console.log(err);
  }
});

export default router;
