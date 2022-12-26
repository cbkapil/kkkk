import Index from "views/Index.js";
import Company from "views/examples/Company.js";

import Register from "views/examples/Register.js";
import Login from "views/examples/Login.js";

import Customer from "views/examples/Customer.js";

import ViewChequeSlip from "views/examples/ViewChequeSlip.js";
import ViewCashSlip from "views/examples/slip/ViewCashSlip";
import AddBank from "views/examples/AddBank";
import ChequeCollection from "views/examples/slip/ChequeCollection";
import ChequeDepositSlip from "views/examples/slip/ChequeSlip/ChequeDepositSlip";
import CashDepositSlip from "views/examples/slip/Cashslip/CashDepositSlip";


var routes = [
  {
    path: "/login",
    name: "Login",
    icon: "ni ni-key-25 text-info",
    component: Login,
    layout: "/auth",
  },
  {
    path: "/index",
    name: "Dashboard",
    icon: "ni ni-tv-2 ",
    component: Index,
    layout: "/admin",
  },

  {
    path: "/company",
    name: "Company",
    icon: "ni ni-single-02",
    component: Company,
    layout: "/admin",
  },
  {
    path : "/add-bank",
    name : "Add Bank",
    component : AddBank,
    layout: "/admin",
  },
  {
    path: "/cashSlip",
    name: "Cash- Deposit Slip",
    icon: "ni ni-single-02",
    component: CashDepositSlip,
    layout: "/admin",
  },
 

  {
    path: "/customer",
    name: "Customer",
    icon: "ni ni-single-02",
    component: Customer,
    layout: "/admin",
  },
  {
    path: "/chequeCollection",
    name: "Cheque- Collection",
    icon: "ni ni-single-02",
    component: ChequeCollection,
    layout: "/admin",
  },
  {
    path: "/chequeSlip",
    name: "Cheque- Deposit Slip",
    icon: "ni ni-single-02",
    component: ChequeDepositSlip,
    layout: "/admin",
  },

  {
    path: "/viewchequeslip",
    name: "View Cheque Slip",
    icon: "ni ni-bullet-list-67",
    component: ViewChequeSlip,
    layout: "/admin",
  },
  {
    path: "/viewcashslip",
    name: "View Cash Slip",
    icon: "ni ni-bullet-list-67",
    component: ViewCashSlip,
    layout: "/admin",
  },
  {
    path: "/register",
    name: "Register",
    icon: "ni ni-circle-08",
    component: Register,
    layout: "/auth",
  },
 


];
export default routes;
