import React from "react";
import {withStyles} from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import {FileCopy, AddCircle, People, EmojiPeople} from "@material-ui/icons";
import { withRouter } from "react-router-dom";


const styles = (theme) => ({
    root: {
        flexGrow: 1,
        // minWidth: 275,
        // height: 275,
        // padding: 20,
        paddingLeft: 20,
        paddingRight: 20,
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
        height: 260,
        textAlign: 'center',
        marginTop: 10,
        marginBottom: 10,
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
        // height: "75%"
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
            <div className={classes.root, "container"}>
                <div className="row" >
                    <div className="col-md-12">
                        <Card className={classes.card} variant="outlined" style={{backgroundColor: '#8D5C97', color: "#ffffff", height: "unset"}}>
                            <CardContent className={classes.cardContent}>
                                <Typography variant="h3" component="h2">
                                    Welcome to FontysIn
                                </Typography>
                                <Typography variant="h4" className={classes.pos} >
                                    The place where you can get to know each other
                                </Typography>
                                <Typography variant="body2" component="p">
                                    FontysIn is a LinkedIn-like platform, only for Fontys students and teachers! It provides a safe environment to show your skills to the Fontys world.
                                </Typography>
                            </CardContent>
                        </Card>
                    </div>
                </div>

                <div className="row" >
                    <div className="col-md-6">
                        <Card className={classes.card} raised={false} variant={"outlined"} style={{backgroundColor: '#e6e6e6'}}>
                            <CardContent className={classes.cardContent}>
                                <Typography variant="h5" component="h2">
                                    Add more to your profile
                                </Typography>
                                <br />
                                <Typography className={classes.pos} color="textSecondary">
                                    Your profile and CV could always use more information. Provide all your interests, skills, work experience and more
                                    to participate and stand out!
                                </Typography>
                            </CardContent>
                            <CardActions className={classes.cardActions}>
                                <Button size="large" color={"secondary"} variant={"contained"}
                                    startIcon={<AddCircle/>} onClick={() => window.location.href='/profile'}>Go to the profile editor</Button>
                            </CardActions>
                        </Card>
                    </div>
                    <div className="col-md-6">
                        <Card className={classes.card} variant="outlined" style={{backgroundColor: '#e6e6e6'}}>
                            <CardContent className={classes.cardContent}>
                                <Typography variant="h5" component="h2">
                                    Keep it up-to-date!
                                </Typography>
                                <br />
                                <Typography className={classes.pos} color="textSecondary">
                                    Change your personal details or privacy settings
                                </Typography>
                            </CardContent>
                            <CardActions className={classes.cardActions}>
                                <Button size="large" color={"secondary"} variant="contained"
                                    startIcon={<EmojiPeople/>} onClick={()=> window.location.href="/settings"}>Change personal settings </Button>
                            </CardActions>
                        </Card>
                    </div>
                    <div className="col-md-6">
                        <Card className={classes.card} variant="outlined" style={{backgroundColor: '#e6e6e6'}}>
                            <CardContent className={classes.cardContent}>
                                <Typography variant="h5" component="h2">
                                    Connect with other people
                                </Typography>
                                <br />
                                <Typography className={classes.pos} color="textSecondary">
                                    There are more people like you on here, let's get to know them! :)
                                </Typography>
                            </CardContent>
                            <CardActions className={classes.cardActions}>
                                <Button size="large" color={"secondary"} variant={"contained"}
                                    startIcon={<People/>} onClick={()=> window.location.href="/chat"}> go to chat</Button>
                            </CardActions>
                        </Card>
                    </div>
                    <div className="col-md-6">
                        <Card className={classes.card} variant="outlined" style={{backgroundColor: '#e6e6e6'}}>
                            <CardContent className={classes.cardContent}>
                                <Typography variant="h5" component="h2">
                                    Create your CV
                                </Typography>
                                <br />
                                <Typography className={classes.pos} color="textSecondary">
                                    The information currently filled in your profile will be used to generate a professional CV in PDF format
                                </Typography>
                            </CardContent>
                            <CardActions className={classes.cardActions}>
                                <Button variant="contained" color={"secondary"} size="large"
                                    startIcon={<FileCopy/>} onClick={()=> window.open("/exportCV", "_blank")}>Create a CV </Button>
                            </CardActions>
                        </Card>
                    </div>
                </div>
            </div>
        );
    }
}

// home.propTypes = {
//     classes: PropTypes.object.isRequired,
// };
export default withRouter(withStyles(styles)(home));
