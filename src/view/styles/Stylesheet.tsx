import { createTheme } from "@mui/material";
import BackgroundImage from "../../_application/images/whiteboard/Whiteboard.png";
import MALE_BODY_IMAGE from "../../_database/musclesDB/MaleBody.png";
import React from "react";

const fontFamily = "DryWhiteboardMarker-Regular";
const color = "black";

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

/** 
_    _ _     _ _       _                         _ 
| |  | | |   (_) |     | |                       | |
| |  | | |__  _| |_ ___| |__   ___   __ _ _ __ __| |
| |/\| | '_ \| | __/ _ \ '_ \ / _ \ / _` | '__/ _` |
\  /\  / | | | | ||  __/ |_) | (_) | (_| | | | (_| |
 \/  \/|_| |_|_|\__\___|_.__/ \___/ \__,_|_|  \__,_|
  */

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

export const EXERCISE_BOARD_STYLES = {
  root: {
    height: "96%",
    margin: "2% 3%",
    backgroundColor: "transparent",
    display: "block",
  },
  top: {
    height: "20%",
    width: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  bottom: {
    height: "76%",
    width: "100%",
    display: "block",
  },
};

/**
___  ___               _           
|  \/  |              | |          
| .  . |_   _ ___  ___| | ___  ___ 
| |\/| | | | / __|/ __| |/ _ \/ __|
| |  | | |_| \__ \ (__| |  __/\__ \
\_|  |_/\__,_|___/\___|_|\___||___/
                     
 */
export const MUSCLES_BACKGROUND = {
  // backgroundImage: `url(${MALE_BODY_IMAGE})`,
  // backgroundSize: "25vw 25vh",
  // backgroundPosition: "center",
  // backgroundRepeat: "no-repeat",
  // position: "absolute",
  minWidth: "100%",
  minHeight: "100%",
  backgroundColor: 'white'
  // // display: "block",
  // display: 'flex',
  // flexDirection: 'row', /* or 'column' */
  // flexWrap: 'nowrap' /* or 'wrap' */
  // objectFit : "contain"
};

export const MUSCLES_IMAGES_BOX: React.CSSProperties = {
  position: "absolute",
  width: "100%",
  height: "100%",
  alignItems: "center",
  justifyContent: "center",
  WebkitAlignItems: "center",
  maxHeight: "33%",
  display: "block",

};

export const MUSCLES_IMAGES: React.CSSProperties = {
  position: "absolute",
  width: "100%",
  height: "100%",
  alignItems: "center",
  justifyContent: "center",
  WebkitAlignItems: "center",
  // maxHeight: "33%",
  display: "block",
};

/** 
___  ___          _       _ 
|  \/  |         | |     | |
| .  . | ___   __| | __ _| |
| |\/| |/ _ \ / _` |/ _` | |
| |  | | (_) | (_| | (_| | |
\_|  |_/\___/ \__,_|\__,_|_|                      
*/

export const MODAL_TEXT = {
  fontWeight: "bold",
  textAlign: "left",
  marginBottom: 2,
  fontFamily: "Arial",
};

export const MODAL_WINDOW = {
  left: "25%",
  width: "50%",
  top: 0,
  height: "100%",
  display: "flex",
  flexDirection: "row",
  flexWrap: "nowrap",
  alignItems: "stretch",
};

export const EXERCISE_DETAILS_WINDOW = {
  height: "33%",
  width: "100%",
  alignItems: "flex-start",
  justifyContent: "flex-start",
  display: "absolute",
  flexDirection: "row" /* or 'column' */,
  flexWrap: "nowrap" /* or 'wrap' */,
};

export const MEDIA_VIEW = {
  // height: "33%",
  // width: "100%",
  position: "absolute",
  display: "absolute",
  flexDirection: "row" /* or 'column' */,
  flexWrap: "nowrap" /* or 'wrap' */,
  alignItems: "flex-start",
  justifyContent: "flex-start",
};

// export const styles = {
//   reps: {
//     color: "blue",
//     alignItems: "center",
//     flex: 1,
//   },
//   name: {
//     flex: 6.5,
//   },
//   background: {
//     flex: 1,
//     justifyContent: "center",
//   },
//   modalBackground: {
//     flex: 1,
//     justifyContent: "center",
//     alignItems: "center",
//   },
//   centeredView: {
//     flex: 1,
//     justifyContent: "center",
//     alignItems: "center",
//     marginTop: 22,
//   },
//   modalView: {
//     width: "70%",
//     margin: 20,
//     borderRadius: 20,
//     padding: 35,
//     alignItems: "center",
//     shadowColor: "#000",
//     shadowOffset: {
//       width: 0,
//       height: 2,
//     },
//     shadowOpacity: 0.25,
//     shadowRadius: 3.84,
//     elevation: 5,
//   },
//   openButton: {
//     backgroundColor: "#F194FF",
//     borderRadius: 20,
//     padding: 10,
//     elevation: 2,
//   },
//   textStyle: {},

//   sets: {
//     color: "red",
//     alignItems: "center",
//     flex: 1,
//   },
//   line: {
//     flexDirection: "row",
//   },
//   modalcontents: {
//     alignItems: "center",
//     flexDirection: "column",
//     position: "relative",
//     width: "100%",
//     height: "90%",
//   },

//   mediaandmusclesrow: {
//     height: "45%",
//     flexDirection: "row",
//     alignItems: "center",
//   },
//   mediacontainer: {
//     position: "relative",
//     justifyContent: "center",
//     alignItems: "flex-start",
//     alignSelf: "flex-start",
//     width: "100%",
//     height: "100%",
//     flex: 1,
//   },
//   image: {
//     width: "100%",
//     alignItems: "flex-start",
//     alignSelf: "flex-start",
//   },
//   muscles: {
//     position: "relative",
//     justifyContent: "center",
//     alignItems: "center",
//     alignSelf: "center",
//     flex: 1,
//     width: "100%",
//   },
//   modaltitleText: {
//     fontFamily: "Arial",
//     fontSize: 30,
//   },
//   modaldefaultText: {
//     fontFamily: "Arial",
//     fontSize: 15,
//   },

//   grid: {
//     workouts: {
//       backgroundColor: "blue",
//       flex: 7,
//       flexDirection: "column",
//       justifyContent: "flex-start",
//     },
//     exercises: {
//       backgroundColor: "yellow",
//       flexDirection: "row",
//     },
//     name: {
//       backgroundColor: "white",
//       flex: 6.5,
//     },
//     reps: {
//       color: "red",
//       alignItems: "center",
//       backgroundColor: "pink",
//       flex: 1,
//     },
//   },
// };

// export const POPUP_STYLE = {
//   backgroundSize: "50vw 50vh",
//   backgroundPosition: "center",
//   backgroundRepeat: "no-repeat",
//   position: "fixed",
//   width: "50%",
//   height: "50%",
//   display: "flex",
// };
