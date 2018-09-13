import React from "react";
import { withStyles } from "@material-ui/core/styles";

const styles = () => ({
  logo: {
    fontFamily: "Lobster",
    fontSize: "35px",
    padding: "20px",
    position: "fixed"
  }
});

const JeloLogo = props => <div className={props.classes.logo}>JeLo</div>;

export default withStyles(styles)(JeloLogo);
