import React from "react";
import {withStyles} from '@material-ui/core/styles';
import Grid from "@material-ui/core/Grid";
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import {FileCopy, BathtubOutlined, AddCircle, People, EmojiPeople} from "@material-ui/icons";
import red from "@material-ui/core/colors/red";
import { withRouter } from "react-router-dom";


const styles = (theme) => ({
    root: {
        flexGrow: 1,
        // minWidth: 275,
        height: 275,
        // padding: 20,
        paddingLeft: 20,
        paddingRight: 20,
        paddingBottom: 10,
        paddingTop: 10,
    },
    bullet: {
        display: 'inline-block',
        margin: '0 2px',
        transform: 'scale(0.8)',
    },
    cardGrid: {
        paddingTop: theme.spacing(8),
        paddingBottom: theme.spacing(8),
    },
    card: {
        // height: '100%',
        // display: 'flex',
        // flexDirection: 'column',
        // raised: true,
        // outlineStyle: "bold",
        // boxShadow: theme,
        // height: 250,
        textAlign: 'center',
    },
    cardActions: {
        // height: '100%',
        // display: 'flex',
        // flexDirection: 'column',
        // raised: true,
        // outlineStyle: "bold",
        // boxShadow: theme,
        display: 'block',
    },
    cardMedia: {
        paddingTop: '56.25%', // 16:9
    },
    cardContent: {
        // flexGrow: 1,
        // backgroundColor: red,
        minHeight: 175,
    },
    title: {
        fontSize: 14,
    },
    pos: {
        marginBottom: 12,
    },
    button: {
        display: 'block',
        textAlign: 'center',
        alignItems: 'center',
        justifyContent: 'center',
    },

});
// function autoGrid=() =>{
//     const classes = useStyles();
//
// }

class home extends React.Component {
    constructor(props){
        super(props)
    }
    
    render() {
        const{history} = this.props;
        const {classes} = this.props;
        // const cardContentColour = '#f0f' (#rgb);
        return (
            <div className={classes.root}>
                <Grid container>
                    <Grid className={classes.root} spacing={2} xs={3}>
                        <Grid item>
                            <Card className={classes.card} raised={false} variant={"outlined"} style={{backgroundColor: '#e6e6e6'}}>
                                <CardContent className={classes.cardContent}>
                                    <Typography variant="h5" component="h2">
                                        Add more to your profile
                                    </Typography>
                                    <Typography className={classes.pos} color="textSecondary">
                                        Your profile and CV could always use more information. Provide all your interests, skills, work experience and more
                                        to participate and stand out!
                                    </Typography>
                                </CardContent>
                                <CardActions className={classes.cardActions}>
                                    <Button size="large" color={"secondary"} variant={"contained"}
                                        startIcon={<AddCircle/>} onClick={() => window.location.replace('/profile')}>Go to the profile editor</Button>
                                </CardActions>
                            </Card>
                        </Grid>
<br></br>
                        <Grid item>
                            <Card className={classes.card} variant="outlined" style={{backgroundColor: '#e6e6e6'}}>
                                <CardContent className={classes.cardContent}>
                                    <Typography variant="h5" component="h2">
                                        Keep it up-to-date!
                                    </Typography>
                                    <Typography className={classes.pos} color="textSecondary">
                                        Change your personal details or privacy settings
                                    </Typography>
                                    <Button color={"secondary"} variant="contained"
                                        startIcon={<EmojiPeople/>} onClick={()=> window.location.replace("/settings")}>Change personal details </Button>
<br/><br/>
                                    <Button color={"secondary"} variant="contained"
                                        startIcon={<BathtubOutlined/>} onClick={()=> window.location.replace("/settings/1")}>Change privacy settings </Button>
                                </CardContent>
                            </Card>
                        </Grid>
                    </Grid>
            

                    <Grid className={classes.root} spacing={2} xs={6}>

                        <Grid item>
                            <Card className={classes.card} variant="outlined" style={{backgroundColor: '#e6e6e6'}}>
                                <CardContent className={classes.cardContent}>
                                    <Typography variant="h3" component="h2">
                                        Welcome to FontysIn
                                    </Typography>
                                    <Typography variant="h4" className={classes.pos} color="textSecondary">
                                        The place where you can get to know each other
                                    </Typography>
                                    <Typography variant="body2" component="p">
                                        FontysIn is a LinkedIn-like platform, only for Fontys students and teachers! It provides a safe environment to show your skills to the Fontys world.
                                    </Typography>
                                </CardContent>
                            </Card>
                        </Grid>
                    </Grid>

                    <Grid className={classes.root} spacing={2} xs={3}>
                        <Grid item>
                            <Card className={classes.card} variant="outlined" style={{backgroundColor: '#e6e6e6'}}>
                                <CardContent className={classes.cardContent}>
                                    <Typography variant="h5" component="h2">
                                        Connect with other people
                                    </Typography>
<br></br>
                                    <Typography className={classes.pos} color="textSecondary">
                                        There are more people like you on here, let's get to know them! :)
                                    </Typography>
                                </CardContent>
                                <CardActions className={classes.cardActions}>
                                    <Button size="large" color={"secondary"} variant={"contained"}
                                        startIcon={<People/>}> Ew, people</Button>
                                </CardActions>
                            </Card>
                        </Grid>
<br></br>
                        <Grid item>
                            <Card className={classes.card} variant="outlined" style={{backgroundColor: '#e6e6e6'}}>
                                <CardContent className={classes.cardContent}>
                                    <Typography variant="h5" component="h2">
                                        Create your CV
                                    </Typography>
                                    <br></br>
                                    <Typography className={classes.pos} color="textSecondary">
                                        The information currently filled in your profile will be used to generate a professional CV in PDF format
                                    </Typography>
                                </CardContent>
                                <CardActions className={classes.cardActions}>
                                    <Button variant="contained" color={"secondary"} size="large"
                                        startIcon={<FileCopy/>} onClick={()=> window.open("/exportCV", "_blank")}>Create a CV </Button>
                                </CardActions>
                            </Card>
                        </Grid>
                    </Grid>
                </Grid>
            </div>
        );
    }
}

// home.propTypes = {
//     classes: PropTypes.object.isRequired,
// };
export default withRouter(withStyles(styles)(home));
