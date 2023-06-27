import * as Constants from "../Constants";

const EXERCISE_SCHEDULE_JSON: any = require("../_database/schedulesDB/ExerciseSchedule.json");
const SCHEDULE_DATA_JSON: any = require("../_database/schedulesDB/ScheduleData.json");
var loadedSchedule: any = null;
var loadedMetaIdKeys: Array<string> = [];

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
  if (!scheduleNameExists(scheduleName)) {
    throw `${scheduleName} is not a valid Schedule Name`;
  }
  loadedSchedule = SCHEDULE_DATA_JSON[scheduleName];
  return scheduleName;
}

// Get Metadata Keys
// Returns an array of strings representing the IDs of all exercises in the schedule
export function getMetaIDKeys(): Array<string> {
  for (let exercise in loadedSchedule) {
    // Key
    loadedMetaIdKeys.push(exercise);
  }
  if (loadedMetaIdKeys && loadedMetaIdKeys.length > 0) return loadedMetaIdKeys;
  throw "No keys Object";
}

// Check Name Existence
// Checks if the given scheduleName exists
function scheduleNameExists(scheduleName: string): Boolean {
  return scheduleName in SCHEDULE_DATA_JSON;
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
  return EXERCISE_SCHEDULE_JSON[dayString];
}

function scheduleExists(day: any, week: any, type: any) {
  if (getScheduleNameDWT(day, week, type) == "") return false;
  return true;
}
