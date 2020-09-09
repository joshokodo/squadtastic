import React from "react";
import { Grid, Typography, Paper } from "@material-ui/core";
import { useParams } from "react-router-dom";
import { useAxiosGet } from "../hooks/HttpGetRequest";
import CircularProgress from "@material-ui/core/CircularProgress";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: "#fafafa",
    flexGrow: 1
  },
}));

export const ProjectView = () => {
  const classes = useStyles();
  const { id } = useParams();

  const url = `https://5f22e9220e9f660016d88a44.mockapi.io/projects/${id}`;
  let project = useAxiosGet(url);
  let content = null;

  if (project.loading) {
    content = (
      <Grid item className={classes.root}>
        <CircularProgress />
      </Grid>
    );
  }

  if (project.error) {
    content = (
      <Grid item>
        <Typography>Oops. There was a problem fetching the project</Typography>
      </Grid>
    );
  }

  if (project.data) {
    content = (
      <Paper elevation={3}>
        <Grid
          container
          direction="column"
          className={classes.root}
          spacing={3}
        >
          <Grid item>
            <Typography variant="h3" component="h3">{project.data.title}</Typography>
          </Grid>
          <Grid item>
            <img src="http://lorempixel.com/640/480/animals"></img>
          </Grid>
        </Grid>
      </Paper>
    );
  }

  return content;
};
