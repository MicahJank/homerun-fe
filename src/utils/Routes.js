import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";

// Sign up component with form for email and gmail button
import SignUp from "../components/auth/SignUp";
import Dashboard from "../components/dashboard/Dashboard.js";

// Sign in landing page with two buttons email/gmail
import SignInLanding from "../components/auth/SignIn-Landing";

// Privacy Policy for the App
import PrivacyPolicy from '../PrivacyPolicy.js';

// Home component is where the beginning of the app starts
import Home from "../components/marketing/Home.js";

// Household component
import Household from "../components/household/Household";

// Account component
import Account from "../components/account/Account";

// Header
import Header from "../components/header/Header.js";

//Error 404 Page
import NotFound from "../components/dashboard/NotFound.js";

//About us page from the marketing side
import AboutUsDraft from "../components/marketing/AboutUsDraft.js";

import ForgotPW from "../components/auth/Forgot-Password.js";
import ResetPW from "../components/auth/Reset-Password.js";
import ConfirmAcct from "../components/auth/Confirm-Account.js";
import Auth from "../components/auth/Auth.js";

import ContactUsForm from "../components/marketing/ContactUsForm";

import { InviteConfirm } from "../components/household/InviteConfirm.js";
import EmailRedirect from './../components/account/Email-Redirect.js';

const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={(props) =>
      localStorage.getItem("token") ? (
        <Component {...props} />
      ) : (
          <Redirect to="/" />
        )
    }
  />
);

// Header component needs to render on multiple routes and since the Switch already has a dashboard route and household route
// the header component needs to render outside the switch
const Routes = () => {
  return (
    <div>
      <PrivateRoute
        path={["/dashboard", "/household", "/account"]}
        component={Header}
      />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/signin" component={SignInLanding} />
        <Route exact path="/privacy-policy" component={PrivacyPolicy} />
        <Route path="/signup" component={SignUp} />
        <Route path="/error" component={NotFound} />
        <Route path="/contact" component={ContactUsForm} />
        <Route path="/forgot-password" component={ForgotPW} />
        <Route path="/reset-password/:hash" component={ResetPW} />
        <Route path="/confirm-account/:hash" component={ConfirmAcct} />
        <Route path="/update-email/:hash" component={EmailRedirect} />
        <Route path="/auth" component={Auth} />
        <Route path="/about" component={AboutUsDraft} />
        <Route path="/invite/:hash/:householdId" component={InviteConfirm} />
        <PrivateRoute path="/dashboard" component={Dashboard} />
        <PrivateRoute path="/household" component={Household} />
        <PrivateRoute path="/account" component={Account} />
      </Switch>
    </div>
  );
};

export default Routes;
