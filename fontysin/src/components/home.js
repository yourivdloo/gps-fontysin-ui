import React from "react";
import CreateUser from "../demo-components/CreateUser"

class home extends React.Component {
  render() {
    return (
      <div>
        <br></br>
        <h1>Demo Requests:</h1>
        <CreateUser />
      </div>
    );
  }
}

export default home;
