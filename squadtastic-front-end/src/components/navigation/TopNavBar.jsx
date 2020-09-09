import React, { useState } from "react";
import InputBase from "@material-ui/core/InputBase";
import { ButtonMenu } from "../menus/ButtonMenu";
import { fade, makeStyles } from "@material-ui/core/styles";
import { ButtonGroup } from "@material-ui/core";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import PersonIcon from "@material-ui/icons/Person";
import AmpStoriesIcon from "@material-ui/icons/AmpStories";
import { SearchInput } from "../inputs/SearchInput";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    // background: "linear-gradient(45deg, #2c387e 30%, #FF8E53 90%)",
    //background: "linear-gradient(45deg, #263238 30%, #424242 90%)",
    backgroundColor: "#fafafa"
  },
  grow: {
    flexGrow: 1,
  },
  menuButtonGroup: {
    marginRight: theme.spacing(2),
  },
  search: {
    position: "relative",
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    "&:hover": {
      backgroundColor: fade(theme.palette.common.white, 0.25),
    },
    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      marginLeft: theme.spacing(3),
      width: "auto",
    },
  },
  title: {
    flexGrow: 1,
    color: "black",
    fontStyle: "italic"
  },
}));

export const TopNavBar = () => {
  const classes = useStyles();
  const myMenuOptions = [
    { name: "Profile", value: "/profile" },
    { name: "Settings", value: "/settings" },
    { name: "Log out", value: "/logout" },
  ];
  const projectOptions = [
    { name: "New Project", value: "/createproject" },
    { name: "My Projects", value: "/myprojects" },
  ];

  return (
    <AppBar position="sticky" className={classes.root}>
      <Toolbar>
        <Typography variant="h5" className={classes.title}>
          Squadtastic
        </Typography>
        <SearchInput className={classes.search} />
        <div className={classes.grow} />
        <ButtonGroup className={classes.menuButtonGroup}>
          <ButtonMenu
            icon={<AmpStoriesIcon />}
            menuName="Projects"
            options={projectOptions}
          />
          <ButtonMenu
            icon={<PersonIcon />}
            menuName="Me"
            options={myMenuOptions}
          />
        </ButtonGroup>
      </Toolbar>
    </AppBar>
  );
};
