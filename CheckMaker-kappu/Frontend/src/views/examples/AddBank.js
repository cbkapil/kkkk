import React, { useState, useRef,useEffect } from "react";
import { TextField, Autocomplete } from "@mui/material";
import {
  CardBody,
  FormGroup,
  Input,
  Container,
  Button,
  Card,
} from "reactstrap";
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function AddBank() {
    const token = localStorage.getItem("token");
  const [formValues, setFormValues] = useState([
    { bankname: "", ifsc: "", branch: "", accountno: "" },
  ]);
  const ref0 = useRef();
  const [bankdata, setBankData] = useState("");
  const [firmid, setfirmid] = useState("");
  const [firmdata, setFirmData] = useState([]);
  const [firmnamee, setfirmnamee] = useState("");


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
    console.log("firmidf",firmid);
    const firmm = firmname?.firmname;
    setfirmnamee(firmm);
    console.log("Firmnamee",firmnamee);
  };

  let handleChange = (i, e) => {
    console.log("valuehhhh", e);
    let newFormValues = [...formValues];
    newFormValues[i][e.target?.name] = e.target.value;
    setFormValues(newFormValues);
  };
  console.log(formValues);
  let addFormFields = () => {
    setFormValues([
      ...formValues,
      { bankname: "", ifsc: "", branch: "", accountno: "" },
    ]);
  };

  let removeFormFields = (i) => {
    let newFormValues = [...formValues];
    newFormValues.splice(i, 1);
    setFormValues(newFormValues);
  };

  let handleSubmit = (event) => {
    event.preventDefault();
    alert(JSON.stringify(formValues));
  };

  const getBankData = async () => {
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
    setBankData(bankarray);
    console.log(bankdata);
  };

  const bankLink = async (e)=>{
     e.preventDefault();
    let result = await fetch("http://localhost:8000/BankLink", {
        method: "POST",
  
        headers: {
            "Content-Type": "application/json",
            Authorization: "Bearer " + token,
        },
        body : JSON.stringify({
            firmid,
            firmnamee,
            formValues
        })
    });
    result = await result.json();
    console.log(result);

    if(result.status){

        success();
  
        setfirmid('')
        setfirmnamee('')
        setFormValues([
          
          { bankname: "", ifsc: "", branch: "", accountno: "" },
        ]);
    }else{
      failure();
    }
    console.log("resukltsdsdgsd", result);
}

  console.log("form values",formValues);

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

  const success = () => {

    toast.success('Bank Data Added Successfully !!!!', {
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

 
 
  useEffect(() => {
    getBankData();
    getFirm();
  
   
  }, [firmid,firmnamee,])
  
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
                    {/* <i className="fa fa-plus-circle" aria-hidden="true" style={{color : '#FFFFFF'}} /> */}
                    <AddIcon sx={{ color: 'white' }} />
                  </Button>

                  <div className="d-flex w-100 navdivfirm ">
                    <span >Firm Name</span>
                    <Autocomplete
                            style={{width : '50%',backgroundColor : '#FFFFFF'}}
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
                  
                  </div>

                

                  <Button
                        className="add-company-btn"
                        onClick={(e) => {   
                          bankLink(e)          
                        }}
                        size="sm"
                      >
                        Submit
                      </Button>
                </div>
              </div>
              <form onSubmit={handleSubmit}>
                
                {formValues.map((element, index) => (
                  <div className="form-box bank-form d-flex flex-column">
                    <div className="d-flex">
                      <div className="input">
                        <label
                          className="form-control-label"
                          htmlFor="bankname"
                        >
                          Bank Name
                        </label>
                        <Autocomplete
                          name="bankname"
                          disablePortal
                          id="bankname"
                          options={bankdata}
                          sx={{ width: "48%", height: "10" }}
                          renderInput={(params) => <TextField {...params} />}
                          ref={ref0}
                          onInputChange={(e, v, r) => {
                            
                            
                            if (r === "reset") console.log( v, r);
                          }}
                          value={element.bankname || ""}
                          getOptionLabel={(option) => option}
                          onChange={(e, v, r) => {
                            console.log(ref0.current.getAttribute("name"));
                            let newFormValues = [...formValues];
                            newFormValues[index][
                              ref0.current.getAttribute("name")
                            ] = v;
                            setFormValues(newFormValues);
                          }}
                        />
                      </div>
                    </div>
                    <div className="d-flex">
                      <div className="input">
                        <FormGroup>
                          <label
                            className="ifsc form-control-label"
                            htmlFor="input-email"
                          >
                            IFSC Code
                          </label>

                          <Input
                          autocomplete ="off"
                            name="ifsc"
                            className="form-control-alternative"
                            id="ifsc"
                            type="text"
                            value={element.ifsc || ""}
                            onChange={(e) => {
                              handleChange(index, e);
                            }}
                          />
                        </FormGroup>
                      </div>
                      <div className="input">
                        <FormGroup>
                          <label
                            className="branch form-control-label"
                            htmlFor="branch"
                          >
                            Branch Name
                          </label>
                          <Input
                           autocomplete ="off"
                            name="branch"
                            className="form-control-alternative"
                            defaultValue=""
                            id="branch"
                            type="text"
                            value={element.branch || ""}
                            onChange={(e) => {
                              handleChange(index, e);
                            }}
                          />
                        </FormGroup>
                      </div>
                    </div>
                    <div className="d-flex">
                      <div className="input">
                        <FormGroup>
                          <label
                            className="form-control-label"
                            htmlFor="input-city"
                          >
                            Account Number
                          </label>
                          <Input
                           autocomplete ="off"
                            name="accountno"
                            className="form-control-alternative"
                            defaultValue=""
                            id="accountno"
                            type="Number"
                            value={element.accountno || ""}
                            onChange={(e) => {
                              handleChange(index, e);
                            }}
                          />
                        </FormGroup>
                      </div>
                      <div className="input">
                        <FormGroup>
                          <label
                            className="form-control-label"
                            htmlFor="input-city"
                          >
                            Confirm Account Number
                          </label>
                          <Input
                           autocomplete ="off"
                            className="form-control-alternative"
                            defaultValue=""
                            id="input-city"
                            type="text"
                          />
                        </FormGroup>
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

export default AddBank;
