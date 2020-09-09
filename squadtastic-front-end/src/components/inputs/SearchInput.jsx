import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import InputBase from "@material-ui/core/InputBase";
import Divider from "@material-ui/core/Divider";
import IconButton from "@material-ui/core/IconButton";
import SearchIcon from "@material-ui/icons/Search";
import FilterListIcon from "@material-ui/icons/FilterList";
import Button from "@material-ui/core/Button";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import Fade from "@material-ui/core/Fade";

const useStyles = makeStyles((theme) => ({
  root: {
    padding: "2px 4px",
    display: "flex",
    alignItems: "center",
    width: 400,
  },
  input: {
    marginLeft: theme.spacing(1),
    flex: 1,
  },
  iconButton: {
    padding: 10,
  },
  divider: {
    height: 28,
    margin: 4,
  },
}));

export const SearchInput = () => {
  const classes = useStyles();

  const [anchorEl, setAnchorEl] = useState(null);
  const [currentFilter, setCurrentFilter] = useState("Projects");

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = (filterOption) => {
    setAnchorEl(null);
    setCurrentFilter(filterOption);
  };

  return (
    <Paper component="form" className={classes.root}>
      <InputBase
        className={classes.input}
        placeholder="Search"
        inputProps={{ "aria-label": "search" }}
      />
      <IconButton
        type="submit"
        className={classes.iconButton}
        aria-label="search"
      >
        <SearchIcon />
      </IconButton>
      <Divider className={classes.divider} orientation="vertical" />
      <Button
        color="inherit"
        aria-controls="simple-menu"
        aria-haspopup="true"
        onClick={handleClick}
        endIcon={<FilterListIcon />}
      >
        {currentFilter}
      </Button>

      <Menu
        id="simple-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={() => handleClose(currentFilter)}
        TransitionComponent={Fade}
      >
        <MenuItem onClick={() => handleClose("Projects")}>Projects</MenuItem>
        <MenuItem onClick={() => handleClose("Categories")}>
          Categories
        </MenuItem>
        <MenuItem onClick={() => handleClose("Users")}>Users</MenuItem>
      </Menu>
    </Paper>
  );
};
