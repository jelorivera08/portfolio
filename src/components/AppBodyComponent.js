import React from "react";
import { withStyles } from "@material-ui/core/styles";
import me from "../images/img2.jpg";
import { CSSTransition } from "react-transition-group";
import "./styles/AppBodyComponent.css";

export const styles = () => ({
  body: {
    marginTop: "250px",
    display: "inline-block",
    height: "400px",
    width: "100%",
    position: "relative"
  },
  backgroundBody: {
    position: "absolute",
    height: "250px",
    width: "100%",
    backgroundColor: "black"
  },
  imgBody: {
    position: "absolute",
    top: "-140px",
    left: "140px",
    borderRadius: "10px"
  },
  textBody: {
    position: "absolute",
    left: "480px",
    padding: "0px 40px",
    fontFamily: "arial",
    minHeight: "245px",
    minWidth: "225px"
  }
});

const AppBodyComponent = props => (
  <div className={props.classes.body}>
    <CSSTransition in={true} appear={true} timeout={1000} classNames="fadeBody">
      <div className={props.classes.backgroundBody} />
    </CSSTransition>
    <CSSTransition in={true} appear={true} timeout={1000} classNames="fadeImg">
      <img
        className={props.classes.imgBody}
        height="500px"
        src={me}
        alt="lol can not"
      />
    </CSSTransition>
    <CSSTransition
      in={true}
      appear={true}
      timeout={1000}
      classNames="fadeTextBody"
    >
      <div className={props.classes.textBody}>
        <div
          style={{
            color: "white",
            fontSize: "25px",
            fontFamily: "Montserrat"
          }}
        >
          <h1>Hi!</h1>
          <h3>I am a Front End Developer based in Manila.</h3>
        </div>
      </div>
    </CSSTransition>
  </div>
);

export default withStyles(styles)(AppBodyComponent);
