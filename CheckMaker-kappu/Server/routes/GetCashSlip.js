import express from "express";
import { pnbcashslip } from "../bankslip/pnbbankslip.js";
import { sbicashSlip } from "../bankslip/sbiBankslip.js";
import { unioncashSlip} from "../bankslip/unionBankslip.js";
import UserSlips from "../models/UserSlips.js"
import auth from "./Auth.js";

const router = express.Router();
var data = [];
var samplepdf = "";

router.post("/getcashslips",auth, async (req, res,next) => {
    console.log(req.userId);
    const {resultid}=req.body
    console.log("me hu req.body ",req.body)
    console.log("jjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjj",resultid)
    // slipid = req.body._id;
    // console.log("sssssssssss",slipid);

  let CashSlips = await UserSlips.find({_id:resultid});
  if (!CashSlips) {
    res.status(500).json({ message: "data not found" });
  }
  else{
  
  data.push(CashSlips) ;
  // res.status(200).send({ CashSlips});


  console.log("hellllll",data);

  var firmname = data[0][0]?.firmname;
  var bankname = data[0][0]?.bankname;
  var branchname = data[0][0]?.branch;
  var accountno = data[0][0]?.account;
  var date = new Date(data[0][0]?.depositdate).toLocaleDateString('es-CL');
  var totalamount = data[0][0]?.totalamount;
  var twothousandqty = (data[0][0]?.twothousand)?(data[0][0]?.twothousand[0].quantity) : 0
  var twothousandamount = (data[0][0]?.twothousand)?(data[0][0]?.twothousand[0].amount) :0
  var fivehundredqty = (data[0][0]?.fivehundered)?(data[0][0]?.fivehundered[0].quantity): 0
  var fivehundredamount = (data[0][0]?.fivehundered)?(data[0][0]?.fivehundered[0].amount):0 
  var twohundredqty = (data[0][0]?.twohundered)?(data[0][0]?.twohundered[0].quantity) : 0
  var twohundredamount = (data[0][0]?.twohundered)?(data[0][0]?.twohundered[0].amount) : 0
  var onehundredqty = (data[0][0]?.onehundered)?(data[0][0]?.onehundered[0].quantity) : 0
  var onehundredamount = (data[0][0]?.onehundered)?(data[0][0]?.onehundered[0].amount) : 0
  var fiftyqty = (data[0][0]?.fifty)?(data[0][0]?.fifty[0].quantity) : 0
  var fiftyamount = (data[0][0]?.fifty)?(data[0][0]?.fifty[0].amount) : 0
  var twentyqty = (data[0][0]?.twenty)?(data[0][0]?.twenty[0].quantity) : 0
  var twentyamount = (data[0][0]?.twenty)?(data[0][0]?.twenty[0].amount) : 0
  var tenqty = (data[0][0]?.ten)?(data[0][0]?.ten[0].quantity) : 0
  var tenamount = (data[0][0]?.ten)?(data[0][0]?.ten[0].amount) : 0
  var fiveqty = (data[0][0]?.five)?(data[0][0]?.five[0].quantity) : 0
  var fiveamount = (data[0][0]?.five)?(data[0][0]?.five[0].amount) : 0
  var coinsamount = (data[0][0]?.coins)?(data[0][0]?.coins) : 0

  console.log("me hu bankname",bankname);

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
  wamount = inWords(totalamount)
  // wamount =String(wamount)
  console.log("Me hu wamount", typeof(wamount))

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
  


  samplepdf = await samplepdfFunc(
                              bankname,
                              firmname,
                              branchname,
                              date,
                              totalamount,
                              twothousandqty,
                              twothousandamount,
                              fivehundredqty,
                              fivehundredamount,
                              twohundredqty,
                              twohundredamount,
                              onehundredqty,
                              onehundredamount,
                              fiftyqty,
                              fiftyamount,
                              twentyqty,
                              twentyamount,
                              tenqty,
                              tenamount,
                              fiveqty,
                              fiveamount,
                              coinsamount,
                              wamount,
                              accnoBlocks,
                              accnoBlocksRight,
                              accoudate
                            )

}
data = [];
console.log("me hu last data",data);

  next();
});



function samplepdfFunc(
  bankname,
  firmname,
  branchname,
  date,
  totalamount,
  twothousandqty,
  twothousandamount,
  fivehundredqty,
  fivehundredamount,
  twohundredqty,
  twohundredamount,
  onehundredqty,
  onehundredamount,
  fiftyqty,
  fiftyamount,
  twentyqty,
  twentyamount,
  tenqty,
  tenamount,
  fiveqty,
  fiveamount,
  coinsamount,
  wamount,
  accnoBlocks,
  accnoBlocksRight,
  accoudate
  
){
  var slipdata = '';
  switch (bankname) {
    case "Union Bank Of India":
       slipdata = unioncashSlip(firmname,
        branchname,
        totalamount,
        twothousandqty,
        twothousandamount,
        fivehundredqty,
        fivehundredamount,
        twohundredqty,
        twohundredamount,
        onehundredqty,
        onehundredamount,
        fiftyqty,
        fiftyamount,
        twentyqty,
        twentyamount,
        tenqty,
        tenamount,
        fiveqty,
        fiveamount,
        coinsamount,
        wamount,
        accnoBlocks,
        accnoBlocksRight,
        accoudate)
      break;
    case "State Bank of India":
       slipdata = sbicashSlip(firmname,
        branchname,
        date,
        totalamount,
        twothousandqty,
        twothousandamount,
        fivehundredqty,
        fivehundredamount,
        twohundredqty,
        twohundredamount,
        onehundredqty,
        onehundredamount,
        fiftyqty,
        fiftyamount,
        twentyqty,
        twentyamount,
        tenqty,
        tenamount,
        coinsamount,
        wamount,
        accnoBlocks,
        accnoBlocksRight);
      break;
      case "Punjab National Bank":
       slipdata = pnbcashslip(firmname,
        branchname,
        totalamount,
        twothousandqty,
        twothousandamount,
        fivehundredqty,
        fivehundredamount,
        twohundredqty,
        twohundredamount,
        onehundredqty,
        onehundredamount,
        fiftyqty,
        fiftyamount,
        twentyqty,
        twentyamount,
        tenqty,
        tenamount,
        fiveqty,
        fiveamount,
        coinsamount,
        wamount,
        accnoBlocks,
        accnoBlocksRight,
        accoudate)
      break;

   
  }

 return slipdata


};


export default router;
export {data, samplepdf}
