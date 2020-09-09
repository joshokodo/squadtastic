import React from "react";
import { Grid, Typography } from "@material-ui/core";
import { ProjectCard } from "../components/displays/ProjectCard";
import { useAxiosGet } from "../hooks/HttpGetRequest";
import CircularProgress from "@material-ui/core/CircularProgress";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    "& > * + *": {
      marginLeft: theme.spacing(2),
    },
  },
}));

export const PublicProjectsView = () => {
  const classes = useStyles();
  const paging = "?page=1&limit=3";
  const url = "https://5f22e9220e9f660016d88a44.mockapi.io/projects";
  let projects = useAxiosGet(url);
  let content = null;

  if (projects.loading) {
    content = (
      <Grid item className={classes.root}>
        <CircularProgress />
      </Grid>
    );
  }

  if (projects.error) {
    content = (
      <Grid item>
        <Typography>Oops. There was a problem fetching the projects</Typography>
      </Grid>
    );
  }

  if (projects.data) {
    content = (
      <Grid container spacing={3}>
        {projects.data
          .sort((a, b) => b.createdAt - a.createdAt)
          .map((project) => (
            <Grid item xs={12}>
              <ProjectCard project={project}></ProjectCard>
            </Grid>
          ))}
      </Grid>
    );
  }

  return content;
};
