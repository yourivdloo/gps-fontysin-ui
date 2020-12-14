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

            }
        };
        this.handlePhoneChange = this.handlePhoneChange.bind(this);
        this.tabHandleChange = this.tabHandleChange.bind(this);
        this.handleChange = this.handleChange.bind(this);

    }

    // const classes = useStyles();
    // const [value, setValue] = React.useState(0);

    tabHandleChange = (event, newValue) => {
        this.setState({tabValue: newValue});
    };
    handlePhoneChange = (value) => {
        if (value) {
            this.setState({phone: value});
        }
    }

    handleChange = (value) => {
        this.setState({setValue: value});
    };

    render() {
        const {classes} = this.props;
        const tabSteps = ["Account Preferences", "Permissions", "Visibility", "Appearance"];
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
                        <p>Edit phone number</p>
                        <MuiPhoneNumber
                            name="phone"
                            label="Phone Number"
                            data-cy="user-phone"
                            defaultCountry={"nl"}
                            value={this.state.phone}
                            onChange={this.handlePhoneChange}
                        />

                        <p>Edit address</p>
                        <TextField placeholder={"P Sherman, 42 Wallaby Way, Sydney "}/>


                        <p>Edit ZipCode</p>
                        <TextField placeholder=

                                       {"12345 AB"} inputProps={{maxLength: 8}}/>


                        <p>Change your city</p>
                        <TextField placeholder={"Zurich, CH"}/>

                    </Grid>
                </TabPanel>

                <TabPanel value={this.state.tabValue} index={1}> {/*Permissions*/}
                    <TextField placeholder={""}/>
                </TabPanel>

                <TabPanel value={this.state.tabValue} index={2}>{/*Visibility*/}
                    <FormControl component="fieldset">
                        <FormLabel component="legend">Change profile visibility</FormLabel>
                        <RadioGroup aria-label="visibility" name="visibility" value={this.state.value}
                                    onChange={this.handleChange}>
                            <FormControlLabel value="public" control={<Radio/>} label="Public"/>
                            <FormControlLabel value="private" control={<Radio/>} label="Private"/>
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