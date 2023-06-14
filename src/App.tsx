// Cleaned up code
import React from "react";
import { DAYS } from "./constants/ConstantsCode";
import { WEEKS } from "./controller/schedule/ConstantsSchedule";
import { getWeek } from "./helpers/GeneralHelpers";
import {
  ExerciseBoardScreen,
  WarmupBoardScreen,
} from "./views/screens/whiteboard/Exercises";
var test = true;
export default function App() {
  const date = new Date();
  var today = date.getDay() % 7;
  if (test) today = 1;
  const weekNumber = (getWeek(date) % Object.keys(WEEKS).length) + 1;
  const day = Object.keys(DAYS)[today];

  return <ExerciseBoardScreen day={day} week={weekNumber} />;
  return <WarmupBoardScreen day={day} week={weekNumber} />;
}
