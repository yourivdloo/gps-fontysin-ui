import React from 'react';
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Button from "@material-ui/core/Button";

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
          <Button href="/profileSetup" color="inherit">
            Profile setup
          </Button>
          <Button href="/profile" color="inherit">
            Profile
          </Button>
        </Toolbar>
      </AppBar>
    );
}

export default Navbar;