import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Paper from '@material-ui/core/Paper';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import Button from '@material-ui/core/Button';
import Link from '@material-ui/core/Link';
import Typography from '@material-ui/core/Typography';
import AddressForm from './AddressForm';
import WorkForm from './WorkForm';
import { withStyles } from '@material-ui/core/styles';
import Review from './Review';
import UserProfileService from '../services/UserProfileService';
import $ from 'jquery'

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://fontys.nl/">
        FontysIn 
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const styles = theme => ({
  appBar: {
    position: 'relative',
  },
  layout: {
    width: 'auto',
    marginLeft: theme.spacing(2),
    marginRight: theme.spacing(2),
    [theme.breakpoints.up(600 + theme.spacing(2) * 2)]: {
      width: 600,
      marginLeft: 'auto',
      marginRight: 'auto',
    },
  },
  paper: {
    marginTop: theme.spacing(3),
    marginBottom: theme.spacing(3),
    padding: theme.spacing(2),
    [theme.breakpoints.up(600 + theme.spacing(3) * 2)]: {
      marginTop: theme.spacing(6),
      marginBottom: theme.spacing(6),
      padding: theme.spacing(3),
    },
  },
  stepper: {
    padding: theme.spacing(3, 0, 5),
  },
  buttons: {
    display: 'flex',
    justifyContent: 'flex-end',
  },
  button: {
    marginTop: theme.spacing(3),
    marginLeft: theme.spacing(1),
  },
});

const initialFormData = Object({
  pcn: "",
  firstName: "",
  prefix: "",
  lastName: "",
  emailAddress: "",     ///
  privacySettings: 0,   ///
  nationality: "NL",    ///
  address: "",
  street: "",
  addressnumber: "",
  addressaddition: "",
  city: "",
  zipCode: "",
  birthday: "",
  birthPlace: "",       ///
  phoneNumber: "",
  studies: [{ name: "", startDate: "" }],
  jobs: [{ name: "", startDate: "" }],
  hobbies: [{ name: ""}],
  interests: [{ name: ""}],
  languages: []         ///


  /*
    // these will be added inside the profile page

    licenses: [],
    participations: [],
    personalityTraits: [],
    references: [],
    skills: []
  */
});

const languages = Object([
  { code: "NL", language: "Dutch" },
  { code: "EN", language: "English" },
  { code: "DE", language: "Deutsch" },
  { code: "FR", language: "French" },
  { code: "IT", language: "Ítalian" },
  { code: "PL", language: "Polish" },
  { code: "SW", language: "Swiss" },
  { code: "SP", language: "Spanish" }
]);

const nationalities = Object([
  { code: "NL", language: "Netherlands" },
  { code: "GB", language: "Great Britain" },
  { code: "US", language: "United States" },
  { code: "DE", language: "Germany" },
  { code: "BE", language: "Belgium" },
  { code: "PL", language: "Poland" },
  { code: "CH", language: "Switzerland" },
  { code: "IT", language: "Italy" },
  { code: "IE", language: "Ireland" },
  { code: "ES", language: "Spain" }
]);

class ProfileSetup extends React.Component {
  constructor(props) {
    super(props);
    this.addNewHobby = this.addNewHobby.bind(this);
    this.addNewinterest = this.addNewinterest.bind(this);
    this.clickOnDelete = this.clickOnDelete.bind(this);
    this.state = {
      activeStep: 0,
      languageList: languages,
      nationalityList: nationalities,
      formData: initialFormData,
      interestList: [{ index: Math.random(), name: "interests", label: "interest" }],
      hobbyList: [{ index: Math.random(), name: "hobbies", label: "hobby" }]
    };
  }

  addNewinterest = (e) => {
    this.setState((prevState) => ({
      interestList: [...prevState.interestList, { index: Math.random(), name: "interests", label: "interest"  }]
    }));

    this.state.formData.interests.push({"name": ""});
  }
  
  addNewHobby = (e) => {
    this.setState((prevState) => ({
      hobbyList: [...prevState.hobbyList, { index: Math.random(), name: "hobbies", label: "hobby" }]
    }));

    this.state.formData.hobbies.push({"name": ""});
  }

  clickOnDelete = (record) => {
    var type = record.label;

    if(type === "interest"){
      var list = this.state.interestList;
      var index = list.map(function(e) { return e.index; }).indexOf(record.index);

      var array = this.state.formData;
      array["interests"].splice(index, 1);

      this.setState({
        interestList: this.state.interestList.filter(r => r !== record),
        formData: array
      });

    }else if(type === "hobby"){
      var list = this.state.hobbyList;
      var index = list.map(function(e) { return e.index; }).indexOf(record.index);

      var array = this.state.formData;
      array["hobbies"].splice(index, 1);

      this.setState({
        hobbyList: this.state.hobbyList.filter(r => r !== record)
      });

    }
  }

  handleChange = (e, category, type) => {
    // var e = document.getElementById(id);

    // if(type == "select"){
    //   e = document.getElementsByName(id).target;
    // }

    if(e != null){
      var formdata = this.state.formData;

      var value = e.value;
      
      // console.log(value)
      if(type == "array"){
        var array = formdata[e.name];
        var id = e.id;
        var number = id.slice(id.length - 1, id.length);
    
        array[number] = {name: value};
        
        formdata[e.name] = array;

      }else if(type == "language_array"){

        formdata[e.name] = value;


      }else if(category != null && category != undefined && category != ""){
        formdata[category][0][e.name] = value;
      }else{
        formdata[e.name] = value;
      }
      
      this.setState({formData: formdata});
    }
  };

  handleSubmit = (e) => {
    // console.log(e);
    // ... submit to API or something
    
    var formdata = this.state.formData;

    formdata.address = formdata.street + " " + formdata.addressnumber;

    if(formdata.addressaddition != null && formdata.addressaddition != ""){
      formdata.address = formdata.address + formdata.addressaddition;
    }

    var languages = [];
    $.each(formdata.languages, function(key, val){
      languages.push({name: val});
    });

    var userProperties = {
      hobbies: formdata.hobbies,
      interests: formdata.interests,
      jobs: formdata.jobs,
      languages: languages,
      // licenses: formdata.licenses,
      // participations: formdata.participations,
      // personalityTraits: formdata.personalityTraits,
      // references: formdata.references,
      // skills: formdata.skills,
      studies: formdata.studies
    }

    formdata.userProperties = userProperties;
    /******************************************************
     *     implement a form validation function here      *
     ******************************************************/

    console.log(formdata);
    var result = UserProfileService.addNewProfile(formdata);
    console.log(result);
  };

  handleNext = () => {
    this.setState({ activeStep: this.state.activeStep + 1 })
  };
  
  handleBack = () => {
    this.setState({ activeStep: this.state.activeStep - 1 })
  };

  render(){
    const steps = ['Personal details', 'Study / work details', 'Interests and hobbies'];
    
    const { classes } = this.props;

    function getStepContent(step, context) { 
      switch (step) {
        case 0:
          return <AddressForm nationalities={context.state.nationalityList} languages={context.state.languageList} form={context.state.formData} onChange={context.handleChange.bind(this)} />;
        case 1:
          return <WorkForm form={context.state.formData} onChange={context.handleChange.bind(this)} />;
        case 2:
          return <Review form={context.state.formData} onChange={context.handleChange.bind(this)} clickOnDelete={context.clickOnDelete} addNewHobby={context.addNewHobby} addNewinterest={context.addNewinterest} interestList={context.state.interestList} hobbyList={context.state.hobbyList}  />;
        default:
          throw new Error('Unknown step');
      }
    }
    
    return (
      <React.Fragment>
        <CssBaseline />
        <main className={classes.layout}>
          <Paper className={classes.paper}>
            <Typography component="h1" variant="h4" align="center">
              Set Up Your Profile!
            </Typography>
            <Stepper activeStep={this.state.activeStep} className={classes.stepper}>
              {steps.map((label) => (
                <Step key={label}>
                  <StepLabel>{label}</StepLabel>
                </Step>
              ))}
            </Stepper>
            <React.Fragment>
              {this.state.activeStep === steps.length ? (
                <React.Fragment>
                  <Typography variant="h5" gutterBottom>
                    Your registration has been completed.
                  </Typography>
                  <Typography variant="subtitle1">
                    Enjoy using FontysIN. Get in contact with other students and benefit each others competents.
                  </Typography>
                </React.Fragment>
              ) : (
                <React.Fragment>
                  {getStepContent(this.state.activeStep, this)}
                  <div className={classes.buttons}>
                    {this.state.activeStep !== 0 && (
                      <Button variant="outlined" onClick={this.handleBack} className={classes.button}>
                        Back
                      </Button>
                    )}
                    <Button
                      variant="contained"
                      color="secondary"
                      onClick={this.state.activeStep === steps.length - 1 ? this.handleSubmit: this.handleNext}
                      className={classes.button}
                    >
                      {this.state.activeStep === steps.length - 1 ? 'Complete setup' : 'Next'}
                    </Button>
                  </div>
                </React.Fragment>
              )}
            </React.Fragment>
          </Paper>
          <Copyright />
        </main>
      </React.Fragment>
    );
  }
}

export default withStyles(styles)(ProfileSetup)