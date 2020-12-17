import React from "react";
import { Navbar } from "../App";
import Button from "@material-ui/core/Button";

class chat extends React.Component {
  render() {
    return (
      <div>
        <br></br>
        <h1>Chat</h1>
        <Button variant="contained" color="secondary" name="helloBTN" href="/">
          Hello
        </Button>
      </div>
    );
  }
}

export default chat;
