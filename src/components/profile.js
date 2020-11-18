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


class profile extends React.Component {
    constructor(props) {
        super(props);
        this.state = {values: [], value: 0};
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    createUI(){
        return this.state.values.map((el, i) =>
            <div key={i}>
                <input type="text" value={el||''} onChange={this.handleChange.bind(this, i)} />
                <input type='button' value='remove' onClick={this.removeClick.bind(this, i)}/>
            </div>
        )
    }

    handleChange(i, event) {
        let values = [...this.state.values];
        values[i] = event.target.value;
        this.setState({ values });
    }

    addClick(){
        this.setState(prevState => ({ values: [...prevState.values, '']}))
    }

    removeClick(i){
        let values = [...this.state.values];
        values.splice(i,1);
        this.setState({ values });
    }

    handleSubmit(event) {
        alert('A name was submitted: ' + this.state.values.join(', '));
        event.preventDefault();
    }


    // handleChange = (event, newValue) => {
    //     this.state.setState("value",  newValue);
    // };

    render() {
        const { classes } = this.props;

        return (
            <Grid container style={{maxWidth: '75%', margin: '15px auto'}}>
                <Grid item xs={12} md={5} style={{marginRight: "25px"}}>
                    <Card className={classes.card}>
                        <CardMedia
                            className={classes.cardMedia}
                            image= "https://yt3.ggpht.com/a/AATXAJwht8OvVO9HMRD7PFE4F6WczDX814Sxwswxuo2m0w=s900-c-k-c0x00ffffff-no-rj"
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
                        <LinkTab label="Skills" href="/drafts" {...a11yProps(0)} />
                        <LinkTab label="Hobbies" href="/trash" {...a11yProps(1)} />
                        <LinkTab label="Interests" href="/spam" {...a11yProps(2)} />
                    </Tabs>
                    <TabPanel value={this.state.value} index={0}>
                        Skills user.skills
                        <form onSubmit={this.handleSubmit}>
                            <div id="container">
                                {/*This element's contents will be replaced with your component. -->*/}
                            </div>
                            {this.createUI()}
                            <input type='button' value='add more' onClick={this.addClick.bind(this)}/>
                            <input type="submit" value="Submit" />
                        </form>
                    </TabPanel>
                    <TabPanel value={this.state.value} index={1}>
                        Hobbies user.hobbies
                    </TabPanel>
                    <TabPanel value={this.state.value} index={2}>
                        Interests user.interests
                    </TabPanel>
                </Grid>
            </Grid>
        );
    }
}
export default withStyles(styles)(profile)