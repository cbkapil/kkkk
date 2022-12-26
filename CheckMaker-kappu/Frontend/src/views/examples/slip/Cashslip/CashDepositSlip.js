import DropDown from 'components/utils/DropDown';
import Loader from 'components/utils/Loader';
import {TextField} from "@mui/material";
import React,{useState,useEffect} from 'react';
import {
  Button,
  Form,
  Input,
  Table,
  Container,
  Card,
  CardBody
} from "reactstrap";
import Autocomplete from "@mui/material/Autocomplete";
import moment from "moment";
import axios from "axios"
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const CashDepositSlip = () =>{
    const [loading,setloading] = useState(true);
    const [amount2k, setAmount2k] = useState('');
    const [amount500, setAmount500] = useState('');
    const [amount200, setAmount200] = useState('');
    const [amount100, setAmount100] = useState('');
    const [amount50, setAmount50] = useState('');
    const [amount20, setAmount20] = useState('');
    const [amount10, setAmount10] = useState('');
    const [amount5, setAmount5] = useState('');
    const [amountCoins, setAmountCoins] = useState('');
    const [depositdate, setdepositdate] = useState(
      moment(new Date()).toISOString()
    );
    const [firmdata, setFirmData] = useState([]);
    const [firmid, setfirmid] = useState("");
    const [bankdata, setBankData] = useState([]);
    const [bankid, setbankid] = useState("");
    const [branchdata, setbranchdata] = useState([]);
    const [branchid, setbranchid] = useState([]);
    const [accountfin, setaccountfin] = useState("");
    const [total, setTotal] = useState();
    const [total2k, settotal2k] = useState('');
    const [total500, settotal500] = useState('');
    const [total200, settotal200] = useState('');
    const [total100, settotal100] = useState('');
    const [total50, settotal50] = useState('');
    const [total20, settotal20] = useState('');
    const [total10, settotal10] = useState('');
    const [total5, settotal5] = useState('');
    const[totalcoins,settotalcoins]=useState('')
    const [firmnamee, setfirmnamee] = useState("");
    const [userid, setuserid] = useState("");
    const [totalamount, settotalamount] = useState("");

    const token = localStorage.getItem("token");


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

      // *****Get Firm Cash Slip *********
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
  // *****Get Firm Cash Slip *********

    // *****Get Bank Cash Slip *********

    // *****Remove Duplicates *********
  function removeDuplicates(bankarray) {
    var unique = [];
    bankarray.forEach((element) => {
      if (!unique.includes(element)) {
        unique.push(element);
      }
    });
    return unique;
  }
  // *****Remove Duplicates *********

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
    // *****Get Bank Cash Slip *********

     // *****Get Cash Slip Branch *********
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
  // *****Get Cash Slip Branch *********

  // *****Get Cash Slip Account *********


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

  // *****Get Cash Slip Account *********

  // *****Download Pdf File *********

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

  // *****Download Pdf File *********

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

   // ****** Geneate Slip Function ********

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

   // ****** Geneate Slip Function ********

    // ****** Useeffect for Total function ********
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

   // ****** Useeffect for Total function ********

   useEffect(() => {
    getFirm();
  
    getBank();
    
    getbranch();
   
    getCashAccount();
  
  }, [
    firmid,
    firmnamee,
    bankid,
    accountfin,
    totalamount,
    branchid,
    
  ]);

  useEffect(() => {
    setloading(true);
    setTimeout(() => {
      setloading(false);
    }, 0);
  }, []);




    return(
        <>
             {loading ? (
                <Loader loading={loading} />
):(
    <Container className="m-0 p-0" fluid>
    <div className="mycard-container" >
      <Card className="mycard"  style={{ 
        backgroundColor: 'white', border: 'none', padding : "0",
        boxShadow: "0 2px 4px rgba(0,0,0,0.2)"
        }}>
        <CardBody style={{ padding : "0" }}>
        <Form className="p-0">
                    <div className="m-0 d-flex cashSlip-view">
                      <div className="cash-form">
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
                              <th  scope="col">Amount</th>
                            </tr>
                          </thead>
                          <tbody className="gentabletbody">
                            <tr>
                              <td>1</td>
                              <td>2000</td>
                              <td>
                                <Input
                                 autocomplete ="off"
                                  className="form-control-alternative"
                                  // defaultValue="0"
                                  id="input-username"
                                  type="text"
                                  // min="0"
                                  //   max="100"
                                  value={amount2k}
                                  onChange={(e) => setAmount2k(e.target.value)}
                                />
                              </td>

                              <td style={{width : '300px',textAlign : 'right'}}>
                                <h3>{amount2k * 2000}</h3>
                              </td>
                            </tr>

                            <tr className="">
                              <td>2</td>
                              <td>500</td>
                              <td>
                                <Input
                                 autocomplete ="off"
                                  className="form-control-alternative"
                                  defaultValue="0"
                                  id="input-username"
                                  type="text"
                                  min="0"
                                  value={amount500}
                                  onChange={(e) => setAmount500(e.target.value)}
                                />
                              </td>

                              <td style={{width : '300px',textAlign : 'right'}}>
                                <h3>{amount500 * 500}</h3>
                              </td>
                            </tr>
                            <tr className="m-0 p-0">
                              <td>3</td>
                              <td>200</td>
                              <td>
                                <Input
                                 autocomplete ="off"
                                  className="form-control-alternative"
                                  defaultValue="0"
                                  id="input-username"
                                  type="text"
                                  min="0"
                                  //   max="100"
                                  value={amount200}
                                  onChange={(e) => setAmount200(e.target.value)}
                                />
                              </td>

                              <td style={{width : '300px',textAlign : 'right'}}>
                                <h3>{amount200 * 200}</h3>
                              </td>
                            </tr>
                            <tr>
                              <td>4</td>
                              <td>100</td>
                              <td>
                                <Input
                                 autocomplete ="off"
                                  className="form-control-alternative"
                                  defaultValue="0"
                                  id="input-username"
                                  type="text"
                                  min="0"
                                  //   max="100"
                                  value={amount100}
                                  onChange={(e) => setAmount100(e.target.value)}
                                />
                              </td>

                              <td style={{width : '300px',textAlign : 'right'}}>
                                <h3>{amount100 * 100}</h3>
                              </td>
                            </tr>
                            <tr>
                              <td>5</td>
                              <td>50</td>
                              <td>
                                <Input
                                 autocomplete ="off"
                                  className="form-control-alternative"
                                  defaultValue="0"
                                  id="input-username"
                                  type="text"
                                  min="0"
                                  //   max="100"
                                  value={amount50}
                                  onChange={(e) => setAmount50(e.target.value)}
                                />
                              </td>

                              <td style={{width : '300px',textAlign : 'right'}}>
                                <h3>{amount50 * 50}</h3>
                              </td>
                            </tr>
                            <tr>
                              <td>6</td>
                              <td>20</td>
                              <td>
                                <Input
                                 autocomplete ="off"
                                  className="form-control-alternative"
                                  defaultValue="0"
                                  id="input-username"
                                  type="text"
                                  min="0"
                                  //   max="100"
                                  value={amount20}
                                  onChange={(e) => setAmount20(e.target.value)}
                                />
                              </td>

                              <td style={{width : '300px',textAlign : 'right'}}>
                                <h3>{amount20 * 20}</h3>
                              </td>
                            </tr>
                            <tr>
                              <td>7</td>
                              <td>10</td>
                              <td>
                                <Input
                                 autocomplete ="off"
                                  className="form-control-alternative"
                                  defaultValue="0"
                                  id="input-username"
                                  type="text"
                                  min="0"
                                  //   max="100"
                                  value={amount10}
                                  onChange={(e) => setAmount10(e.target.value)}
                                />
                              </td>

                              <td style={{width : '300px',textAlign : 'right'}}>
                                <h3>{amount10 * 10}</h3>
                              </td>
                            </tr>
                            <tr>
                              <td>8</td>
                              <td>5</td>
                              <td>
                                <Input
                                 autocomplete ="off"
                                  className="form-control-alternative"
                                  defaultValue="0"
                                  id="input-username"
                                  type="text"
                                  min="0"
                                  //   max="100"
                                  value={amount5}
                                  onChange={(e) => setAmount5(e.target.value)}
                                />
                              </td>

                              <td style={{width : '300px',textAlign : 'right'}}>
                                <h3>{amount5 * 5}</h3>
                              </td>
                            </tr>
                            <tr>
                              <td>9</td>
                              <td>Coins</td>
                              <td>
                                <Input
                                 autocomplete ="off"
                                  className="form-control-alternative"
                                  defaultValue="0"
                                  id="input-username"
                                  type="text"
                                  min="0"
                                  //   max="100"
                                  value={amountCoins}
                                  onChange={(e) =>
                                    setAmountCoins(e.target.value)
                                  }
                                />
                              </td>

                              <td style={{width : '300px',textAlign : 'right'}}>
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
)}
</>)
}

export default CashDepositSlip;