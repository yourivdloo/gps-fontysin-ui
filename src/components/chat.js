import React from "react";
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import { Button } from "@material-ui/core";
import { ChatBox } from 'react-chatbox-component';

const useStyles = makeStyles((theme) => ({
  layout: {
    width: 'auto',
    marginLeft: theme.spacing(2),
    marginRight: theme.spacing(2),
    [theme.breakpoints.up(600 + theme.spacing(2) * 2)]: {
      width: 600,
      marginLeft: 'auto',
      marginRight: 'auto',
    },
  }
}));

const messages = [{
  "text": "Hello there",
  "id": "1",
  "sender": {
    "name": "Ironman",
    "uid": "user1",
    "avatar": "https://data.cometchat.com/assets/images/avatars/ironman.png",
  },
}];

export default function Chat(){
  const classes = useStyles();
  

  return(
    <div className= {classes.layout}>
      <Typography variant="h6"  gutterBottom>
        Chat
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} md={6}>
          <ChatBox>
            messages={messages};
          </ChatBox>
        </Grid>

      </Grid>
      <Grid container spacing={3}>
        <Grid item xs={12} md={6}>
          <TextField  
            id="messageText" 
            name="messageText"
            label="Your Message" 
            fullWidth 
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <Button variant="contained" color="secondary">
            Send
          </Button>
        </Grid>
      </Grid>
    </div>
  );
}
