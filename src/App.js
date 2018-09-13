import React, { Component } from "react";
import JeloLogo from "./components/JeloLogo";
import LeftFooter from "./containers/LeftFooter";
import RightFooter from "./containers/RightFooter";
import AppHeader from "./containers/AppHeader";
import AppBody from "./containers/AppBody";


import { withStyles } from "@material-ui/core/styles";

const styles = () => ({
  appContainer: {
    backgroundColor: "#dcdcdc",
    height: "100vh"
  }
});

class App extends Component {
  render() {
    const { classes } = this.props;
    return (
      <div className={classes.appContainer}>
        <JeloLogo />
        <AppHeader />
        <LeftFooter />
        <RightFooter />
        <AppBody />
      </div>
    );
  }
}

export default withStyles(styles)(App);
