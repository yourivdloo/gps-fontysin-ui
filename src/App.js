import {React} from "react";
import Navbar from "./components/navBar"
import NavbarEmtpy from "./components/navbarEmtpy"
import chat from "./components/chat";
import home from "./components/home";
import profile from "./components/profile";
import profileSetup from "./components/profileSetup"
import page404 from "./components/page404";
import Settings from './components/Settings';
import SearchResults from './components/SearchResults';
import guestprofile from "./components/GuestProfile";
import PrivateRoute from "./components/PrivateRoute";
import { BrowserRouter as Router, Route, Switch} from "react-router-dom";
import exportCV from './components/exportCV';

function App() {
  var setup = window.location.pathname.includes("profileSetup");

  return (
    setup ?
    <Router>
      <NavbarEmtpy />
      <Switch>
        <Route path="/profileSetup" component={profileSetup}/>
        <Route component={page404}/>
      </Switch>
    </Router>
    :
    <Router>
      <Navbar/>
      <Switch>
        {/* <Route path="/" component={home} exact/> */}
        <PrivateRoute exact path="/" component={home}  />
        <PrivateRoute exact path="/profile" component={profile}/>
        <PrivateRoute path="/chat" component={chat}/>
        <PrivateRoute path="/guestprofile/:pcn" component={guestprofile}/>
        <PrivateRoute path="/guestprofile" component={guestprofile}/>
        <PrivateRoute path="/settings/:index" component={Settings}/>
        <PrivateRoute path="/settings" component={Settings}/>
        <PrivateRoute path="/results/:query" component={SearchResults}/>
        <PrivateRoute path="/exportCV" component={exportCV}/>
        <Route component={page404}/>
      </Switch>
    </Router>
  );
}

export 
{App};
