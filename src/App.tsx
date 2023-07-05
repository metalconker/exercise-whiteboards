import { Days, ScheduleTypes, Weeks } from "./Enums";
import { getWeek } from "./Helpers";
import { MasterBoardController } from "./controller/MasterBoardController";

const date = new Date();
const test = true;
// const test : boolean= false;

export default function App() {
  const dayIndex = test ? 5 : date.getDay() % 7;
  const weekIndex = getWeek(date) % Object.keys(Weeks).length;

  const week: Weeks = Weeks[Object.keys(Weeks)[weekIndex]];
  const day: Days = Days[Object.keys(Days)[dayIndex]];

  const warmups = new MasterBoardController(day, week, ScheduleTypes.WARMUPS);
  return warmups.render();
}
