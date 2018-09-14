import React from "react";
import { withStyles } from "@material-ui/core/styles";
import "./styles/AppBodyComponent.css";
import vitruvy from "../images/vitruvius.png";
import { CSSTransition } from "react-transition-group";
import {styles} from "./AppBodyComponent";

const WorkBodyComponent = props => (
  <div className={props.classes.body}>
    <CSSTransition
      key="one"
      in={true}
      appear={true}
      timeout={1000}
      classNames="fadeBody"
    >
      <div className={props.classes.backgroundBody} />
    </CSSTransition>
    <CSSTransition in={true} appear={true} timeout={1000} classNames="fadeImg">
      <img
        className={props.classes.imgBody}
        height="500px"
        src={vitruvy}
        alt="vitruvius"
      />
    </CSSTransition>
  </div>
);

export default withStyles(styles)(WorkBodyComponent);
