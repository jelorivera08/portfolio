import React, { Component } from "react";
import JeloLogo from "./components/JeloLogo";
import LeftFooter from "./containers/LeftFooter";
import RightFooter from "./containers/RightFooter";
import AppHeader from "./containers/AppHeader";
import AppBody from "./containers/AppBody";
import { withRouter } from "react-router-dom";
import { compose } from "redux";
import { withStyles } from "@material-ui/core/styles";

const styles = () => ({
  appContainer: {
    backgroundColor: "#dcdcdc",
    height: "100vh"
  }
});

class App extends Component {
  handleLogoClick = () => {
    const { history } = this.props;
    history.push("/");
  };

  render() {
    const { classes } = this.props;
    return (
      <div className={classes.appContainer}>
        <JeloLogo handleClick={this.handleLogoClick} />
        <AppHeader />
        <LeftFooter />
        <RightFooter />
        <AppBody />
      </div>
    );
  }
}

export default compose(
  withRouter,
  withStyles(styles)
)(App);
