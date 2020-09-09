import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import clsx from "clsx";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import Avatar from "@material-ui/core/Avatar";
import Typography from "@material-ui/core/Typography";
import MarkunreadMailboxOutlinedIcon from "@material-ui/icons/MarkunreadMailboxOutlined";
import FavoriteBorderOutlinedIcon from "@material-ui/icons/FavoriteBorderOutlined";
import CommentOutlinedIcon from "@material-ui/icons/CommentOutlined";
import PeopleAltOutlinedIcon from "@material-ui/icons/PeopleAltOutlined";
import LocationOnOutlinedIcon from "@material-ui/icons/LocationOnOutlined";
import ScheduleOutlinedIcon from "@material-ui/icons/ScheduleOutlined";
import Badge from "@material-ui/core/Badge";
import Chip from "@material-ui/core/Chip";
import { TagsArray } from "./TagsArray";

const useStyles = makeStyles((theme) => ({
  root: {},
  header: {
    backgroundColor: "#fafafa",
  },
  footer: {
    backgroundColor: "#fafafa",
    flexGrow: "1",
    padding: theme.spacing(2),
    margin: 0,
    justifyContent: "center",
    flexWrap: "wrap",
  },
  media: {
    height: 0,
    paddingTop: "56.25%", // 16:9
  },
}));

export const ProjectCard = ({ project }) => {
  const classes = useStyles();

  const dateRange =
    new Date(project.startAt).toDateString() +
    " - " +
    new Date(project.endAt).toDateString();
  const authorTitle =
    "Posted by " +
    project.username +
    " on " +
    new Date(project.createdAt).toDateString();
  const fullAddress =
    project.streetAddress +
    " | " +
    project.city +
    ", " +
    project.state +
    " | " +
    project.zipCode;

  const tags = project.tags.split(" ");

  return (
    <Card className={classes.root}>
      <CardHeader
        className={classes.header}
        avatar={<Avatar src={project.avatar} />}
        title={authorTitle}
        subheader={<Typography variant="h6">{project.title}</Typography>}
      />
      <CardMedia
        className={classes.media}
        image={project.image}
        title="Paella dish"
      />

      <CardContent className={classes.footer}>
        <TagsArray tags={tags}></TagsArray>
        <Chip label={dateRange} icon={<ScheduleOutlinedIcon />} />
        <br />
        <Chip label={fullAddress} icon={<LocationOnOutlinedIcon />} />
        <br />
        <Chip
          label={`${project.availableSlots} / 50`}
          icon={<PeopleAltOutlinedIcon />}
        />
        <br />
      </CardContent>
      <CardActions className={classes.footer}>
        <Badge color="primary" badgeContent={project.requests}>
          <MarkunreadMailboxOutlinedIcon />
        </Badge>
        <Badge color="primary" badgeContent={project.interested}>
          <FavoriteBorderOutlinedIcon />
        </Badge>
        <Badge color="primary" badgeContent={project.comments}>
          <CommentOutlinedIcon />
        </Badge>
      </CardActions>
    </Card>
  );
};
