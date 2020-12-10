import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import Link from '@material-ui/core/Link';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';
import CardContent from "@material-ui/core/CardContent";
import Avatar from "@material-ui/core/Avatar";
import SettingsIcon from '@material-ui/icons/Settings';
import $ from 'jquery'
import { red } from '@material-ui/core/colors';
import GitHubIcon from '@material-ui/icons/GitHub';

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
  card: {
    padding: theme.spacing(5),
    margin: theme.spacing(2, 0),
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
  description: {
    fontSize: "18px",
    fontWeight: 400
  },
  banner: {
    backgroundColor: '#8D5C97',
    margin: theme.spacing(-5, -5, 2, -5),
  },
  cardActions: {
    float: 'left',
    width: '10%',
  },
  cardContent: {
    flexGrow: 1,
    color: 'white',
    textAlign: 'center',
  },
  avatar: {
    width: '125px',
    height: '125px',
    display: 'inline-block',
    marginTop: '1%',
  },
  expHeader: {
    fontSize: "16px",
    fontWeight: 600
  },
  collectionItem: {
    lineHeight: "18px",
    fontSize: "14px"
  },
  seperator: {
    backgroundColor: '#8D5C97'
  },
  footer: {
    width: '100%',
    height: '60px'
  },
  projectIcon: {
    // width: '100%',
    height: '115px',
  },
  imgContainer: {
    textAlign: 'center',
  },
  projectCard: {
    margin: theme.spacing(0, 2),
    border: "1px solid #8D5C97"
  }
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

class GuestProfile extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render(){
    const { classes } = this.props;
    
    return (
      <Grid container style={{maxWidth: '1100px', margin: '15px auto'}}>
          <Grid item md={12} style={{marginRight: "25px"}}>
            
            {/* personal data */}
            <Card className={classes.card}>
              <div class="row">
                <div class="col-md-12">
                  <Card className={classes.banner}>
                    <CardContent className={classes.cardContent}>
                      <Avatar alt="User" src="https://yt3.ggpht.com/a/AATXAJwht8OvVO9HMRD7PFE4F6WczDX814Sxwswxuo2m0w=s900-c-k-c0x00ffffff-no-rj" className={classes.avatar}></Avatar>
                      <Typography gutterBottom variant="h5" component="h4">
                        Username
                      </Typography>
                      <Typography>Information about the user</Typography>
                    </CardContent>
                  </Card>
                </div>
              </div>
              <div class="row">
                <div class="col-md-6">
                  <Typography variant="h6" gutterBottom>
                    Personal information
                  </Typography>
                  <table>
                    <tbody>
                      <tr>
                        <td>Nationality: </td>
                        <td></td>
                      </tr>
                      <tr>
                        <td>Birthday: </td>
                        <td></td>
                      </tr>
                      <tr>
                        <td>Languages: </td>
                        <td>
                          
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <div class="col-md-6">
                  <Typography variant="h6" gutterBottom>
                    Contact information
                  </Typography>

                  <table>
                    <tbody>
                      <tr>
                        <td>Phone number: </td>
                        <td></td>
                      </tr>
                      <tr>
                        <td>Email address: </td>
                        <td></td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </Card>

            {/* study + job history */}
            <Card className={classes.card}>
              <div class="row">
                <div class="col-md-6">
                  <Typography variant="h6" gutterBottom>
                    School history
                  </Typography>
                  <table className={classes.collectionItem}>
                    <tbody>
                      <tr>
                        <th className={classes.expHeader}>studyname</th>
                      </tr>
                      <tr>
                        <td>schoolname - city</td>
                      </tr>
                      <tr>
                        <td>start date - end date : duration</td>
                      </tr>
                    </tbody>
                  </table>

                  <hr className={classes.seperator} />

                  <table className={classes.collectionItem}>
                    <tbody>
                      <tr>
                        <th className={classes.expHeader}>studyname</th>
                      </tr>
                      <tr>
                        <td>schoolname - city</td>
                      </tr>
                      <tr>
                        <td>start date - end date : duration</td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                <div class="col-md-6">
                  <Typography variant="h6" gutterBottom>
                    Job history
                  </Typography>
                  <table className={classes.collectionItem}>
                    <tbody>
                      <tr>
                        <th className={classes.expHeader}>function name</th>
                      </tr>
                      <tr>
                        <td>company name</td>
                      </tr>
                      <tr>
                        <td>start date - end date : duration</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </Card>

            {/* about me */}
            <Card className={classes.card}>
              <Typography variant="h6" gutterBottom>
                About me
              </Typography>

              <div class="row">
                <div class="col-md-4">
                  <Typography gutterBottom>
                    Hobbies
                  </Typography>
                  <ul>
                    <li>
                      hobby 1
                    </li>
                    <li>
                      hobby 2
                    </li>
                    <li>
                      hobby 3
                    </li>
                  </ul>
                </div>
                <div class="col-md-4">
                  <Typography gutterBottom>
                    Interests
                  </Typography>
                  <ul>
                    <li>
                      Interest 1
                    </li>
                    <li>
                      Interest 2
                    </li>
                    <li>
                      Interest 3
                    </li>
                  </ul>

                </div>
                <div class="col-md-4">
                  <Typography gutterBottom>
                    Skills
                  </Typography>
                  <ul>
                    <li>
                      Skill 1
                    </li>
                    <li>
                      Skill 2
                    </li>
                    <li>
                      Skill 3
                    </li>
                  </ul>

                </div>
              </div>
            </Card>

            {/* projects */}
            <Card className={classes.card}>
              <Typography variant="h6" gutterBottom>
                Projects
              </Typography>

              




              <div class="row">


                <div class="col-md-6" > {/* add border */}
                  
                  <div class="row">
                    <div class="col-md-6">
                      <a href="">
                        <table>
                          <thead>
                            <tr>
                              <th>
                                  project name
                              </th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr>
                              <td className={classes.imgContainer}><img src={process.env.PUBLIC_URL + '/assets/github-small.png'} className={classes.projectIcon} /></td>
                            </tr>
                          </tbody>
                        </table>
                      </a>
                    </div>

                    <div class="col-md-6">
                      <Grid md={12}>
                        Collaberators
                      </Grid>
                      <Grid>
                        <ul>
                          <li>colaberator 1</li>
                          <li>colaberator 2</li>
                          <li>colaberator 3</li>
                          <li>colaberator 4</li>
                        </ul>
                      </Grid>
                    </div>

                  </div>
                </div>


                <div class="col-md-6"> {/* add border */}

                </div>
              </div>

            </Card>
          
          </Grid>
          <div className={classes.footer}></div>
      </Grid>
    );
  }
}

export default withStyles(styles)(GuestProfile)