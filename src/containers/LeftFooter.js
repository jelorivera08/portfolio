import React, { Component } from "react";
import { withStyles } from "@material-ui/core/styles";
import LeftFooterComponent from "../components/LeftFooterComponent";

const styles = () => ({});

class LeftFooter extends Component {
  render() {
    return <LeftFooterComponent />
    ;
  }
}

export default withStyles(styles)(LeftFooter);
