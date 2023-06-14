import * as React from "react";
import Paper from "@mui/material/Paper";
import { WHITEBOARD_BACKGROUND } from "./Styles";

export class WhiteboardScreenBackground extends React.Component<any, any> {
  constructor(props: any) {
    super(props);
  }

  render() {
    // Renders the board to the screen
    return (
      <Paper elevation={0} square sx={WHITEBOARD_BACKGROUND}>
        {this.props.children}
      </Paper>
    );
  }
}
