import * as React from "react";
import Button from "@mui/material/Button";

// import * as Constants from "./constants/ConstantsCode";
import * as Constants from "./constants/ConstantsCode";
import * as ConstantsSchedule from "./controller/schedule/ConstantsSchedule";

//import { createGlobalStyle } from "styled-components";
// import { PreloadImages } from "./helpers/ProjectHelpers";
// import TestNavigationScreen from "./views/screens/navigationscreens/TestNavigationScreen";
// import MyStack from "./views/screens/navigationscreens/TestNavigationScreen";
import * as GeneralHelpers from "./helpers/GeneralHelpers.js";

// import "react-native-gesture-handler";
// import * as Constants from "./constants/ConstantsCode";
// import * as ConstantsSchedule from "./controller/schedule/ConstantsSchedule";
// import AutoNavigationScreen from "./views/screens/navigationscreens/AutoNavigationScreen";
//import MyStack from "./views/screens/navigationscreens/AutoNavigationScreen";

import { Tldraw } from "@tldraw/tldraw";
import "@tldraw/editor/editor.css";
import "@tldraw/ui/ui.css";
import WhiteboardScreen from "./views/screens/whiteboard/WhiteboardScreen";
import LoadingScreen from "./LoadingScreen";

var test = true;

export default function App() {
  var date = new Date();
  var today = (date.getDay() % 7) - 1;
  let num_weeks = Object.keys(ConstantsSchedule.WEEKS).length;
  var weekNumber = GeneralHelpers.getWeek(date) % num_weeks;

  var day = Object.keys(Constants.DAYS)[today];
  var week = ++weekNumber;



  return <WhiteboardScreen day={day} week={week}></WhiteboardScreen>

  return <AutoNavigationScreen day={day} week={week} />;

  return (
    <div>
      <Button variant="contained">Hello World</Button>
    </div>
  );
}
