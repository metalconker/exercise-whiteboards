import * as Constants from "../../GlobalConstants";
import * as ConstantsSchedule from "./ConstantsSchedule";

var ExerciseScheduleJSON: any = require("../../_database/schedules/ExerciseSchedule.json");
var ScheduleDataJSON: any = require("../../_database/schedules/ScheduleData.json");

export class ExerciseData {
  private data: any;

  constructor(data: any) {
    if (data instanceof ExerciseData) {
      this.data = data.data;
      return;
    }
    this.data = data;
  }
  getName(): string {
    return this.data["Name"];
  }

  getNumSets(): number {
    return parseInt(this.data["Sets"]);
  }

  getNumReps(): number {
    return parseInt(this.data["Reps"]);
  }

  getTime(): number {
    return parseInt(this.data["Time"]);
  }

  getIsAlternating(): boolean {
    if (parseInt(this.data["Alternating"]) == 0) return false;
    return true;
  }

  getIsTimeBased(): boolean {
    if (this.getTime() > 0) return true;
    return false;
  }
}

export class ScheduleData {
  private scheduleName: string;
  private scheduleData;
  private keys: Array<string> = [];
  private exercisesData: { [exercise: string]: any } = {};
  private maxSets: number = 0;

  constructor(scheduleName: string) {
    if (!(scheduleName in ScheduleDataJSON)) {
      throw scheduleName + " is not a valid Schedule Name";
    }
    this.scheduleName = scheduleName;
    this.scheduleData = ScheduleDataJSON[scheduleName];
    this.loadExerciseData();
  }

  loadExerciseData() {
    for (let exercise in this.scheduleData) {
      // Key
      this.keys.push(exercise);

      // Data
      let rawData = this.scheduleData[exercise];
      let exerciseData = new ExerciseData(rawData);
      this.exercisesData[exercise] = exerciseData;

      // Max Sets
      let numSets = exerciseData.getNumSets();
      if (numSets > this.maxSets) {
        this.maxSets = numSets;
      }
    }
  }

  getExerciseData(metaID: string) {
    let exerciseData = this.exercisesData[metaID];
    if (exerciseData) {
      return exerciseData;
    }
    throw "No Exercise Data for key: " + metaID;
  }

  // Returns the maximum number of sets in this schedule
  getMaxSets(): number {
    return this.maxSets;
  }

  getMetadataKeys(): Array<string> {
    if (this.keys && this.keys.length > 0) return this.keys;
    throw "No keys Object";
  }
}

// Returns a string
export function getScheduleNameDWT(day: any, week: any, type: any) {
  if (!(type in ConstantsSchedule.EXERCISE_TYPE)) {
    throw type + " is not a valid Schedule Type";
  }
  return getScheduleNameDW(day, week)[ConstantsSchedule.EXERCISE_TYPE[type]];
}

// Returns a dictionary of key value pairs
export function getScheduleNameDW(day: any, week: string) {
  if (!(week in ConstantsSchedule.WEEKS)) {
    throw week + " is not a valid week Exercise Schedule";
  }
  let schedule = getScheduleNameD(day);
  let weekString: string = ConstantsSchedule.WEEKS[week];
  return schedule[weekString];
}

// Returns a dictionary of schedules relevant to this day
export function getScheduleNameD(day: any) {
  if (!(day in Constants.DAYS)) {
    throw day + " not in Exercise Schedule";
  }
  let dayString: string = Constants.DAYS[day];
  return ExerciseScheduleJSON[dayString];
}

export function scheduleExists(day: any, week: any, type: any) {
  if (getScheduleNameDWT(day, week, type) == "") return false;
  return true;
}
