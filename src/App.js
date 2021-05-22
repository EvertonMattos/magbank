import React, { useState } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import AccountModal from "./components/AccountModal";
import Login from "./views/Login";
import "./App.scss";

import Home from "./views/Home";
import Dashboard from "./views/DashBoard";

const App = () => {
  const [showModal, setShowModal] = useState(false);
  const [account, setAccount] = useState();
  const [name, setName] = useState();
  const isLogger = name && account;

  const fakeAuth = {
    login(name, account, cb) {
      setName(name);
      setAccount(account);
      setTimeout(cb, 100);
    },
    logger(cb) {
      setName();
      setAccount();
      setTimeout(cb, 100);
    },
  };
  const PrivateRoute = ({ children, logger, ...rest }) => (
    <Route
      {...rest}
      render={() =>
        logger ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: "/login",
            }}
          />
        )
      }
    />
  );

  return (
    <Router>
      <Navbar
        handleCreateAcc={() => setShowModal(true)}
        logger={isLogger}
        auth={fakeAuth}
      />
      <Switch>
        <Route path="/login">
          <Login auth={fakeAuth} />
        </Route>

        <PrivateRoute path="/dashboard" logger={isLogger}>
          <Dashboard name={name} account={account} />
        </PrivateRoute>

        <Route path="/">
          <Home handleClick={() => setShowModal(true)} />
        </Route>
      </Switch>

      <Footer />
      <AccountModal
        show={showModal}
        handleClose={() => setShowModal(false)}
        auth={fakeAuth}
      />
    </Router>
  );
};
export default App;
