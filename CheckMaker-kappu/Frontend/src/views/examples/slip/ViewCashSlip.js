import { useEffect, useState } from "react";
import moment, { now } from "moment";
import { view } from "@risingstack/react-easy-state";
import SearchBar from "material-ui-search-bar";
import LinearProgress from "@material-ui/core/LinearProgress";
import IconButton from "@mui/material/IconButton";
import SearchIcon from "@mui/icons-material/Search";
import TextField from "@mui/material/TextField";
import ReactDOM from "react-dom";
import MUIDataTable from "mui-datatables";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Switch from "@material-ui/core/Switch";
import { findParentElementFromClassName } from "@mui/x-data-grid-pro/internals";
import * as React from "react";
import dayjs from "dayjs";
import Stack from "@mui/material/Stack";
import  axios from "axios";
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
import Checkbox from '@mui/material/Checkbox';
import { forwardRef } from "react";

import { ThemeProvider, createTheme } from "@mui/material";

import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";

import { DesktopDatePicker } from "@mui/x-date-pickers/DesktopDatePicker";
import SyncLoader from "react-spinners/SyncLoader";
import MaterialTable from "material-table";
import Form from "react-bootstrap/Form";
import "bootstrap/dist/css/bootstrap.min.css";
import Button from "react-bootstrap/Button";
import { Card, CardBody } from "reactstrap"

const ViewCashSlip = () => {
  const [loading, setloading] = useState(false);
  const [dataa, setdataa] = useState([]);
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  const [searchtext, setsearchtext] = useState();
  let [color, setColor] = useState("#05775c");

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
  const token = localStorage.getItem("token");
  console.log(token);
  const searchbydate = async () => {
    console.log("hi from search");
    if (startDate && endDate) {
      let result = await fetch("http://localhost:8000/searchbydatecash", {
        method: "post",
        body: JSON.stringify({ startDate, endDate }),
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

  const onGridReady = async () => {
    let result = await fetch("http://localhost:8000/getpaisaslip", {
      method: "GET",

      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + token,
      },
    });
    result = await result.json();
    console.log(result);
    let data = [];
    result.CashSlips.forEach((element) => {
      data.push(element);
    });
    setdataa(data);
    console.log(dataa);
  };

  const columns = [
    { title: "Firm Name", field: "firmname" },
    { title: "Bank Name", field: "bankname" },
    { title: "Account No", field: "account" },
    
    { title: "Branch", field: "branch" },
  
   
    {
      title: "Deposit Date",
      field: "depositdate",
      render: (rowData) => (
        <div>
          {new Date(rowData.depositdate).toLocaleDateString('es-CL')}
        </div>
      ),
    },

    
    
  
  ];

  const sendprintdata = async (dataa) => {
    console.log("hi from search");
    await axios({
      headers : {
        "Content-Type": "application/json",
        Authorization: "Bearer " + token,
      },
      url : 'http://localhost:8000/chequeprint',
      method : 'POST',
      data:JSON.stringify({dataa}),
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
    
  };

  console.log(startDate);
  console.log(endDate);
  useEffect(() => {
    setloading(true);
    onGridReady();

    setTimeout(() => {
      setloading(false);
    }, 1000);
  }, []);

  return (
    <>
      <div className="viewchequeslip">
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
       <div className="mycard-container  table-container">
        <Card className="card-bg">
          <CardBody>
          <div>
          <div className="dt-5">
            <Form.Control
              type="date"
              name="datepic"
              placeholder="DateRange"
              value={startDate}
              onChange={(e) => setStartDate(e.target.value)}
            /> 
            <small>to</small>
            <Form.Control
              type="date"
              name="datepic"
              placeholder="DateRange"
              value={endDate}
              onChange={(e) => setEndDate(e.target.value)}
            />
            <Button
            className="add-company-btn"
            onClick={() => {searchbydate()}}>Search</Button>
      </div>

          <div>
            <MaterialTable
              title="Cash Slips"
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
                rowStyle: (data, index) => index % 2 === 0 ? { background: "#f5f5f5" } : null,
                 headerStyle: { background: "#05775c",color:"#fff"}
        
        
              }}
        
              actions={[{icon:()=><button>Print</button>,
              tooltip:"Click Me",
              onClick: (e,dataa) => 
                
                sendprintdata(dataa)
             
        
        
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

export default ViewCashSlip;