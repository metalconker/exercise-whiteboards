import { DAYS, WEEKS } from "./Constants";
import { getWeek } from "./Helpers";
import { MasterBoardController } from "./controller/MasterBoardController";

var test = true;
// var test = false;

export default function App() {
  const date = new Date();
  var today = date.getDay() % 7;
  if (test) today = 5;
  const week = (getWeek(date) % Object.keys(WEEKS).length) + 1;
  const day = Object.keys(DAYS)[today];

  // TODO use constants instead of integers
  const warmupScreenController = new MasterBoardController(
    day,
    week,
    0
  );
  // const workoutScreenController = new ScheduleBoardScreenController(
  //   day,
  //   week,
  //   1
  // );

  return warmupScreenController.render();

  // return <WorkoutBoardScreen day={day} week={weekNumber} />;
  // return <WarmupBoardScreen day={day} week={weekNumber} />;
}
