import React from "react";
import { withStyles } from "@material-ui/core/styles";
import "./styles/AppHeaderComponent.css";
import { CSSTransition } from "react-transition-group";

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
    <CSSTransition in={true} appear={true} timeout={1000} classNames="fadeWork">
      <div className={props.classes.subHeaders}>work</div>
    </CSSTransition>
    <CSSTransition in={true} appear={true} timeout={1000} classNames="fadeAbout">
      <div className={props.classes.subHeaders}>about</div>
    </CSSTransition>
    <CSSTransition in={true} appear={true} timeout={1000} classNames="fadeContact">
      <div className={props.classes.subHeaders}>contact</div>
    </CSSTransition>
    <CSSTransition in={true} appear={true} timeout={1000} classNames="fadeResume">
      <div className={props.classes.subHeaders}>resume</div>
    </CSSTransition>
  </div>
);

export default withStyles(styles)(AppHeaderComponent);
