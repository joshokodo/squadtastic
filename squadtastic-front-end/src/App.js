import React, {useState} from "react";
import { TopNavBar } from "./components/navigation/TopNavBar";
import { HomeView } from "./views/HomeView";
import { PublicProjectsView } from "./views/PublicProjectsView";
import { ProfileView } from "./views/ProfileView";
import { ProjectView} from "./views/ProjectView"
import { ErrorView } from "./views/ErrorView";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Grid } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import {createBrowserHistory} from 'history';
import {User} from './models/User'
import "./App.css";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    // background: "linear-gradient(45deg, #2c387e 30%, #FF8E53 90%)",
    //background: "linear-gradient(45deg, #263238 30%, #424242 90%)",
    backgroundColor: "#bdbdbd"
  },
 
}));

function App() {
  const classes = useStyles();
  
  const [history, setHistory] = useState(createBrowserHistory());
  const [user, setUser] = useState(new User());

  return (
    <>
      <Grid className={classes.root} container direction="column">
        <Grid item>
          <TopNavBar />
        </Grid>
        <Grid item container>
          <Grid item xs={false} sm={4} />
          <Grid item xs={12} sm={4}>
            <Router>
              <Switch>
                <Route exact path="/" component={HomeView} />
                <Route path="/profile" component={ProfileView} />
                <Route path="/projects/:id" component={ProjectView} />
                <Route path="/projects" component={PublicProjectsView} />
                <Route component={ErrorView} />
              </Switch>
            </Router>
          </Grid>
          <Grid item xs={false} sm={4} />
        </Grid>
      </Grid>
    </>
  );
}

export default App;
