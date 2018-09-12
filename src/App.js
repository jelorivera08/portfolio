import React, { Component } from "react";
import JeloLogo from "./components/JeloLogo";
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
      <div className={classes.appContainer} >
        <JeloLogo />
      </div>
    );
  }
}

export default withStyles(styles)(App);
