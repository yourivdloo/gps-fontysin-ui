import React from "react";
import Navbar from "./components/navBar"
import chat from "./components/chat";
import home from "./components/home";
import profile from "./components/profile";
import profileSetup from "./components/profileSetup"
import page404 from "./components/page404";
import Settings from './components/Settings';
import guestprofile from "./components/guestProfile/GuestProfile";
import PrivateRoute from "./components/PrivateRoute";
import { BrowserRouter as Router, Route, Switch, withRouter} from "react-router-dom";

function App() {

  return (
    <Router>
      <Navbar/>
      <Switch>
        {/* <Route path="/" component={home} exact/> */}
        <PrivateRoute exact path="/" component={home}  />
        <PrivateRoute exact path="/profile" component={profile}/>
        <Route path="/chat" component={chat}/>
        <Route path="/profileSetup" component={profileSetup}/>
        <PrivateRoute path="/guestprofile" component={guestprofile}/>
        <PrivateRoute path="/settings" component={Settings}/>
        <Route component={page404}/>
      </Switch>
    </Router>
  );
}

export {App};
