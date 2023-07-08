import * as React from "react";
import { Typography, Box, ThemeProvider } from "@mui/material";
import Paper from "@mui/material/Paper";
import {
  WHITEBOARD_BACKGROUND,
  EXERCISE_BOARD_STYLES,
  WHITEBOARD_THEME,
} from "./styles/Stylesheet";

const ROOT_STYLE = EXERCISE_BOARD_STYLES.SPLIT_SCREEN.root;
const SPLIT_TOP_STYLE = EXERCISE_BOARD_STYLES.SPLIT_SCREEN.top;
const SPLIT_BOTTOM_STYLE = EXERCISE_BOARD_STYLES.SPLIT_SCREEN.bottom;
const TOP_CONTAINER_STYLE = EXERCISE_BOARD_STYLES.TOP_COMPONENT.container;

export const WhiteboardBackground = React.memo(
  (props: React.PropsWithChildren) => {
    return (
      <ThemeProvider theme={WHITEBOARD_THEME}>
        <Paper elevation={0} square sx={WHITEBOARD_BACKGROUND}>
          <Box sx={ROOT_STYLE}>{props.children}</Box>
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
    <Box sx={SPLIT_TOP_STYLE}>
      <Box sx={TOP_CONTAINER_STYLE}>
        <Typography variant="h1">{props.children}</Typography>
      </Box>
    </Box>
  );
});

export const WhiteboardBody = React.memo((props: React.PropsWithChildren) => {
  return (
    <Box sx={SPLIT_BOTTOM_STYLE}>
      <Box sx={TOP_CONTAINER_STYLE}>{props.children}</Box>
    </Box>
  );
});
