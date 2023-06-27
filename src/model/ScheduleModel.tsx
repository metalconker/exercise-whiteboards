import * as Constants from "../Constants";
const WEEKLY_EXERCISE_SCHEDULE_JSON: any = require("../_database/schedulesDB/WeeklyExerciseSchedule.json");

export function getScheduleName(
  day: string,
  week: number,
  scheduleType: number
): string {
  var scheduleName: string = "";

  if (scheduleType != null) {
    try {
      scheduleName = getScheduleNameDWT(
        day,
        week,
        Object.keys(Constants.EXERCISE_TYPE)[scheduleType]
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
function getScheduleNameDWT(day: any, week: any, type: any) {
  if (!(type in Constants.EXERCISE_TYPE)) {
    throw type + " is not a valid Schedule Type";
  }
  return getScheduleNameDW(day, week)[Constants.EXERCISE_TYPE[type]];
}

// Returns a dictionary of key value pairs
function getScheduleNameDW(day: any, week: string) {
  if (!(week in Constants.WEEKS)) {
    throw week + " is not a valid week Exercise Schedule";
  }
  let schedule = getScheduleNameD(day);
  let weekString: string = Constants.WEEKS[week];
  return schedule[weekString];
}

// Returns a dictionary of schedules relevant to this day
function getScheduleNameD(day: any) {
  if (!(day in Constants.DAYS)) {
    throw day + " not in Exercise Schedule";
  }
  let dayString: string = Constants.DAYS[day];
  return WEEKLY_EXERCISE_SCHEDULE_JSON[dayString];
}

function scheduleExists(day: any, week: any, type: any) {
  if (getScheduleNameDWT(day, week, type) == "") return false;
  return true;
}
