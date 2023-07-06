import { Day, ScheduleType, Week } from "../Enums";
import { checkGetter, checkParameters } from "../Helpers";
const WEEKLY_EXERCISE_SCHEDULE_JSON: any = require("../_database/schedulesDB/ScheduleData.json");
const name = "ScheduleModel";

export function getScheduleName(
  day: Day,
  week: Week,
  scheduleType: ScheduleType
): string {
  checkParameters(Object.entries(arguments), "getScheduleName");
  let scheduleName = getScheduleNameDWT(day, week, scheduleType);
  return checkGetter(scheduleName, "getScheduleName", name);
}

// Returns a string
function getScheduleNameDWT(day: Day, week: Week, type: ScheduleType) {
  checkParameters(Object.entries(arguments), "getScheduleNameDWT");
  let scheduleNames = getScheduleNameDW(day, week);
  let temp = scheduleNames[type];
  return checkGetter(temp, "getScheduleNameDWT", name);
}

// Returns a dictionary of key value pairs
function getScheduleNameDW(day: Day, week: Week) {
  checkParameters(Object.entries(arguments), "getScheduleNameDW");
  let schedule = getScheduleNameD(day);
  let temp = schedule[week];
  return checkGetter(temp, "getScheduleNameDW", name);
}

// Returns a dictionary of schedules relevant to this day
function getScheduleNameD(day: Day) {
  checkParameters(Object.entries(arguments), "getScheduleNameD");
  let temp = WEEKLY_EXERCISE_SCHEDULE_JSON[day];
  return checkGetter(temp, "getScheduleNameD", name);
}

function scheduleExists(day: Day, week: Week, type: ScheduleType) {
  checkParameters(Object.entries(arguments), "scheduleExists");
  if (getScheduleNameDWT(day, week, type) == "") return false;
  return true;
}
