import * as React from "react";
import PropTypes from "prop-types";
import SwipeableViews from "react-swipeable-views";
import { useTheme } from "@mui/material/styles";
import AppBar from "@mui/material/AppBar";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";

import Box from "@mui/material/Box";
// import "../../assets/css/app.css";
import { useState, useEffect } from "react";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import moment from "moment";
import { useRef } from "react";
import CircularProgress from '@mui/material/CircularProgress';
import axios from "axios"
import Loader from "components/utils/Loader";

import {
  Button,
  Form,
  Input,
  Table,
  Container,
  Card,
  CardBody
} from "reactstrap";
import { useHistory } from "react-router-dom";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import SyncLoader from "react-spinners/SyncLoader";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <>
      <div
        role="tabpanel"
        hidden={value !== index}
        id={`full-width-tabpanel-${index}`}
        aria-labelledby={`full-width-tab-${index}`}
        {...other}
      >
        {value === index && (
          <Box sx={{ marginTop: "0%", padding: "5px" }}>
            {children}
          </Box>
        )}
      </div>
    </>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `full-width-tab-${index}`,
    // 'aria-controls': `full-width-tabpanel-${index}`,
  };
}

export default function FullWidthTabs() {
  const [loading, setloading] = useState(false);
  let [color, setColor] = useState("#05775c");

  const theme = useTheme();
  const [value, setValue] = React.useState(0);

  const [docdate, setdocdate] = useState(moment(new Date()).toISOString());
  const [depositdate, setdepositdate] = useState(
    moment(new Date()).toISOString()
  );
  const [amount2k, setAmount2k] = useState(0);
  const [amount500, setAmount500] = useState(0);
  const [amount200, setAmount200] = useState(0);
  const [amount100, setAmount100] = useState(0);
  const [amount50, setAmount50] = useState(0);
  const [amount20, setAmount20] = useState(0);
  const [amount10, setAmount10] = useState(0);
  const [amount5, setAmount5] = useState(0);
  const [amountCoins, setAmountCoins] = useState(0);
  var [currentindex, setcurrentindex] = useState(0);
  const [firmdata, setFirmData] = useState([]);
  const [chequeFirmData, setchequeFirmData] = useState([]);
  const [firmid, setfirmid] = useState("");
  const [chequeFirmid, setchequeFirmid] = useState("");
  const [bankdata, setBankData] = useState([]);
  const [chequeBankData, setchequeBankData] = useState([]);
  const [bankid, setbankid] = useState("");
  const [chequeBankid, setChequebankid] = useState("");
  const [searchbranch, setsearchbranch] = useState([]);
  const [userid, setuserid] = useState("");
  const [branchdata, setbranchdata] = useState([]);
  const [chequeBranchData, setchequeBranchData] = useState([]);
  const [branchid, setbranchid] = useState([]);
  const [chequeBranchid, setchequeBranchid] = useState("");
  const [accountfin, setaccountfin] = useState("");
  const [accountfin2, setaccountfin2] = useState("");
  const [chequefirmname, setchequefirmname] = useState("");
  const [totalamount, settotalamount] = useState("");
  const [firmnamee, setfirmnamee] = useState("");
  const [total, setTotal] = useState(0);
  const [total2k, settotal2k] = useState(0);
  const [total500, settotal500] = useState(0);
  const [total200, settotal200] = useState(0);
  const [total100, settotal100] = useState(0);
  const [total50, settotal50] = useState(0);
  const [total20, settotal20] = useState(0);
  const [total10, settotal10] = useState(0);
  const [total5, settotal5] = useState(0);
  const [partydata, setpartydata] = useState([]);
  const[totalcoins,settotalcoins]=useState(0)

  const [party2name, setparty2name] = useState("");
  const [chequeno, setchequeno] = useState("");
  const [amount, setamount] = useState("");
  const [customerid, setcustomerid] = useState("");
  const [customername, setcustomername] = useState("");
  const [partybankname, setpartybankname] = useState("");
  const [customerbranchdata, setcustomerbranchdata] = useState([]);
  const [customerbankdata, setcustomerbankdata] = useState([]);
  const [open, setOpen] = React.useState(false);
  const [open2, setOpen2] = React.useState(false);
  const [open3, setOpen3] = React.useState(false);
  const [options, setOptions] = React.useState([]);
  const loading2 = open && chequeFirmData.length === 0;
  const loading3=open2 && chequeBankData.length===0;
  const loading4=open3 && chequeBranchData.length===0;
 

  const [formValues, setFormValues] = useState([
    { 
      customerid:"",
      customerbank: "",
      customerbranch: "",
      bankname: "",
      branch: "",
      accountno: "",
      chequedate: "",
      customer: "",
      amount: "",
      chequeno: "",
      amount: "",
    },
  ]);
  const history = useHistory();
  const inputRef = useRef(null);
  const ref0 = useRef();
  const ref1 = useRef();
  const ref2 = useRef();
  const ref3 = useRef();
  const ref4 = useRef();

  let handleChangee = (i, e) => {
    console.log("valuehhhh", e);
    let newFormValues = [...formValues];
    newFormValues[i][e.target?.name] = e.target.value;
    setFormValues(newFormValues);
  };
  console.log(formValues);
  let addFormFields = () => {
    setcurrentindex(currentindex+1)
    console.log(currentindex)
    setFormValues([
      ...formValues,
      { 
        customerid:"",
        customerbank: "",
        customerbranch: "",
        bankname: "",
        branch: "",
        accountno: "",
        chequedate: "",
        customer: "",
        amount: "",
        chequeno: "",
        amount: "",
      },
    ]);
  };

  let removeFormFields = (i) => {
    let newFormValues = [...formValues];
    newFormValues.splice(i, 1);
    setFormValues(newFormValues);
  };

  function doTotal() {
    var Total =
      amount2k * 2000 +
      amount500 * 500 +
      amount200 * 200 +
      amount100 * 100 +
      amount50 * 50 +
      amount20 * 20 +
      amount10 * 10 +
      amount5 * 5 +
      amountCoins * 1;
    setTotal(Total);

    settotal2k(amount2k * 2000);
    settotal500(amount500 * 500);
    settotal200(amount200 * 200);
    settotal100(amount100 * 100);
    settotal50(amount50 * 50);
    settotal20(amount20 * 20);
    settotal10(amount10 * 10);
    settotal5(amount5*5);
settotalcoins(amountCoins*1)
  }

  console.log(total2k);
  console.log(docdate);
  console.log(depositdate);

  const token = localStorage.getItem("token");
  console.log(token);

  const getParty = async () => {
    let result = await fetch("http://localhost:8000/getparty", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + token,
      },
    });
    result = await result.json();
    var partyarray2 = [];
    var partyarray = [];
    result &&
      result.partyDatas.partyLink.forEach((element) => {
        partyarray.push(element.partyname);
      });
    setpartydata(partyarray);
    result &&
      result.partyDatas.partyLink.forEach((element) => {
        partyarray2.push({ partyname: element.partyname, _id: element._id });
      });
    const temp = partyarray2.find((item) => {
      return item.partyname === customername;
    });
    console.log(temp);
    const temp2 = temp?._id;
    setcustomerid(temp2);
    console.log(customerid);
  };

  const getPartyBank = async () => {
    if (!customerid) return;
    else {
      console.log(customerid);
      let result = await fetch("http://localhost:8000/getpartybank", {
        method: "post",
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer " + token,
        },
        body: JSON.stringify({ customerid }),
      });
      result = await result.json();
      console.log(result[0].bankname);
      var temparray = [];
      console.log(result);

      const tempresult = result.forEach((item) => {
        temparray.push(item.bankname);
        return;
      });
      setcustomerbankdata(temparray);
      console.log(temparray);
    }
  };

  const getPartyBranch = async () => {
    if (!customerid && !partybankname) return;
    else {
      console.log(customerid);
      let result = await fetch("http://localhost:8000/getpartybank", {
        method: "post",
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer " + token,
        },
        body: JSON.stringify({ customerid, partybankname }),
      });
      result = await result.json();
      console.log(result[0].branch);
      var temparray = [];
      console.log(result);

      const tempresult = result.forEach((item) => {
        temparray.push(item.branch);
        return;
      });
      setcustomerbranchdata(temparray);
      console.log(temparray);
    }
  };

  // ****************Get Firm Cash Slip ************************
  const getFirm = async () => {
    let result = await fetch("http://localhost:8000/getuser", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + token,
      },
    });
    result = await result.json();
    console.log("hahahah", result);

    var firmarray = [];
    result.firmDatas.firmid.forEach((element) => {
      firmarray.push({ _id: element._id, firmname: element.firmname });
      console.log(firmarray);
      return setFirmData(firmarray);
    });
    console.log(firmarray);
    //  getBank(firmarray);
    const firmname = firmarray.find((element) => {
      return element._id === firmid;
    });
    console.log(firmname);
    const firmm = firmname?.firmname;
    setfirmnamee(firmm);
    console.log(firmnamee);
  };
  console.log("CashFirmID=>>>", firmid);
  // ****************Get Firm Cash Slip ************************

  // ****************Get Firm Cheque Slip ************************
  const getFirmChequeSlip = async () => {
    

   
  
      let result = await fetch("http://localhost:8000/getuser", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer " + token,
        },
      });
      result = await result.json();
      console.log("getFirmChequeSlip=>>>", result);
      var firmarray = [];
      result.firmDatas.firmid.forEach((element) => {
         if (!(element.firmnname in firmarray)){
        firmarray.push({ _id: element._id, firmname: element.firmname });
        console.log(firmarray);
        
        setchequeFirmData(firmarray);
      }});
    
   
    const firmx = firmarray.find((element) => {
      return element._id === chequeFirmid;
    });
    console.log(firmx.firmname)
    const firmm = firmx?.firmname;

    setchequefirmname(firmm);
    console.log(chequefirmname)

  };
  console.log("ChequeFirmData=>>>", chequeFirmData);
  console.log("ChequeFirmid=>>>", chequeFirmid);
  console.log("ChequeFirmName=>>>", chequefirmname);
  // ****************Get Firm Cheque Slip ************************

  // ****************Get Bank Cash Slip ************************

  const getBank = async (firmarray) => {
    if (!firmid) return;
    else {
      let result = await fetch("http://localhost:8000/getbank2", {
        method: "post",
        body: JSON.stringify({ firmid }),
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer " + token,
        },
      });
      result = await result.json();
      var bankarray = [];
      var bankarray2 = [];
      result.GetBankFunctionCall.bankLink.forEach((element) => {
        bankarray.push(element.bank);
        bankarray2 = removeDuplicates(bankarray);
        return setBankData(bankarray2);
      });
    }
  };
  console.log("Bankdata=>>>", bankdata);
  // ****************Get Bank Cash Slip ************************

  // ****************Get Bank ChequeSlip Slip ************************
  const getchequeBank = async (firmarray) => {
    if (!chequeFirmid) return;
    else {


      
        let result = await fetch("http://localhost:8000/getbank2", {
          method: "post",
          body: JSON.stringify({ chequeFirmid }),
          headers: {
            "Content-Type": "application/json",
            Authorization: "Bearer " + token,
          },
        });
        result = await result.json();
        console.log("getchequeBank", result);
        var bankarray = [];
        var bankarray2 = [];
        result.GetBankFunctionCall.bankLink.forEach((element) => {
          bankarray.push(element.bank);
          bankarray2 = removeDuplicates(bankarray);
          return setchequeBankData(bankarray2);
        });
        
      
     

    }
  };
  console.log("ChequeBankdata=>>>", chequeBankData);
  console.log("ChequeBankid=>>>", chequeBankid);
  // ****************Remove Duplicates ************************
  function removeDuplicates(bankarray) {
    var unique = [];
    bankarray.forEach((element) => {
      if (!unique.includes(element)) {
        unique.push(element);
      }
    });
    return unique;
  }
  // ****************Remove Duplicates ************************

  // ****************Get Cash Slip Branch ************************
  const getbranch = async () => {
    console.log("hello");

    console.log(firmid, bankid);
    console.log("hello");
    if (branchid && firmid) {
      let result = await fetch("http://localhost:8000/getbranches", {
        method: "post",
        body: JSON.stringify({ firmid, bankid }),
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer " + token,
        },
      });
      result = await result.json();
      // console.warn("kkkkk", result);
      console.log(result);
      var brancharray = [];
      result.forEach((element) => {
        // console.log(element);
        brancharray.push(element.branch);

        return setbranchdata(brancharray);
      });
    } else return;
  };
  // ****************Get Cash Slip Branch ************************
  console.log(amountCoins);
  // ****************Get Cheque Slip Branch ************************
  const getChequeBranch = async () => {
    console.log("chequeFirmid && chequeBankid", chequeFirmid, chequeBankid);
    console.log("hello");
    if (chequeFirmid && chequeBankid) {

     
      
        let result = await fetch("http://localhost:8000/getbranches", {
          method: "post",
          body: JSON.stringify({ chequeFirmid, chequeBankid }),
          headers: {
            "Content-Type": "application/json",
            Authorization: "Bearer " + token,
          },
        });
        result = await result.json();
  
        console.log("GetChequeBranch=>>>", result);
        var brancharray = [];
        result.forEach((element) => {
          // console.log(element);
          brancharray.push(element.branch);
          console.log("chequeBranchData", chequeBranchData);
          return setchequeBranchData(brancharray);
        });
        
      

    } else return;
  };
  // ****************Get Cheque Slip Branch ************************

  const getChequeAccount = async () => {
    console.log(
      "chequeFirmID && chequeBankID && chequeBranchID",
      chequeFirmid,
      chequeBankid,
      chequeBranchid
    );

    if (chequeFirmid && chequeBankid && chequeBranchid) {
      
      console.log("me hu console.log");
      let result = await fetch("http://localhost:8000/getaccount", {
        method: "post",
        body: JSON.stringify({ chequeFirmid, chequeBankid, chequeBranchid }),
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer " + token,
        },
      });
      result = await result.json();

      console.log("GetChequeAccount=>>>", result[0]?.account);
      if (!value) {
        formValues.map((element, index) => {
          let newFormValues = [...formValues];
          newFormValues[index].accountno = 0;
        });
      } else {
        formValues.map((element, index) => {
          let newFormValues = [...formValues];
          console.log(currentindex)
          if( newFormValues[currentindex].bankname===""&& 
            newFormValues[currentindex].branch===""){

              newFormValues[currentindex].accountno =0
              newFormValues[currentindex].customerid=customerid
              
            }else{

              newFormValues[currentindex].accountno = result[0].account;
              newFormValues[currentindex].customerid=customerid
            }
         
        });
      }
    } else return;
  };

  const getCashAccount = async () => {
    console.log(
      "CashFirmID && CashBankID && CashBranchID",
      firmid,
      bankid,
      branchid
    );

    if (firmid && bankid && branchid) {
      let result = await fetch("http://localhost:8000/getaccount", {
        method: "post",
        body: JSON.stringify({ firmid, bankid, branchid }),
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer " + token,
        },
      });
      result = await result.json();

      console.log("GetCashAccount=>>>", result[0].account);
      setaccountfin(result[0].account);
    } else return;
  };

  const failure = () => {
    toast.error("🦄 Something Wrong  !!!", {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });
  };
  const success = () => {
    toast.success("Slip Data Added Successfully !!!!", {
      position: "top-right",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });
  };

  const downloadpdffile =async (resultid)=>{
    console.log("firsttttttttttttttttttttttttttttttt");
    console.log("function k andar se ",resultid)
    await axios({
      headers : {
        "Content-Type": "application/json",
        Authorization: "Bearer " + token,
      },
      url : 'http://localhost:8000/getcashslips',
      method : 'POST',
      data:JSON.stringify({resultid}),
      responseType : 'blob',
     
    })
    .then(async (res)=>{
      const url = await window.URL.createObjectURL(new Blob([res.data]));
console.log(url)
      const link = document.createElement('a');

      link.href = url;

      link.setAttribute('download', 'file.pdf');

      document.body.appendChild(link);

      link.click();
    }).catch((err)=> console.log(err));
  }

  const firmSubmit = async (e) => {
    e.preventDefault();
    console.log(
      amount2k,
      amount500,
      amount200,
      amount100,
      amount50,
      amount20,
      amount10,
      amount5,
      amountCoins,
      total2k,
      total500,
      total200,
      total100,
      total50,
      total20,
      total10,
      total5,
      totalcoins,
      firmid,
      bankid,
      userid,
      branchid,
      accountfin,
      totalamount,
      firmnamee,
      total,
      docdate,
      depositdate
    );
    let result = await fetch("http://localhost:8000/generateslip", {
      method: "post",
      body: JSON.stringify({
        amount2k,
        amount500,
        amount200,
        amount100,
        amount50,
        amount20,
        amount10,
        amount5,
        amountCoins,
        total2k,
        total500,
        total200,
        total100,
        total50,
        total20,
        total10,
        total5,
        firmid,
        bankid,
        userid,
        branchid,
        accountfin,
        totalamount,
        firmnamee,
        total,
        docdate,
        depositdate,
      }),
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + token,
      },
    });
    result = await result.json();
    console.log(result);

    if (result.status) {
      success();
      
      var resultid=result.data._id
      console.log("me hu result id ",resultid)
      // setTimeout(() => {
      //   history.push("/admin/sbicashslip");
      // }, 2000);
      downloadpdffile(resultid);
    } else {
      failure();
    }

    console.warn(result);
  };
console.log("me hu firmname ",chequefirmname)

  const formSubmit = async (e) => {
    e.preventDefault();
    console.log(chequeFirmid, chequefirmname, formValues);
    let result = await fetch("http://localhost:8000/createchequeslip", {
      method: "post",
      body: JSON.stringify({
        customerid,
        chequeFirmid,
        chequefirmname,
        formValues,
      }),
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + token,
      },
    });
    result = await result.json();
    console.log(result);

    if (result.status) {
      success();
      setTimeout(() => {
        history.push("/admin/viewchequeslip");
      }, 2000);
    } else {
      failure();
    }

    console.warn(result);
  };
  console.log(party2name);
  console.log(amount200);

  useEffect(() => {
    doTotal();
  }, [
    amount5,
    amount10,
    amount20,
    amount100,
    amount200,
    amount500,
    amount2k,
    amount50,
    amountCoins,
  ]);

  console.log(branchid);
  console.log(totalamount);

  useEffect(() => {
    getFirm();
    getFirmChequeSlip();
    getBank();
    getchequeBank();
    getbranch();
    getChequeBranch();
    getChequeAccount();
    getCashAccount();
    getParty();
    getPartyBank();
    getPartyBranch();
  }, [
    firmid,
    firmnamee,
    bankid,
    accountfin,
    totalamount,
    branchid,
    chequeFirmid,
    chequeBankid,
    chequeBranchid,
    chequefirmname,
    customername,
    customerid,
    loading2,
    loading3,currentindex,
    loading4,
    formValues
  ]);
  console.log(currentindex)
  const handleChange = (event, newValue) => {
    console.log(newValue);
    setValue(newValue);
    formValues.map((element, index) => {
      let newFormValues = [...formValues];
      newFormValues[index].branch = "";
      newFormValues[index].bankname = "";
      newFormValues[index].accountno = "";
      newFormValues[index].chequeno = "";
      newFormValues[index].customer = "";
      newFormValues[index].chequedate = "";

      console.log(newFormValues[index].branch);
      console.log(newFormValues[index].bankname);
    });
    setchequeFirmid("");
    setChequebankid("");
    setchequeBranchid("");
    setfirmid("");
    setbankid("");
    setbranchid("");
    setaccountfin(0);
  };

  useEffect(() => {
    setloading(true);
    setTimeout(() => {
      setloading(false);
    }, 0);
  }, []);

  const handleChangeIndex = (index) => {
    setValue(index);
  };

  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <div>
          <Container className="m-0 p-0" fluid>
            <div className="mycard-container" >
              <Card className="mycard"  style={{ 
                backgroundColor: 'white', border: 'none', padding : "0",
                boxShadow: "0 2px 4px rgba(0,0,0,0.2)"
                }}>
                <CardBody style={{ padding : "0" }}>

                <Box>
                <AppBar position="static" style={{ borderTopLeftRadius: "4px", borderTopRightRadius: "4px" }}>
                  <Tabs
                    value={value}
                    onChange={handleChange}
                    indicatorColor="secondary"
                    textColor="inherit"
                    style={{ backgroundColor: "white", color: "black", }}
                  >
                    <Tab label="Cash Deposit Slips" {...a11yProps(0)} />
                    <Tab label="Cheque Deposit Slips" {...a11yProps(1)} />
                  </Tabs>
                </AppBar>
              <SwipeableViews
                className="swipeview"
                index={value}
                style={{ backgroundColor: 'transparent' }}
                onChangeIndex={handleChangeIndex}
              >
                <TabPanel value={value} index={0} dir={theme.direction}>
                  <Form className="p-0">
                    <div className="m-0 d-flex cashSlip-view">
                      <div className="cash-form">
                        <div>
                          <label
                            className="form-control-label"
                            htmlFor="input-email"
                          >
                            FIRM NAME
                          </label>
                        <Autocomplete
                          disablePortal
                          id="combo-box-demo"
                          options={!firmdata ? <div>loading...</div> : firmdata}
                          renderInput={(params) => (
                            <TextField {...params} variant="outlined" />
                          )}
                          getOptionLabel={(option) => option?.firmname}
                          onChange={(e, value) => {
                            setfirmid(value._id);
                          }}
                        />

                        <label
                          className="form-control-label"
                          htmlFor="input-email"
                        >
                          BANK NAME
                        </label>
                        <Autocomplete
                          disablePortal
                          id="combo-box-demo"
                          options={!bankdata ? <div>loading...</div> : bankdata}
                          getOptionLabel={(option) => (option ? option : "")}
                          renderInput={(params) => (
                            <TextField {...params} variant="outlined" />
                          )}
                          onChange={(e, value) => {
                            setbankid(value);
                          }}
                        />

                        <label
                          className="form-control-label"
                          htmlFor="input-email"
                        >
                          BRANCH NAME
                        </label>

                        <Autocomplete
                          disablePortal
                          id="combo-box-demo"
                          options={
                            !branchdata
                              ? [{ label: "Loading...", id: 0 }]
                              : branchdata
                          }
                          renderInput={(params) => (
                            <TextField {...params} variant="outlined" />
                          )}
                          getOptionLabel={(option) => (option ? option : "")}
                          onChange={(e, value) => {
                            setbranchid(value);
                          }}
                        />

                        <div className="form-field">

                            <label
                              className="form-control-label"
                              htmlFor="input-email"
                            >
                              Account Number
                            </label>

                            <label
                              className="form-control-label"
                              htmlFor="input-email"
                            >
                              {firmid && bankid && branchid ? accountfin : 0}
                            </label>
                        </div>

                        <div className="form-field">
                          <div>
                            <label
                              className="form-control-label"
                              htmlFor="input-email"
                            >
                              Doc Date
                            </label>
                          </div>
                          <div>
                            <Input
                              className="form-control-alternative"
                              defaultValue=""
                              id="input-username"
                              type="date"
                              value={docdate}
                              onChange={(e) => {
                                setdocdate(e.target.value);
                              }}
                            />
                          </div>
                        </div>

                        <div className="form-field">
                            <div>
                              <label
                                className="form-control-label"
                                htmlFor="input-email"
                              >
                                Deposit date
                              </label>
                            </div>

                            <div>
                              <Input
                                className=""
                                defaultValue=""
                                id="input-username"
                                type="date"
                                value={depositdate}
                                onChange={(e) => {
                                  setdepositdate(e.target.value);
                                }}
                              />
                            </div>

                        </div>
                        </div>
                      </div>

                      <div className="cash-table" style={{ backgroundColor: '#fff' }}>
                        <Table
                          className="align-items-center table-flush"
                          responsive
                        >
                          <thead className="thead-light gentabletbody">
                            <tr>
                              <th scope="col">Sr.</th>
                              <th scope="col">Note</th>
                              <th scope="col">Qty</th>
                              <th scope="col">Amount</th>
                            </tr>
                          </thead>
                          <tbody className="gentabletbody">
                            <tr>
                              <td>1</td>
                              <td>2000</td>
                              <td>
                                <Input
                                  className="form-control-alternative"
                                  defaultValue="0"
                                  id="input-username"
                                  type="number"
                                  min="0"
                                  //   max="100"
                                  value={amount2k}
                                  onChange={(e) => setAmount2k(e.target.value)}
                                />
                              </td>

                              <td className="">
                                <h3>{amount2k * 2000}</h3>
                              </td>
                            </tr>

                            <tr className="">
                              <td>2</td>
                              <td>500</td>
                              <td>
                                <Input
                                  className="form-control-alternative"
                                  defaultValue="0"
                                  id="input-username"
                                  type="number"
                                  min="0"
                                  value={amount500}
                                  onChange={(e) => setAmount500(e.target.value)}
                                />
                              </td>

                              <td className="">
                                <h3>{amount500 * 500}</h3>
                              </td>
                            </tr>
                            <tr className="m-0 p-0">
                              <td>3</td>
                              <td>200</td>
                              <td>
                                <Input
                                  className="form-control-alternative"
                                  defaultValue="0"
                                  id="input-username"
                                  type="number"
                                  min="0"
                                  //   max="100"
                                  value={amount200}
                                  onChange={(e) => setAmount200(e.target.value)}
                                />
                              </td>

                              <td className="">
                                <h3>{amount200 * 200}</h3>
                              </td>
                            </tr>
                            <tr>
                              <td>4</td>
                              <td>100</td>
                              <td>
                                <Input
                                  className="form-control-alternative"
                                  defaultValue="0"
                                  id="input-username"
                                  type="number"
                                  min="0"
                                  //   max="100"
                                  value={amount100}
                                  onChange={(e) => setAmount100(e.target.value)}
                                />
                              </td>

                              <td className="">
                                <h3>{amount100 * 100}</h3>
                              </td>
                            </tr>
                            <tr>
                              <td>5</td>
                              <td>50</td>
                              <td>
                                <Input
                                  className="form-control-alternative"
                                  defaultValue="0"
                                  id="input-username"
                                  type="number"
                                  min="0"
                                  //   max="100"
                                  value={amount50}
                                  onChange={(e) => setAmount50(e.target.value)}
                                />
                              </td>

                              <td className="">
                                <h3>{amount50 * 50}</h3>
                              </td>
                            </tr>
                            <tr>
                              <td>6</td>
                              <td>20</td>
                              <td>
                                <Input
                                  className="form-control-alternative"
                                  defaultValue="0"
                                  id="input-username"
                                  type="number"
                                  min="0"
                                  //   max="100"
                                  value={amount20}
                                  onChange={(e) => setAmount20(e.target.value)}
                                />
                              </td>

                              <td className="">
                                <h3>{amount20 * 20}</h3>
                              </td>
                            </tr>
                            <tr>
                              <td>7</td>
                              <td>10</td>
                              <td>
                                <Input
                                  className="form-control-alternative"
                                  defaultValue="0"
                                  id="input-username"
                                  type="number"
                                  min="0"
                                  //   max="100"
                                  value={amount10}
                                  onChange={(e) => setAmount10(e.target.value)}
                                />
                              </td>

                              <td className="">
                                <h3>{amount10 * 10}</h3>
                              </td>
                            </tr>
                            <tr>
                              <td>8</td>
                              <td>5</td>
                              <td>
                                <Input
                                  className="form-control-alternative"
                                  defaultValue="0"
                                  id="input-username"
                                  type="number"
                                  min="0"
                                  //   max="100"
                                  value={amount5}
                                  onChange={(e) => setAmount5(e.target.value)}
                                />
                              </td>

                              <td className="">
                                <h3>{amount5 * 5}</h3>
                              </td>
                            </tr>
                            <tr>
                              <td>9</td>
                              <td>Coins</td>
                              <td>
                                <Input
                                  className="form-control-alternative"
                                  defaultValue="0"
                                  id="input-username"
                                  type="number"
                                  min="0"
                                  //   max="100"
                                  value={amountCoins}
                                  onChange={(e) =>
                                    setAmountCoins(e.target.value)
                                  }
                                />
                              </td>

                              <td className="">
                                <h3>{amountCoins * 1}</h3>
                              </td>
                            </tr>

                            <tr>
                              <td colspan="3" className=" text-center">
                                <h1>TOTAL AMOUNT</h1>
                              </td>
                              <td className="">
                                <h1>{total}</h1>
                              </td>
                            </tr>
                          </tbody>
                        </Table>
                      </div>
                    </div>
                    <div className="companybutton">
                      <Button
                        id="generate"
                        variant="primary"
                        type="submit"
                        onClick={firmSubmit}
                      >
                        Generate Slip
                      </Button>
                    </div>
                  </Form>
                </TabPanel>

                {/* **************Tab 2 Starts *******************8 */}

                <TabPanel className="tabpanel" value={value} index={1} dir={theme.direction}>
      
                  <div className="form-box bank-form">
                    <div className="d-flex">
                      <div className="input">
                        <label className="form-control-label" htmlFor="input-email">
                          FIRM NAME
                        </label>
                      </div>
                      <div className="input">
                        <Autocomplete
                          disablePortal
                          id="combo-box-demo"
                          options={
                            !chequeFirmData ? <div>loading...</div> : chequeFirmData
                          }
                        
                          sx={{ width: 300 }}
                          renderInput={(params) =>  <TextField
                            {...params}
                          
                            InputProps={{
                              ...params.InputProps,
                              endAdornment: (
                                <React.Fragment>
                                  {!chequeFirmData ? <CircularProgress color="inherit" size={10} /> : null}
                                  {params.InputProps.endAdornment}
                                </React.Fragment>
                              ),
                            }}
                          />}
                          getOptionLabel={(option) =>
                            option?.firmname ? option.firmname : ""
                          }
                          onChange={(e, value) => {
                            setchequeFirmid(value._id);
                          }}
                        />
                      </div>
                    </div>
                  </div>
                          

                  {formValues.map((element, index) => (
                    <div className="form-box bank-form">
                    <Form>
                      <div className="d-flex">
                        <div className="input">
                          <label
                              className="form-control-label"
                              htmlFor="input-email"
                            >
                              BANK NAME
                            </label>
                            <Autocomplete
                              name="bankname"
                              loading={loading3}
                              disablePortal
                              id="bankname"
                              options={
                                !chequeBankData ? (
                                  <div>loading...</div>
                                ) : (
                                  chequeBankData
                                )
                              }
                            
                              sx={{ width: 300 }}
                              renderInput={(params) => (
                                <TextField
                                {...params}
                            
                                InputProps={{
                                  ...params.InputProps,
                                  endAdornment: (
                                    <React.Fragment>
                                      {loading3 ? <CircularProgress color="inherit" size={20} /> : null}
                                      {params.InputProps.endAdornment}
                                    </React.Fragment>
                                  ),
                                }}
                              />
                              )}
                              ref={ref0}
                              onInputChange={(e, v, r) => {
                                if (r === "reset") console.log(v, r);
                              }}
                              value={element.bankname || ""}
                              getOptionLabel={(option) => option}
                              onChange={(e, v, r) => {
                                setChequebankid(v);
                                console.log(ref0.current.getAttribute("name"));
                                let newFormValues = [...formValues];
                                newFormValues[index][
                                  ref0.current.getAttribute("name")
                                ] = v;
                                setFormValues(newFormValues);
                              }}
                            />
                        </div>
                        <div className="input">
                        <label
                            className="form-control-label"
                            htmlFor="input-email"
                          >
                            BRANCH NAME
                          </label>
                          <Autocomplete
                           open={open3}
                           onOpen={() => {
                             setOpen3(true);
                           }}
                           onClose={() => {
                             setOpen3(false);
                           }}
                           loading={loading4}
                            name="branch"
                            disablePortal
                            id="bankname"
                            options={
                              !chequeBranchData ? (
                                <div>loading...</div>
                              ) : (
                                chequeBranchData
                              )
                            }
                            sx={{ width: 300 }}
                            renderInput={(params) => (
                              <TextField
                              {...params}
                              
                              InputProps={{
                                ...params.InputProps,
                                endAdornment: (
                                  <React.Fragment>
                                    {loading4 ? <CircularProgress color="inherit" size={20} /> : null}
                                    {params.InputProps.endAdornment}
                                  </React.Fragment>
                                ),
                              }}
                            />
                            )}
                            ref={ref1}
                            onInputChange={(e, v, r) => {
                              if (r === "reset") console.log(v, r);
                            }}
                            value={element.branch || ""}
                            getOptionLabel={(option) => (option ? option : "")}
                            onChange={(e, v, r) => {
                              console.log("BranchID=>>>", v);
                              setchequeBranchid(v);
                              setcurrentindex(index);
                              console.log(ref1.current.getAttribute("name"));
                              let newFormValues = [...formValues];
                              newFormValues[index][
                                ref1.current.getAttribute("name")
                              ] = v;
                              setFormValues(newFormValues);
                            }}
                          />
                        </div>
                      </div>
                      <div className="d-flex">
                        <div className="input">
                          <label
                            className="form-control-label"
                            htmlFor="input-email"
                          >
                            Account Number
                          </label>
                          <Input
                            type="text"
                            name="accountno"
                            onChange={(e) => {
                              handleChangee(index, e);
                            }}
                            value={element.accountno || ""}
                            class="left field acc33"
                            readonly
                          />
                        </div>
                        <div className="input">
                          <label
                            className="form-control-label"
                            htmlFor="input-email"
                          >
                            Cheque Date
                          </label>
                          <Input
                            name="chequedate"
                            className="form-control-alternative"
                            defaultValue=""
                            id="input-username"
                            type="date"
                            value={element.chequedate || ""}
                            onChange={(e) => {
                              handleChangee(index, e);
                            }}
                          />
                        </div>
                      </div>
                      
                      <div className="d-flex">
                        <div className="input">
                        <label
                            className="form-control-label"
                            htmlFor="input-email"
                          >
                            Customer NAME
                          </label>
                          <Autocomplete
                            disablePortal
                            name="customer"
                            id="combo-box-demo"
                            options={partydata}
                            sx={{ width: 300 }}
                            renderInput={(params) => (
                              <TextField {...params} variant="outlined" />
                            )}
                            isOptionEqualToValue={(option, value) => option ===value}
                            getOptionLabel={(option) => (option ? option : "")}
                            value={element.customer || ""}
                            ref={ref2}
                            onInputChange={(e, v, r) => {
                              console.log(e);
                              setcustomername(v);

                              if (r === "reset") console.log(v, r);
                            }}
                            onChange={(e, v, r) => {
                              console.log(ref2.current.getAttribute("name"));
                              let newFormValues = [...formValues];
                              newFormValues[index][
                                ref2.current.getAttribute("name")
                              ] = v;
                              setFormValues(newFormValues);
                            }}
                          />
                        </div>
                        <div className="input">
                        <label
                            className="form-control-label"
                            htmlFor="input-email"
                          >
                            Customer Bank
                          </label>
                          <Autocomplete
                            disablePortal
                            name="customerbank"
                            id="combo-box-demo"
                            options={customerbankdata}
                            sx={{ width: 300 }}
                            renderInput={(params) => (
                              <TextField {...params} variant="outlined" />
                            )}
                            getOptionLabel={(option) => (option ? option : "")}
                            value={element.customerbank || ""}
                            ref={ref3}
                            onInputChange={(e, v, r) => {
                              console.log(e);
                              setpartybankname(v);

                              if (r === "reset") console.log(v, r);
                            }}
                            onChange={(e, v, r) => {
                              console.log(ref3.current.getAttribute("name"));
                              let newFormValues = [...formValues];
                              newFormValues[index][
                                ref3.current.getAttribute("name")
                              ] = v;
                              setFormValues(newFormValues);
                            }}
                          />
                        </div>
                      </div>

                      <div className="d-flex">
                        <div className="input">
                        <label
                            className="form-control-label"
                            htmlFor="input-email"
                          >
                            Customer Branch
                          </label>
                          <Autocomplete
                            disablePortal
                            name="customerbranch"
                            id="combo-box-demo"
                            options={customerbranchdata}
                            sx={{ width: 300 }}
                            renderInput={(params) => (
                              <TextField {...params} variant="outlined" />
                            )}
                            getOptionLabel={(option) => (option ? option : "")}
                            value={element.customerbranch || ""}
                            ref={ref4}
                            onInputChange={(e, v, r) => {
                              console.log(e);

                              if (r === "reset") console.log(v, r);
                            }}
                            onChange={(e, v, r) => {
                              console.log(ref4.current.getAttribute("name"));
                              let newFormValues = [...formValues];
                              newFormValues[index][
                                ref4.current.getAttribute("name")
                              ] = v;
                              setFormValues(newFormValues);
                            }}
                          />
                        </div>
                        <div className="input">
                        <label
                              className="form-control-label"
                              htmlFor="input-city"
                            >
                              Cheque No.
                            </label>
                            <Input
                              name="chequeno"
                              className="form-control-alternative"
                              defaultValue=""
                              id="input-city"
                              placeholder="Cheque No."
                              type="text"
                              value={element.chequeno || ""}
                              onChange={(e) => {
                                handleChangee(index, e);
                              }}
                            />
                        </div>
                      </div>

                      <div className="d-flex">
                        <div className="input">
                        <label
                              className="form-control-label"
                              htmlFor="input-city"
                            >
                              Amount
                            </label>
                            <Input
                              name="amount"
                              className="form-control-alternative"
                              defaultValue=""
                              id="input-city"
                              placeholder="Amount"
                              type="number"
                              value={element.amount || ""}
                              onChange={(e) => {
                                handleChangee(index, e);
                              }}
                            />
                        </div>

                      </div>

                      <div className="pl-lg-4">
                      {index ? (
                          <button
                            type="button"
                            className="btn btn-danger cancel-btn"
                            onClick={() => removeFormFields(index)}
                          >
                              <i className="fa fa-minus" aria-hidden="true" />
                          </button>
                        ) : null}
                      </div>
                       
                      

                      <div className="button-section">
                        <button
                          type="button"
                          onClick={() => addFormFields()}
                          className="btn btn-primary text-center add-btn"
                        >
                          <i className="fa fa-plus-circle" aria-hidden="true" />
                        </button>
                      </div>
                    </Form>
                  </div>
                  ))}
                  

                  
                  <div className="companybutton">
                    <Button
                      id="generate"
                      variant="primary"
                      type="submit"
                      onClick={formSubmit}
                    >
                      Generate Slip
                    </Button>
                  </div>
                </TabPanel>
              </SwipeableViews>
            </Box>

                </CardBody>
              </Card>
            </div>
          </Container>
          <ToastContainer
            position="top-right"
            autoClose={5000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            theme="light"
          />
        </div>
      )}
    </>
  );
}

