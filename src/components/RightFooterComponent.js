import React from "react";
import { withStyles } from "@material-ui/core/styles";
import { SocialIcon } from "react-social-icons";
import { CSSTransition } from "react-transition-group";
import "./styles/RightFooterComponent.css";

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
  <CSSTransition
    in={true}
    appear={true}
    timeout={1000}
    classNames="fadeRightFooter"
  >
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
  </CSSTransition>
);

export default withStyles(styles)(RightFooterComponent);
