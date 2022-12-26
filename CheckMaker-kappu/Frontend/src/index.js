import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";

import 'bootstrap/dist/css/bootstrap.min.css';
import "assets/plugins/nucleo/css/nucleo.css";

import "assets/scss/argon-dashboard-react.scss";
import "./assets/css/app.css"

import AdminLayout from "layouts/Admin.js";
import AuthLayout from "layouts/Auth.js";


const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <BrowserRouter>
    <Switch>
    <Route path="/auth" render={(props) => <AuthLayout {...props} />} />
      <Route path="/admin" render={(props) => <AdminLayout {...props} />} />
      
      <Redirect from="/" to="/auth/login" />
    </Switch>
  </BrowserRouter>
);
