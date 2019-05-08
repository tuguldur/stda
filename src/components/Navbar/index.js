import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
//import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import Tooltip from "@material-ui/core/Tooltip";
//import Icon from "@material-ui/core/Icon";
import MenuIcon from "@material-ui/icons/Menu";
import "./style.css";
const styles = {
  root: {
    flexGrow: 1
  },
  grow: {
    flexGrow: 1,
    fontSize: "16px",
    textTransform: "uppercase",
    fontFamily: "Roboto Mono"
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 12
  }
};

function Navbar(props) {
  const { classes } = props;
  return (
    <div className={classes.root}>
      <AppBar position="fixed">
        <Toolbar className="dev-nav">
          <IconButton
            className={classes.menuButton}
            color="inherit"
            aria-label="Menu"
          >
            <MenuIcon />
          </IconButton>
          <span className={classes.grow}>Програм Хангамж</span>
          {/* Button 1 */}
          <Tooltip title="Add" placement="bottom">
            <IconButton
              className={classes.button}
              aria-label="Delete"
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
          </Tooltip>
        </Toolbar>
      </AppBar>
    </div>
  );
}

Navbar.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Navbar);
