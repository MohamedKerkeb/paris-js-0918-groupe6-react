import React from "react";
import PropTypes from "prop-types";
import { withStyles, createMuiTheme } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import { NavLink } from "react-router-dom";
import { MuiThemeProvider } from "@material-ui/core/styles";
import OpenMenuBurger from "./OpenMenuBurger";
import "./navBar.css";

const styles = {
  root: {
    flexGrow: 1
  },
  grow: {
    flexGrow: 1
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20
  }
};

const ButtonAppBar = props => {
  const { classes, search, myOffers, missions, params, routeName } = props;
  return (
    <MuiThemeProvider theme={theme}>
      <div className={classes.root}>
        <AppBar position="static">
          <Toolbar className="toolbar">
            {routeName !== undefined && (
              <OpenMenuBurger
                openSearch={search}
                openMyOffers={myOffers}
                openMissions={missions}
                openParams={params}
                routeName={routeName}
                className="border"
              />
            )}
            <div className="logo border">
              <NavLink to="/">
                <div className="logo-element">ONE TEAM</div>
              </NavLink>
            </div>
          </Toolbar>
        </AppBar>
      </div>
    </MuiThemeProvider>
  );
};
const theme = createMuiTheme({
  overrides: {
    MuiToolbar: {
      root: {
        backgroundColor: "white"
      }
    }
  }
});

ButtonAppBar.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(ButtonAppBar);