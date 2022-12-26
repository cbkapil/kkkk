import {
  
  CardBody,
  FormGroup,

  Input,
  Container,
 
  Button,
  Card,

  Row,
} from "reactstrap";



import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
// core components
import { forwardRef } from "react";
import MaterialTable from "material-table";
import { useState, useEffect } from "react";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";

import { useHistory } from "react-router-dom";
import SyncLoader from "react-spinners/SyncLoader";
import AddBox from "@material-ui/icons/AddBox";
import ArrowDownward from "@material-ui/icons/ArrowDownward";
import Check from "@material-ui/icons/Check";
import ChevronLeft from "@material-ui/icons/ChevronLeft";
import ChevronRight from "@material-ui/icons/ChevronRight";
import Clear from "@material-ui/icons/Clear";
import DeleteOutline from "@material-ui/icons/DeleteOutline";
import Edit from "@material-ui/icons/Edit";
import FilterList from "@material-ui/icons/FilterList";
import FirstPage from "@material-ui/icons/FirstPage";
import LastPage from "@material-ui/icons/LastPage";
import Remove from "@material-ui/icons/Remove";
import SaveAlt from "@material-ui/icons/SaveAlt";
import Search from "@material-ui/icons/Search";
import ViewColumn from "@material-ui/icons/ViewColumn";

import { ThemeProvider, createTheme } from "@mui/material";
import { useRef } from "react";


const states = [
  {1: "Andhra Pradesh"},
  {2: "Arunachal Pradesh"},
  {3: "Assam"},
  {4: "Bihar"},
  {5: "Chhattisgarh"},
  {6: "Goa"},
  {7: "Gujarat"},
  {8: "Haryana"},
  {9: "Himachal Pradesh"},
  {10: "Jammu and Kashmir"},
  {11: "Jharkhand"},
  {12: "Karnataka"},
  {13: "Kerala"},
  {14: "Madhya Pradesh"},
  {15: "Maharashtra"},
  {16: "Manipur"},
  {17: "Meghalaya"},
  {18: "Mizoram"},
  {19: "Nagaland"},
  {20: "Odisha"},
  {21 : "Punjab"},
  {22 : "Rajasthan"},
  {23 : "Sikkim"},
  {24 : "Tamil Nadu"},
  {25 : "Telangana"},
  {26 : "Tripura"},
  {27 : "Uttarakhand"},
  {28 : "Uttar Pradesh"},
  {29 : "West Bengal"},
  {30 : "Andaman and Nicobar Islands"},
  {31 : "Chandigarh"},
  {32 : "Dadra and Nagar Haveli"},
  {33 : "Daman and Diu"},
  {34 : "Delhi"},
  {35 : "Lakshadweep"},
  {36 : "Puducherry"}]

const Company = () => {

  let [color, setColor] = useState("#406647");
  const [loading, setloading] = useState(false);
  const [checked, setChecked] = useState(false);
  const [next, setnext] = useState(false);


  const [customername, setcustomername] = useState("");
  const [email, setemail] = useState("");
  
  const [address, setaddress] = useState("");
  const [city, setcity] = useState("");
  const [state, setstate] = useState("");
  const [pincode, setpincode] = useState("");
  const [phonenumber, setphonenumber] = useState("");
  const[customerdata, setcustomerdata ] = useState([]);
 

  const [bankname, setbankname] = useState("");
  const [firmid, setfirmid] = useState("");
  const [ifsc, setifsc] = useState("");
  const [branchname, setbranchname] = useState("");
  const [account, setaccount] = useState("");
  const [datalen, setdatalen] = useState(0);
  const [datalist, setdatalist] = useState([]);

  const [postalCode ,setPostalCode] = useState(null);

  const [data, setData] = useState([]); //table data
  const ref0 = useRef();


  const [fetching, setFetching] = useState(false);

  // get city and state 
  async function getCityAndState(pin){
    setFetching(true)
    fetch(`https://api.postalpincode.in/pincode/${pin}`)
      .then(res => res.json())
      .then(data => {
        if(data[0].Status === "Success"){
     
          setcity(data[0].PostOffice[0].District)

          setstate(data[0].PostOffice[0].State)
          setFetching(false)
        }else{
          setFetching(false)
        }
      })
      .catch(err => {
        setFetching(false)
        console.log(err)
      })
  }

  const defaultMaterialTheme = createTheme();
  useEffect(() => {
    setloading(true);
    getFirm();
    getFirmdata();
    getcustomerdata();

    setTimeout(() => {
      setloading(false);
    }, 500);
  }, [checked, next, datalen]);

  const history = useHistory();
  const token = localStorage.getItem("token");
  console.log(token);

 

 


  const tableIcons = {
    Add: forwardRef((props, ref) => <AddBox {...props} ref={ref} />),
    Check: forwardRef((props, ref) => <Check {...props} ref={ref} />),
    Clear: forwardRef((props, ref) => <Clear {...props} ref={ref} />),
    Delete: forwardRef((props, ref) => <DeleteOutline {...props} ref={ref} />),
    DetailPanel: forwardRef((props, ref) => (
      <ChevronRight {...props} ref={ref} />
    )),
    Edit: forwardRef((props, ref) => <Edit {...props} ref={ref} />),
    Export: forwardRef((props, ref) => <SaveAlt {...props} ref={ref} />),
    Filter: forwardRef((props, ref) => <FilterList {...props} ref={ref} />),
    FirstPage: forwardRef((props, ref) => <FirstPage {...props} ref={ref} />),
    LastPage: forwardRef((props, ref) => <LastPage {...props} ref={ref} />),
    NextPage: forwardRef((props, ref) => <ChevronRight {...props} ref={ref} />),
    PreviousPage: forwardRef((props, ref) => (
      <ChevronLeft {...props} ref={ref} />
    )),
    ResetSearch: forwardRef((props, ref) => <Clear {...props} ref={ref} />),
    Search: forwardRef((props, ref) => <Search {...props} ref={ref} />),
    SortArrow: forwardRef((props, ref) => (
      <ArrowDownward {...props} ref={ref} />
    )),
    ThirdStateCheck: forwardRef((props, ref) => (
      <Remove {...props} ref={ref} />
    )),
    ViewColumn: forwardRef((props, ref) => <ViewColumn {...props} ref={ref} />),
  };
  var columns = [
    { title: "id", field: "_id", hidden: true },
    { title: "Customer Name", field: "partyname" },
    { title: "Email", field: "email" },
    {
      title: "City",
      field: "city",
    },
    { title: "Phone Number", field: "phonenumber" },
  ];

  function validateEmail(email) {
    const re =
      /^((?:[a-z0-9!#$%&'+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'+/=?^_`{|}~-]+)|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])")@(?:(?:[a-z0-9](?:[a-z0-9-][a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-][a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\]))$/;
    return re.test(String(email).toLowerCase());
  }

  const handleRowUpdate = async (newData, oldData, resolve) => {
    console.log(newData);
    console.log(oldData);

    let result = await fetch(`http://localhost:8000/update/${newData._id}`, {
      method: "put",
      body: JSON.stringify({
        newData,
      }),
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + token,
      },
    });
    result = await result.json();
    console.log(result);
    const dataUpdate = [...datalist];
    const index = oldData.tableData.id;
    dataUpdate[index] = newData;
    setdatalist([...dataUpdate]);
    resolve();
  };

  const handleRowDelete = async (oldData, resolve) => {
    console.log("ohohohooo", oldData._id);
    let result = await fetch(`http://localhost:8000/delete/${oldData._id}`, {
      method: "delete",

      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + token,
      },
    });
    result = await result.json();
    console.log(result);
    const dataDelete = [...datalist];
    const index = oldData.tableData.id;
    dataDelete.splice(index, 1);
    setdatalist([...dataDelete]);
    resolve();
  };



  const getFirm = async () => {
    let result = await fetch("http://localhost:8000/getfirm", {
      method: "GET",

      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + token,
      },
    });
    result = await result.json();
    var keys = Object.keys(result.firmDatas);

    var len = keys.length;
    console.log(len);
    setdatalen(len);
  };

  const getcustomerdata = async () => {
    let result = await fetch("http://localhost:8000/getcustomerdata", {
      method: "GET",

      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + token,
      },
    });
    result = await result.json();
    console.log("allcustomerdata", result);
    setcustomerdata(result);
   
  };


  const getFirmdata = async () => {
    let result = await fetch("http://localhost:8000/getuser", {
      method: "GET",

      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + token,
      },
    });
    result = await result.json();
    console.log("alldata", result);
    var temparray = [];
    const displaydata = result.firmDatas.firmid.forEach((item) => {
      item.bankLink.forEach((ut) => {
        return temparray.push(ut);
      });
    });
    console.log(temparray);
    setdatalist(temparray);
    console.log([...datalist]);
  };

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
  const success = () => {toast.success('Firm Data Added Successfully !!!!', {
    position: "top-right",
    autoClose: 2000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "light",
    });};


    const firmSubmit = async (e) => {
      e.preventDefault();
  
      if (!customername) {
        alert("Please Enter name");
        return;
      }
      if (!email) {
        alert("Please Enter email");
        return;
      }
  
      if (!address) {
        alert("Please Enter address");
        return;
      }
      if (!city) {
        alert("Please Enter city");
        return;
      }
      if (!state) {
        alert("Please Enter state");
        return;
      }
      if (!pincode) {
        alert("Please Enter pincode");
        return;
      }
      if (!phonenumber) {
        alert("Please Enter phonenumber");
        return;
      }
   
  
      let result = await fetch("http://localhost:8000/createparty", {
        method: "post",
        body: JSON.stringify({
          customername,
          email,
          address,
          city,
          state,
          pincode,
          phonenumber,
          
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
        setcustomername('');
        setemail('');
          setaddress('');
          setcity('');
          setstate('');
          setpincode('');
          setphonenumber('');
          
  
      } else {
        failure()
      }
  
      console.warn(result);
    };

 

  return (
    <>
      {/* <Header /> */}

      {loading ? (
        
        <div className="loader">
           <SyncLoader
          color={color}
          loading={loading}
          size={40}
          aria-label="Loading Spinner"
          data-testid="loader"
        />
        </div>
      ) : (
        <div>

            {checked === false && next === false ? (
                    <Container>
                      <div className="mycard-container">
                        <Card className="card-bg">
                          <CardBody className="mycard">
                            <div className="card-navbar">
                              <div className="card-nav">

                                <h2 className="m-0 p-0 text-white">CUSTOMER DETAILS</h2>

                                <Button
                                  className="add-company-btn"
                                  onClick={(e) => {
                                    setChecked(true);
                                    console.log(checked);
                                  }}
                                  size="sm"
                                >
                                  Add Customer
                                </Button>
                              </div>
                            </div>
                            <div className="addcompany-form">
                      <Row className="mt-2">
                        <div className="col ">
                          <Card className="my-card">
                            
                            <ThemeProvider theme={defaultMaterialTheme}>
                              <MaterialTable
                                title=""
                                columns={columns}
                                data={customerdata}
                                icons={tableIcons}
                                editable={{
                                  onRowUpdate: (newData, oldData) =>
                                    new Promise((resolve) => {
                                      handleRowUpdate(
                                        newData,
                                        oldData,
                                        resolve
                                      );
                                    }),
                                  onRowDelete: (oldData) =>
                                    new Promise((resolve) => {
                                      handleRowDelete(oldData, resolve);
                                    }),
                                }}
                                options={{
                                  sorting: true,
                                  search: true,
                                  searchFieldAlignment: "right",
                                  searchAutoFocus: true,
                                  searchFieldVariant: "standard",
                                  filtering: true,
                                  paging: true,
                                  pageSizeOptions: [2, 5, 10, 20, 25, 50, 100],
                                  pageSize: 5,
                                  paginationType: "stepped",
                                  showFirstLastPageButtons: false,
                                  paginationPosition: "bottom",
                                  exportButton: true,
                                  exportAllData: true,
                                  exportFileName: "TableData",
                                  addRowPosition: "first",
                                  actionsColumnIndex: -1,
                                
                                  grouping: false,
                                  columnsButton: true,
                                  rowStyle: (data, index) =>
                                    index % 2 === 0
                                      ? { background: "#f5f5f5" }
                                      : null,
                                  headerStyle: {
                                    background: "#406647",
                                    color: "#fff",
                                  },
                                }}
                              />
                            </ThemeProvider>
                          </Card>
                        </div>
                      </Row>
                            </div>
                          </CardBody>
                        </Card>
                      </div>
                    </Container>
            ) : checked === true && next === false ? (
              <Container>
                <div className="mycard-container">
                  <Card className="card-bg">
                  <CardBody className="mycard">
                  <div className="card-navbar">
                  <div className="card-nav">

                    <h2>Enter Customer Information</h2>
                    
                    <Button
                      className="add-company-btn"
                      onClick= {(e)=>{
                        firmSubmit(e)
                      }}
                      size="sm"
                    >
                      Submit
                    </Button>
                  </div>
                </div>
                  <div className="addcompany-form">
                <div className="form-box d-flex flex-column p-3">
                  <div className="d-flex">
                    <div className="input1">
                      <FormGroup>
                        <label
                          className="form-control-label"
                          htmlFor="input-username"
                        >
                          Customer Name
                        </label>
                                            
                        <Input
                            className="form-control-alternative"
                            defaultValue=""
                            id="input-username"
                            type="text"
                            autoComplete="off"
                            value={customername}
                            onChange={(e) => {
                              setcustomername(e.target.value);
                            }}
                          />
                      </FormGroup>
                    </div>
                    <div  className="input2">
                      <FormGroup>
                        <label
                          className="form-control-label"
                          htmlFor="input-email"
                        >
                          Email address
                        </label>
                        <Input
                          className="form-control-alternative"
                          id="input-email"
                          type="email"
                          autoComplete = "off"
                          value={email}
                         
                          onChange={(e) => {
                            setemail(e.target.value);
                          }}
                        />
                      </FormGroup>
                    </div>
                  </div>
                
                {/* Address */}
               
               
                  <div className="d-flex">
                    <div className="input">
                      <FormGroup>
                        <label
                          className="form-control-label"
                          htmlFor="input-address"
                        >
                          Address
                        </label>
                        <Input
                          className="form-control-alternative"
                          defaultValue=""
                          id="input-address"
                          type="text"
                          value={address}
                          autoComplete = "off"
                          onChange={(e) => {
                            setaddress(e.target.value);
                          }}
                        />
                      </FormGroup>
                    </div>
                    <div className="input">
                    <FormGroup>
                      <label
                        className="form-control-label"
                        htmlFor="input-country"
                      >
                        Postal code
                      </label>
                      <Input
                        className="form-control-alternative"
                        id="input-postal-code"
                        type="text"
                        value={pincode}
                        autoComplete = "off"
                        onChange={(e) => {
                          setpincode(e.target.value);
                          if(e.target.value.length === 6){
                            console.log('PINCODE:', e.target.value)
                            getCityAndState(e.target.value)
                          }
                        }}
                      />
                    </FormGroup>                              
                    </div>
                                        
                </div>
                <div className="d-flex">
                <div className={fetching ? 'input fetching' : "input"}>
                      <FormGroup>
                        <label
                          className="form-control-label"
                          htmlFor="input-city"
                        >
                          City
                        </label>
                        <Input
                          className="form-control-alternative"
                          defaultValue=""
                          id="input-city"
                          type="text"
                          value={city}
                          autoComplete = "off"
                          onChange={(e) => {
                            setcity(e.target.value);
                          }}
                        />
                      </FormGroup>
                  </div> 
                  <div className={fetching ? 'input fetching' : "input"}>
                    <FormGroup>
                      <label
                        className="form-control-label"
                        htmlFor="input-country"
                      >
                        State
                      </label>

                      <Input
                        className="form-control-alternative"
                        defaultValue=""
                        id="input-country"
                        type="select"
                        value={state}
                        onChange={(e) => {
                          setstate(e.target.value);
                        }}
                      >
                      <option value="">--- select state ---</option>
                        {
                          states.map((state, index )=> (
                            <option key={index} value={state[index+1]}>{state[index+1]}</option>
                          ))
                        }
                      </Input>
                    </FormGroup>
                  </div>
                  
                  </div>
                  <div className="d-flex">
                    <div className="input">
                    <FormGroup>
                      <label
                        className="form-control-label"
                        htmlFor="input-username"
                      >
                        Phone Number 1
                      </label>
                      <Input
                        className="form-control-alternative"
                        defaultValue=""
                        id="input-username"
                        type="text"
                        autoComplete = "off"
                        value={phonenumber}
                        onChange={(e) => {
                          setphonenumber(e.target.value);
                        }}
                      />
                    </FormGroup>
                    </div>
                      
                  
                    
                  </div>
              

                </div>
                
                </div>
              
              
                </CardBody>
                </Card>
                </div>
              </Container>
            ):(null)}

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
};

export default Company;