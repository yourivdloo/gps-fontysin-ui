import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import {withStyles} from '@material-ui/core/styles';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import {useMediaQuery} from "@material-ui/core";
import Review from './Review';
import InputField from "./inputField";
import UserProfileService from "../services/UserProfileService";
import TextField from '@material-ui/core/TextField';

function TabPanel(props) {
    const {children, value, index, ...other} = props;
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
        'aria-controls': `nav-tabpanel-${index}`,
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

const styles = theme => ({
    root: {
        flexGrow: 1,
        backgroundColor: theme.palette.background.paper
    },
    tabs: {
        position: "static",
        alignItems: "center"
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
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
    },
    cardMedia: {
        paddingTop: '56.25%', // 16:9
    },
    cardContent: {
        flexGrow: 1,
    },
    footer: {
        backgroundColor: theme.palette.background.paper,
        padding: theme.spacing(6),
    }
});

const personalData = Object({
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
    studies: [{name: "", startDate: new Date(), endDate: new Date(), school: ""}],
    jobs: [{name: "", startDate: new Date(), endDate: new Date(), city:""}],
    skills: [{name: ""}],
    hobbies: [{name: ""}],
    interests: [{name: ""}],
    languages: []         ///

});

class profile extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            shiValue: 0,
            sjValue: 0,
            shiActiveStep: 0,
            sjActiveStep: 0,
            formData: personalData,
            skillList: [{index: Math.random(), name: "skills[]", label: "skill"}],
            intrestList: [{index: Math.random(), name: "interests[]", label: "interest"}],
            hobbyList: [{index: Math.random(), name: "hobbies[]", label: "hobby"}],
            studyList: [{index: Math.random(), name: "studies[]", school: "school", startDate: new Date(), endDate: new Date(), label: "study"}],
            jobList: [{index: Math.random(), name: "jobs[]", city: "city", startDate: new Date(), endDate: new Date(), label: "job"}]
        };
        this.handleSubmit = this.handleSubmit.bind(this);
        this.addNewSkill = this.addNewSkill.bind(this);
        this.addNewHobby = this.addNewHobby.bind(this);
        this.addNewIntrest = this.addNewIntrest.bind(this);
        this.addNewStudy = this.addNewStudy.bind(this);
        this.addNewJob = this.addNewJob.bind(this);
        this.clickOnDelete = this.clickOnDelete.bind(this);
    }

    // createUI() {
    //     return this.state.values.map((el, i) =>
    //         <div key={i}>
    //             <input type="text" value={el || ''} onChange={this.handleChange.bind(this, i)}/>
    //             <input type='button' value='remove' onClick={this.removeClick.bind(this, i)}/>
    //         </div>
    //     )
    // }

    shiHandleChange = (event, newValue) => {
        // console.log(event);
        // let values = [...this.state.values];
        // values[0] = event.target.value;
        // this.setState({values});
        this.setState({shiValue:newValue});
    }

    sjHandleChange = (event, newValue) => {
        this.setState({sjValue:newValue});
    }

    // addClick() {
    //     this.setState(prevState => ({values: [...prevState.values, '']}))
    // }

    addNewSkill = (e) => {
        this.setState((prevState) => ({
            skillList: [...prevState.skillList, {index: Math.random(), name: "skills[]", label: "skill"}],
        }));
        this
            .state
            .formData
            .skills
            .push({"name": ""});
    }

    addNewHobby = (e) => {
        this.setState((prevState) => ({
            hobbyList: [...prevState.hobbyList, {index: Math.random(), name: "hobbies[]", label: "hobby"}],
        }));
        this
            .state
            .formData
            .hobbies
            .push({"name": ""});
    }

    addNewIntrest = (e) => {
        this.setState((prevState) => ({
            intrestList: [...prevState.intrestList, {index: Math.random(), name: "interests[]", label: "interest"}],
        }));

        this
            .state
            .formData
            .interests
            .push({"name": ""});
    }

    addNewStudy = (e) => {
        this.setState((prevState) => ({
            studyList: [...prevState.studyList, {index: Math.random(), name: "studies[]", startDate: new Date(), endDate: new Date(), label: "study"}],
        }));

        this
            .state
            .formData
            .interests
            .push({"name": "", "school": "", "startDate": new Date(), "endDate": new Date()});
    }

    addNewJob = (e) => {
        this.setState((prevState) => ({
            jobList: [...prevState.studyList, {index: Math.random(), name: "jobs[]", startDate: new Date(), endDate: new Date(), label: "job"}],
        }));

        this
            .state
            .formData
            .interests
            .push({"name": "", "city": "", "startDate": new Date(), "endDate": new Date()});
    }

    clickOnDelete(record) {
        var type = record.label;

        if(type === "interest"){
            this.setState({
                intrestList: this.state.intrestList.filter(r => r !== record)
            });

        }else if(type === "skill"){
            this.setState({
                skillList: this.state.skillList.filter(r => r !== record)
            });

        }else if(type === "hobby"){
            this.setState({
                hobbyList: this.state.hobbyList.filter(r => r !== record)
            });
        }else if(type === "study"){
            this.setState({
                studyList: this.state.studyList.filter(r => r !== record)
            });
        }else if(type === "job"){
            this.setState({
                jobList: this.state.jobList.filter(r => r !== record)
            });
        }
    }


    // removeClick(i) {
    //     let values = [...this.state.values];
    //     values.splice(i, 1);
    //     this.setState({values});
    // }

    handleSubmit = (e) => {
        // console.log(e);
        // ... submit to API or something

        var personalData = this.state.personalData;
        console.log(personalData);

        personalData.address = personalData.street + " " + personalData.addressnumber;

        if (personalData.addressaddition != null && personalData.addressaddition != "") {
            personalData.address = personalData.address + personalData.addressaddition;
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
        this.setState({shiActiveStep: this.state.shiActiveStep + 1})
    };

    sjHandleTabsDisplay = () => {
        this.setState({sjActiveStep: this.state.sjActiveStep + 1})
    };


    render() {
        const shiSteps = ['Skills', 'Hobbies', 'Interests'];
        const sjSteps = ['Studies', 'Jobs'];
        const {classes} = this.props;
        return (
            <Grid container style={{maxWidth: '75%', margin: '15px auto'}}>
                <Grid item xs={12} md={12}>
                    <Card className={classes.card} style={{marginLeft: '25%', marginRight: '25%'}}>
                        <CardMedia
                            className={classes.cardMedia}
                            image="https://yt3.ggpht.com/a/AATXAJwht8OvVO9HMRD7PFE4F6WczDX814Sxwswxuo2m0w=s900-c-k-c0x00ffffff-no-rj"
                            title="profile"
                        />
                        <CardContent className={classes.cardContent}>
                            <Typography gutterBottom variant="h5" component="h2">
                                Username
                            </Typography>
                            <Typography>
                                Information about the user
                            </Typography>
                        </CardContent>
                        <CardActions>
                            <Button size="small" color="primary">
                                View
                            </Button>
                            <Button size="small" color="primary">
                                Edit
                            </Button>
                        </CardActions>
                    </Card>
                </Grid>

                <Grid item xs={12} sm={6}>
                    <Tabs
                        value={this.state.shiValue}
                        onChange={this.shiHandleChange}
                        aria-label="nav tabs example"
                    >
                        <LinkTab label={shiSteps[0]} {...a11yProps(0)} />
                        <LinkTab label={shiSteps[1]} {...a11yProps(1)} />
                        <LinkTab label={shiSteps[2]} {...a11yProps(2)} />
                    </Tabs>
                    <TabPanel value={this.state.shiValue} index={0}>
                        <Grid item xs={12} md={6} style={{textAlign : 'center'}}>
                            {
                                this.state.skillList.map((val, idx) => {
                                var value = this.state.formData.skills[idx];
                                return(
                                    <Grid key={val.index} item md={12}>
                                        <TextField 
                                        name={val.name} 
                                        id={val.name + "["+ idx +"]"} 
                                        label={val.label} 
                                        data-tpye={val.label} 
                                        autoComplete={val.label} 
                                        value={value.name}
                                        onChange={this.shiHandleChange} 
                                        />

                                        {
                                            idx===0? ""
                                            : <button 
                                                style={{
                                                padding: "1px 6px", 
                                                verticalAlign: "bottom", 
                                                marginLeft: "5px"
                                                }} 
                                                className="field_manipulation_btn btn btn-danger" 
                                                onClick={(() => this.clickOnDelete(val))} 
                                            >
                                                <i className="fa fa-trash"></i>
                                            </button>
                                        }
                                    </Grid>
                                )
                                })
                            }
                            <br/>
                            <Grid item md={12}>
                                <Button onClick={this.addNewSkill} data-type="skill" variant="outlined" color="primary">Add skill</Button>
                            </Grid>
                        </Grid>
                        {/*<Review form={this.state.formData} onChange={this.handleChange.bind(this)}></Review>*/}
                        {/*        clickOnDelete={this.clickOnDelete}*/}
                        {/*        addNewSkill={this.addNewSkill}*/}
                        {/*        skillList={this.state.skillList}/>*/}

                    </TabPanel>
                    <TabPanel value={this.state.shiValue} index={1}>
                        <Grid item xs={12} md={6} style={{textAlign : 'center'}}>
                            {
                                this.state.hobbyList.map((val, idx) => {
                                    var value = this.state.formData.hobbies[idx];
                                    return(
                                        <Grid key={val.index} item md={12}>
                                            <TextField
                                                name={val.name}
                                                id={val.name + "["+ idx +"]"}
                                                label={val.label}
                                                data-tpye={val.label}
                                                autoComplete={val.label}
                                                value={value.name}
                                                onChange={this.shiHandleChange}
                                            />

                                            {
                                                idx===0? ""
                                                    : <button
                                                        style={{
                                                            padding: "1px 6px",
                                                            verticalAlign: "bottom",
                                                            marginLeft: "5px"
                                                        }}
                                                        className="field_manipulation_btn btn btn-danger"
                                                        onClick={(() => this.clickOnDelete(val))}
                                                    >
                                                        <i className="fa fa-trash"></i>
                                                    </button>
                                            }
                                        </Grid>
                                    )
                                })
                            }
                            <br/>
                            <Grid item md={12}>
                                <Button onClick={this.addNewHobby} data-type="hobby" variant="outlined" color="primary">Add hobby</Button>
                            </Grid>
                        </Grid>
                    </TabPanel>
                    <TabPanel value={this.state.shiValue} index={2}>
                        <Grid item xs={12} md={6} style={{textAlign : 'center'}}>
                            {
                                this.state.intrestList.map((val, idx) => {
                                    var value = this.state.formData.interests[idx];
                                    return(
                                        <Grid key={val.index} item md={12}>
                                            <TextField
                                                name={val.name}
                                                id={val.name + "["+ idx +"]"}
                                                label={val.label}
                                                data-type={val.label}
                                                autoComplete={val.label}
                                                value={value.name}
                                                onChange={this.shiHandleChange}
                                            />
                                            {
                                                idx===0? ""
                                                    : <button
                                                        style={{
                                                            padding: "1px 6px",
                                                            verticalAlign: "bottom",
                                                            marginLeft: "5px"
                                                        }}
                                                        className="field_manipulation_btn btn btn-danger"
                                                        onClick={(() => this.clickOnDelete(val))}
                                                    >
                                                        <i className="fa fa-trash"></i>
                                                    </button>
                                            }
                                        </Grid>
                                    )
                                })
                            }
                            <br/>
                            <Grid item md={12}>
                                <Button onClick={this.addNewIntrest} data-type="interest" variant="outlined" color="primary">Add interest</Button>
                            </Grid>
                        </Grid>
                    </TabPanel>
                </Grid>

                <Grid item xs={12} sm={6}>
                <Tabs
                        value={this.state.sjValue}
                        onChange={this.sjHandleChange}
                        aria-label="nav tabs example"
                    >
                        <LinkTab label={sjSteps[0]} {...a11yProps(0)} />
                        <LinkTab label={sjSteps[1]} {...a11yProps(1)} />
                    </Tabs>
                    <TabPanel value={this.state.sjValue} index={0}>
                        <Grid item xs={12} md={6} style={{textAlign : 'center'}}>
                            {
                                this.state.studyList.map((val, idx) => {
                                var value = this.state.formData.studies[idx];
                                return(
                                    <Grid key={val.index} item md={12}>
                                        <TextField 
                                        name={val.name} 
                                        id={val.name + "["+ idx +"]"} 
                                        label={val.label} 
                                        data-tpye={val.label} 
                                        autoComplete={val.label} 
                                        value={value.name}
                                        onChange={this.sjHandleChange} 
                                        />

                                        {
                                            idx===0? ""
                                            : <button 
                                                style={{
                                                padding: "1px 6px", 
                                                verticalAlign: "bottom", 
                                                marginLeft: "5px"
                                                }} 
                                                className="field_manipulation_btn btn btn-danger" 
                                                onClick={(() => this.clickOnDelete(val))} 
                                            >
                                                <i className="fa fa-trash"></i>
                                            </button>
                                        }
                                    </Grid>
                                )
                                })
                            }
                            <br/>
                            <Grid item md={12}>
                                <Button onClick={this.addNewStudy} data-type="study" variant="outlined" color="primary">Add study</Button>
                            </Grid>
                        </Grid>
                        {/*<Review form={this.state.formData} onChange={this.handleChange.bind(this)}*/}
                        {/*        clickOnDelete={this.clickOnDelete}*/}
                        {/*        addNewSkill={this.addNewSkill}*/}
                        {/*        skillList={this.state.skillList}/>*/}

                    </TabPanel>
                    <TabPanel value={this.state.sjValue} index={1}>
                        <Grid item xs={12} md={6} style={{textAlign : 'center'}}>
                            {
                                this.state.jobList.map((val, idx) => {
                                    var value = this.state.formData.jobs[idx];
                                    return(
                                        <Grid key={val.index} item md={12}>
                                            <TextField
                                                name={val.name}
                                                id={val.name + "["+ idx +"]"}
                                                label={val.label}
                                                data-tpye={val.label}
                                                autoComplete={val.label}
                                                value={value.name}
                                                onChange={this.sjHandleChange}
                                            />

                                            {
                                                idx===0? ""
                                                    : <button
                                                        style={{
                                                            padding: "1px 6px",
                                                            verticalAlign: "bottom",
                                                            marginLeft: "5px"
                                                        }}
                                                        className="field_manipulation_btn btn btn-danger"
                                                        onClick={(() => this.clickOnDelete(val))}
                                                    >
                                                        <i className="fa fa-trash"></i>
                                                    </button>
                                            }
                                        </Grid>
                                    )
                                })
                            }
                            <br/>
                            <Grid item md={12}>
                                <Button onClick={this.addNewJob} data-type="job" variant="outlined" color="primary">Add job</Button>
                            </Grid>
                        </Grid>
                    </TabPanel>
                    </Grid>
            </Grid>
        )
    }
}

export default withStyles(styles)(profile)