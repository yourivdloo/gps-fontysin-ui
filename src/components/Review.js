import React from 'react';
import InputField from "./inputField"
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button'

class Review extends React.Component{

  state = {
    intrestList: [{ index: Math.random(), name: "interests[]", label: "intrest" }],
    hobbyList: [{ index: Math.random(), name: "hobbies[]", label: "hobby" }],
  }
  
  addNewIntrest = (e) => {
    this.setState((prevState) => ({
      intrestList: [...prevState.intrestList, { index: Math.random(), name: "interests[]", label: "intrest"  }],
    }));
  }
  
  addNewHobby = (e) => {
    this.setState((prevState) => ({
      hobbyList: [...prevState.hobbyList, { index: Math.random(), name: "hobbies[]", label: "hobby" }],
    }));
  }

  clickOnDelete(record) {
    var type = record.label;

    if(type === "intrest"){
        this.setState({
          intrestList: this.state.intrestList.filter(r => r !== record)
        });

    }else if(type === "hobby"){
        this.setState({
          hobbyList: this.state.hobbyList.filter(r => r !== record)
        });

    }
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
            <InputField add={this.addNewIntrest} delete={this.clickOnDelete.bind(this)} fieldList={intrestList} />
            <br/>
            <Grid item md={12}>
              <Button onClick={this.addNewIntrest} data-type="intrest" variant="outlined" color="primary">Add interest</Button>
            </Grid>
          </Grid>

          <Grid item xs={12} md={6}>
            <InputField add={this.addNewHobby} delete={this.clickOnDelete.bind(this)} fieldList={hobbyList}  />
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