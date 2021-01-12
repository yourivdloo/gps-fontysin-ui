import React, { PureComponent } from 'react'
import Grid from '@material-ui/core/Grid';
import SockJS from 'sockjs-client';
import Stomp from 'stompjs';
import './../cssStyleSheets/chat.css'

class Chat extends PureComponent {
  constructor(props) {
    super(props);
    this.stompClient = null;

    this.state = {
      message: "",
      connected: false,
      message_content: [],
      messageIndex: 1
    };

    this.connect = this.connect.bind(this);
    this.disconnect = this.disconnect.bind(this);
    this.sendMessage = this.sendMessage.bind(this);
    this.showMessage = this.showMessage.bind(this);
    this.onChange = this.onChange.bind(this);

    this.connect();
  }

  setConnected(classObj, connected) {
    classObj.setState({
      "connected": connected,
      "message_content": []
    })
  }

  connect(){
    var classObj = this;

    var sock = new SockJS('/api/websocket');
    this.stompClient = Stomp.over(sock);
    this.stompClient.connect({}, function (frame) {

      classObj.setConnected(classObj, true);

      console.log('Connected: ' + frame);
      classObj.stompClient.subscribe('/topic/public', function (message) {
        console.log(message);
        classObj.showMessage(JSON.parse(message.body));
      });
    });
  }
  
  disconnect() {
    if (this.stompClient !== null) {
      this.stompClient.disconnect();
    }

    this.setConnected(this, false);

    console.log("Disconnected");
  }
  
  sendMessage() {
    if(this.state.message === "" || this.state.message === null){
      return;
    }

    var chatMessage = {
      sender: null,
      content: this.state.message,
      type: 'CHAT'
    };

    this.stompClient.send("/app/chat", {}, JSON.stringify(chatMessage));
    this.setState({
      "message": ""
    })
  }

  showMessage(message) {
    this.setState((prevState) => ({
      message_content: [
        ...prevState.message_content,
        { index: this.state.messageIndex, content: message.content, sender: message.sender, type: message.type },
      ],
      messageIndex: this.state.messageIndex + 1,
    }));
  }

  onChange = (e) => {
    var message = e.value;
    this.setState({
      "message": message
    })
  }

  getAvatarColor(messageSender) {
    var colors = [
      '#2196F3', '#32c787', '#00BCD4', '#ff5652',
      '#ffc107', '#ff85af', '#FF9800', '#39bbb0'
    ];

    var hash = 0;
    for (var i = 0; i < messageSender.length; i++) {
        hash = 31 * hash + messageSender.charCodeAt(i);
    }

    var index = Math.abs(hash % colors.length);
    return colors[index];
  }

  render() {
    return (
      <React.Fragment>
        <div className="container" id="chat-page">
          <Grid container>
            <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
              <div className="chat-container">

                <div className="row">
                  <div className="col-md-12">
                    <div className="chat-header">
                      <h2>Chat</h2>
                    </div>
                  </div>
                </div>

                <div className="row">
                  <div className="col-md-12">
                    <div id={this.state.connected? "status-connected" : "status-connecting"}>Connection: {this.state.connected? "Connected" : "Connecting..."}</div>
                  </div>
                </div>

                <div className="row" style={{display: this.state.connected ? "flex" : "none"}}>
                  <div className="col-md-12">
                    <ul id="message-box">
                      {
                        this.state.message_content.map((message, idx) => {
                          if(message.type === "JOIN"){
                            return(
                              <li key={message.index} className="event-message">{message.sender} joined</li>
                            )
                          }else if(message.type === "LEAVE"){
                            return(
                              <li key={message.index} className="event-message">{message.sender} left</li>
                            )
                          }else{
                            return(
                              <li key={message.index} className="chat-message">
                                <i style={{backgroundColor: this.getAvatarColor(message.sender)}}>{message.sender[0]}</i>
                                <span>{message.sender}</span>
                                <p>{message.content}</p>
                              </li>
                            )
                          }
                        })
                      }
                    </ul>
                  </div>
                </div>

                <div className="row">
                  <div className="col-md-12">
                      <div className="form-group">
                        <div className="input-group clearfix">
                          <input type="text" id="message" placeholder="Type a message..." onChange={(e) => this.onChange(e.target)} value={this.state.message} className="form-control" />
                          <button type="submit" onClick={this.sendMessage} className="btn btn-primary">Send</button>
                        </div>
                      </div>
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

export default Chat
