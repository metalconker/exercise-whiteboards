import * as React from "react";
// import Button from "@mui/material/Button";

// import * as Constants from "./constants/ConstantsCode";
import * as Constants from "./constants/ConstantsCode";
import * as ConstantsSchedule from "./controller/schedule/ConstantsSchedule";

//import { createGlobalStyle } from "styled-components";
// import { PreloadImages } from "./helpers/ProjectHelpers";
// import TestNavigationScreen from "./views/screens/navigationscreens/TestNavigationScreen";
// import MyStack from "./views/screens/navigationscreens/TestNavigationScreen";
import * as GeneralHelpers from "./helpers/GeneralHelpers";

// import "react-native-gesture-handler";
// import * as Constants from "./constants/ConstantsCode";
// import * as ConstantsSchedule from "./controller/schedule/ConstantsSchedule";
// import AutoNavigationScreen from "./views/screens/navigationscreens/AutoNavigationScreen";
//import MyStack from "./views/screens/navigationscreens/AutoNavigationScreen";

// import WhiteboardScreen from "./views/screens/whiteboard/WhiteboardScreen";
// import LoadingScreen from "./LoadingScreen";
import {
  WarmupBoardScreen,
} from "./views/screens/whiteboard/Exercises";

var test = true;

export default function App() {
  var date = new Date();

  var today = date.getDay() - (4 % 7);
  if (test) today = 1;
  let num_weeks = Object.keys(ConstantsSchedule.WEEKS).length;
  var weekNumber = GeneralHelpers.getWeek(date) % num_weeks;

  var day = Object.keys(Constants.DAYS)[today];
  var week = ++weekNumber;
  // console.log(day);

  return <WarmupBoardScreen day={day} week={week}></WarmupBoardScreen>;
}
