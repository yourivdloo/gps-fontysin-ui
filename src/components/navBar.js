import React from 'react';
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Button from "@material-ui/core/Button";
import UserProfileService from "../services/UserProfileService";
import {withRouter} from 'react-router-dom';

class Navbar extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      isRegistered: false
    }
  }

  componentDidMount(){
    if(localStorage.getItem('pcn') != null){
      this.setState({isRegistered: true})
    }
  }

  render(){
    return (
      <AppBar position="static" style={{ background: "#663366" }}>
        <Toolbar>
        <h1>
                FontysIN
              </h1>
          {this.state.isRegistered ? 
            <div style={{marginLeft: "30px"}}>
          <Button href="/" color="inherit">
            Home
          </Button>
          <Button href="/chat" color="inherit">
            Chat
          </Button>
          <Button href="/guestprofile" color="inherit">
            Profile
          </Button>
          </div>
          :
          <div></div>
        }
        </Toolbar>
      </AppBar>
    );
  }
}

export default Navbar;