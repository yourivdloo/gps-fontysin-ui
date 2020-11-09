import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
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

class NavTabs extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: 0
    };
  }
  
  handleChange = (event, newValue) => {
    this.state.setState("value",  newValue);
  };

  render() {
    const { classes } = this.props;

    return (
      <Grid container style={{maxWidth: '1100px', margin: '15px auto'}}>
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

        <Grid item xs={12} md={5} style={{marginLeft: "25px"}}>
        
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

export default withStyles(styles)(NavTabs);