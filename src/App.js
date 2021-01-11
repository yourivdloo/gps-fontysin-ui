import React from "react";
import Navbar from "./components/navBar"
import chat from "./components/chat";
import home from "./components/home";
import profile from "./components/profile";
import profileSetup from "./components/profileSetup"
import page404 from "./components/page404";
import Settings from './components/Settings';
import guestprofile from "./components/guestProfile/GuestProfile";
import {BrowserRouter, Route, Switch} from "react-router-dom";
import exportCV from './components/exportCV';

function App() {
    return (
        <main>
            <Navbar/>
            <Switch>
                <Route path="/" component={home} exact/>
                <Route path="/profile" component={profile}/>
                <Route path="/chat" component={chat}/>
                <Route path="/profileSetup" component={profileSetup}/>
                <Route path="/guestprofile" component={guestprofile}/>
                <Route path="/settings" component={Settings}/>
                <Route path="/exportCV" component={exportCV}/>
                <Route component={page404}/>
            </Switch>
        </main>
    );
}


export {App};
