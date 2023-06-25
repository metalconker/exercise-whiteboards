import * as React from "react";
import { useState } from "react";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Box, Modal, Paper } from "@mui/material";
import * as Exercises from "../../model/ExercisesModel";
import { styles, MUSCLES_CONSTANTS } from "../styles/Stylesheet";
import { MUSCLE_IMAGES } from "../../model/MusclesModel";
import SeparateMuscles from "../../model/MusclesModel";
import { MuscleViewController } from "../../controller/ExerciseController";
import { MUSCLE_COLORS } from "../../GlobalConstants";

interface ErasableTextProps {
  children: any;
  color: string;
}
interface ErasableTextState {
  textValue: string;
}

/**
 * This class implements a ErasableText component that takes in children,
 * color, and textValue props and render them within a Typography element
 * with an onPress button to clear the textValue when clicked.
 */
export class ErasableText extends React.Component<
  ErasableTextProps,
  ErasableTextState
> {
  constructor(props) {
    super(props);
    this.state = {
      textValue: props.children || "",
    };
  }

  onPress = () => {
    this.setState({ textValue: "" });
  };
  render() {
    return (
      <Button onClick={this.onPress} key={this.state.textValue}>
        <Typography variant="h4" style={{ color: this.props.color }}>
          {this.state.textValue}
        </Typography>
      </Button>
    );
  }
}

interface DefaultTextProps {
  children: React.ReactNode;
}
interface DefaultTextState {
  text: string;
}
/**
 * DefaultText is a class that extends React.Component and is used to
 * render a text element onto a page. It takes in a DefaultTextProps
 * interface which contains a React.ReactNode and a DefaultTextState
 * interface which contains a string. The class constructor instantiates
 * the state with the props children value and the render() method
 * renders a Typography element with the text stored in the state.
 */
export class DefaultText extends React.Component<
  DefaultTextProps,
  DefaultTextState,
  any
> {
  constructor(props) {
    super(props);
    this.state = {
      text: props.children,
    };
  }
  render() {
    return <Typography variant="h5">{this.state.text}</Typography>;
  }
}

interface ClickableModalTextProps {
  text: string;
 children: any;
}
interface ClickableModalTextState {
  open: boolean;
}
/**
 * ClickableModalText is a React component which renders a button with
 * text passed in from props. When the button is clicked, an associated
 * Modal window appears and can be closed.
 * The children of the class are displayed in a Modal popup window
 */
export class ClickableModalText extends React.Component<
  ClickableModalTextProps,
  ClickableModalTextState
> {
  constructor(props) {
    super(props);
    this.state = {
      open: false,
    };
    this.handleOpen = this.handleOpen.bind(this);
    this.handleClose = this.handleClose.bind(this);
  }

  handleOpen() {
    this.setState({ open: true });
  }

  handleClose() {
    this.setState({ open: false });
  }
  render() {
    return (
      <>
        <Button onClick={this.handleOpen} key={this.props.text}>
          <Typography variant="h3">{this.props.text.toLowerCase()}</Typography>
        </Button>
        <Modal open={this.state.open} onClose={this.handleClose}>
          <div>{this.props.children}</div>
        </Modal>
      </>
    );
  }
}