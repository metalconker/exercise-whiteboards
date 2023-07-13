import * as React from "react";
import { Typography, Box, ThemeProvider } from "@mui/material";
import Paper from "@mui/material/Paper";
import {
  WHITEBOARD_BACKGROUND,
  EXERCISE_BOARD_STYLES,
  WHITEBOARD_THEME,
} from "../styles/Stylesheet";

const ROOT_STYLE = EXERCISE_BOARD_STYLES.root;
const SPLIT_TOP_STYLE = EXERCISE_BOARD_STYLES.top;
const SPLIT_BOTTOM_STYLE = EXERCISE_BOARD_STYLES.bottom;

interface WhiteboardBackgroundProps {
  children: [
    React.ReactElement<WhiteboardTitle>,
    React.ReactElement<WhiteboardBody>
  ];
}
export class WhiteboardBackground extends React.Component<WhiteboardBackgroundProps> {
  render() {
    return (
      <ThemeProvider theme={WHITEBOARD_THEME}>
        <Paper elevation={0} square sx={WHITEBOARD_BACKGROUND}>
          <Box sx={ROOT_STYLE}>{this.props.children}</Box>
        </Paper>
      </ThemeProvider>
    );
  }
}

interface WhiteboardTitleProps {
  children: string;
}
export class WhiteboardTitle extends React.Component<WhiteboardTitleProps> {
  render() {
    return (
      <Box sx={SPLIT_TOP_STYLE}>
        <Typography variant="h1">{this.props.children}</Typography>
      </Box>
    );
  }
}

interface WhiteboardBodyProps {
  children: any;
}
export class WhiteboardBody extends React.Component<WhiteboardBodyProps> {
  render() {
    return <Box sx={SPLIT_BOTTOM_STYLE}>{this.props.children}</Box>;
  }
}
