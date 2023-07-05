import { Days, ScheduleTypes, Weeks } from "../Enums";
import { checkParameters } from "../Helpers";
const WEEKLY_EXERCISE_SCHEDULE_JSON: any = require("../_database/schedulesDB/WeeklyExerciseSchedule.json");

export function getScheduleName(
  day: Days,
  week: Weeks,
  scheduleType: ScheduleTypes
): string {
  checkParameters(Object.entries(arguments), "getScheduleName");

  let scheduleName = getScheduleNameDWT(day, week, scheduleType);
  return scheduleName;
}

// Returns a string
function getScheduleNameDWT(day: Days, week: Weeks, type: ScheduleTypes) {
  checkParameters(Object.entries(arguments), "getScheduleNameDWT");

  let scheduleNames = getScheduleNameDW(day, week);
  return scheduleNames[type];
}

// Returns a dictionary of key value pairs
function getScheduleNameDW(day: Days, week: Weeks) {
  checkParameters(Object.entries(arguments), "getScheduleNameDW");

  let schedule = getScheduleNameD(day);
  return schedule[week];
}

// Returns a dictionary of schedules relevant to this day
function getScheduleNameD(day: Days) {
  checkParameters(Object.entries(arguments), "getScheduleNameD");

  return WEEKLY_EXERCISE_SCHEDULE_JSON[day];
}

function scheduleExists(day: Days, week: Weeks, type: ScheduleTypes) {
  checkParameters(Object.entries(arguments), "scheduleExists");

  if (getScheduleNameDWT(day, week, type) == "") return false;
  return true;
}
