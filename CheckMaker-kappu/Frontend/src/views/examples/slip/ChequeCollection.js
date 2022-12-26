import React, { useState, useRef,useEffect } from "react";
import { TextField, Autocomplete} from "@mui/material";
import CircularProgress from '@mui/material/CircularProgress';
import {
  CardBody,
  Input,
  Container,
  Button,
  Card,
} from "reactstrap";
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function ChequeCollection() {
  const token = localStorage.getItem("token");

  const ref2 = useRef();
  const ref3 = useRef();

  const [customername, setcustomername] = useState("");
  const [partydata, setpartydata] = useState([]);
  const [partybankname, setpartybankname] = useState("");
  const [customerbranchdata, setcustomerbranchdata] = useState([]);
  const [customerbankdata, setcustomerbankdata] = useState([]);
  const [chequeno, setchequeno] = useState("");
  const [customerid, setcustomerid] = useState("");
  const [chequeFirmid, setchequeFirmid] = useState("");
  const [chequefirmname, setchequefirmname] = useState("");
  const [chequeFirmData, setchequeFirmData] = useState([]);
  const [firstbank,setfirstbank]=useState("");
  const [firstbranch,setfirstbranch] = useState("");
  const[editable,seteditable] = useState(false);
  const [formValues, setFormValues] = useState([
    { 
      customerid:"",
      customerbank: "",
      customerbranch: "",
      chequedate: "",
      customer: "",
      amount: "",
      chequeno: "",
    },
  ]);


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
  console.log(firmx?.firmname)
  const firmm = firmx?.firmname;

  setchequefirmname(firmm);
  console.log(chequefirmname)

};
console.log("ChequeFirmData=>>>", chequeFirmData);
console.log("ChequeFirmid=>>>", chequeFirmid);
console.log("ChequeFirmName=>>>", chequefirmname);
// ****************Get Firm Cheque Slip ************************

console.log("firstbank",firstbank)
//************************Function to add Multi Form Field Data********************************** */
  let handleChangee = (i, e) => {
    console.log("valuehhhh", e);
    var newFormValues = [...formValues];
    newFormValues[i][e.target?.name] = e.target.value;
    newFormValues[i].customerid = customerid;
    newFormValues[i].customerbank = firstbank;
    newFormValues[i].customerbranch = firstbranch;
    console.log("customeriddddddd", customerid);
    setFormValues(newFormValues);
  };
  console.log(formValues);
  //************************Function to add Multi Form Field Data******************************* */


 //************************Function to add Multi Form Fields******************************* */
  let addFormFields = () => {
    setFormValues([
      ...formValues,
      { 
        customerid:"",
        customerbank: "",
        customerbranch: "",
        chequedate: "",
        customer: "",
        amount: "",
        chequeno: "",
      },
    ]);
  };
//*************************Function to add Multi Form Fields********************************** */



//************************Removing Multi Form Fields*************************** */
  let removeFormFields = (i) => {
    let newFormValues = [...formValues];
    newFormValues.splice(i, 1);
    setFormValues(newFormValues);
  };
  //********************Removing Multi Form Fields*********************** */



 //************************Logging Multi Form Fields*************************** */
  let handleSubmit = (event) => {
    event.preventDefault();
    alert(JSON.stringify(formValues));
  };
  //**************************Logging Multi Form Fields************************* */


//**************************Get Customer List****************************** */
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
    console.log("customerid",customerid);
  };
//************************Get Customer List****************** */


//********************Get Bank List******************** */
  const getData = async () => {
    let result = await fetch("http://localhost:8000/getbank", {
      method: "GET",

      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + token,
      },
    });
    result = await result.json();
    console.log(result);
    var bankarray = [];
    var bank = result.forEach((item) => {
      bankarray.push(item.banknamelist);
    });
    console.log(bankarray);
    setcustomerbankdata(bankarray);
    console.log(customerbankdata);


  };
  console.log("customer naweeeee",customername);
  // console.log("customer Bank", customerbankname)
  //********************Get Bank List****************************** */

 
//**************************************************** */
  const formSubmit = async (e) => {
    e.preventDefault();
    console.log(chequeFirmid, chequefirmname, formValues);
    let result = await fetch("http://localhost:8000/createchequecollection", {
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
    console.log("bank=>>>",formValues[0].customerbank);
    if (result.status) {    
      success();
      setcustomerid('');
      setchequeFirmid('');
      // setchequefirmname(null);
      setFormValues([
              { 
          customerid:"",
          customerbank: "",
          customerbranch: "",
          chequedate: "",
          customer: "",
          amount: "",
          chequeno: "",
        },
      ]);      
      // setTimeout(() => {
      //   history.push("/admin/viewchequeslip");
      // }, 2000);
    } else {
      failure();
    }
    console.warn(result);
  };
//********************************** */


//******************Function to Get Customer Bank********************************* */
  const getCustomerBank = async () => {
    if (!customerid) return;
    else {
      console.log(customerid);
      let result = await fetch("http://localhost:8000/getcustomerbank", {
        method: "post",
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer " + token,
        },
        body: JSON.stringify({ customerid }),
      });
      result = await result.json();
         if (editable===false){
       setfirstbank(result?.customerbank[0]?.partybankname);
       setfirstbranch(result?.customerbank[0]?.partybranch);
         }
     
    }
  };
  //***********************Function to Get Customer Bank**************************** */


  //********************FAILURE NOTIFICATION******************************* */
  const failure=()=>{toast.error('🦄 Something Wrong! Please Try Again !!!', {
    position: "top-right",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "light",
    });}
  //*********************FAILURE NOTIFICATION******************************** */

  //*******************SUCCESS NOTIFICATION************************************ */
  const success = () => {toast.success('Cheque Collection Data Added Successfully !!!!', {
    position: "top-right",
    autoClose: 2000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "light",
    });};
  //********************SUCCESS NOTIFICATION************************************** */

//*********************************************************** */
    const cusomerbankadded = async (e) => {
      e.preventDefault();
      console.log("Customer bank added");

      let result = await fetch("http://localhost:8000/createpartybank", {
        method: "post",
        body: JSON.stringify({
          formValues,
        }),
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer " + token,
        },
      });
      result = await result.json();
      console.log("result will be customer bank",result);
    }
//********************************************************** */

  useEffect(() => {
   getFirmChequeSlip();
    getParty();
    getData();
    getCustomerBank()
  }, [customerid,customername,firstbank,firstbranch,editable])
  
  return (
    <>
      <Container>
        <div className="mycard-container">
          <Card className="card-bg">
            <CardBody className="mycard">
              <div className="card-navbar">
                <div className="card-nav">
                  <Button
                    title="Add Form"
                    type="button"
                    onClick={() => addFormFields()}
                    className="add-company-btn"
                  >
                    <AddIcon sx={{ color: 'white' }} />
                  </Button>

                  <div className="d-flex w-100 navdivfirm ">
                    <span >Firm Name</span>
                    <Autocomplete
                          style={{width : '50%',backgroundColor : '#FFFFFF'}}
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

                 

                  <Button
                        className="add-company-btn"
                        onClick={(e) => {   
                          formSubmit(e) 
                          cusomerbankadded(e)       
                        }}
                        size="sm"
                      >
                        Submit
                      </Button>
                </div>
              </div>
              <form onSubmit={handleSubmit} >
                
                {formValues.map((element, index) => (
                  <div className="form-box bank-form d-flex flex-column p-3">
                    <div className="d-flex">
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
                        <div className="input">
                        <label
                            className="form-control-label"
                            htmlFor="input-email"
                          >
                            Customer Name
                          </label>
                          <Autocomplete
                            disablePortal
                            name="customer"
                            id="combo-box-demo"
                            options={partydata}
                            sx={{ width: '100%' }}
                            renderInput={(params) => (
                              <TextField {...params} variant="outlined" />
                            )}
                            isOptionEqualToValue={(option, value) => option ===value}
                            getOptionLabel={(option) => (option ? option : "")}
                            value={element.customer || ""}
                            ref={ref2}
                            onInputChange={(e, v, r) => {
                              console.log(e);
                              getParty();
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
                      
                    </div>
                    <div className="d-flex">
                    <div className="input">
                        <label
                            className="form-control-label"
                            htmlFor="input-email"
                          >
                            Customer Bank
                          </label>
                          <Input 
                          type="text" 
                          className="form-control-alternative"
                              defaultValue=""
                              id="input-city"
                          autoComplete="off" 
                          placeholder="Customer Bank Name"
                          name="customerbank"
                          value={firstbank|| ""}
                          onChange = {(e)=> {handleChangee(index, e);
                            seteditable(true)
                            setfirstbank(e.target.value)
                          console.log(e,"hello bhaiya")}}
                          
                          />

                            
                       
                        </div>
                        <div className="input">
                        <label
                            className="form-control-label"
                            htmlFor="input-email"
                          >
                            Customer Branch
                          </label>
                          <Input
                           autocomplete ="off"
                              name="customerbranch"
                              className="form-control-alternative"
                              defaultValue=""
                              id="input-city"
                              placeholder="Customer Branch Name"
                              type="text"
                              value={  firstbranch|| ""}
                              onChange={(e) => {
                                handleChangee(index, e);
                                setfirstbranch(e.target.value)
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
                              Cheque No.
                            </label>
                            <Input
                             autocomplete ="off"
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
                        <div className="input">
                        <label
                              className="form-control-label"
                              htmlFor="input-city"
                            >
                              Amount
                            </label>
                            <Input
                             autocomplete ="off"
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
                          title="Delete Form"
                          type="button"
                          className="btn btn-danger cancel-btn"
                          onClick={() => removeFormFields(index)}
                        >
                           <RemoveIcon sx={{ color: 'white' }} />
                          {/* <i className="fa fa-minus" aria-hidden="true" /> */}

                        </button>
                      ) : null}
                    </div>
                  </div>
                ))}
              </form>
            </CardBody>
          </Card>
        </div>
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
      </Container>
    </>
  );
}

export default ChequeCollection;
