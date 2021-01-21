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
import Avatar from "@material-ui/core/Avatar";
import UserProfileService from "../services/UserProfileService";
import ProjectService from "../services/ProjectService"
import TextField from "@material-ui/core/TextField";
import CloseIcon from "@material-ui/icons/Close";
import CheckIcon from "@material-ui/icons/Check";
import SaveIcon from '@material-ui/icons/Save';

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
          {children}
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
  emailAddress: "", 
  privacySettings: 0, 
  nationality: "NL", 
  address: "",
  isStudent: true,
  city: "",
  zipCode: "",
  birthday: "",
  birthPlace: "", 
  phoneNumber: "",
  userProperties: [
    {
      studies: [],
      jobs: [],
      skills: [],
      hobbies: [],
      interests: [],
    }
  ]
});

const deletedProps = Object({
  studies: [],
  jobs: [],
  skills: [],
  hobbies: [],
  interests: [],
});

class profile extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      disconnected: false,
      shiValues: [],
      sjValues: [],
      skillIndex: 0,
      interestIndex: 0,
      hobbyIndex: 0,
      studyIndex: 0,
      jobIndex: 0,
      projectIndex: 0,
      shiValue: 0,
      sjValue: 0,
      formData: personalData,
      deletedItems: deletedProps,
      skillList: [],
      interestList: [],
      hobbyList: [],
      studyList: [],
      jobList: [],
      projectList: [],
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.addNewSkill = this.addNewSkill.bind(this);
    this.addNewHobby = this.addNewHobby.bind(this);
    this.addNewInterest = this.addNewInterest.bind(this);
    this.addNewStudy = this.addNewStudy.bind(this);
    this.addNewJob = this.addNewJob.bind(this);
    this.addNewProject = this.addNewProject.bind(this);
    this.clickOnDelete = this.clickOnDelete.bind(this);
  }

  componentDidMount() {
    this.setState({
      deletedItems: Object({
        studies: [],
        jobs: [],
        skills: [],
        hobbies: [],
        interests: [],
      })
    })

    var newProjects = []
    var newProjectIndex = this.state.interestIndex

    var newInterests = []
    var newInterestIndex = this.state.interestIndex

    var newSkills = []
    var newSkillIndex = this.state.skillIndex

    var newHobbies = []
    var newHobbyIndex = this.state.hobbyIndex

    var newStudies = []
    var newStudyIndex = this.state.studyIndex

    var newJobs = []
    var newJobIndex = this.state.jobIndex

    UserProfileService.whoAmI()
      .then((result) => {
        this.setState({ formData: result });

        result.userProperties.skills.forEach(obj => {
          newSkills.push({ index: newSkillIndex, name: obj.name, label: "skill" })
          newSkillIndex++;
        })

        result.userProperties.hobbies.forEach(obj => {
          newHobbies.push({ index: newHobbyIndex, name: obj.name, label: "hobby" })
          newHobbyIndex++;
        })

        result.userProperties.interests.forEach(obj => {
          newInterests.push({ index: newInterestIndex, name: obj.name, label: "interest" })
          newInterestIndex++;
        })

        result.userProperties.studies.forEach(obj => {
          newStudies.push({ index: newStudyIndex, name: obj.name, school: obj.school, city: obj.city, endDate: obj.endDate, startDate: obj.startDate, label: "study" })
          newStudyIndex++;
        })

        result.userProperties.jobs.forEach(obj => {
          newJobs.push({ index: newJobIndex, name: obj.name, school: obj.school, city: obj.city, endDate: obj.endDate, startDate: obj.startDate, label: "job" })
          newJobIndex++;
        })

        newHobbies.forEach(obj => {
          this.setState((prevState) => ({ hobbyList: [...prevState.hobbyList, obj] }))
        })

        newInterests.forEach(obj => {
          this.setState((prevState) => ({ interestList: [...prevState.interestList, obj] }))
        })

        newSkills.forEach(obj => {
          this.setState((prevState) => ({ skillList: [...prevState.skillList, obj] }))
        })

        newStudies.forEach(obj => {
          this.setState((prevState) => ({ studyList: [...prevState.studyList, obj] }))
        })

        newJobs.forEach(obj => {
          this.setState((prevState) => ({ jobList: [...prevState.jobList, obj] }))
        })

        this.setState({
          interestIndex: newInterestIndex, skillIndex: newSkillIndex,
          hobbyIndex: newHobbyIndex, studyIndex: newStudyIndex, jobIndex: newJobIndex
        })

      }).catch((e) => {
        console.log(e)
        this.setState({ disconnected: true })
      })

    ProjectService.findUserProjects(localStorage.getItem('pcn')).then((result => {
      result.forEach(obj => {
        newProjects.push({ index: newProjectIndex, name: obj.name, url: obj.url, label: "project" })
        newProjectIndex++;
      })

      newProjects.forEach(obj => {
        this.setState((prevState) => ({ projectList: [...prevState.projectList, obj] }))
      })

      this.setState({projectIndex:newProjectIndex})
    }))
  }

  shiHandleChange = (event, newValue) => {
    this.setState({ shiValue: newValue });
  }

  sjHandleChange = (event, newValue) => {
    this.setState({ sjValue: newValue });
  }

  addNewSkill = (e) => {
    this.setState((prevState) => ({
      skillList: [
        ...prevState.skillList,
        { index: this.state.skillIndex, name: "", label: "skill" },
      ],
      skillIndex: this.state.skillIndex + 1,
    }));

    this.state.formData.userProperties.skills.push({ name: "" });
  }

  addNewHobby = (e) => {
    this.setState((prevState) => ({
      hobbyList: [
        ...prevState.hobbyList,
        { index: this.state.hobbyIndex, name: "", label: "hobby" },
      ],
      hobbyIndex: this.state.hobbyIndex + 1,
    }));
    this.state.formData.userProperties.hobbies.push({ name: "" });
  }

  addNewInterest = (e) => {
    this.setState((prevState) => ({
      interestList: [
        ...prevState.interestList,
        { index: this.state.interestIndex, name: "", label: "interest" },
      ],
      interestIndex: this.state.interestIndex + 1,
    }));

    this.state.formData.userProperties.interests.push({ name: "" });
  }

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

    this.state.formData.userProperties.studies.push({
      name: "",
      school: "",
      city: "",
      startDate: new Date(),
      endDate: new Date(),
    });
  }

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

    this.state.formData.userProperties.jobs.push({
      name: "",
      city: "",
      companyName: "",
      startDate: new Date(),
      endDate: new Date(),
    });
  }

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

    // this.state.formData.userProperties.projects.push({
    //   name: "",
    //   users: ["piet", "frank", "herman", "ingmar"],
    //   url: "",
    // });
  }

  changeProperty = (val, e) => {
    var target = e.target;
    var type = val.label;
    var id = target.id;
    var index = val.index;
    var value = target.value;

    if (type === "skill") {
      var skillList = this.state.skillList;
      var selectedSkill = skillList.find((x) => x.index === index);
      var selectedIndex = skillList.findIndex((x) => x.index === index);
      skillList[selectedIndex] = { index: index, name: value, label: "skill" };
      this.setState({ skillList });
      this.state.formData.userProperties.skills[index].name = value;
    } else if (type === "hobby") {
      var hobbyList = this.state.hobbyList;
      var selectedHobby = hobbyList.find((x) => x.index === index);
      var selectedIndex = hobbyList.findIndex((x) => x.index === index);
      hobbyList[selectedIndex] = { index: index, name: value, label: "hobby" };
      this.setState({ hobbyList });
      this.state.formData.userProperties.hobbies[index].name = value;
    } else if (type === "interest") {
      var interestList = this.state.interestList;
      var selectedInterest = interestList.find((x) => x.index === index);
      var selectedIndex = interestList.findIndex((x) => x.index === index);
      interestList[selectedIndex] = {
        index: index,
        name: value,
        label: "interest",
      };
      this.setState({ interestList });
      this.state.formData.userProperties.interests[index].name = value;
    } else if (type === "study") {
      var studyList = this.state.studyList;
      var selectedStudy = studyList.find((x) => x.index === index);
      var selectedIndex = studyList.findIndex((x) => x.index === index);
      if (id.includes("study")) {
        studyList[selectedIndex].name = value;
        this.setState({ studyList });
        this.state.formData.userProperties.studies[index].name = value;
      } else if (id.includes("school")) {
        studyList[selectedIndex].school = value;
        this.setState({ studyList });
        this.state.formData.userProperties.studies[index].school = value;
      } else if (id.includes("city")) {
        studyList[selectedIndex].city = value;
        this.setState({ studyList });
        this.state.formData.userProperties.studies[index].city = value;
      } else if (id.includes("endDate")) {
        studyList[selectedIndex].endDate = value;
        this.setState({ studyList });
        this.state.formData.userProperties.studies[index].endDate = value;
      } else if (id.includes("startDate")) {
        studyList[selectedIndex].startDate = value;
        this.setState({ studyList });
        this.state.formData.userProperties.studies[index].startDate = value;
      }
    } else if (type === "job") {
      var jobList = this.state.jobList;
      var selectedJob = jobList.find((x) => x.index === index);
      var selectedIndex = jobList.findIndex((x) => x.index === index);

      if (id.includes("job")) {
        jobList[selectedIndex].name = value;
        this.setState({ jobList });
        this.state.formData.userProperties.jobs[index].name = value;
      } else if (id.includes("endDate")) {
        jobList[selectedIndex].endDate = value;
        this.setState({ jobList });
        this.state.formData.userProperties.jobs[index].endDate = value;
      } else if (id.includes("startDate")) {
        jobList[selectedIndex].startDate = value;
        this.setState({ jobList });
        this.state.formData.userProperties.jobs[index].startDate = value;
      } else if (id.includes("companyName")) {
        jobList[selectedIndex].companyName = value;
        this.setState({ jobList });
        this.state.formData.userProperties.jobs[index].companyName = value;
      }
    } else if (type === "project"){
      var projectList = this.state.projectList;
      var selectedProject = projectList.find((x) => x.index === index);
      var selectedIndex = projectList.findIndex((x) => x.index === index);
      
        if(id.includes("name")){
          projectList[selectedIndex].name = value;
        this.setState({ projectList });
        // this.state.formData.userProperties.projects[selectedIndex].name = value;
        } else if(id.includes("url")){
          projectList[selectedIndex].url = value;
        this.setState({ projectList });
        // this.state.formData.userProperties.projects[selectedIndex].url = value;
        }
    }
  }

  clickOnDelete = (record) => {
    var type = record.label;
    var r;

    if (type === "interest") {
      r = this.state.formData.userProperties.interests.find((r) => r.name === record.name);

      if (r.id !== 0 && r.id !== null) {
        this.state.deletedItems.interests.push(r);
      }

      this.setState({
        interestList: this.state.interestList.filter((i) => i !== record),
      });
    } else if (type === "skill") {
      r = this.state.formData.userProperties.skills.find((s) => s.name === record.name);

      if (r.id !== 0 && r.id !== null) {
        this.state.deletedItems.skills.push(r);
      }

      this.setState({
        skillList: this.state.skillList.filter((r) => r !== record),
      });

      console.log("Deleted skill " + record.name);
    } else if (type === "hobby") {
      r = this.state.formData.userProperties.hobbies.find((r) => r.name === record.name);

      if (r.id !== 0 && r.id !== null) {
        this.state.deletedItems.hobbies.push(r);
      }

      this.setState({
        hobbyList: this.state.hobbyList.filter((r) => r !== record),
      });
    } else if (type === "study") {
      r = this.state.formData.userProperties.studies.find((r) => r.name === record.name);

      if (r.id !== 0 && r.id !== null) {
        this.state.deletedItems.studies.push(r);
      }

      this.setState({
        studyList: this.state.studyList.filter((r) => r !== record),
      });
    } else if (type === "job") {
      r = this.state.formData.userProperties.jobs.find((r) => r.name === record.name);

      if (r.id !== 0 && r.id !== null) {
        this.state.deletedItems.jobs.push(r);
      }

      this.setState({
        jobList: this.state.jobList.filter((r) => r.name !== record.name),
      });
    }
  }

  handleTest = async (e) => {
    await ProjectService.CreateProjects();
  }

  handleSubmit = async (e) => {
    if (!this.state.disconnected) {
      var personalData = this.state.formData;
      var projects = this.state.projectList;
      var deletedProps = this.state.deletedItems;

      await UserProfileService.updateProperties(personalData.userProperties);

      if (deletedProps != []) {
        await UserProfileService.deleteProperties(deletedProps);
      }

      if (projects != []) {
        await ProjectService.CreateProjects(projects);
      }

      window.location.replace("/guestprofile");
    }
  };

  render() {
    const shiSteps = ["Skills", "Hobbies", "Interests"];
    const sjSteps = ["Studies", "Jobs"];
    const { classes } = this.props;
    return (
      <Grid container style={{ maxWidth: "100%", margin: "15px auto" }}>
        <Grid item xs={12} md={12}>
          <Card className={classes.card}>
            <CardContent className={classes.cardContent}>
              <Avatar
                alt="User"
                src="https://yt3.ggpht.com/a/AATXAJwht8OvVO9HMRD7PFE4F6WczDX814Sxwswxuo2m0w=s900-c-k-c0x00ffffff-no-rj"
                className={classes.avatar}
              ></Avatar>
              <Typography gutterBottom variant="h3" component="h2">
                {this.state.formData.lastName}, {this.state.formData.firstName} {" "}
                {this.state.formData.prefix}
              </Typography>
            </CardContent>
            <div className={classes.cardActions}>
              <SaveIcon
                style={{ color: this.state.disconnected ? "white" : "#74C365" }}
                className={classes.settings}
                onClick={this.handleSubmit}
              ></SaveIcon>
              <CloseIcon
                style={{ color: this.state.disconnected ? "white" : "#E23D28" }}
                className={classes.settings}
                onClick={() => window.location.replace("/guestprofile")}
              ></CloseIcon>
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
                disabled={this.state.disconnected}
              >
                Add skill
              </Button>
            </Grid>
            <Grid item xs={12} md={6} style={{ textAlign: "left" }}>
              {this.state.skillList.map((val, idx) => {
                return (
                  <Grid key={val.index} item md={12}>
                    <TextField
                      id={val.label + "[" + val.index + "]"}
                      className={classes.textField}
                      label={val.label}
                      data-type={val.type}
                      data-index={val.index}
                      autoComplete={val.label}
                      value={val.name}
                      onChange={(e) => this.changeProperty(val, e)}
                    />
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
                  </Grid>
                );
              })}
              <br />
            </Grid>
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
                disabled={this.state.disconnected}
              >
                Add hobby
              </Button>
            </Grid>
            <Grid item xs={12} md={6} style={{ textAlign: "left" }}>
              {this.state.hobbyList.map((val, idx) => {
                return (
                  <Grid key={val.index} item md={12}>
                    <TextField
                      id={val.label + "[" + val.index + "]"}
                      label={val.label}
                      data-type={val.label}
                      data-index={val.index}
                      autoComplete={val.label}
                      value={val.name}
                      onChange={(e) => this.changeProperty(val, e)}
                    />
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
                disabled={this.state.disconnected}
              >
                Add interest
              </Button>
            </Grid>
            <Grid item xs={12} md={6} style={{ textAlign: "left" }}>
              {this.state.interestList.map((val, idx) => {
                return (
                  <Grid key={val.index} item md={12}>
                    <TextField
                      id={val.label + "[" + val.index + "]"}
                      label={val.label}
                      data-type={val.label}
                      data-index={val.index}
                      autoComplete={val.label}
                      value={val.name}
                      onChange={(e) => this.changeProperty(val, e)}
                    />
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
                disabled={this.state.disconnected}
              >
                Add study
              </Button>
            </Grid>
            <Grid item xs={12} md={6} style={{ textAlign: "left" }}>
              {this.state.studyList.map((val, idx) => {
                return (
                  <Grid key={val.index} item md={12}>
                    <TextField
                      id={val.label + "[" + idx + "]"}
                      label={val.label}
                      data-type={val.label}
                      autoComplete={val.label}
                      value={val.name}
                      onChange={(e) => this.changeProperty(val, e)}
                    />

                    <TextField
                      id={"school[" + idx + "]"}
                      label="school"
                      data-type={val.label}
                      autoComplete={val.label}
                      value={val.school}
                      onChange={(e) => this.changeProperty(val, e)}
                    />

                    <TextField
                      id={"city[" + idx + "]"}
                      label="city"
                      data-type={val.label}
                      autoComplete={val.label}
                      value={val.city}
                      onChange={(e) => this.changeProperty(val, e)}
                    />

                    <TextField
                      type="date"
                      id={"startDate[" + idx + "]"}
                      label="study start"
                      InputLabelProps={{
                        shrink: true,
                      }}
                      data-type={val.label}
                      value={val.startDate}
                      onChange={(e) => this.changeProperty(val, e)}
                    />

                    <TextField
                      type="date"
                      id={"endDate[" + idx + "]"}
                      label="study end"
                      InputLabelProps={{
                        shrink: true,
                      }}
                      data-type={val.label}
                      value={val.endDate == null ? "" : val.endDate}
                      onChange={(e) => this.changeProperty(val, e)}
                    />
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
                  </Grid>
                );
              })}
              <br />
            </Grid>
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
                disabled={this.state.disconnected}
              >
                Add job
              </Button>
            </Grid>
            <Grid item xs={12} md={6} style={{ textAlign: "left" }}>
              {this.state.jobList.map((val, idx) => {
                return (
                  <Grid key={val.index} item md={12}>
                    <TextField
                      id={val.label + "[" + idx + "]"}
                      label={val.label}
                      data-type={val.label}
                      autoComplete={val.label}
                      value={val.name}
                      onChange={(e) => this.changeProperty(val, e)}
                    />

                    <TextField
                      id={"companyName[" + idx + "]"}
                      label="company"
                      data-type={val.label}
                      autoComplete={val.label}
                      value={val.companyName}
                      onChange={(e) => this.changeProperty(val, e)}
                    />

                    <TextField
                      type="date"
                      id={"startDate[" + idx + "]"}
                      label="job start"
                      InputLabelProps={{
                        shrink: true,
                      }}
                      data-type={val.label}
                      value={val.startDate}
                      onChange={(e) => this.changeProperty(val, e)}
                    />

                    <TextField
                      type="date"
                      id={"endDate[" + idx + "]"}
                      label="job end"
                      InputLabelProps={{
                        shrink: true,
                      }}
                      data-type={val.label}
                      value={val.endDate}
                      onChange={(e) => this.changeProperty(val, e)}
                    />
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
            <Button disabled={this.state.disconnected} variant="outlined" color="primary" onClick={this.addNewProject} data-type="project">
              ADD PROJECT
            </Button><br /><br />

            {this.state.projectList.map((p, pidx) => {
              return (
                <Card key={pidx} className={classes.projectCard}>
                  <CardContent >
                    <TextField
                      id={"name" + p.index}
                      label={"name"}
                      data-type={""}
                      autoComplete={""}
                      value={p.name}
                      onChange={(e) => this.changeProperty(p, e)}
                    />
                    <TextField
                      id={"url" + p.index}
                      label={"url"}
                      data-type={""}
                      autoComplete={""}
                      value={p.url}
                      onChange={(e) => this.changeProperty(p, e)}
                    />
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