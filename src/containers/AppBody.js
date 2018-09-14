import React, { Component } from "react";
import { withStyles } from "@material-ui/core/styles";
import AppBodyComponent from "../components/AppBodyComponent";
import { Switch, Route } from "react-router-dom";
import WorkBodyComponent from "../components/WorkBodyComponent";
import AboutBodyComponent from "../components/AboutBodyComponent";
import ContactBodyComponent from "../components/ContactBodyComponent";

const styles = () => ({});

class AppBody extends Component {
  render() {
    return (
      <Switch>
        <Route exact path="/" component={AppBodyComponent} />
        <Route exact path="/work" component={WorkBodyComponent} />
        <Route exact path="/about" component={AboutBodyComponent} />
        <Route exact path="/contact" component={ContactBodyComponent} />

        {/* <Route component={NoMatch} /> */}
      </Switch>
    );
  }
}

export default withStyles(styles)(AppBody);
