import express from "express";
// import FirmData from "../models/FirmModel.js";
import puppeteer from 'puppeteer';

// import UserSlips from "../models/ChequeSlips.js"
import auth from "./Auth.js";
// import Chequeslips from "../models/ChequeSlips.js";
import { sbichequeslip } from "../bankslip/sbiBankslip.js";
import { unionchequeslip } from "../bankslip/unionBankslip.js";
import { pnbchequeslip } from "../bankslip/pnbbankslip.js";
import ChequeCollections from "../models/Cheques/ChequeCollectionModel.js";

const router = express.Router();
var data = [];
var samplepdf = "";

router.post("/chequeprint",auth, async (req, res,next) => {
    console.log("me hu req.body2",req.body.dataa);
    const dataa=req.body.dataa;
    console.log("me hu req.body ",dataa);
    console.log("print variable -------------",req.body.print);

    const userPromises = dataa.map(user => {
      console.log("user id -----------",user._id);
      return new Promise((resolve, reject) => {
        console.log("Hello Promise",user._id)
      ChequeCollections.findByIdAndUpdate(
         user._id,
         { $set: { printed: true} },
         function (err, docs) {
          if (err){
              console.log(err)
              reject()
          }
          else{
            resolve()
              console.log("Updated User : ", docs);
          }
      }
         
        )
       
        
      
      })
    });

  var result=total(dataa);

  function total(dataa) {
    if(!Array.isArray(dataa)) return;
    let totalNumber = 0;
    for (let i=0; i<dataa.length; i++) {
       totalNumber+=dataa[i].amount;
    }
    console.log("Me hu total",totalNumber);
    return totalNumber;
  }

  console.log("dfdfd",result);

  var a = ['', 'one ', 'two ', 'three ', 'four ', 'five ', 'six ', 'seven ', 'eight ', 'nine ', 'ten ', 'eleven ', 'twelve ', 'thirteen ', 'fourteen ', 'fifteen ', 'sixteen ', 'seventeen ', 'eighteen ', 'nineteen '];
  var b = ['', '', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];
  
  function inWords(amount) {
      console.log("me hu inwords amount",amount);
      if ((amount = amount.toString()).length > 9) return 'overflow';
      let n = ('000000000' + amount).substr(-9).match(/^(\d{2})(\d{2})(\d{2})(\d{1})(\d{2})$/);
      if (!n) return;
      var str = '';
      str += (n[1] != 0) ? (a[Number(n[1])] || b[n[1][0]] + ' ' + a[n[1][1]]) + 'crore ' : '';
      str += (n[2] != 0) ? (a[Number(n[2])] || b[n[2][0]] + ' ' + a[n[2][1]]) + 'lakh ' : '';
      str += (n[3] != 0) ? (a[Number(n[3])] || b[n[3][0]] + ' ' + a[n[3][1]]) + 'thousand ' : '';
      str += (n[4] != 0) ? (a[Number(n[4])] || b[n[4][0]] + ' ' + a[n[4][1]]) + 'hundred ' : '';
      str += (n[5] != 0) ? ((str != '') ? 'and ' : '') + (a[Number(n[5])] || b[n[5][0]] + ' ' + a[n[5][1]]) + 'only ' : '';
      console.log("me hu str",str);
      return str;
  }

  var wamount = '';
  wamount = inWords(result)
  // wamount =String(wamount)
  console.log("Me hu wamount", typeof(wamount))
  
  data.push(dataa) ;
  
 var quantity=dataa.length
console.log("me hu quantity",quantity)
  console.log("hellllll",data);

  var firmname = dataa[0]?.firmname;
  var bankname = req?.body?.chequeBankid;
  var branchname = req?.body?.chequeBranchid ;
  var accountno = req?.body?.accountno;
  var date = new Date(dataa[0]?.chequedate).toLocaleDateString('es-CL');
  
  var accno = accountno.toString().split("").map(n => {
      return(`<div class="block">${n}</div>`)
  })

  var rightAccno = accountno.toString().split("").map(n => {
    return(`<div class="box">${n}</div>`)
})


console.log("ddddd",date);
var dateStr = date.toString().split("");
var datenew = dateStr.toString().replace(/-/g,"");

console.log('lolol', datenew)

 var accDate = datenew.split(",").map(n => {
  if(n !== ""){
    return (`<div class="datecolumn">${n}</div>`)
  }else{
    return ""
  }
 })

  var accnoBlocks = accno.toString().split(",").join("")
  var accnoBlocksRight = rightAccno.toString().split(",").join("")
  var accoudate = accDate.toString().split(",").join("")
 
 samplepdf = await samplepdfFunc(firmname,
                              branchname,
                              date,
                              result,
                              quantity,
                             wamount,
                             dataa,
                             bankname,
                             accountno,
                             accnoBlocks,
                             accnoBlocksRight,
                             accoudate
                            );
                            try {
                                // Create a browser instance
                                const browser = await puppeteer.launch();
                              
                                // Create a new page
                                const page = await browser.newPage();
                              
                              
                                await page.setContent(samplepdf, {encoding : 'utf-8', waitUntil:'domcontentloaded' });
                              
                                // To reflect CSS used for screens instead of print
                                await page.emulateMediaType('screen');  
                              
                                // Downlaod the PDF
                                const pdf = await page.pdf({
                                  //  path: 'result.pdf',
                                  // margin: { top: '50px', right: '50px', bottom: '0px', left: '50px' },
                                  format: 'A4',
                                  printBackground: true,
                                  landscape : true,
                                });
                    
                                    // Close the browser instance
                                    await browser.close();
                                    console.log("pddddddf")
                                res.send(pdf);
                              
                            
                              
                           
                        } catch (error) {
                            console.log(error)
                        }
});



function samplepdfFunc(firmname,
  branchname,
  date,
  result,
  quantity,
  wamount,
    dataa,
    bankname,
    accountno,
    accnoBlocks,
    accnoBlocksRight,
    accoudate
){
  var slipdata = '';
 
  switch (bankname) {
    case "Union Bank Of India":
      
       slipdata =  unionchequeslip(firmname,
        branchname,
        date,
        result,
        quantity,
        wamount,
          dataa,
          bankname,
          accountno,
          accnoBlocks,
          accnoBlocksRight,
          accoudate)
          
      break;
    case "State Bank of India":
       slipdata =  sbichequeslip(
        firmname,
      branchname,
      date,
      result,
      quantity,
      wamount,
        dataa,
        bankname,
        accountno,
        accnoBlocks,
        accnoBlocksRight,
       )
      
      break;
      case "Punjab National Bank":
        slipdata =  pnbchequeslip(firmname,
         branchname,
         date,
         result,
         quantity,
         wamount,
           dataa,
           bankname,
           accountno,
           accnoBlocks,
           accnoBlocksRight,
           accoudate)
           
       break;
   
  }

 

  return slipdata

};
export default router;

