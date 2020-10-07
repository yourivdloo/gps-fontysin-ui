import React from "react";
import Button from "@material-ui/core/Button";

class page404 extends React.Component {
  render() {
    return (
      <div>
        <center>
          <h1>Whoops, you look lost!</h1>
          <Button variant="contained" color="primary" href="/">
            Go Back home
          </Button>
        </center>
      </div>
    );
  }
}

export default page404;
