import * as React from "react";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Modal } from "@mui/material";
import { MODAL_TEXT, MODAL_WINDOW } from "../styles/Stylesheet";

interface DefaultTextProps {
  children: string;
  color: string;
}
/**
 * DefaultText is a class that extends React.Component and is used to
 * render a text element onto a page. It takes in a DefaultTextProps
 * interface which contains a React.ReactNode and a DefaultTextState
 * interface which contains a string. The class constructor instantiates
 * the state with the props children value and the render() method
 * renders a Typography element with the text stored in the state.
 */
export class DefaultText extends React.Component<DefaultTextProps> {
  render() {
    return <Typography variant="h2">{this.props.children}</Typography>;
  }
}

export class ModalText extends React.Component<DefaultTextProps> {
  render() {
    return <Typography sx={MODAL_TEXT}>{this.props.children}</Typography>;
  }
}

interface ErasableTextProps {
  children: string;
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

interface ClickableModalTextProps {
  children: string;
  color: string;
  modalWindowContents: any;
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
        <Button onClick={this.handleOpen} key={this.props.children}>
          <Typography variant="h3">
            {this.props.children.toLowerCase()}
          </Typography>
        </Button>
        <Modal
          open={this.state.open}
          onClose={this.handleClose}
          style={MODAL_WINDOW}
        >
          <>{this.props.modalWindowContents}</>
        </Modal>
      </>
    );
  }
}
