import React from "react";
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import Button from "@material-ui/core/Button";
import $ from 'jquery'
import SockJS from 'sockjs-client';
import Stomp from 'stompjs';



class chat extends React.Component {

  constructor(props) {

    this.state = {
    };
  }

  render() {
    return (
      <React.Fragment>
        <div className="container">
          <Grid container>
            <Grid item xs={12}>
              <div className="chat-container">
                <div className="chat-header">
                  <h2>Chat</h2>
                </div>
                <div id="connecting">Connecting...</div>
                <ul id="$('#messageArea')">

                </ul>
                <div className="form-group">
                  <div className="input-group clearfix">
                    <input type="text" id="message" placeholder="Type a message..." className="form-control" />
                    <button type="submit"className="primary">Send</button>
                  </div>
                </div>
              </div>
            </Grid>
         </Grid>
        </div>
      </React.Fragment>
    );
  }
}

export default chat;
