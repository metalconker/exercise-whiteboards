import * as Constants from "../GlobalConstants";

var ExerciseScheduleJSON: any = require("../_database/schedulesDB/ExerciseSchedule.json");
var ScheduleDataJSON: any = require("../_database/schedulesDB/ScheduleData.json");

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
  // Defines a class for storing and manipulating schedule data

  // Variables
  private readonly scheduleName: string; // The name of the schedule to be used
  private readonly scheduleData; // The data of the specified schedule
  private readonly keys: Array<string> = []; // An array of strings representing the ID of all exercises in the schedule
  private readonly exercisesData: { [exercise: string]: any } = {}; // A map of exercise IDs to ExerciseData objects
  private maxSets: number = 0; // The max number of sets in the schedule

  // Constructor
  // Constructor with a parameter scheduleName, a string representing the name of the schedule to be used
  // Throws an error if the specified scheduleName is not valid
  constructor(scheduleName: string) {
    if (!this.scheduleNameExists(scheduleName)) {
      throw `${scheduleName} is not a valid Schedule Name`;
    }
    this.scheduleName = scheduleName;
    this.scheduleData = ScheduleDataJSON[scheduleName];
    this.loadExerciseData();
  }

  // Load Exercise Data
  // Loads the data for each exercise in the schedule and stores the results in the exercisesData map
  private loadExerciseData() {
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

  // Check Name Existence
  // Checks if the given scheduleName exists
  private scheduleNameExists(scheduleName: string): Boolean {
    return scheduleName in ScheduleDataJSON;
  }

  // Get Exercise Data
  // Returns the ExerciseData for the specified exercise ID
  // Throws an error if the exercise ID is invalid
  getExerciseData(metaID: string): ExerciseData {
    let exerciseData = this.exercisesData[metaID];
    if (exerciseData) {
      return exerciseData;
    }
    throw `No Exercise Data for key: ${metaID}`;
  }

  // Get Max Sets
  // Returns the maximum number of sets in this schedule
  getMaxSets(): number {
    return this.maxSets;
  }

  // Get Metadata Keys
  // Returns an array of strings representing the IDs of all exercises in the schedule
  getMetadataKeys(): Array<string> {
    if (this.keys && this.keys.length > 0) return this.keys;
    throw "No keys Object";
  }
}

// Returns a string
export function getScheduleNameDWT(day: any, week: any, type: any) {
  if (!(type in Constants.EXERCISE_TYPE)) {
    throw type + " is not a valid Schedule Type";
  }
  return getScheduleNameDW(day, week)[Constants.EXERCISE_TYPE[type]];
}

// Returns a dictionary of key value pairs
export function getScheduleNameDW(day: any, week: string) {
  if (!(week in Constants.WEEKS)) {
    throw week + " is not a valid week Exercise Schedule";
  }
  let schedule = getScheduleNameD(day);
  let weekString: string = Constants.WEEKS[week];
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


