import { Day, ScheduleType, Week } from "./Enums";
import { getWeek } from "./Helpers";
import { WhiteboardController } from "./controller/WhiteboardController";

const date = new Date();
const test = true;
// const test : boolean= false;

export default function App() {
  const dayIndex = test ? 5 : date.getDay() % 7;
  const weekIndex = getWeek(date) % Object.keys(Week).length;

  const week: Week = Week[Object.keys(Week)[weekIndex]];
  const day: Day = Day[Object.keys(Day)[dayIndex]];

  const warmups = new WhiteboardController(day, week, ScheduleType.WARMUPS);
  return warmups.init();
}
