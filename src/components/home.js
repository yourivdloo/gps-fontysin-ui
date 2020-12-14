import React from "react";
import CreateUser from "../demo-components/CreateUser"
import {withStyles, makeStyles} from '@material-ui/core/styles';
import Grid from "@material-ui/core/Grid";
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import PropTypes from 'prop-types';
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import {CardActionArea} from "@material-ui/core";
import IconButton from '@material-ui/core/IconButton';
import {FileCopy, BathtubOutlined, AddCircle, People} from "@material-ui/icons";
import {grey} from "@material-ui/core/colors";
import red from "@material-ui/core/colors/red";


const styles = (theme) => ({
    root: {
        flexGrow: 1,
        minWidth: 275,
        padding: 75,
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
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        raised: true,
        outlineStyle: "bold",
        boxShadow: theme,

    },
    cardMedia: {
        paddingTop: '56.25%', // 16:9
    },
    cardContent: {
        flexGrow: 1,
        backgroundColor: red,
    },
    title: {
        fontSize: 14,
    },
    pos: {
        marginBottom: 12,
    },
    button: {
        textAlign: 'center',
    },

});
// function autoGrid=() =>{
//     const classes = useStyles();
//
// }

class home extends React.Component {

    render() {
        const {classes} = this.props;
        // const cardContentColour = '#f0f' (#rgb);
        return (
            <div className={classes.root}>
                <Grid container spacing={2}>
                    <Grid item xs>
                        <Card className={classes.root} raised={false} variant={"outlined"} style={{backgroundColor: '#e6e6e6'}}>
                            <CardContent>
                                <Typography className={classes.title}  color="textSecondary" gutterBottom>
                                    card gutter
                                </Typography>
                                <Typography variant="h5" component="h2">
                                    Add more to your profile
                                </Typography>
                                <Typography className={classes.pos} color="textSecondary">
                                    secondary title
                                </Typography>
                                <Typography variant="body2" component="p">
                                    description
                                    <br/>
                                    {'something something'}
                                </Typography>
                            </CardContent>
                            <CardActions>
                                <Button size="large" color={"secondary"} variant={"contained"}
                                        startIcon={<AddCircle/>}> </Button>
                            </CardActions>
                        </Card>
                    </Grid>
                    <Grid item xs>
                        <Card className={classes.root} variant="outlined" style={{backgroundColor: '#e6e6e6'}}>
                            <CardContent>
                                <Typography variant="h3" component="h2">
                                    Welcome to FontysIn
                                </Typography>
                                <Typography variant="h4" className={classes.pos} color="textSecondary">
                                    The place where you can get to know each other
                                </Typography>
                                <Typography variant="body2" component="p">
                                    description
                                </Typography>
                            </CardContent>
                        </Card>
                    </Grid>
                    <Grid item xs>
                        <Card className={classes.root} variant="outlined" style={{backgroundColor: '#e6e6e6'}}>
                            <CardContent>
                                <Typography variant="h5" component="h2">
                                    Connect with other people
                                </Typography>
                                <Typography className={classes.pos} color="textSecondary">
                                    "some image"
                                </Typography>
                                <Typography variant="body2" component="p">
                                </Typography>
                                <Button size="large" color={"secondary"} variant={"contained"}
                                        startIcon={<People/>}> Ew, people</Button>

                            </CardContent>
                        </Card>
                    </Grid>
                </Grid>
                {/*second row of the grid*/}
                <Grid container spacing={2}>
                    <Grid item xs>
                        <Card className={classes.root} variant="outlined" style={{backgroundColor: '#e6e6e6'}}>
                            <CardContent>
                                <Typography variant="h5" component="h2">
                                    Change your privacy settings
                                </Typography>
                                <Typography className={classes.pos} color="textSecondary">

                                </Typography>
                                <Typography variant="body2" component="p">

                                </Typography>
                                <CardActions>
                                    <Button color={"secondary"} variant="contained" size="large"
                                            startIcon={<BathtubOutlined/>}>Change privacy settings </Button>
                                </CardActions>
                            </CardContent>
                        </Card>
                    </Grid>

                    <Grid item xs >
                        {/*empty*/}
                    </Grid>

                    <Grid item xs>
                        <Card className={classes.root} variant="outlined" style={{backgroundColor: '#e6e6e6'}}>
                            <CardContent>
                                <Typography variant="h5" component="h2">
                                    CV creation
                                </Typography>
                                <Typography className={classes.pos} color="textSecondary">
                                    Create a CV based on the fields currently filled in your profile
                                </Typography>
                                <Typography variant="body2" component="p">
                                    The profile doesn't need to be set to public for this to work.
                                </Typography>
                                <CardActions>
                                    <Button variant="contained" color={"secondary"} size="large"
                                            startIcon={<FileCopy/>}>Create
                                        a CV </Button>
                                </CardActions>
                            </CardContent>
                        </Card>
                    </Grid>
                </Grid>
                {/*<h1>Demo Requests:</h1>*/
                }
                {/*<CreateUser/>*/
                }
            </div>
        );
    }
}

// home.propTypes = {
//     classes: PropTypes.object.isRequired,
// };
export default withStyles(styles)(home);
