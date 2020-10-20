import React from "react";
import { Route, Redirect } from "react-router-dom";
import { ApplicationViews } from "./ApplicationView";
import { Login } from "./auth/Login";
import { Register } from "./auth/Register";

// import logo from './logo.svg';
import "./App.css";

export const App = () => (
  <>
    <Route
      render={() => {
        if (localStorage.getItem("active_user")) {
          return (
            <>
              <ApplicationViews />
            </>
          );
        } else {
          return <Redirect to="/login" />;
        }
      }}
    />

    <Route path="/login">
      <Login />
    </Route>
    <Route path="/register">
      <Register />
    </Route>
  </>
);
