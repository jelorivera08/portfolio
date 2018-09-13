import React, { Component } from "react";
import { withStyles } from "@material-ui/core/styles";
import RightFooterComponent from "../components/RightFooterComponent";

const styles = () => ({});

class RightFooter extends Component {
  render() {
    return <RightFooterComponent />
    ;
  }
}

export default withStyles(styles)(RightFooter);
