import React from "react";
import { withStyles } from "@material-ui/core/styles";

const styles = () => ({
  footerContainer: {
    position: "fixed",
    left: 0,
    bottom: 0,
    fontFamily: "Armata",
    margin: "15px",
    display: "flex"
  },
  subFooterContainer: {
    padding: "15px",
  }
});

const LeftFooterComponent = props => (
  <div className={props.classes.footerContainer}>
    <div className={props.classes.subFooterContainer}>
      <div style={{ fontSize: "12px" }}>mail me at:</div>
      <div style={{ fontSize: "15px" }}>jelorivera08@gmail.com</div>
    </div>
    <div className={props.classes.subFooterContainer}>
      <div style={{ fontSize: "12px" }}>or let's talk?</div>
      <div style={{ fontSize: "15px" }}>+63 915 709 5598</div>
    </div>
  </div>
);

export default withStyles(styles)(LeftFooterComponent);
