import React from 'react';
import PropTypes from 'prop-types';
import {withStyles} from '@material-ui/core/styles';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import MuiPhoneNumber from "material-ui-phone-number";
import {TextField} from '@material-ui/core';
import FormControl from "@material-ui/core/FormControl";
import FormLabel from "@material-ui/core/FormLabel";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Radio from "@material-ui/core/Radio";
import Button from "@material-ui/core/Button";
import axios from "axios";
import baseUrl from "./../globals/globalVariables"

function TabPanel(props) {
    const {children, value, index, ...other} = props;
    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`vertical-tabpanel-${index}`}
            aria-labelledby={`vertical-tab-${index}`}
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
        id: `vertical-tab-${index}`,
        'aria-controls': `vertical-tabpanel-${index}`,
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
        flexGrow: 2,
        backgroundColor: theme.palette.background.paper,
        display: 'flex',
        height: 224,
        // color: green[400], //radio button
        // '&$checked': {
        //     color: green[600],
    },
    tabs: {
        borderRight: `1px solid ${theme.palette.divider}`,
        position: "static",
        alignItems: "center",
        flexDirection: 'column',
    },
    footer: {
        backgroundColor: theme.palette.background.paper,
        padding: theme.spacing(6),
    },
    tableSettings: {
        display: 'flex',
        flexDirection: 'column',
    }
});
// export default function VerticalTabs() {
//     const classes = useStyles();
//     const [value, setValue] = React.useState(0);
//
//     const handleChange = (event, newValue) => {
//         setValue(newValue);
//     };
const personalData = Object({
        description: "",
        address: "",
        zipCode: "",
        phoneNumber: "",
        city: "",
    }
);

class Settings extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            defaultValues: {
                value: 0,
                tabValue: 0, //TODO issue with the first load of the page, page is blank and the tab has to be selected
                phone: "",
                adress: "",
                zipcode: "",
                city: "",
                disconnected: false
            }
        };
        this.handlePhoneChange = this.handlePhoneChange.bind(this);
        this.handleAddressChange = this.handleAddressChange.bind(this);
        this.handleZipCodeChange = this.handleZipCodeChange.bind(this);
        this.handleCityChange = this.handleCityChange.bind(this);
        this.tabHandleChange = this.tabHandleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    componentDidMount() {
        var headers = {
          "x-ms-client-principal-name": "410078@student.fontys.nl",
        };
    
        axios
          .get(baseUrl + "/api/user/"+ localStorage.getItem("pcn"), { headers: headers })
          .then((result) => {
            this.setState({ formData: result.data, phone: result.data.phoneNumber, city: result.data.city, zipcode: result.data.zipCode, address: result.data.address });
            console.log(result.data);
          })
          .catch((e) =>
          {
           console.log(e)
           this.state.disconnected = true;
          });
      }

    tabHandleChange = (event, newValue) => {
        this.setState({tabValue: newValue});
    };

    handleSubmit = (e) => {
        if(!this.state.disconnected){
        var personalData = this.state.formData;
        console.log(personalData);
    
        var headers = {
            'x-ms-client-principal-name': personalData.pcn + '@student.fontys.nl'
        } 

        axios.put(baseUrl + "/api/user/" + personalData.pcn, personalData, { headers: headers });
        this.props.history.push("/guestprofile")
        }
    }

    handlePhoneChange = (value) => {
        this.setState({phone: value});
        this.state.formData.phoneNumber = value;
    }

    handleAddressChange = (e) => {
        this.setState({address: e.target.value});
        this.state.formData.address = e.target.value;
    }

    handleZipCodeChange = (e) => {
        this.setState({zipcode: e.target.value});
        this.state.formData.zipCode = e.target.value;
    }

    handleCityChange = (e) => {
        this.setState({city: e.target.value});
        this.state.formData.city = e.target.value;
    }

    render() {
        const {classes} = this.props;
        const tabSteps = ["Account Preferences", "Permissions", "Profile visibility", "Appearance"];
        // const classes = styles();
        // const [value, setValue] = React.useState(0);
        return (
            <div className={classes.root}>
                <Tabs
                    orientation="vertical"
                    variant="scrollable"
                    value={this.state.tabValue}
                    onChange={this.tabHandleChange}
                    aria-label="Vertical tabs example"
                    className={classes.tabs}
                >
                    <LinkTab label={tabSteps[0]} {...a11yProps(0)} />
                    <LinkTab label={tabSteps[1]}   {...a11yProps(1)} />
                    <LinkTab label={tabSteps[2]}  {...a11yProps(2)} />
                    <LinkTab label={tabSteps[3]}   {...a11yProps(3)} />
                </Tabs>

                <TabPanel value={this.state.tabValue} index={0}> {/* Account preferences tab*/}
                    <Grid item xs={12} md={12} style={{textAlign: "left"}}>
                        <h2>Edit your profile description</h2>
                        <TextField id="descriptionField" placeholder={"Write a description"} variant="filled"
                                   multiline inputProps={{rowsMax: 15, maxLength: 200}}/> {/*Description*/}
                        <br/>
                        <MuiPhoneNumber
                            name="phone"
                            label="Phone number"
                            data-cy="user-phone"
                            defaultCountry={"nl"}
                            value={this.state.phone}
                            onChange={this.handlePhoneChange}
                        />
                        <br/>
                        <TextField 
                            label="Address"
                            value={this.state.address}
                            onChange={this.handleAddressChange}
                            InputLabelProps = {{shrink:true}}
                        />
                        <br/>
                        <TextField 
                            label="Zip code"
                            value={this.state.zipcode} 
                            inputProps={{maxLength: 8}}
                            onChange={this.handleZipCodeChange}
                            InputLabelProps = {{shrink: true}}
                        />
                        <br/>
                        <TextField 
                            label="City"
                            value={this.state.city}
                            onChange={this.handleCityChange}
                            InputLabelProps = {{shrink: true}}
                        />
                        <br/>
                        <Button variant="contained" color="primary" disabled={this.state.disconnected} onClick={this.handleSubmit}>Save changes</Button>
                        <Button variant="contained" color="secondary" onClick={() => this.props.history.push("/guestProfile")}>Cancel</Button>
                    </Grid>
                </TabPanel>

                <TabPanel value={this.state.tabValue} index={1}> {/*Permissions*/}
                    <TextField placeholder={""}/>
                </TabPanel>

                <TabPanel value={this.state.tabValue} index={2}>{/*Visibility*/}
                    <FormControl component="fieldset">
                        <FormLabel component="legend">Change profile visibility</FormLabel>
                        <p>Determines the way profiles will be indexed through the search engine.</p>
                        <RadioGroup aria-label="visibility" name="visibility" value={this.state.value}
                                    onChange={this.handleChange}>
                            <FormControlLabel value="X (Private, not indexed in the search engine)" control={<Radio/>}  label="Public"/>
                            <FormControlLabel value="1 (Can only be found by name)" control={<Radio/>} label="Private"/>
                            <FormControlLabel value="2 (Can be found by name or study)" control={<Radio/>} label="Private"/>
                            <FormControlLabel value="3 (Can be found by name, study and skills)" control={<Radio/>} label="Private"/>

                        </RadioGroup>
                    </FormControl>
                </TabPanel>

                <TabPanel value={this.state.tabValue} index={3}>{/*Appearance*/}
                    <p>Change appearance</p>
                </TabPanel>
            </div>
        );
    }
}

export default withStyles(styles)(Settings);