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
import * as Schedule from "./controller/schedule/Schedule";
import * as Exercises from "./controller/exercises/Exercises";

// import "react-native-gesture-handler";
// import * as Constants from "./constants/ConstantsCode";
// import * as ConstantsSchedule from "./controller/schedule/ConstantsSchedule";
// import AutoNavigationScreen from "./views/screens/navigationscreens/AutoNavigationScreen";
//import MyStack from "./views/screens/navigationscreens/AutoNavigationScreen";

// import WhiteboardScreen from "./views/screens/whiteboard/WhiteboardScreen";
// import LoadingScreen from "./LoadingScreen";
import ExerciseBoardScreen from "./views/screens/whiteboard/Exercises";

var test = true;

export default function App() {
  var date = new Date();

  var today = date.getDay() % 7;
  if (test) today = 1;
  let num_weeks = Object.keys(ConstantsSchedule.WEEKS).length;
  var weekNumber = GeneralHelpers.getWeek(date) % num_weeks;

  var day = Object.keys(Constants.DAYS)[today];
  var week = ++weekNumber;
  // console.log(day);
  // console.log(week);
  // loopDays();

  return <ExerciseBoardScreen day={day} week={week}></ExerciseBoardScreen>;
}

function loopDays() {
  for (var i = 0; i < 7; i++) {
    var day;
    switch (i) {
      case 0:
        day = "Monday";
        break;
      case 1:
        day = "Tuesday";
        break;
      case 2:
        day = "Wednesday";
        break;
      case 3:
        day = "Thursday";
        break;
      case 4:
        day = "Friday";
        break;
      case 5:
        day = "Saturday";
        break;
      case 6:
        day = "Sunday";
        break;
    }
    day = day.toUpperCase();

    for (var j = 1; j < 3; j++) {
      for (var k = 0; k < 2; k++) {
        var scheduleName;
        try {
          scheduleName = Schedule.getScheduleNameDWT(
            day,
            j,
            Object.keys(ConstantsSchedule.EXERCISE_TYPE)[k]
          );
        } catch (err) {
          continue;
        }
        console.log(scheduleName);
        var scheduleData = new Schedule.ScheduleData(scheduleName);
        var metaIDKeys = scheduleData.getMetadataKeys();
        var len = metaIDKeys.length;
        var li = 0;
        // for (len = metaIDKeys.length; li < len; li++) {
        //   var exerciseData = scheduleData.getExerciseData(
        //     scheduleData.getMetadataKeys()[li]);

        //   // console.log(scheduleData.getMetadataKeys()[li]);

        //   //  var media = Exercises.GetMedia(scheduleData.getMetadataKeys()[li]);
        //   // console.log(media);
        //   // var fs = require('fs');

        //   // fs.appendFile(
        //   //   "./hello.txt",
        //   //   scheduleData.getMetadataKeys()[li] + "\n"
        //   //   // function (err) {
        //   //   //   if (err) {
        //   //   //     return console.log(err);
        //   //   //   }
        //   //   // }
        //   // );
        // }
      }
    }
  }
}

// If you want to start measuring performance in your app, pass a function
// // to log results (for example: reportWebVitals(console.log))
// // or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
