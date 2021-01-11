import React from 'react';
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Button from "@material-ui/core/Button";
import InputBase from '@material-ui/core/InputBase';
import SearchIcon from '@material-ui/icons/Search';
import  { fade, withStyles } from '@material-ui/core/styles';
import {withRouter} from 'react-router-dom';

const styles = theme => ({
  inputRoot: {
    color: 'inherit',
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('md')]: {
      width: '20ch',
    },
  },
  search: {
    display: 'inline-block',
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: fade(theme.palette.common.white, 0.25),
      cursor: 'pointer',
    },
    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(3),
      width: 'auto',
    },
  },
  searchIcon: {
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
})

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

  search = (e) => {
    if(e.key === 'Enter'){
      var value = document.getElementById('input').value
      // this.props.history.push('/results/' + value.toString())
      window.location.replace('/results/' + value.toString())
    }
  }

  render(){
    const { classes } = this.props;
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
          <Button href={"/guestprofile/" + localStorage.getItem('pcn')} color="inherit">
            Profile
          </Button>
          <div className={classes.search}>
            <div className={classes.searchIcon}>
              <SearchIcon style={{pointer: 'cursor'}}/>
            </div>
            {/* <form onSubmit={this.search}> */}
            <InputBase
              placeholder="Search by first name..."
              id="input"
              //type="submit"
              onKeyUp={this.search}
              classes={{
                root: classes.inputRoot,
                input: classes.inputInput,
              }}
              inputProps={{ 'aria-label': 'search' }}
            />
            {/* </form> */}
          </div>
          </div>
          :
          <div></div>
        }
        </Toolbar>
      </AppBar>
    );
  }
}

export default withRouter(withStyles(styles)(Navbar));