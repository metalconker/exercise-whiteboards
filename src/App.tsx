
import React from "react";
import { DAYS } from "./GlobalConstants";
import { WEEKS } from "./GlobalConstants";
import {
  ExerciseBoardScreen,
  WarmupBoardScreen,
} from "./view/ExercisesBoardView";
var test = true;
// var test = false;
export default function App() {
  const date = new Date();
  var today = date.getDay() % 7;
  if (test) today = 5;
  const weekNumber = (getWeek(date) % Object.keys(WEEKS).length) + 1;
  const day = Object.keys(DAYS)[today];

  return <ExerciseBoardScreen day={day} week={weekNumber} />;
  // return <WarmupBoardScreen day={day} week={weekNumber} />;
}

// Returns the ISO week of the date.
function getWeek(date_input: any) {
  var date = new Date(date_input);
  date.setHours(0, 0, 0, 0);
  // Thursday in current week decides the year.
  date.setDate(date.getDate() + 3 - ((date.getDay() + 6) % 7));
  // January 4 is always in week 1.
  var week1 = new Date(date.getFullYear(), 0, 4);
  // Adjust to Thursday in week 1 and count number of weeks from date to week1.
  return (
    1 +
    Math.round(
      ((date.getTime() - week1.getTime()) / 86400000 -
        3 +
        ((week1.getDay() + 6) % 7)) /
        7
    )
  );
}
