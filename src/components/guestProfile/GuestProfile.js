import React from "react";
import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import Typography from "@material-ui/core/Typography";
import { withStyles } from "@material-ui/core/styles";
import CardContent from "@material-ui/core/CardContent";
import Avatar from "@material-ui/core/Avatar";
import SettingsIcon from "@material-ui/icons/Settings";
import $ from "jquery";
import { red } from "@material-ui/core/colors";
import GitHubIcon from "@material-ui/icons/GitHub";
import EditIcon from "@material-ui/icons/Edit";
import UserProfileService from "../../services/UserProfileService";
import UserProfile from "../../entities/UserProfile";

const styles = (theme) => ({
  appBar: {
    position: "relative",
  },
  layout: {
    width: "auto",
    marginLeft: theme.spacing(2),
    marginRight: theme.spacing(2),
    [theme.breakpoints.up(600 + theme.spacing(2) * 2)]: {
      width: 600,
      marginLeft: "auto",
      marginRight: "auto",
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
    display: "flex",
    justifyContent: "flex-end",
  },
  button: {
    marginTop: theme.spacing(3),
    marginLeft: theme.spacing(1),
  },
  description: {
    fontSize: "18px",
    fontWeight: 400,
  },
  banner: {
    backgroundColor: "#8D5C97",
    margin: theme.spacing(-5, -5, 2, -5),
  },
  cardActions: {
    float: "left",
    width: "10%",
  },
  cardContent: {
    flexGrow: 1,
    color: "white",
    textAlign: "center",
  },
  avatar: {
    width: "125px",
    height: "125px",
    display: "inline-block",
    marginTop: "1%",
  },
  expHeader: {
    fontSize: "16px",
    fontWeight: 600,
  },
  collectionItem: {
    lineHeight: "18px",
    fontSize: "14px",
  },
  seperator: {
    backgroundColor: "#8D5C97",
  },
  footer: {
    width: "100%",
    height: "60px",
  },
  projectIcon: {
    // width: '100%',
    height: "115px",
  },
  imgContainer: {
    textAlign: "center",
  },
  projectCard: {
    padding: theme.spacing(0, 2),
  },
  proCardContent: {
    border: "2px solid #8D5C97",
  },
  cardActions: {
    float: "left",
    width: "10%",
  },
  settings: {
    width: "50px",
    height: "50px",
    cursor: "pointer",
    float: "left",
    color: "#D0D0D0",
  },
    // border: "2px solid #8D5C97",
    boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)",
    padding: "15px"
  }
);

const languages = Object([
  { code: "NL", language: "Dutch" },
  { code: "EN", language: "English" },
  { code: "DE", language: "German" },
  { code: "FR", language: "French" },
  { code: "IT", language: "Italian" },
  { code: "PL", language: "Polish" },
  { code: "SW", language: "Swiss" },
  { code: "SP", language: "Spanish" },
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
  { code: "ES", language: "Spain" },
]);

class GuestProfile extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      pcn: this.props.match.params.pcn,
      userProfile: new UserProfile(),
      username: "",
    };

    this.getUserData();
  }

  getUserData() {
    UserProfileService.findByPcn(this.state.pcn)
      .then((response) => {
        var Profile = new UserProfile();
        Profile.loadFromObject(response.data);

        this.setState({ userProfile: Profile });

        var name = "";
        if (this.state.userProfile.prefix.trim() !== "") {
          name =
            this.state.userProfile.firstName +
            " " +
            this.state.userProfile.prefix +
            " " +
            this.state.userProfile.lastName;
        } else {
          name =
            this.state.userProfile.firstName +
            " " +
            this.state.userProfile.lastName;
        }

        this.setState({ username: name });
      })
      .catch((error) => {
        console.log("error 3 " + error);
      });
  }

  getMonth() {}

  getDateDiference(startdate, enddate) {
    var diff = Math.floor(enddate.getTime() - startdate.getTime());
    var day = 1000 * 60 * 60 * 24;
    var month = day * 31;
    var year = month * 12;

    var yearcount = Math.floor(diff / year);
    var yearsInMiliSeconds = yearcount * year;

    var remainingDiff = diff - yearsInMiliSeconds;

    var monthcount = Math.floor(remainingDiff / month);
    var monthsInMiliSeconds = monthcount * month;

    var remainingDiff = remainingDiff - monthsInMiliSeconds;

    var daycount = Math.floor(remainingDiff / day);

    var years = yearcount == 1 ? yearcount + " year " : yearcount + " years ";
    var months =
      monthcount == 1 ? monthcount + " month " : monthcount + " months ";
    var days = daycount == 1 ? daycount + " day " : daycount + " days ";

    var response = "";

    if (yearcount > 0) {
      response = years + months;
    } else if (monthcount > 0) {
      response = months + days;
    } else {
      response = days;
    }

    return response;
  }

  render() {
    const { classes } = this.props;
    const userProfile = this.state.userProfile;
    const monthNames = [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ];
    var tempNationality = nationalities.filter((obj) => {
      return obj.code === userProfile.nationality;
    })[0];

    const nationality =
      tempNationality == undefined ? "" : tempNationality.language;

    return (
      <Grid container style={{ maxWidth: "1100px", margin: "15px auto" }}>
        <Grid item md={12} style={{ marginRight: "25px" }}>
          {/* personal data */}
          <Card className={classes.card}>
            <div className="row">
              <div className="col-md-12">
                <Card className={classes.banner}>
                  <CardContent className={classes.cardContent}>
                    <Avatar
                      alt="User"
                      src="https://yt3.ggpht.com/a/AATXAJwht8OvVO9HMRD7PFE4F6WczDX814Sxwswxuo2m0w=s900-c-k-c0x00ffffff-no-rj"
                      className={classes.avatar}
                    ></Avatar>
                    <Typography gutterBottom variant="h5" component="h4">
                      {this.state.username}
                    </Typography>
                    <Typography>Information about the user</Typography>
                  </CardContent>
                  <div className={classes.cardActions}>
                    {localStorage.getItem("pcn") == this.state.pcn ? (
                      <div>
                        <SettingsIcon
                          className={classes.settings}
                          onClick={() => this.props.history.push("/settings")}
                        />
                        <EditIcon
                          className={classes.settings}
                          onClick={() => this.props.history.push("/profile")}
                        />
                      </div>
                    ) : (
                      <div></div>
                    )}
                  </div>
                </Card>
              </div>
            </div>
            <div className="row">
              <div className="col-md-6">
                <Typography variant="h6" gutterBottom>
                  Personal information
                </Typography>
                <table>
                  <tbody>
                    <tr>
                      <td>Nationality: </td>
                      <td style={{ paddingLeft: "10px" }}>{nationality}</td>
                    </tr>
                    <tr>
                      <td>Birthday: </td>
                      <td style={{ paddingLeft: "10px" }}>
                        {userProfile.birthday}
                      </td>
                    </tr>
                    <tr>
                      <td>Languages: </td>
                      <td style={{ paddingLeft: "10px" }}>
                        {userProfile.languages
                          .map(function (elem) {
                            return languages.filter((obj) => {
                              return obj.code === elem.name;
                            })[0].language;
                          })
                          .join(", ")}
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div className="col-md-6">
                <Typography variant="h6" gutterBottom>
                  Contact information
                </Typography>

                <table>
                  <tbody>
                    <tr>
                      <td>Phone number: </td>
                      <td style={{ paddingLeft: "10px" }}>
                        {this.state.userProfile.phoneNumber}
                      </td>
                    </tr>
                    <tr>
                      <td>Email address: </td>
                      <td style={{ paddingLeft: "10px" }}>
                        {this.state.userProfile.emailAddress}
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </Card>

          {/* study + job history */}
          <Card className={classes.card}>
            <div className="row">
              {/* studies */}
              <div className="col-md-6">
                <Typography variant="h6" gutterBottom>
                  School history
                </Typography>

                {userProfile.studies.map((val, idx) => {
                  console.log(userProfile.studies);
                  var date1 = new Date(val.startDate);
                  var date2 =
                    val.endDate == null ? new Date() : new Date(val.endDate);

                  var startdate =
                    monthNames[date1.getMonth()] + " " + date1.getFullYear();
                  var enddate =
                    val.endDate == null
                      ? "heden"
                      : monthNames[date2.getMonth()] +
                        " " +
                        date2.getFullYear();

                  var duration = this.getDateDiference(date1, date2);

                  if (idx === 0) {
                    return (
                      <Grid key={idx}>
                        <table className={classes.collectionItem}>
                          <tbody>
                            <tr>
                              <th className={classes.expHeader}>{val.name}</th>
                            </tr>
                            <tr>
                              <td>
                                {val.school} - {val.city}
                              </td>
                            </tr>
                            <tr>
                              <td>
                                {startdate} - {enddate} : {duration.toString()}
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </Grid>
                    );
                  }

                  return (
                    <Grid key={idx}>
                      <hr className={classes.seperator} />

                      <table className={classes.collectionItem}>
                        <tbody>
                          <tr>
                            <th className={classes.expHeader}>{val.name}</th>
                          </tr>
                          <tr>
                            <td>
                              {val.school} - {val.city}
                            </td>
                          </tr>
                          <tr>
                            <td>
                              {startdate} - {enddate} : {duration.toString()}
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </Grid>
                  );
                })}
              </div>

              {/* jobs */}
              <div className="col-md-6">
                <Typography variant="h6" gutterBottom>
                  Job history
                </Typography>

                {userProfile.jobs.map((val, idx) => {
                  var date1 = new Date(val.startDate);
                  var date2 =
                    val.endDate == null ? new Date() : new Date(val.endDate);

                  var startdate =
                    monthNames[date1.getMonth()] + " " + date1.getFullYear();
                  var enddate =
                    val.endDate == null
                      ? "heden"
                      : monthNames[date2.getMonth()] +
                        " " +
                        date2.getFullYear();

                  var duration = this.getDateDiference(date1, date2);

                  if (idx === 0) {
                    return (
                      <Grid key={idx}>
                        <table className={classes.collectionItem}>
                          <tbody>
                            <tr>
                              <th className={classes.expHeader}>{val.name}</th>
                            </tr>
                            <tr>
                              <td>{val.companyName}</td>
                            </tr>
                            <tr>
                              <td>
                                {startdate} - {enddate} : {duration.toString()}
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </Grid>
                    );
                  }

                  return (
                    <Grid key={idx}>
                      <hr className={classes.seperator} />

                      <table className={classes.collectionItem}>
                        <tbody>
                          <tr>
                            <th className={classes.expHeader}>{val.name}</th>
                          </tr>
                          <tr>
                            <td>{val.companyName}</td>
                          </tr>
                          <tr>
                            <td>
                              {startdate} - {enddate} : {duration.toString()}
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </Grid>
                  );
                })}
              </div>
            </div>
          </Card>

          {/* about me */}
          <Card className={classes.card}>
            <Typography variant="h6" gutterBottom>
              About me
            </Typography>

            <div className="row">
              <div className="col-md-4">
                <Typography gutterBottom>Hobbies</Typography>
                <ul>
                  {userProfile.hobbies.map((val, idx) => {
                    return <li key={idx}>{val.name}</li>;
                  })}
                </ul>
              </div>
              <div className="col-md-4">
                <Typography gutterBottom>Interests</Typography>
                <ul>
                  {userProfile.interests.map((val, idx) => {
                    return <li key={idx}>{val.name}</li>;
                  })}
                </ul>
              </div>
              <div className="col-md-4">
                <Typography gutterBottom>Skills</Typography>
                <ul>
                  {userProfile.skills.map((val, idx) => {
                    return <li key={idx}>{val.name}</li>;
                  })}
                </ul>
              </div>
            </div>
          </Card>

          {/* projects */}
          <Card className={classes.card}>
            <Typography variant="h6" gutterBottom>
              Projects
            </Typography>

            <div className="row">
              <div className="col-md-6" style={{ padding: "15px" }}>
                {" "}
                {/* add border */}
                <div className={classes.proCardContent}>
                  <div className="row">
                    <div className="col-md-6">
                      <a href="">
                        <table>
                          <thead>
                            <tr>
                              <th>project name</th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr>
                              <td className={classes.imgContainer}>
                                <img
                                  src={
                                    process.env.PUBLIC_URL +
                                    "/assets/github-small.png"
                                  }
                                  className={classes.projectIcon}
                                />
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </a>
                    </div>

                    <div className="col-md-6">
                      <Grid item md={12}>
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
              </div>

              <div className="col-md-6" style={{ padding: "15px" }}>
                {" "}
                {/* add border */}
                <div className={classes.proCardContent}>
                  <div className="row">
                    <div className="col-md-6">
                      <a href="">
                        <table>
                          <thead>
                            <tr>
                              <th>project name</th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr>
                              <td className={classes.imgContainer}>
                                <img
                                  src={
                                    process.env.PUBLIC_URL +
                                    "/assets/github-small.png"
                                  }
                                  className={classes.projectIcon}
                                />
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </a>
                    </div>

                    <div className="col-md-6">
                      <Grid item md={12}>
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
              </div>
            </div>
          </Card>
        </Grid>
        <div className={classes.footer}></div>
      </Grid>
    );
  }
}

export default withStyles(styles)(GuestProfile);
