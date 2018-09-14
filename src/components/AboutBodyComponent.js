import React from "react";
import { withStyles } from "@material-ui/core/styles";
import "./styles/AppBodyComponent.css";
import { CSSTransition } from "react-transition-group";

const styles = () => ({
  backgroundBody: {
    position: "absolute",
    height: "250px",
    width: "100%",
    backgroundColor: "#245C34"
  },
  body: {
    marginTop: "250px",
    display: "inline-block",
    height: "400px",
    width: "100%",
    position: "relative"
  }
});

const AboutBodyComponent = props => (
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
  </div>
);

export default withStyles(styles)(AboutBodyComponent);
