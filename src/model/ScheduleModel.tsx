import { Days, ScheduleTypes, Weeks } from "../Constants";
const WEEKLY_EXERCISE_SCHEDULE_JSON: any = require("../_database/schedulesDB/WeeklyExerciseSchedule.json");

export function getScheduleName(
  day: Days,
  week: Weeks,
  scheduleType: ScheduleTypes
): string {
  var scheduleName: string = "";

  if (scheduleType != null) {
    try {
      scheduleName = getScheduleNameDWT(
        day,
        week,
        Object.keys(ScheduleTypes)[scheduleType]
      );
    } catch (e) {
      throw new Error(
        "Error while setting ScheduleModel name. Invalid scheduleType."
      );
    }
  }
  return scheduleName;
}

// Returns a string
function getScheduleNameDWT(day: Days, week: Weeks, type: ScheduleTypes) {
  if (!(type in ScheduleTypes)) {
    throw type + " is not a valid Schedule Type";
  }
  return getScheduleNameDW(day, week)[ScheduleTypes[type]];
}

// Returns a dictionary of key value pairs
function getScheduleNameDW(day: Days, week: Weeks) {
  if (!(week in Weeks)) {
    throw week + " is not a valid week Exercise Schedule";
  }
  let schedule = getScheduleNameD(day);
  let weekString: string = Weeks[week];
  return schedule[weekString];
}

// Returns a dictionary of schedules relevant to this day
function getScheduleNameD(day: Days) {
  if (!(day in Days)) {
    throw day + " not in Exercise Schedule";
  }
  let dayString: string = Days[day];
  return WEEKLY_EXERCISE_SCHEDULE_JSON[dayString];
}

function scheduleExists(day: Days, week: Weeks, type: ScheduleTypes) {
  if (getScheduleNameDWT(day, week, type) == "") return false;
  return true;
}
