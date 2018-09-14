import React from "react";
import { withStyles } from "@material-ui/core/styles";
import { CSSTransition } from "react-transition-group";
import "./styles/JeloLogo.css";

const styles = () => ({
  logo: {
    fontFamily: "Lobster",
    fontSize: "35px",
    padding: "20px",
    position: "fixed",
    cursor: "pointer"
  }
});

const JeloLogo = props => (
  <CSSTransition in={true} appear={true} timeout={1000} classNames="fadeLogo">
    <div onClick={props.handleClick} className={props.classes.logo}>
      JeLo
    </div>
  </CSSTransition>
);

export default withStyles(styles)(JeloLogo);
