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
import PaymentForm from './PaymentForm';
import { withStyles } from '@material-ui/core/styles';
import Review from './Review';

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

const initialFormData = Object.freeze({
  pcn: "",
  firstname: "",
  prefix: "",
  lastname: "",
  address: "",
  addressnumber: "",
  addressaddition: "",
  city: "",
  zipcode: "",
  birthday: "",
  phonenumber: "",
  hobby: [],
  intrest: []
});

class ProfileSetup extends React.Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.state = {
      activeStep: 0,
      formData: initialFormData
    };
  }

  handleChange = (e) => {
    this.state.setState("formData", {[e.target.name]: e.target.value.trim()});
  };

  handleSubmit = (e) => {
    e.preventDefault()
    console.log(this.state.formData);
    // ... submit to API or something
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
          return <AddressForm onClick={context.handleChange} />;
        case 1:
          return <PaymentForm />;
        case 2:
          return <Review />;
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
                      onClick={this.state.activeStep === steps.length - 1 ? this.handleSubmit : this.handleNext}
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