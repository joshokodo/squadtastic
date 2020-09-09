import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Chip from "@material-ui/core/Chip";

// get colo
const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    // justifyContent: 'center',
    // flexWrap: 'wrap',
    listStyle: "none",
    padding: theme.spacing(0.5),
    margin: 0,
  },
  chip: {
    margin: theme.spacing(0.5),
  },
}));

export const TagsArray = ({ tags }) => {
  const classes = useStyles();
  let keyCount = 1;
  return (
    <div component="ul" className={classes.root}>
      {tags.map((tag) => {
        return (
          <li key={keyCount++}>
            <Chip label={tag} className={classes.chip} />
          </li>
        );
      })}
    </div>
  );
};
