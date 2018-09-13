import React, { Component } from "react";
import { withStyles } from "@material-ui/core/styles";
import AppHeaderComponent from "../components/AppHeaderComponent";

const styles = () => ({});

class AppHeader extends Component {
  render() {
    return <AppHeaderComponent />
    ;
  }
}

export default withStyles(styles)(AppHeader);
