import { Days, ScheduleTypes, Weeks } from "../Enums";
import { checkGetter, checkParameters } from "../Helpers";
const WEEKLY_EXERCISE_SCHEDULE_JSON: any = require("../_database/schedulesDB/WeeklyExerciseSchedule.json");
const name = "ScheduleModel";

export function getScheduleName(
  day: Days,
  week: Weeks,
  scheduleType: ScheduleTypes
): string {
  checkParameters(Object.entries(arguments), "getScheduleName");
  let scheduleName = getScheduleNameDWT(day, week, scheduleType);
  return checkGetter(scheduleName, "getScheduleName", name);
}

// Returns a string
function getScheduleNameDWT(day: Days, week: Weeks, type: ScheduleTypes) {
  checkParameters(Object.entries(arguments), "getScheduleNameDWT");
  let scheduleNames = getScheduleNameDW(day, week);
  let temp = scheduleNames[type];
  return checkGetter(temp, "getScheduleNameDWT", name);
}

// Returns a dictionary of key value pairs
function getScheduleNameDW(day: Days, week: Weeks) {
  checkParameters(Object.entries(arguments), "getScheduleNameDW");
  let schedule = getScheduleNameD(day);
  let temp = schedule[week];
  return checkGetter(temp, "getScheduleNameDW", name);
}

// Returns a dictionary of schedules relevant to this day
function getScheduleNameD(day: Days) {
  checkParameters(Object.entries(arguments), "getScheduleNameD");
  let temp = WEEKLY_EXERCISE_SCHEDULE_JSON[day];
  return checkGetter(temp, "getScheduleNameD", name);
}

function scheduleExists(day: Days, week: Weeks, type: ScheduleTypes) {
  checkParameters(Object.entries(arguments), "scheduleExists");

  if (getScheduleNameDWT(day, week, type) == "") return false;
  return true;
}
