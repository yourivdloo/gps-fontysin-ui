import React from "react";
import Navbar from "./components/navBar"
import chat from "./components/chat";
import home from "./components/home";
import profile from "./components/profile";
import profileSetup from "./components/profileSetup"
import page404 from "./components/page404";
import { BrowserRouter, Route, Switch } from "react-router-dom";


function App() {
  return (
    <main>
      <Navbar/>
      <Switch>
        <Route path="/" component={home} exact />
        <Route path="/profile" component={profile} />
        <Route path="/chat" component={chat} />
        <Route path="/profileSetup" component={profileSetup} />
        <Route component={page404} />
      </Switch>
    </main>
  );
}



export { App };
