import React, { Component } from "react";
import { withStyles } from "@material-ui/core/styles";
import AppBodyComponent from "../components/AppBodyComponent";


const styles = () => ({});

class AppBody extends Component {
  render() {
    return <AppBodyComponent />;
  }
}

export default withStyles(styles)(AppBody);
