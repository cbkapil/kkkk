import express from "express";
const app = express();
import mongoose from "mongoose";
import corsHeaders from "./middleware/cors.js";
const CONNECTION_STRING =
  process.env.CONNECTION_STRING ||
  "mongodb+srv://Shanky:1234@expensedetails.ib4xj.mongodb.net/CheckMaker?retryWrites=true&w=majority";
import bodyParser from "body-parser";

app.options('*',corsHeaders);
app.use(corsHeaders);
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

//middleware
app.use(express.json());

// Routes
import UserRoute from "./routes/UserRoute.js";
import BankRoute from "./routes/BankRoute.js";
import FirmRoute from "./routes/FirmRoute.js";
import getbankroute from "./routes/GetBank.js";
import UserBankRouter from "./routes/UserBankRouter.js";
import GetFirm from "./routes/GetFirm.js";
import BankLinking from "./routes/BankLinking.js";
import findbyid from "./routes/findbyid.js";
import Getfirmslip from "./routes/GetfirmSlip.js";
import getbankslip from "./routes/GetBankSlip.js";
import GetBranches from "./routes/GetBranches.js";
import GetAccount from "./routes/GetAccount.js";
import GenerateSlip from "./routes/GenerateSlip.js";
import Update from "./routes/Update.js"
import Delete from "./routes/Delete.js"
import GetBank2 from "./routes/GetBank2.js"
import CreateParty from "./routes/CreateParty.js"
import GetParty from "./routes/GetParty.js"
import CreateChequeSlip from "./routes/CreateChequeSlip.js"
import GetSession from './routes/GetSession.js'
import GetChequeslip from './routes/GetChequeSlips.js'
import SearchByDate from './routes/SearchByDate.js'
import SearchByWord from './routes/SerachByWord.js'
import GetCashSlips from './routes/GetCashSlip.js'
import SearchByDateCash from './routes/SearchByDateCash.js'
import GetPartyBank from './routes/GetPartyBank.js'
import GetPartyBranch from './routes/GetPartyBranch.js'
import pdfroute from'./routes/pdf.js';
import ChequePrint from './routes/ChequePrint.js';
import getPaisaSlip from './routes/getpaisaslip.js';
import UpdateChequeSlips from './routes/UpdateChequeSlip.js';
import ChequeCollection from './routes/Cheques/ChequeCollection.js';
import SearchByDateCheque from './routes/Cheques/SearchbyDateCheque.js';
import Customerdata from './routes/customer/CustomerData.js'
import CreateCustomerBank from './routes/customer/CreateCustomerBank.js'
import GetCustomerBank from './routes/customer/GetCustomerBank.js'
import DocketData from './routes/Dockets/DocketData.js'
import GetDocno from './routes/Dockets/GetDocno.js'


// User routes path
app.use(`/login`, UserRoute);
app.use(`/register`, UserRoute);
app.use(`/`, UserRoute);

// Bank routes Path
app.use(BankRoute);
app.use(getbankroute);
// Bank routes Path
app.use(FirmRoute);
app.use(UserBankRouter);
app.use(GetFirm);
app.use(BankLinking);
app.use(findbyid);
app.use(Getfirmslip);
app.use(getbankslip);
app.use(GetBranches);
app.use(GetAccount);
app.use(GenerateSlip)
app.use(Update)
app.use(Delete)
app.use(GetBank2)
app.use(CreateParty)
app.use(GetParty)
app.use(CreateChequeSlip)
app.use(GetSession)
app.use(GetChequeslip)
app.use(SearchByDate)
app.use(SearchByWord)
app.use(GetCashSlips)
app.use(SearchByDateCash)
app.use(GetPartyBank)
app.use(GetPartyBranch)
app.use(pdfroute );
app.use(ChequePrint)
app.use(getPaisaSlip)
app.use(UpdateChequeSlips);
app.use(ChequeCollection);
app.use(SearchByDateCheque);
app.use(Customerdata);
app.use(CreateCustomerBank);
app.use(GetCustomerBank);
app.use(CreateChequeSlip)
app.use(DocketData)
app.use(GetDocno)
//Database
mongoose
  .connect(CONNECTION_STRING, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    dbName: "CheckMaker",
  })
  .then(() => {
    console.log("Database Connection is ready...");
  })
  .catch((err) => {
    console.log(err);
  });

//Server Port Running
app.listen(8000, () => {
  console.log("server is running http://localhost:8000");
});