import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import Avatar from "@material-ui/core/Avatar";
import UserProfileService from "../services/UserProfileService";
import TextField from "@material-ui/core/TextField";
import CloseIcon from "@material-ui/icons/Close";
import CheckIcon from "@material-ui/icons/Check";
import axios from "axios";

function TabPanel(props) {
  const { children, value, index, ...other } = props;
  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`nav-tabpanel-${index}`}
      aria-labelledby={`nav-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `nav-tab-${index}`,
    "aria-controls": `nav-tabpanel-${index}`,
  };
}

function LinkTab(props) {
  return (
    <Tab
      component="a"
      onClick={(event) => {
        event.preventDefault();
      }}
      {...props}
    />
  );
}

const baseUrl = "http://localhost:8080";

const styles = (theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
  },
  tabs: {
    width: "100%",
  },
  tab1: {
    margin: "1% 0% 1% 0%",
    display: "inline-block",
    border: "4px solid #EDEAE0",
  },
  tab2: {
    margin: "1% 0% 1% 0%",
    display: "inline-block",
    border: "4px solid #EDEAE0",
  },
  tabPanel: {
    height: "250px",
    overflowY: "scroll",
  },
  icon: {
    marginRight: theme.spacing(2),
  },
  heroContent: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(8, 0, 6),
  },
  heroButtons: {
    marginTop: theme.spacing(4),
  },
  cardGrid: {
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(8),
  },
  card: {
    // display: "flex",
    // flexDirection: "column",
    backgroundColor: "#8D5C97",
    marginLeft: "1%",
    marginRight: "1%",
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
  footer: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(6),
  },
  avatar: {
    width: "200px",
    height: "200px",
    display: "inline-block",
    marginTop: "1%",
  },
  settings: {
    width: "50px",
    height: "50px",
    cursor: "pointer",
    float: "left",
  },
  projectCard: {
    margin: "0% 5% 0% 5%",
    display: "inline-block",
    height: "280px",
    width: '300px',
    overflowY: "scroll",
    border: "4px solid #EDEAE0",
  },
  dateFields: {
    display: "inline-block",
  },
  projectGroup: {
    margin: "1%",
    border: "4px solid #EDEAE0",
    textAlign: "center",
  },
});

const personalData = Object({
  pcn: "",
  firstName: "please try again!",
  prefix: "",
  lastName: "Not connected to database",
  emailAddress: "", ///
  privacySettings: 0, ///
  nationality: "NL", ///
  address: "",
  street: "",
  addressnumber: "",
  addressaddition: "",
  city: "",
  zipCode: "",
  birthday: "",
  birthPlace: "", ///
  phoneNumber: "",
  studies: [
    {
      name: "",
      startDate: new Date(),
      endDate: new Date(),
      school: "",
      city: "",
    },
  ],
  jobs: [
    { name: "", companyName: "", startDate: new Date(), endDate: new Date() },
  ],
  skills: [{ name: "" }],
  hobbies: [{ name: "" }],
  interests: [{ name: "" }],
  languages: [], ///
  projects: [{ name: "", url: "", users: "" }],
});

class profile extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      shiValues: [],
      sjValues: [],
      skillIndex: 1,
      interestIndex: 1,
      hobbyIndex: 1,
      studyIndex: 1,
      jobIndex: 1,
      projectIndex: 3,
      shiValue: 0,
      sjValue: 0,
      shiActiveStep: 0,
      sjActiveStep: 0,
      formData: personalData,
      skillList: [{ index: 0, name: "", label: "skill" }],
      interestList: [{ index: 0, name: "", label: "interest" }],
      hobbyList: [{ index: 0, name: "", label: "hobby" }],
      studyList: [
        {
          index: 0,
          name: "",
          school: "",
          city: "",
          startDate: new Date(),
          endDate: new Date(),
          label: "study",
        },
      ],
      jobList: [
        {
          index: 0,
          name: "",
          companyName: "",
          startDate: new Date(),
          endDate: new Date(),
          label: "job",
        },
      ],
      // projectList: [{index: 0, name: "", url: "", users: []}]
      projectList: [
        {
          index: 0,
          name: "Proftaak semester 1",
          url: "github.com/proftaak_sem1",
          users: ["hans", "pietje", "johan", "frits"],
        },
        {
          index: 1,
          name: "Proftaak semester 2",
          url: "github.com/proftaak_sem2",
          users: ["freek", "jaap", "frederik", "berend"],
        },
        {
          index: 2,
          name: "Proftaak semester 3",
          url: "github.com/proftaak_sem3",
          users: ["Jack", "Nynke", "Jayson", "Pim", "Olivier", "Youri"],
        },
      ],
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.addNewSkill = this.addNewSkill.bind(this);
    this.addNewHobby = this.addNewHobby.bind(this);
    this.addNewInterest = this.addNewInterest.bind(this);
    this.addNewStudy = this.addNewStudy.bind(this);
    this.addNewJob = this.addNewJob.bind(this);
    this.clickOnDelete = this.clickOnDelete.bind(this);
  }

  componentDidMount() {
    var headers = {
      "x-ms-client-principal-name": "410078@student.fontys.nl",
    };

    axios
      .get(baseUrl + "/api/user/410078", { headers: headers })
      .then((result) => {
        this.setState({ formData: result.data });
        console.log(result.data);
      })
      .catch((e) => console.log(e));
  }

  shiHandleChange = (event, newValue) => {
    // console.log(event);
    // let shiValues = [...this.state.shiValues];
    // shiValues[0] = event.target.value;
    // this.setState({shiValues});
    this.setState({ shiValue: newValue });
  };

  sjHandleChange = (event, newValue) => {
    // console.log(event);
    // let sjValues = [...this.state.sjValues];
    // sjValues[0] = event.target.value;
    // this.setState({sjValues});
    this.setState({ sjValue: newValue });
  };

  // addClick() {
  //     this.setState(prevState => ({values: [...prevState.values, '']}))
  // }

  addNewSkill = (e) => {
    this.setState((prevState) => ({
      skillList: [
        ...prevState.skillList,
        { index: this.state.skillIndex, name: "", label: "skill" },
      ],
      skillIndex: this.state.skillIndex + 1,
    }));
    this.state.formData.skills.push({ name: "" });
  };

  addNewHobby = (e) => {
    this.setState((prevState) => ({
      hobbyList: [
        ...prevState.hobbyList,
        { index: this.state.hobbyIndex, name: "", label: "hobby" },
      ],
      hobbyIndex: this.state.hobbyIndex + 1,
    }));
    this.state.formData.hobbies.push({ name: "" });
  };

  addNewInterest = (e) => {
    this.setState((prevState) => ({
      interestList: [
        ...prevState.interestList,
        { index: this.state.interestIndex, name: "", label: "interest" },
      ],
      interestIndex: this.state.interestIndex + 1,
    }));

    this.state.formData.interests.push({ name: "" });
  };

  addNewStudy = (e) => {
    this.setState((prevState) => ({
      studyList: [
        ...prevState.studyList,
        {
          index: this.state.studyIndex,
          name: "",
          startDate: new Date(),
          endDate: new Date(),
          school: "",
          city: "",
          label: "study",
        },
      ],
      studyIndex: this.state.studyIndex + 1,
    }));

    this.state.formData.studies.push({
      name: "",
      school: "",
      city: "",
      startDate: new Date(),
      endDate: new Date(),
    });
  };

  addNewJob = (e) => {
    this.setState((prevState) => ({
      jobList: [
        ...prevState.jobList,
        {
          index: this.state.jobIndex,
          name: "",
          startDate: new Date(),
          endDate: new Date(),
          companyName: "",
          label: "job",
        },
      ],
      jobIndex: this.state.jobIndex + 1,
    }));

    this.state.formData.jobs.push({
      name: "",
      city: "",
      companyName: "",
      startDate: new Date(),
      endDate: new Date(),
    });
  };

  addNewProject = (e) => {
    this.setState((prevState) => ({
      projectList: [
        ...prevState.projectList,
        {
          index: this.state.projectIndex,
          name: "",
          users: [],
          url: "",
          label: "project",
        },
      ],
      projectIndex: this.state.projectIndex + 1,
    }));

    this.state.formData.jobs.push({
      name: "",
      users: ["piet", "frank", "herman", "ingmar"],
      url: "",
    });
  };

  changeProperty = (val, e) => {
    var type = val.label;
    var id = e.id;
    var index = e.name;
    var value = e.value;

    if (type === "skill") {
      var skillList = this.state.skillList;
      var selectedSkill = skillList.find((x) => x.index == index);
      var selectedIndex = skillList.findIndex((x) => x.index == index);
      skillList[selectedIndex] = { index: index, name: value, label: "skill" };
      this.setState({ skillList });
      this.state.formData.skills[index] = { name: value };
    } else if (type === "hobby") {
      var hobbyList = this.state.hobbyList;
      var selectedHobby = hobbyList.find((x) => x.index == index);
      var selectedIndex = hobbyList.findIndex((x) => x.index == index);
      hobbyList[selectedIndex] = { index: index, name: value, label: "hobby" };
      this.setState({ hobbyList });
      this.state.formData.hobbies[index] = { name: value };
    } else if (type === "interest") {
      var interestList = this.state.interestList;
      var selectedInterest = interestList.find((x) => x.index == index);
      var selectedIndex = interestList.findIndex((x) => x.index == index);
      interestList[selectedIndex] = {
        index: index,
        name: value,
        label: "interest",
      };
      this.setState({ interestList });
      this.state.formData.interests[index] = { name: value };
    } else if (type === "study") {
      var studyList = this.state.studyList;
      var selectedStudy = studyList.find((x) => x.index == index);
      var selectedIndex = studyList.findIndex((x) => x.index == index);
      if (id.includes("study")) {
        studyList[selectedIndex].name = value;
        this.setState({ studyList });
        this.state.formData.studies[index].name = value;
      } else if (id.includes("school")) {
        studyList[selectedIndex].school = value;
        this.setState({ studyList });
        this.state.formData.studies[index].school = value;
      } else if (id.includes("city")) {
        studyList[selectedIndex].city = value;
        this.setState({ studyList });
        this.state.formData.studies[index].city = value;
      } else if (id.includes("endDate")) {
        studyList[selectedIndex].endDate = value;
        this.setState({ studyList });
        this.state.formData.studies[index].endDate = value;
      } else if (id.includes("startDate")) {
        studyList[selectedIndex].startDate = value;
        this.setState({ studyList });
        this.state.formData.studies[index].startDate = value;
      }
    } else if (type === "job") {
      var jobList = this.state.jobList;
      var selectedJob = jobList.find((x) => x.index == index);
      var selectedIndex = jobList.findIndex((x) => x.index == index);

      if (id.includes("job")) {
        jobList[selectedIndex].name = value;
        this.setState({ jobList });
        this.state.formData.jobs[index].name = value;
      } else if (id.includes("endDate")) {
        jobList[selectedIndex].endDate = value;
        this.setState({ jobList });
        this.state.formData.jobs[index].endDate = value;
      } else if (id.includes("startDate")) {
        jobList[selectedIndex].startDate = value;
        this.setState({ jobList });
        this.state.formData.jobs[index].startDate = value;
      } else if (id.includes("companyName")) {
        jobList[selectedIndex].companyName = value;
        this.setState({ jobList });
        this.state.formData.jobs[index].companyName = value;
      }
    }
  };

  clickOnDelete(record) {
    var type = record.label;

    if (type === "interest") {
      var interests = this.state.formData.interests.filter((r) => r !== record);
      var formData = this.state.formData;
      formData.interests = interests;

      this.setState({
        interestList: this.state.interestList.filter((r) => r !== record),
        formData: formData,
      });
    } else if (type === "skill") {
      var skills = this.state.formData.skills.filter((r) => r !== record);
      var formData = this.state.formData;
      formData.skills = skills;

      this.setState({
        skillList: this.state.skillList.filter((r) => r !== record),
        formData: formData,
      });

      console.log("Deleted skill " + record.name);
    } else if (type === "hobby") {
      var hobbies = this.state.formData.hobbies.filter((r) => r !== record);
      var formData = this.state.formData;
      formData.hobbies = hobbies;

      this.setState({
        hobbyList: this.state.hobbyList.filter((r) => r !== record),
        formData: formData,
      });
    } else if (type === "study") {
      var studies = this.state.formData.studies.filter((r) => r !== record);
      var formData = this.state.formData;
      formData.studies = studies;

      this.setState({
        studyList: this.state.studyList.filter((r) => r !== record),
        formData: formData,
      });
    } else if (type === "job") {
      var jobs = this.state.formData.jobs.filter((r) => r != record);
      var formData = this.state.formData;
      formData.jobs = jobs;

      this.setState({
        jobList: this.state.jobList.filter((r) => r !== record),
        formData: formData,
      });
    }
  }

  // removeClick(i) {
  //     let values = [...this.state.values];
  //     values.splice(i, 1);
  //     this.setState({values});
  // }

  handleSubmit = (e) => {
    var personalData = this.state.personalData;
    console.log(personalData);

    personalData.address =
      personalData.street + " " + personalData.addressnumber;

    if (
      personalData.addressaddition != null &&
      personalData.addressaddition != ""
    ) {
      personalData.address =
        personalData.address + personalData.addressaddition;
    }

    /******************************************************
     *     implement a form validation function here      *
     ******************************************************/

    var result = UserProfileService.updateProfile(personalData);
    console.log(result);
  };
  // handleSubmit(event) {
  //     alert('A name was submitted: ' + this.state.values.join(', '));
  //     event.preventDefault();
  // }

  // handleChange = (event, newValue) => {
  //     this.state.setState("value",  newValue);
  // };
  shiHandleTabsDisplay = () => {
    this.setState({ shiActiveStep: this.state.shiActiveStep + 1 });
  };

  sjHandleTabsDisplay = () => {
    this.setState({ sjActiveStep: this.state.sjActiveStep + 1 });
  };

  render() {
    const shiSteps = ["Skills", "Hobbies", "Interests"];
    const sjSteps = ["Studies", "Jobs"];
    const { classes } = this.props;
    return (
      <Grid container style={{ maxWidth: "100%", margin: "15px auto" }}>
        <Grid item xs={12} md={12}>
          <Card className={classes.card}>
            {/* <CardMedia
              className={classes.cardMedia}
              image="https://yt3.ggpht.com/a/AATXAJwht8OvVO9HMRD7PFE4F6WczDX814Sxwswxuo2m0w=s900-c-k-c0x00ffffff-no-rj"
              title="profile"
            /> */}
            <CardContent className={classes.cardContent}>
              <Avatar
                alt="User"
                src="https://yt3.ggpht.com/a/AATXAJwht8OvVO9HMRD7PFE4F6WczDX814Sxwswxuo2m0w=s900-c-k-c0x00ffffff-no-rj"
                className={classes.avatar}
              ></Avatar>
              <Typography gutterBottom variant="h3" component="h2">
                {this.state.formData.lastName}, {this.state.formData.firstName}{" "}
                {this.state.formData.prefix}
              </Typography>
              <Typography>Information about the user</Typography>
            </CardContent>
            <div className={classes.cardActions}>
              <CheckIcon
                style={{ color: "#74C365" }}
                className={classes.settings}
              ></CheckIcon>
              <CloseIcon
                style={{ color: "#E23D28" }}
                className={classes.settings}
              ></CloseIcon>
              {/* <CancelIcon style={{ color: '#BEBEBE' }} className={classes.settings}></CancelIcon> */}
              {/* <SettingsIcon className={classes.settings} onClick={() => this.props.history.push("/settings")}>
              </SettingsIcon> */}
            </div>
          </Card>
        </Grid>
        <Grid item xs={12} sm={6} className={classes.tab1}>
          <Tabs
            value={this.state.shiValue}
            onChange={this.shiHandleChange}
            aria-label="nav tabs example"
          >
            <LinkTab label={shiSteps[0]} {...a11yProps(0)} />
            <LinkTab label={shiSteps[1]} {...a11yProps(1)} />
            <LinkTab label={shiSteps[2]} {...a11yProps(2)} />
          </Tabs>
          <TabPanel
            value={this.state.shiValue}
            className={classes.tabPanel}
            index={0}
          >
            <Grid item md={12}>
              <Button
                onClick={this.addNewSkill}
                data-type="skill"
                variant="outlined"
                color="primary"
              >
                Add skill
              </Button>
            </Grid>
            <Grid item xs={12} md={6} style={{ textAlign: "left" }}>
              {this.state.skillList.map((val, idx) => {
                // var value = this.state.formData.skills[idx];
                return (
                  <Grid key={val.index} item md={12}>
                    <TextField
                      name={val.index}
                      id={val.label + "[" + val.index + "]"}
                      className={classes.textField}
                      label={val.label}
                      data-type={val.type}
                      autoComplete={val.label}
                      value={val.name}
                      onChange={(e) => this.changeProperty(val, e.target)}
                    />
                    {idx === 0 ? (
                      ""
                    ) : (
                      <button
                        style={{
                          padding: "1px 6px",
                          verticalAlign: "bottom",
                          marginLeft: "5px",
                        }}
                        className="field_manipulation_btn btn btn-danger"
                        onClick={() => this.clickOnDelete(val)}
                      >
                        <i className="fa fa-trash"></i>
                      </button>
                    )}
                  </Grid>
                );
              })}
              <br />
            </Grid>
            {/*<Review form={this.state.formData} onChange={this.handleChange.bind(this)}></Review>*/}
            {/*        clickOnDelete={this.clickOnDelete}*/}
            {/*        addNewSkill={this.addNewSkill}*/}
            {/*        skillList={this.state.skillList}/>*/}
          </TabPanel>
          <TabPanel
            value={this.state.shiValue}
            className={classes.tabPanel}
            index={1}
          >
            <Grid item md={12}>
              <Button
                onClick={this.addNewHobby}
                data-type="hobby"
                variant="outlined"
                color="primary"
              >
                Add hobby
              </Button>
            </Grid>
            <Grid item xs={12} md={6} style={{ textAlign: "left" }}>
              {this.state.hobbyList.map((val, idx) => {
                return (
                  <Grid key={val.index} item md={12}>
                    <TextField
                      name={val.index}
                      id={val.label + "[" + val.index + "]"}
                      label={val.label}
                      data-type={val.label}
                      autoComplete={val.label}
                      value={val.name}
                      onChange={(e) => this.changeProperty(val, e.target)}
                    />
                    {idx === 0 ? (
                      ""
                    ) : (
                      <button
                        style={{
                          padding: "1px 6px",
                          verticalAlign: "bottom",
                          marginLeft: "5px",
                        }}
                        className="field_manipulation_btn btn btn-danger"
                        onClick={() => this.clickOnDelete(val)}
                      >
                        <i className="fa fa-trash"></i>
                      </button>
                    )}
                  </Grid>
                );
              })}
              <br />
            </Grid>
          </TabPanel>
          <TabPanel
            value={this.state.shiValue}
            className={classes.tabPanel}
            index={2}
          >
            <Grid item md={12}>
              <Button
                onClick={this.addNewInterest}
                data-type="interest"
                variant="outlined"
                color="primary"
              >
                Add interest
              </Button>
            </Grid>
            <Grid item xs={12} md={6} style={{ textAlign: "left" }}>
              {this.state.interestList.map((val, idx) => {
                return (
                  <Grid key={val.index} item md={12}>
                    <TextField
                      name={val.index}
                      id={val.label + "[" + val.index + "]"}
                      label={val.label}
                      data-type={val.label}
                      autoComplete={val.label}
                      value={val.name}
                      onChange={(e) => this.changeProperty(val, e.target)}
                    />
                    {idx === 0 ? (
                      ""
                    ) : (
                      <button
                        style={{
                          padding: "1px 6px",
                          verticalAlign: "bottom",
                          marginLeft: "5px",
                        }}
                        className="field_manipulation_btn btn btn-danger"
                        onClick={() => this.clickOnDelete(val)}
                      >
                        <i className="fa fa-trash"></i>
                      </button>
                    )}
                  </Grid>
                );
              })}
              <br />
            </Grid>
          </TabPanel>
        </Grid>

        <Grid item xs={12} sm={6} className={classes.tab2}>
          <Tabs
            value={this.state.sjValue}
            onChange={this.sjHandleChange}
            aria-label="nav tabs example"
          >
            <LinkTab label={sjSteps[0]} {...a11yProps(0)} />
            <LinkTab label={sjSteps[1]} {...a11yProps(1)} />
          </Tabs>
          <TabPanel
            value={this.state.sjValue}
            className={classes.tabPanel}
            index={0}
          >
            <Grid item md={12}>
              <Button
                onClick={this.addNewStudy}
                data-type="study"
                variant="outlined"
                color="primary"
              >
                Add study
              </Button>
            </Grid>
            <Grid item xs={12} md={6} style={{ textAlign: "left" }}>
              {this.state.studyList.map((val, idx) => {
                return (
                  <Grid key={val.index} item md={12}>
                    <TextField
                      name={val.index}
                      id={val.label + "[" + idx + "]"}
                      label={val.label}
                      data-type={val.label}
                      autoComplete={val.label}
                      value={val.name}
                      onChange={(e) => this.changeProperty(val, e.target)}
                    />

                    <TextField
                      name={val.index}
                      id={"school[" + idx + "]"}
                      label="school"
                      data-type={val.label}
                      autoComplete={val.label}
                      value={val.school}
                      onChange={(e) => this.changeProperty(val, e.target)}
                    />

                    <TextField
                      name={val.index}
                      id={"city[" + idx + "]"}
                      label="city"
                      data-type={val.label}
                      autoComplete={val.label}
                      value={val.city}
                      onChange={(e) => this.changeProperty(val, e.target)}
                    />

                    <TextField
                      name={val.index}
                      type="date"
                      id={"startDate[" + idx + "]"}
                      label="study start"
                      InputLabelProps={{
                        shrink: true,
                      }}
                      data-type={val.label}
                      value={val.startDate}
                      onChange={(e) => this.changeProperty(val, e.target)}
                    />

                    <TextField
                      name={val.index}
                      type="date"
                      id={"endDate[" + idx + "]"}
                      label="study end"
                      InputLabelProps={{
                        shrink: true,
                      }}
                      data-type={val.label}
                      value={val.endDate}
                      onChange={(e) => this.changeProperty(val, e.target)}
                    />

                    {idx === 0 ? (
                      ""
                    ) : (
                      <button
                        style={{
                          padding: "1px 6px",
                          verticalAlign: "bottom",
                          marginLeft: "5px",
                        }}
                        className="field_manipulation_btn btn btn-danger"
                        onClick={() => this.clickOnDelete(val)}
                      >
                        <i className="fa fa-trash"></i>
                      </button>
                    )}
                  </Grid>
                );
              })}
              <br />
            </Grid>
            {/*<Review form={this.state.formData} onChange={this.handleChange.bind(this)}*/}
            {/*        clickOnDelete={this.clickOnDelete}*/}
            {/*        addNewSkill={this.addNewSkill}*/}
            {/*        skillList={this.state.skillList}/>*/}
          </TabPanel>
          <TabPanel
            className={classes.tabPanel}
            value={this.state.sjValue}
            index={1}
          >
            <Grid item md={12}>
              <Button
                onClick={this.addNewJob}
                data-type="job"
                variant="outlined"
                color="primary"
              >
                Add job
              </Button>
            </Grid>
            <Grid item xs={12} md={6} style={{ textAlign: "left" }}>
              {this.state.jobList.map((val, idx) => {
                return (
                  <Grid key={val.index} item md={12}>
                    <TextField
                      name={val.index}
                      id={val.label + "[" + idx + "]"}
                      label={val.label}
                      data-type={val.label}
                      autoComplete={val.label}
                      value={val.name}
                      onChange={(e) => this.changeProperty(val, e.target)}
                    />

                    <TextField
                      name={val.index}
                      id={"companyName[" + idx + "]"}
                      label="company"
                      data-type={val.label}
                      autoComplete={val.label}
                      value={val.companyName}
                      onChange={(e) => this.changeProperty(val, e.target)}
                    />

                    <TextField
                      name={val.index}
                      type="date"
                      id={"startDate[" + idx + "]"}
                      label="job start"
                      InputLabelProps={{
                        shrink: true,
                      }}
                      data-type={val.label}
                      value={val.startDate}
                      onChange={(e) => this.changeProperty(val, e.target)}
                    />

                    <TextField
                      name={val.index}
                      type="date"
                      id={"endDate[" + idx + "]"}
                      label="job end"
                      InputLabelProps={{
                        shrink: true,
                      }}
                      data-type={val.label}
                      value={val.endDate}
                      onChange={(e) => this.changeProperty(val, e.target)}
                    />

                    {idx === 0 ? (
                      ""
                    ) : (
                      <button
                        style={{
                          padding: "1px 6px",
                          verticalAlign: "bottom",
                          marginLeft: "5px",
                        }}
                        className="field_manipulation_btn btn btn-danger"
                        onClick={() => this.clickOnDelete(val)}
                      >
                        <i className="fa fa-trash"></i>
                      </button>
                    )}
                  </Grid>
                );
              })}
              <br />
            </Grid>
          </TabPanel>
        </Grid>
        
        <Grid item xs={12} md={12}>
          <div className={classes.projectGroup}>
            <Typography variant="h4">Projects</Typography>
            <Button variant="outlined" color="primary" onClick={this.addNewProject} data-type="project">
              ADD PROJECT
            </Button><br/><br/>

            {this.state.projectList.map((p) => {
              return (
                  <Card className={classes.projectCard}>
                    <CardContent >
                      <TextField
                        name={""}
                        id={p.index}
                        label={"name"}
                        data-type={""}
                        autoComplete={""}
                        value={p.name}
                      />
                      {p.users.map((u) => (
                        <Typography variant="h6">{u}</Typography>
                      ))}
                      <TextField
                        name={""}
                        id={p.index}
                        label={"url"}
                        data-type={""}
                        autoComplete={""}
                        value={p.url}
                      />

                      {p.index === 0 ? (
                        ""
                      ) : (
                        <div>
                          <br></br>
                          <button
                            style={{
                              padding: "1px 6px",
                              verticalAlign: "bottom",
                              marginLeft: "5px",
                            }}
                            className="field_manipulation_btn btn btn-danger"
                          >
                            <i className="fa fa-trash"></i>
                          </button>
                        </div>
                      )}
                    </CardContent>
                  </Card>
              );
            })}
          </div>
        </Grid>
      </Grid>
    );
  }
}

export default withStyles(styles)(profile);
