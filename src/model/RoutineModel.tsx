import { assertNotNull, checkGetter, checkParameters } from "../Helpers";
const ROUTINE_DATA_JSON: any = require("../_database/schedulesDB/RoutineData.json");
const name = "RoutineModel";
var routineData;

/**
 * MUST BE CALLED for Routine Model to work
 * Get Metadata Keys
 * Returns an array of strings representing the IDs of all exercises in the schedule
 * Loads the Model in to working memory
 */
export function getMetaIDKeys(
  scheduleName: string
): Array<string> {
  checkParameters(Object.entries(arguments), "getMetaIDKeys");
  let keys: Array<string> = [];
  routineData = ROUTINE_DATA_JSON[scheduleName];
  for (let metaIDKey in routineData) {
    keys.push(metaIDKey);
  }
  if (keys.length > 0) return keys;
  throw "No Keys Object";
}

export function getName(metaIDKey: string): string {
  checkParameters(Object.entries(arguments), "getName");
  assertNotNull("Routine Data", routineData, "getName");
  return routineData[metaIDKey]["Name"];
}

export function getNumSets(metaIDKey: string): number {
  checkParameters(Object.entries(arguments), "getNumSets");
  assertNotNull("Routine Data", routineData, "getNumSets");
  return routineData[metaIDKey]["Sets"];
}

export function getNumReps(metaIDKey: string): number {
  checkParameters(Object.entries(arguments), "getNumReps");
  assertNotNull("Routine Data", routineData, "getNumReps");
  return routineData[metaIDKey]["Reps"];
}

export function getTime(metaIDKey: string): number {
  checkParameters(Object.entries(arguments), "getTime");
  assertNotNull("Routine Data", routineData, "getTime");
  return routineData[metaIDKey]["Time"];
}

export function getIsAlternating(metaIDKey: string): boolean {
  checkParameters(Object.entries(arguments), "getIsAlternating");
  assertNotNull("Routine Data", routineData, "getIsAlternating");
  if (routineData[metaIDKey]["Alternating"] == 0) return false;
  return true;
}

export function getIsTimeBased(metaIDKey: string): boolean {
  checkParameters(Object.entries(arguments), "getIsTimeBased");
  assertNotNull("Routine Data", routineData, "getIsTimeBased");
  if (getTime(metaIDKey) > 0) return true;
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
  checkParameters(Object.entries(arguments), "scheduleNameExists");
  return scheduleName in ROUTINE_DATA_JSON;
  //ROUTINE_DATA_JSON
  //SCHEDULE_DATA_JSON
}
