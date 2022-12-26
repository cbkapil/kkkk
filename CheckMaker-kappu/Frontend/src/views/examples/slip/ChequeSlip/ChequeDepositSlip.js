import { useEffect, useState } from "react";
import TextField from "@mui/material/TextField";

import {Input,} from "reactstrap";

import * as React from "react";
import AddBox from '@material-ui/icons/AddBox';
import ArrowDownward from '@material-ui/icons/ArrowDownward';
import Check from '@material-ui/icons/Check';
import ChevronLeft from '@material-ui/icons/ChevronLeft';
import ChevronRight from '@material-ui/icons/ChevronRight';
import Clear from '@material-ui/icons/Clear';
import DeleteOutline from '@material-ui/icons/DeleteOutline';
import Edit from '@material-ui/icons/Edit';
import FilterList from '@material-ui/icons/FilterList';
import FirstPage from '@material-ui/icons/FirstPage';
import LastPage from '@material-ui/icons/LastPage';
import Remove from '@material-ui/icons/Remove';
import SaveAlt from '@material-ui/icons/SaveAlt';
import Search from '@material-ui/icons/Search';
import ViewColumn from '@material-ui/icons/ViewColumn';
import { forwardRef } from "react";
import axios from "axios"
import { Card, CardBody } from "reactstrap"

import SyncLoader from "react-spinners/SyncLoader";
import MaterialTable from "material-table";
import Form from "react-bootstrap/Form";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button }from 'reactstrap'

import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker
} from "@material-ui/pickers";
import "date-fns";
import DateFnsUtils from "@date-io/date-fns";

import Autocomplete from "@mui/material/Autocomplete";
import { toDate } from "date-fns";

const ChequeDepositSlip = () => {
  const [loading, setloading] = useState(false);
  const [dataa, setdataa] = useState([]);
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  const [searchtext, setsearchtext] = useState();
  let [color, setColor] = useState("#05775c");
  const [bankdata, setBankData] = useState("");

  const [chequeFirmData, setchequeFirmData] = useState([]);
  const [chequeFirmid, setchequeFirmid] = useState("");
  const [chequeBankData, setchequeBankData] = useState([]);
  const [chequeBankid, setChequebankid] = useState("");
  const [chequeBranchData, setchequeBranchData] = useState([]);
  const [chequeBranchid, setchequeBranchid] = useState("");
  const[accountno, setaccountno] = useState("");
  const [chequefirmname, setchequefirmname] = useState("");
  const[todate, settodate] = useState(new Date().toISOString());
  const [print,setprint] = useState(false);
const[docids,setdocids]=useState([])
const [docno,setdocno]=useState(0)
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

    // ****************Get Bank ChequeSlip Slip ************************
  const getchequeBank = async (firmarray) => {
    if (!chequeFirmid) return;
    else {

console.log("====================>>>>>>> ",chequeFirmid)
      
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
  
  // ****************Get Cheque Slip Account ************************

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
      setaccountno(result[0]?.account);
      console.log("ChequeAccount=>>>", accountno);
      
    } else return;
  };


  const getdocno= async () => {
  
     if (chequeBankid){

      console.log("me hu console.log");
      let result = await fetch("http://localhost:8000/getdocno", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer " + token,
        },
      })
      result = await result.json()
      console.log(result?.length)
if(result.length<1) {

  setdocno(result.length+1)
}
else{
  var newarray=[]
 result.map(item=>{
  newarray.push(item.docno)

 })
 newarray.sort(function(a, b){return a-b});
 console.log(newarray)
 
  setdocno(Math.max(...newarray)+1)

}
console.log(docno)
     }else  return;
  };



  useEffect(() => {
   getFirmChequeSlip();
   getchequeBank();
   getChequeBranch();
   getChequeAccount();
   
  getdocno()
  }, [chequeFirmid,chequeBankid,chequeBranchid, accountno,print,docids,docno])
  

  const tableIcons = {
    Add: forwardRef((props, ref) => <AddBox {...props} ref={ref} />),
    Check: forwardRef((props, ref) => <Check {...props} ref={ref} />),
    Clear: forwardRef((props, ref) => <Clear {...props} ref={ref} />),
    Delete: forwardRef((props, ref) => <DeleteOutline {...props} ref={ref} />),
    DetailPanel: forwardRef((props, ref) => <ChevronRight {...props} ref={ref} />),
    Edit: forwardRef((props, ref) => <Edit {...props} ref={ref} />),
    Export: forwardRef((props, ref) => <SaveAlt {...props} ref={ref} />),
    Filter: forwardRef((props, ref) => <FilterList {...props} ref={ref} />),
    FirstPage: forwardRef((props, ref) => <FirstPage {...props} ref={ref} />),
    LastPage: forwardRef((props, ref) => <LastPage {...props} ref={ref} />),
    NextPage: forwardRef((props, ref) => <ChevronRight {...props} ref={ref} />),
    PreviousPage: forwardRef((props, ref) => <ChevronLeft {...props} ref={ref} />),
    ResetSearch: forwardRef((props, ref) => <Clear {...props} ref={ref} />),
    Search: forwardRef((props, ref) => <Search {...props} ref={ref} />),
    SortArrow: forwardRef((props, ref) => <ArrowDownward {...props} ref={ref} />),
    ThirdStateCheck: forwardRef((props, ref) => <Remove {...props} ref={ref} />),
    ViewColumn: forwardRef((props, ref) => <ViewColumn {...props} ref={ref} />)
  };
  const token = localStorage.getItem("token");
  console.log(token);
  const searchbydate = async (e) => {
    e.preventDefault();
    console.log("hi from search");
    if ((chequeFirmid || chequefirmname)&& todate) {
      let result = await fetch("http://localhost:8000/searchbydatecheque", {
        method: "post",
        body: JSON.stringify({ todate,chequeFirmid,chequefirmname }),
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer " + token,
        },
      });
      result = await result.json();
      var temparray2=[]
      var temparray=[]
      temparray=result
      console.log("gfggggggghggh",temparray)
      temparray.map((item,index)=>{
        if(item.printed === false){
          temparray2.push(item);
        }


      })
      console.log("temparray2--------",temparray2);
      setdataa(temparray2);
    } else return;
  };

// **********************************
const submitChequeData= async (dataa) => {
  
console.log("chequedata",dataa)
  if (accountno && chequeBankid && chequeBranchid ) {
    
    console.log("hemlo ======================================================x",dataa,docno)
    let result = await fetch("http://localhost:8000/createchequeslip", {
      method: "post",
      body: JSON.stringify({ docno,dataa,accountno , chequeBankid , chequeBranchid }),
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + token,
      },
    });
    result = await result.json();
console.log(result)
    
  } else return;
};


// const senddocketdata= async () => {
  
 
//     if ( docids) {
      
//       console.log("doc id mil gyi ",docids)
//       let result = await fetch("http://localhost:8000/senddocketdata", {
//         method: "post",
//         body: JSON.stringify({ docids }),
//         headers: {
//           "Content-Type": "application/json",
//           Authorization: "Bearer " + token,
//         },
//       });
//       result = await result.json();

//       console.log(result)
      
//     } else return;
//   };







  const sendprintdata = async (dataa) => {
    
    if((chequeBankid === '') ||  chequeBranchid === '' ||  accountno === ''){
      alert('Please Select Bank,Branch && Account Number');
    }else{
      setprint(true);
      console.log('print---------------',print);
      await axios({
        headers : {
          "Content-Type": "application/json",
          Authorization: "Bearer " + token,
        },
        url : 'http://localhost:8000/chequeprint',
        method : 'POST',
        data:JSON.stringify({dataa,chequeBankid,chequeBranchid,accountno,print}),
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
   
    
  };




  

  const searchbytext = async () => {
    console.log("hi from search");
    if (searchtext) {
      let result = await fetch("http://localhost:8000/searchbyword", {
        method: "post",
        body: JSON.stringify({ searchtext }),
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer " + token,
        },
      });
      result = await result.json();
      console.log("hahahahahahha", result);
      setdataa(result);
    } else return;
  };

  const handleRowUpdate = async (newData, oldData, resolve) => {
    console.log(newData);
    console.log(oldData);

    let result = await fetch(`http://localhost:8000/updatecheque/${newData._id}`, {
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
    const dataUpdate = [...dataa];
    const index = oldData.tableData.id;
    dataUpdate[index] = newData;
    setdataa([...dataUpdate]);
    resolve();
  };

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
    setBankData(bankarray);
    console.log(bankdata);
  };

  const onGridReady = async () => {
    let result = await fetch("http://localhost:8000/getchequeslips", {
      method: "GET",

      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + token,
      },
    });
    result = await result.json();
    console.log(result);
    let data = [];
    result.Chequeslips.chequeslips.forEach((element) => {
      data.push(element);
    });
    setdataa(data);
    console.log(dataa);
  };

  const columns=[{title:"Firm Name",field:"firmname"},
  {title:"Cheque No",field:"chequeno"},
  {title:"Amount",field:"amount"},
  
  {title:"Status",field:"status", render:(rowData)=><div >{rowData.printed===true?( <Button variant="outline-danger"  disabled>Printed</Button>):(<p>Not Printed</p>)}</div>},
  {title:"Cheque Date",field:"chequedate",editComponent: (props,newData,rowData) => {
    console.log(props);
    console.log(newData,rowData)
    
    
    return (
      <MuiPickersUtilsProvider utils={DateFnsUtils}>
      <KeyboardDatePicker
       autoOk={true}
       variant="inline"
       format="MM/dd/yyyy"
       margin="normal"
       name="startDate"
       
      
    onChange={(e)=>{ props.rowData.chequedate=new Date(e)
   }}
       KeyboardButtonProps={{
        "aria-label": "change date"
       }}
      />
     </MuiPickersUtilsProvider>
    );
  },render:(rowData)=><div>{new Date(rowData.chequedate).toLocaleDateString('es-CL')}</div>},
  {title:"Customer Name",field:"partyname"},
  {title:"Customer Bank",field:"partybankname"},
  {title:"Customer Branch",field:"partybranchname"},
  ]
 


  return (
    <>
      <div className="viewchequeslip">
  {loading?(
       <div className="loader">
       <SyncLoader
      color={color}
      loading={loading}
      size={40}
      aria-label="Loading Spinner"
      data-testid="loader"
    />
    </div>
      ):(   

      <div className="mycard-container table-container">
        <Card className="card-bg">
          <CardBody>
          <div >
        <div className="filters">
            <Form className="p-0">
                <div className="m-0 d-flex ">
                    <div className="input">
                    <label className="form-control-label" htmlFor="input-email">
                            FIRM NAME
                            </label>
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
                                    {!chequeFirmData ?"Please Wait" : null}
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
                    <div className="input">
                          <label
                              className="form-control-label"
                              htmlFor="input-email"
                            >
                              BANK NAME
                            </label>
                            <Autocomplete
                              name="bankname"
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
                                      
                                      {params.InputProps.endAdornment}
                                    </React.Fragment>
                                  ),
                                }}
                              />
                              )}
                              
                              onInputChange={(e, v, r) => {
                                if (r === "reset") console.log(v, r);
                                setChequebankid(v);
                              }}

                              getOptionLabel={(option) => option}
                             
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
                                   
                                    {params.InputProps.endAdornment}
                                  </React.Fragment>
                                ),
                              }}
                            />
                            )}
                           
                            onInputChange={(e, v, r) => {
                              if (r === "reset") console.log(v, r);
                              setchequeBranchid(v);
                            }}
                            
                            getOptionLabel={(option) => (option ? option : "")}
                            
                          />
                        </div>

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
                            value={accountno}
                            class="left field acc33"
                            readonly
                          />
                        </div>
                        <div className="input">
                          <label
                            className="form-control-label"
                            htmlFor="input-email"
                          >
                             Date
                          </label>
                          <Input
                            name="todate"
                            className="form-control-alternative"
                            defaultValue=""
                            id="input-username"
                            type="date"
                            value={todate}
                            onChange={(e) => {
                              settodate(e.target.value);
                              console.log("todate=====", todate);
                            }}
                            
                          />
                          
                        </div>
                        <button onClick={(e)=>{searchbydate(e)}}>
                            Search
                        </button>
                </div>
            </Form>
        </div>
      
      <div>
      <MaterialTable
       title="Cheque Slips"
       icons={tableIcons}
       columns={columns}
       data={dataa}
       options={{
        sorting: true, search: true,
        searchFieldAlignment: "right", searchAutoFocus: true, searchFieldVariant: "standard",
        filtering: true, paging: true, pageSizeOptions: [2, 5, 10, 20, 25, 50, 100], pageSize: 5,
        paginationType: "stepped", showFirstLastPageButtons: false, paginationPosition: "bottom", exportButton: true,
        exportAllData: true, exportFileName: "TableData", addRowPosition: "first", actionsColumnIndex: -1, selection: true,
        showSelectAllCheckbox: false,showTextRowsSelected:false,
        grouping: false, columnsButton: true,
        rowStyle: (data, index) => index % 2 === 0 ? { background: "#f5f5f5", fontSize : '0.85rem'} : { fontSize: "0.85rem"},
         headerStyle: { background: "#05775c",color:"#fff"},


      }}

      editable={{
        onRowUpdate: (newData, oldData) =>
          new Promise((resolve) => {
            handleRowUpdate(
              newData,
              oldData,
              resolve
            );
          }),
       
      }}

      actions={[{icon:()=><button className="btn-primary p-2 p">Print</button>,
      tooltip:"Click Me",
      onClick: (e,dataa) => [
        sendprintdata(dataa),submitChequeData(dataa)]

    }]}
       
     
       />


       
      </div>
      </div>
          </CardBody>
        </Card>
      </div>
      
      )}
      </div>
    </>
  );
};

export default ChequeDepositSlip;
