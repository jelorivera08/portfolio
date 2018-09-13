import React from "react";
import { withStyles } from "@material-ui/core/styles";

const styles = () => ({
  header: {
    position: "fixed",
    right: 0,
    margin: "10px",
    height: "40px",
    display: "flex"
  },
  subHeaders: {
    padding: "15px 17px",
    fontSize: "20px",
    fontFamily: "Armata",
    cursor: "pointer"
  }
});

const AppHeaderComponent = props => (
  <div className={props.classes.header}>
    <div className={props.classes.subHeaders}>work</div>
    <div className={props.classes.subHeaders}>about</div>
    <div className={props.classes.subHeaders}>contact</div>
    <div className={props.classes.subHeaders}>resume</div>
  </div>
);

export default withStyles(styles)(AppHeaderComponent);
