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
    studies: [{name: "", date: ""}],
    jobs: [{name: "", date: ""}],
    skills: [{name: ""}],
    hobbies: [{name: ""}],
    interests: [{name: ""}],
    languages: []         ///

});

class profile extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            values: [], value: 0,
            activeStep: 0,
            formData: personalData,
            skillList: [{index: Math.random(), name: "skills[]", label: "skill"}],
            intrestList: [{index: Math.random(), name: "interests[]", label: "intrest"}],
            hobbyList: [{index: Math.random(), name: "hobbies[]", label: "hobby"}],
        };
        this.handleSubmit = this.handleSubmit.bind(this);
        this.addNewSkill = this.addNewSkill.bind(this);
        this.addNewHobby = this.addNewHobby.bind(this);
        this.addNewIntrest = this.addNewIntrest.bind(this);
        this.clickOnDelete = this.clickOnDelete.bind(this);
    }

    createUI() {
        return this.state.values.map((el, i) =>
            <div key={i}>
                <input type="text" value={el || ''} onChange={this.handleChange.bind(this, i)}/>
                <input type='button' value='remove' onClick={this.removeClick.bind(this, i)}/>
            </div>
        )
    }

    handleChange(i, event) {
        let values = [...this.state.values];
        values[i] = event.target.value;
        this.setState({values});
    }

    addClick() {
        this.setState(prevState => ({values: [...prevState.values, '']}))
    }

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
            intrestList: [...prevState.intrestList, {index: Math.random(), name: "interests[]", label: "intrest"}],
        }));

        this
            .state
            .formData
            .interests
            .push({"name": ""});
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


    removeClick(i) {
        let values = [...this.state.values];
        values.splice(i, 1);
        this.setState({values});
    }

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

        var result = UserProfileService.addNewProfile(personalData);
        console.log(result);
    };
// handleSubmit(event) {
//     alert('A name was submitted: ' + this.state.values.join(', '));
//     event.preventDefault();
// }


// handleChange = (event, newValue) => {
//     this.state.setState("value",  newValue);
// };
    handleTabsDisplay = () => {
        this.setState({activeStep: this.state.activeStep + 1})

    };


    render() {
        const steps = ['Skills', 'Hobbies', 'Interests'];
        const {classes} = this.props;
        let { skillList } = this.state;
        let { hobbyList } = this.state;
        let { intrestList } = this.state;
        return (
            <Grid container style={{maxWidth: '75%', margin: '15px auto'}}>
                <Grid item xs={12} md={5} style={{marginRight: "25px"}}>
                    <Card className={classes.card}>
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

                <Grid item xs={12} sm={6} style={{marginLeft: "20px"}}>

                    <Tabs
                        value={this.state.value}
                        onChange={this.handleChange}
                        aria-label="nav tabs example"
                    >
                        <LinkTab label="Skills" href="/skills" {...a11yProps(0)} />
                        <LinkTab label="Hobbies" href="/hobbies" {...a11yProps(1)} />
                        <LinkTab label="Interests" href="/interests" {...a11yProps(2)} />
                    </Tabs>
                    <TabPanel value={this.state.value} index={0}>
                        Skills user.skills
                        <Grid item xs={12} md={6}>
                            <InputField add={this.addNewSkill} delete={this.clickOnDelete.bind(this)} fieldList={skillList} />
                            <br/>
                            <Grid item md={12}>
                                <Button onClick={this.addNewSkill} variant="outlined" color="primary">Add skill</Button>

                            </Grid>
                        </Grid>
                        {/*<Review form={this.state.formData} onChange={this.handleChange.bind(this)}*/}
                        {/*        clickOnDelete={this.clickOnDelete}*/}
                        {/*        addNewSkill={this.addNewSkill}*/}
                        {/*        skillList={this.state.skillList}/>*/}

                    </TabPanel>
                    <TabPanel value={this.state.value} index={1}>
                        Hobbies user.hobbies
                        <Review form={this.state.formData} onChange={this.handleChange.bind(this)}
                                clickOnDelete={this.clickOnDelete}
                                addNewHobby={this.addNewHobby}
                                hobbyList={this.state.hobbyList}/>
                    </TabPanel>
                    <TabPanel value={this.state.value} index={2}>
                        Interests user.interests
                        <Review form={this.state.formData} onChange={this.handleChange.bind(this)}
                                clickOnDelete={this.clickOnDelete}
                                addNewiIntrest={this.addNewIntrest}
                                intrestList={this.state.intrestList}/>
                    </TabPanel>
                </Grid>
            </Grid>
        )
    }
}

export default withStyles(styles)(profile)