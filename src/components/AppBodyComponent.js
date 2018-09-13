import React from "react";
import { withStyles } from "@material-ui/core/styles";
import me from "../images/img2.jpg";
import Typography from "@material-ui/core/Typography";

const styles = () => ({
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
    fontFamily: "arial"
  }
});

const AppBodyComponent = props => (
  <div className={props.classes.body}>
    <div className={props.classes.backgroundBody} />
    <img
      className={props.classes.imgBody}
      height="500px"
      src={me}
      alt="lol can not"
    />
    <div className={props.classes.textBody}>
      <Typography
        style={{
          color: "white",
          fontSize: "25px",
          fontFamily: "Montserrat"
        }}
      >
        <h1>Hi!</h1>
        <h3>I am a Front End Developer based in Manila.</h3>
      </Typography>
    </div>
  </div>
);

export default withStyles(styles)(AppBodyComponent);
