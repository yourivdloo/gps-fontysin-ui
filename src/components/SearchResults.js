import React, {useState, useEffect} from 'react';
import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import CameraIcon from '@material-ui/icons/PhotoCamera';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import UserProfileService from "../services/UserProfileService";
import Link from '@material-ui/core/Link';
import { withRouter } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  icon: {
    marginRight: theme.spacing(2),
  },
  heroContent: {
    backgroundColor: "#8D5C97",
    padding: theme.spacing(4, 0, 2),
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
  firstName: {
      color: 'white',
  },
}));

const cards = [1, 2, 3, 4, 5, 6, 7, 8, 9];

function SearchResults(props) {
  const classes = useStyles();
  const [results, setResults] = useState([]);

  useEffect(() =>{
      async function getResults(){
        var query = parseInt(props.match.params.query)
        var r;
        if(isNaN(query)){
          r = await UserProfileService.searchByName(props.match.params.query);
          setResults(r);
        } else {
          r = await UserProfileService.findByPcn(query);
          var arr = []
          arr.push(r);
          setResults(arr);
        }

        console.log(r);
        
      }

      getResults();
  }, []);

  return (
    <React.Fragment>
      <CssBaseline />
      <main>
        {/* Hero unit */}
        <div className={classes.heroContent}>
          <Container maxWidth="sm">
          <Typography component="h1" variant="h4" className={classes.firstName} align="center" color="textPrimary" gutterBottom>
        
            {results.length == 1 ? 
            <div>
            Found {results.length} result for '{props.match.params.query}'
            </div>
            :
            <div>
            Found {results.length} results for '{props.match.params.query}'
            </div>
            }

            </Typography>
          </Container>
        </div>
        <Container className={classes.cardGrid} maxWidth="md">
          {/* End hero unit */}
          <Grid container spacing={4}>
            {results.map((card) => (
              <Grid item key={card} xs={12} sm={6} md={4}>
                <Card className={classes.card}>
                  <CardMedia
                    className={classes.cardMedia}
                    image="https://source.unsplash.com/random"
                    title="Image title"
                  />
                  <CardContent className={classes.cardContent}>
                    <Typography gutterBottom variant="h5" component="h2">
                      {card.lastName}, {card.firstName} {card.prefix}
                    </Typography>
                    <Typography>
                      {card.isStudent ? 
                    <div>
                        Student
                    </div>  :
                    <div>
                        Teacher
                    </div>
                    }
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Button size="small" color="primary" href={"/guestprofile/" + card.pcn}>
                      View profile
                    </Button>
                  </CardActions>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </main>
    </React.Fragment>
  );
}

export default withRouter(SearchResults);