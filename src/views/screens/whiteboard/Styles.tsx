import { createTheme } from "@mui/material";
import BackgroundImage from "../../../assets/images/whiteboard/Whiteboard.png";

export const theme = createTheme({
  typography: {
    fontFamily: "DryWhiteboardMarker-Regular",
    allVariants: {
      color: "black",
    },
  },
});

theme.typography.h1 = {
  fontFamily: "DryWhiteboardMarker-Regular",
  color: "black",
  [theme.breakpoints.up("xs")]: {
    fontSize: "2rem",
  },
  [theme.breakpoints.up("sm")]: {
    fontSize: "2.5rem",
  },
  [theme.breakpoints.up("md")]: {
    fontSize: "3.5rem",
  },
  [theme.breakpoints.up("lg")]: {
    fontSize: "4.5rem",
  },
  [theme.breakpoints.up("xl")]: {
    fontSize: "5.5rem",
  },
};

theme.typography.h2 = {
  fontFamily: "DryWhiteboardMarker-Regular",
  color: "black",
  [theme.breakpoints.up("xs")]: {
    fontSize: "0.8rem",
  },
  [theme.breakpoints.up("sm")]: {
    fontSize: "1.2rem",
  },
  [theme.breakpoints.up("md")]: {
    fontSize: "1.6rem",
  },
  [theme.breakpoints.up("lg")]: {
    fontSize: "2.0rem",
  },
  [theme.breakpoints.up("xl")]: {
    fontSize: "2.6rem",
  },
};

theme.typography.h3 = {
  fontFamily: "DryWhiteboardMarker-Regular",
  color: "black",
  [theme.breakpoints.up("xs")]: {
    fontSize: "0.6rem",
  },
  [theme.breakpoints.up("sm")]: {
    fontSize: "1rem",
  },
  [theme.breakpoints.up("md")]: {
    fontSize: "1.4rem",
  },
  [theme.breakpoints.up("lg")]: {
    fontSize: "1.6rem",
  },
  [theme.breakpoints.up("xl")]: {
    fontSize: "2.2rem",
  },
};

theme.typography.h4 = {
  fontFamily: "DryWhiteboardMarker-Regular",
  color: "black",
  [theme.breakpoints.up("xs")]: {
    fontSize: "0.5rem",
  },
  [theme.breakpoints.up("sm")]: {
    fontSize: "0.7rem",
  },
  [theme.breakpoints.up("md")]: {
    fontSize: "1.0rem",
  },
  [theme.breakpoints.up("lg")]: {
    fontSize: "1.2rem",
  },
  [theme.breakpoints.up("xl")]: {
    fontSize: "2.2rem",
  },
};

theme.typography.h5 = {
  fontFamily: "DryWhiteboardMarker-Regular",
  color: "black",
  [theme.breakpoints.up("xs")]: {
    fontSize: "0.4rem",
  },
  [theme.breakpoints.up("sm")]: {
    fontSize: "0.6rem",
  },
  [theme.breakpoints.up("md")]: {
    fontSize: "1rem",
  },
  [theme.breakpoints.up("lg")]: {
    fontSize: "1.2rem",
  },
  [theme.breakpoints.up("xl")]: {
    fontSize: "1.6rem",
  },
};

theme.typography.h6 = {
  fontFamily: "DryWhiteboardMarker-Regular",
  color: "black",
  [theme.breakpoints.up("xs")]: {
    fontSize: "0.2rem",
  },
  [theme.breakpoints.up("sm")]: {
    fontSize: "0.4rem",
  },
  [theme.breakpoints.up("md")]: {
    fontSize: "0.6rem",
  },
  [theme.breakpoints.up("lg")]: {
    fontSize: "1rem",
  },
  [theme.breakpoints.up("xl")]: {
    fontSize: "1.2rem",
  },
};

export const EXERCISE_BOARD_STYLES = {
  SPLIT_SCREEN: {
    root: {
      height: "96%",
      marginLeft: "3%",
      marginRight: "3%",
      marginTop: "2%",
      marginBottom: "2%",
      backgroundColor: "transparent",
    },
    top: {
      // backgroundColor: "blue",
      height: "12%",
      width: "100%",
    },
    bottom: {
      // backgroundColor: "red",
      height: "84%",
      width: "100%",
    },
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

// const styles = {
//   reps: {
//     color: "red",
//     alignItems: "center",
//     flex: 1,
//     //backgroundColor: "pink",
//   },
//   name: {
//     // backgroundColor: "purple",
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
//     // backgroundColor: "white",
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
//   textStyle: {
//     // color: "white",
//     fontWeight: "bold",
//     textAlign: "center",
//   },
//   modalText: {
//     marginBottom: 15,
//     textAlign: "center",
//     fontFamily: "Arial",
//   },
//   sets: {
//     color: "red",
//     alignItems: "center",
//     flex: 1,
//   },
//   line: {
//     flexDirection: "row",
//   },
//   modalcontents: {
//     // justifyContent: "center",
//     alignItems: "center",
//     flexDirection: "column",
//     position: "relative",
//     width: "100%",
//     height: "90%",
//   },
//   informationrow: {
//     height: "45%",
//     width: "100%",
//     flexDirection: "column",
//     alignItems: "flex-start",
//     justifyContent: "flex-start",
//     // alignSelf: "flex-start",
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
//     // flexWrap: "wrap",
//   },
//   // video: {
//   //   height: "100%",
//   //   width: "100%",
//   //   alignItems: "stretch",
//   //   alignSelf: "flex-start",
//   // },
//   image: {
//     width: "100%",
//     alignItems: "flex-start",
//     alignSelf: "flex-start",
//     // flexShrink: 1,
//   },
//   muscles: {
//     position: "relative",
//     justifyContent: "center",
//     alignItems: "center",
//     alignSelf: "center",
//     flex: 1,
//     width: "100%",
//     height: "100%",
//   },
//   modaltitleText: {
//     fontFamily: "Arial",
//     fontSize: 30,
//   },
//   modaldefaultText: {
//     fontFamily: "Arial",
//     fontSize: 15,
//   },
// };

// const grid = {
//   workouts: {
//     backgroundColor: "blue",
//     flex: 7,
//     flexDirection: "column",
//     justifyContent: "flex-start",
//   },
//   exercises: {
//     backgroundColor: "yellow",
//     flexDirection: "row",
//   },
//   name: {
//     backgroundColor: "white",
//     flex: 6.5,
//   },
//   reps: {
//     color: "red",
//     alignItems: "center",
//     backgroundColor: "pink",
//     flex: 1,
//   },
// };
