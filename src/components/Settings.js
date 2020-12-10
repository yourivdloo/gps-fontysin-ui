import React from 'react';
import PropTypes from 'prop-types';
import {withStyles, makeStyles} from '@material-ui/core/styles';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import MuiPhoneNumber from "material-ui-phone-number";
import Button from '@material-ui/core/Button';
import {TextField} from '@material-ui/core';

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
    }

    // const classes = useStyles();
    // const [value, setValue] = React.useState(0);

    tabHandleChange = (event, newValue) => {
        this.setState({tabValue: newValue});
    };
    handlePhoneChange(value){
        if (value) {
            this.setState({ phone: value });
        }
    }

    render() {
        const {classes} = this.props;
        const tabSteps = ["Account Preferences", "Permissions", "Visibility", "Appearance"];
        const CHARACTER_LIMIT = 20;
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
                        <TextField  id ="descriptionField" placeholder={"Write a description"} variant="filled"  multiline rowsMax={15}/> {/*Description*/}
                        {/*, phone number, address, ZipCode, City,  */}

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
                        <TextField placeholder={"12345 AB"}/>


                        <p>Change your city</p>
                        <TextField placeholder={"Zurich, CH"}/>

                    </Grid>
                </TabPanel>

                <TabPanel value={this.state.tabValue} index={1}> {/*Permissions*/}
                    <TextField placeholder={""}/>
                </TabPanel>

                <TabPanel value={this.state.tabValue} index={2}>{/*Visibility*/}
                    <p>Change profile visibility</p>
                    <TextField placeholder={""}/>
                </TabPanel>

                <TabPanel value={this.state.tabValue} index={3}>{/*Appearance*/}
                    <p>Change appearance</p>
                </TabPanel>
            </div>
        );
    }
}
export default withStyles(styles)(Settings);