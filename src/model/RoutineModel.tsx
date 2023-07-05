const ROUTINE_DATA_JSON: any = require("../_database/schedulesDB/RoutineData.json");

// Get Metadata Keys
// Returns an array of strings representing the IDs of all exercises in the schedule
export function getMetaIDKeys(scheduleName: string): Array<string> {
  let keys: Array<string> = [];
  const scheduleData = ROUTINE_DATA_JSON[scheduleName];
  for (let metaIDKey in scheduleData) {
    keys.push(metaIDKey);
  };
  if (keys.length > 0) return keys;
  throw "No Keys Object";
}

export function getName(scheduleName: string, metaIDKey: string): string {
  return ROUTINE_DATA_JSON[scheduleName][metaIDKey]["Name"];
}

export function getNumSets(scheduleName: string, metaIDKey: string): number {
  return ROUTINE_DATA_JSON[scheduleName][metaIDKey]["Sets"];
}

export function getNumReps(scheduleName: string, metaIDKey: string): number {
  return ROUTINE_DATA_JSON[scheduleName][metaIDKey]["Reps"];
}

export function getTime(scheduleName: string, metaIDKey: string): number {
  return ROUTINE_DATA_JSON[scheduleName][metaIDKey]["Time"];
}

export function getIsAlternating(
  scheduleName: string,
  metaIDKey: string
): boolean {
  if (ROUTINE_DATA_JSON[scheduleName][metaIDKey]["Alternating"] == 0)
    return false;
  return true;
}

export function getIsTimeBased(
  scheduleName: string,
  metaIDKey: string
): boolean {
  if (getTime(scheduleName, metaIDKey) > 0) return true;
  return false;
}

// {
//   "Upper Body Warmups": {
//     "NeckNeckRetraction": {
//       "Name": "Neck Retraction Stretch",
//       "Sets": 2,
//       "Reps": 10,
//       "Time": 0,
//       "Alternating": 0
//     },

// var loadedRoutines: any = null;
// var loadedMetaIdKeys: Array<string> = [];

// export function loadRoutines(scheduleName)
// {
//   if (!scheduleNameExists(scheduleName)) {
//     throw `${scheduleName} is not a valid Schedule Name`;
//   }
//   loadedRoutines = ROUTINE_DATA_JSON[scheduleName];
// }

// Check Name Existence
// Checks if the given scheduleName exists
function scheduleNameExists(scheduleName: string): Boolean {
  return scheduleName in ROUTINE_DATA_JSON;
  //ROUTINE_DATA_JSON
  //SCHEDULE_DATA_JSON
}
