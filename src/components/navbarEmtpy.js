import React from 'react';
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";


class NavbarEmtpy extends React.Component {
  constructor(props){
    super(props);
  }

  render(){
    return (
      <AppBar position="static" style={{ background: "#663366" }}>
        <Toolbar>
          <h1>
            FontysIN
          </h1>
        </Toolbar>
      </AppBar>
    );
  }
}

export default NavbarEmtpy;