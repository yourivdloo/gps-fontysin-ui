import React from "react";
// import logo from './logo.svg';
// import './App.css';
import chat from "./components/chat";
import home from "./components/home";
import profile from "./components/profile";
import page404 from "./components/page404";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Button from "@material-ui/core/Button";

function App() {
  return (
    <main>
      <Switch>
        <Route path="/" component={home} exact />
        <Route path="/profile" component={profile} />
        <Route path="/chat" component={chat} />
        <Route component={page404} />
      </Switch>
    </main>
  );
}

function Navbar() {
  return (
    <AppBar position="static" style={{ background: "#663366" }}>
      <Toolbar>
        <Button href="/" color="inherit">
          Home
        </Button>
        <Button href="/profile" color="inherit">
          Profile
        </Button>
        <Button href="/chat" color="inherit">
          Chat
        </Button>
      </Toolbar>
    </AppBar>
  );
}

export { App, Navbar };
