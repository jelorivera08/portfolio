import React from "react";
import { withStyles } from "@material-ui/core/styles";
import { SocialIcon } from "react-social-icons";

const styles = () => ({
  footerContainer: {
    position: "fixed",
    right: 0,
    bottom: 0,
    fontFamily: "Armata",
    margin: "15px"
  }
});

const RightFooterComponent = props => (
  <div className={props.classes.footerContainer}>
    <SocialIcon
      style={{ height: 25, width: 25, margin: "5px" }}
      url="http://twitter.com/jelonotgelo"
    />
    <SocialIcon
      style={{ height: 25, width: 25, margin: "5px" }}
      url="http://instagram.com/jelorivera"
    />
    <SocialIcon
      style={{ height: 25, width: 25, margin: "5px" }}
      url="https://www.linkedin.com/in/jerald-rivera-2055b8130/"
    />
  </div>
);

export default withStyles(styles)(RightFooterComponent);
