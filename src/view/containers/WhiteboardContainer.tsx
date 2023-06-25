import * as React from "react";
import { Typography, Box, Grid, ThemeProvider } from "@mui/material";
import Paper from "@mui/material/Paper";
import {
  WHITEBOARD_BACKGROUND,
  COLORS,
  EXERCISE_BOARD_STYLES,
  THEME,
} from "../styles/Stylesheet";

interface WhiteboardContainerProps {
  children: [
    React.ReactElement<WhiteboardTitleProps>,
    React.ReactElement<WhiteboardBodyProps>
  ];
}
/**
 *  Class that renders a title to the board based on props
 */
export const WhiteboardContainer = React.memo(
  (props: WhiteboardContainerProps) => {
    // const [title, body] = props.children;
    return (
      <ThemeProvider theme={THEME}>
        <Paper elevation={0} square sx={WHITEBOARD_BACKGROUND}>
          <Box sx={EXERCISE_BOARD_STYLES.SPLIT_SCREEN.root}>
            {/* <WhiteboardTitle text={props.title} />
            <WhiteboardBody>{props.children}</WhiteboardBody> */}
            {props.children}
          </Box>
        </Paper>
      </ThemeProvider>
    );
  }
);

interface WhiteboardTitleProps {
  children: string;
}
export const WhiteboardTitle = React.memo((props: WhiteboardTitleProps) => {
  return (
    <Box sx={EXERCISE_BOARD_STYLES.SPLIT_SCREEN.top}>
      <Box sx={EXERCISE_BOARD_STYLES.TOP_COMPONENT.container}>
        <Typography variant="h1">{props.children}</Typography>
      </Box>
    </Box>
  );
});

interface WhiteboardBodyProps {
  children: any;
}
/**
 *  Class that renders a title to the board based on props
 */
export const WhiteboardBody = React.memo((props: WhiteboardBodyProps) => {
  return (
    <Box sx={EXERCISE_BOARD_STYLES.SPLIT_SCREEN.bottom}>
      <Box sx={EXERCISE_BOARD_STYLES.TOP_COMPONENT.container}>
        {props.children}
      </Box>
    </Box>
  );
});
