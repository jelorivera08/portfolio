import React, { Component } from "react";
import { withStyles } from "@material-ui/core/styles";
import AppHeaderComponent from "../components/AppHeaderComponent";
import { withRouter } from "react-router-dom";
import { compose } from "redux";

const styles = () => ({});

class AppHeader extends Component {
  handleClick = type => {
    const { history } = this.props;

    if (type === "work") {
      history.push("/work");
    } else if (type === "about") {
      history.push("/about");
    } else if (type === "contact") {
      history.push("/contact");
    } else {
      history.push("/resume");
    }
  };
  render() {
    return (
      <AppHeaderComponent
        mode={this.props.history.location.pathname}
        handleClick={this.handleClick}
      />
    );
  }
}

export default compose(
  withRouter,
  withStyles(styles)
)(AppHeader);
