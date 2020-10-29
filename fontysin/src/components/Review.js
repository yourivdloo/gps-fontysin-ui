import React from 'react';
import InputField from "./inputField"
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import TextField from '@material-ui/core/TextField';
import ListItemText from '@material-ui/core/ListItemText';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button'
import { render } from '@testing-library/react';
import $ from 'jquery'; 

class Review extends React.Component{

  state = {
    intrestList: [{ index: Math.random(), name: "interests[]", label: "intrest" }],
    hobbyList: [{ index: Math.random(), name: "hobbies[]", label: "hobby" }],
  }
  
  addNewIntrest = (e) => {
    var type = $(e.target).parent().data("type");

    console.log(type);
    this.setState((prevState) => ({
      intrestList: [...prevState.intrestList, { index: Math.random(), name: "interests[]", label: "intrest"  }],
    }));
  }
  
  addNewHobby = (e) => {
    this.setState((prevState) => ({
      hobbyList: [...prevState.hobbyList, { index: Math.random(), name: "hobbies[]", label: "hobby" }],
    }));
  }

  deteteIntrest = (index) => {
      this.setState({
          intrestList: this.state.intrestList.filter((s, sindex) => index !== sindex),
      });
  }

  deteteHobby = (index) => {
      this.setState({
        hobbyList: this.state.hobbyList.filter((s, sindex) => index !== sindex),
      });
  }

  clickOnDeleteIntrest(record) {
    this.setState({
        intrestList: this.state.intrestList.filter(r => r !== record)
    });
  }

  clickOnDeleteHobby(record) {
    this.setState({
      hobbyList: this.state.hobbyList.filter(r => r !== record)
    });
  }

  render() {
    let { intrestList } = this.state
    let { hobbyList } = this.state
    
    return (
      <React.Fragment>
        <Typography variant="h6" gutterBottom>
          Interests and hobbies
        </Typography>
        <Grid container spacing={3}>

          <Grid item xs={12} md={6}>
            <InputField add={this.addNewIntrest} delete={this.clickOnDeleteIntrest.bind(this)} fieldList={intrestList} />
            <br/>
            <Grid item md={12}>
              <Button onClick={this.addNewIntrest} data-type="intrest" variant="outlined" color="primary">Add interest</Button>
            </Grid>
          </Grid>

          <Grid item xs={12} md={6}>
            <InputField add={this.addNewHobby} delete={this.clickOnDeleteHobby.bind(this)} fieldList={hobbyList}  />
            <br/>
            <Grid item md={12}>
              <Button onClick={this.addNewHobby} variant="outlined" color="primary">Add hobby</Button>
            </Grid>
          </Grid>

        </Grid>
      </React.Fragment>
    );
  }
}

export default Review