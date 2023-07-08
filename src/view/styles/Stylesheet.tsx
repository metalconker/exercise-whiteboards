import { createTheme } from "@mui/material";
import BackgroundImage from "../../_application/images/whiteboard/Whiteboard.png";
import MALE_BODY_IMAGE from "../../_database/musclesDB/MaleBody.png";

const fontFamily = "DryWhiteboardMarker-Regular";
const color = "red";

export const WHITEBOARD_THEME = createTheme({
  typography: {
    fontFamily,
    allVariants: {
      color,
    },
  },
});

WHITEBOARD_THEME.typography.h1 = {
  fontFamily,
  color,
  [WHITEBOARD_THEME.breakpoints.up("xs")]: { fontSize: "1.2rem" },
  [WHITEBOARD_THEME.breakpoints.up("sm")]: { fontSize: "2.4rem" },
  [WHITEBOARD_THEME.breakpoints.up("md")]: { fontSize: "3.6rem" },
  [WHITEBOARD_THEME.breakpoints.up("lg")]: { fontSize: "4.8rem" },
  [WHITEBOARD_THEME.breakpoints.up("xl")]: { fontSize: "6rem" },
};

WHITEBOARD_THEME.typography.h2 = {
  fontFamily,
  color,
  [WHITEBOARD_THEME.breakpoints.up("xs")]: { fontSize: "0.8rem" },
  [WHITEBOARD_THEME.breakpoints.up("sm")]: { fontSize: "1.6rem" },
  [WHITEBOARD_THEME.breakpoints.up("md")]: { fontSize: "2.4rem" },
  [WHITEBOARD_THEME.breakpoints.up("lg")]: { fontSize: "3.2rem" },
  [WHITEBOARD_THEME.breakpoints.up("xl")]: { fontSize: "4rem" },
};

WHITEBOARD_THEME.typography.h3 = {
  fontFamily,
  color,
  [WHITEBOARD_THEME.breakpoints.up("xs")]: { fontSize: "0.4rem" },
  [WHITEBOARD_THEME.breakpoints.up("sm")]: { fontSize: "0.8rem" },
  [WHITEBOARD_THEME.breakpoints.up("md")]: { fontSize: "1.2rem" },
  [WHITEBOARD_THEME.breakpoints.up("lg")]: { fontSize: "1.6rem" },
  [WHITEBOARD_THEME.breakpoints.up("xl")]: { fontSize: "2rem" },
};

WHITEBOARD_THEME.typography.h4 = {
  fontFamily,
  color,
  [WHITEBOARD_THEME.breakpoints.up("xs")]: { fontSize: "0.35rem" },
  [WHITEBOARD_THEME.breakpoints.up("sm")]: { fontSize: "0.7rem" },
  [WHITEBOARD_THEME.breakpoints.up("md")]: { fontSize: "1.05rem" },
  [WHITEBOARD_THEME.breakpoints.up("lg")]: { fontSize: "1.4rem" },
  [WHITEBOARD_THEME.breakpoints.up("xl")]: { fontSize: "1.75rem" },
};

WHITEBOARD_THEME.typography.h5 = {
  fontFamily,
  color,
  [WHITEBOARD_THEME.breakpoints.up("xs")]: { fontSize: "0.2rem" },
  [WHITEBOARD_THEME.breakpoints.up("sm")]: { fontSize: "0.4rem" },
  [WHITEBOARD_THEME.breakpoints.up("md")]: { fontSize: "0.6rem" },
  [WHITEBOARD_THEME.breakpoints.up("lg")]: { fontSize: "0.8rem" },
  [WHITEBOARD_THEME.breakpoints.up("xl")]: { fontSize: "1rem" },
};

WHITEBOARD_THEME.typography.h6 = {
  fontFamily,
  color,
  [WHITEBOARD_THEME.breakpoints.up("xs")]: { fontSize: "0.1rem" },
  [WHITEBOARD_THEME.breakpoints.up("sm")]: { fontSize: "0.2rem" },
  [WHITEBOARD_THEME.breakpoints.up("md")]: { fontSize: "0.3rem" },
  [WHITEBOARD_THEME.breakpoints.up("lg")]: { fontSize: "0.4rem" },
  [WHITEBOARD_THEME.breakpoints.up("xl")]: { fontSize: "0.5rem" },
};

export const COLORS = {
  EXERCISE_COLORS: { LOW: "green", MEDIUM: "blue", HIGH: "red" },
  BOARD_COLORS: { DEFAULT: "black", LEFT: "purple", RIGHT: "blue" },
};

export const EXERCISE_BOARD_STYLES = {
  SPLIT_SCREEN: {
    root: {
      height: "96%",
      margin: "2% 3%",
      backgroundColor: "transparent",
    },
    top: { height: "12%", width: "100%" },
    bottom: { height: "84%", width: "100%" },
  },
  TOP_COMPONENT: {
    container: {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      height: "100%",
    },
  },
};

export const WHITEBOARD_BACKGROUND = {
  backgroundImage: `url(${BackgroundImage})`,
  position: "fixed",
  height: "100vh",
  minWidth: "100%",
  minHeight: "100%",
  backgroundSize: "100vw 100vh",
  backgroundPosition: "center",
  backgroundRepeat: "no-repeat",
};

export const styles = {
  reps: {
    color: "blue",
    alignItems: "center",
    flex: 1,
  },
  name: {
    flex: 6.5,
  },
  background: {
    flex: 1,
    justifyContent: "center",
  },
  modalBackground: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22,
  },
  modalView: {
    width: "70%",
    margin: 20,
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  openButton: {
    backgroundColor: "#F194FF",
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  textStyle: {
    fontWeight: "bold",
    textAlign: "center",
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center",
    fontFamily: "Arial",
  },
  sets: {
    color: "red",
    alignItems: "center",
    flex: 1,
  },
  line: {
    flexDirection: "row",
  },
  modalcontents: {
    alignItems: "center",
    flexDirection: "column",
    position: "relative",
    width: "100%",
    height: "90%",
  },
  informationrow: {
    height: "45%",
    width: "100%",
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "flex-start",
  },
  mediaandmusclesrow: {
    height: "45%",
    flexDirection: "row",
    alignItems: "center",
  },
  mediacontainer: {
    position: "relative",
    justifyContent: "center",
    alignItems: "flex-start",
    alignSelf: "flex-start",
    width: "100%",
    height: "100%",
    flex: 1,
  },
  image: {
    width: "100%",
    alignItems: "flex-start",
    alignSelf: "flex-start",
  },
  muscles: {
    position: "relative",
    justifyContent: "center",
    alignItems: "center",
    alignSelf: "center",
    flex: 1,
    width: "100%",
  },
  modaltitleText: {
    fontFamily: "Arial",
    fontSize: 30,
  },
  modaldefaultText: {
    fontFamily: "Arial",
    fontSize: 15,
  },

  grid: {
    workouts: {
      backgroundColor: "blue",
      flex: 7,
      flexDirection: "column",
      justifyContent: "flex-start",
    },
    exercises: {
      backgroundColor: "yellow",
      flexDirection: "row",
    },
    name: {
      backgroundColor: "white",
      flex: 6.5,
    },
    reps: {
      color: "red",
      alignItems: "center",
      backgroundColor: "pink",
      flex: 1,
    },
  },
};

export const popupStyle = {
  // backgroundSize: "50vw 50vh",
  // backgroundPosition: "center",
  // backgroundRepeat: "no-repeat",
  position: "fixed",
  width: "50%",
  height: "50%",
  // display: "flex",
};

export const paperStyles = {
  backgroundImage: `url(${MALE_BODY_IMAGE})`,
  backgroundSize: "50vw 50vh",
  backgroundPosition: "center",
  backgroundRepeat: "no-repeat",
  position: "fixed",
  width: "50%",
  height: "50%",
};

export const musclesStyles = {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  WebkitAlignItems: "center",
  width: "75%",
  left: "12.5%",
};

export const clickableStyles = {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  WebkitAlignItems: "center",
};

export const mediaProps = {
  width: "100%",
};
