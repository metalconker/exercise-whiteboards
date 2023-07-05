import * as ScheduleModel from "../model/ScheduleModel";
import * as RoutineModel from "../model/RoutineModel";
import { Days, ScheduleTypes, Weeks } from "../Enums";
import { checkGetter, checkSetter } from "../Helpers";
import Routine from "./Routine";

const name = "Schedule";

/** 
This class is used to create a controller for the ExerciseBoardScreen. 
It stores the ScheduleModel name, the ScheduleModel data, the day and week values, 
the max sets and the metaIDKeys. It also contains a setSchedule method 
which initializes the scheduleData, maxSets and metaIDKeys when given an 
exerciseTypeIndex.
*/
export default class Schedule {
  // Variables
  private _day: Days;
  private _metaIDKeys: string[];
  private _routines: { [metaID: string]: Routine } = {};
  private _scheduleName: string;
  private _scheduleType: ScheduleTypes;
  private _week: Weeks;
  
  private _maxSets: number = 0;

  constructor(day: Days, week: Weeks, scheduleType: ScheduleTypes) {
    this.day = day;
    this.week = week;
    this.scheduleType = scheduleType;
    this.scheduleName = ScheduleModel.getScheduleName(day, week, scheduleType);
    this.metaIDKeys = RoutineModel.getMetaIDKeys(this.scheduleName);

    // Creates dictionary of routines and sets max sets
    for (let metaIDKey of this.metaIDKeys) {
      const routine = new Routine(this.scheduleName, metaIDKey);
      this.routines[metaIDKey] = routine;
      if (routine.sets > this.maxSets) this.maxSets = routine.sets;
    }
  }

  public get day(): Days {
    return checkGetter(this._day, "Day", name);
  }
  private set day(value: Days) {
    this._day = checkSetter(value, "Day", name);
  }

  public get metaIDKeys(): string[] {
    return checkGetter(this._metaIDKeys, "Meta ID Keys", name);
  }
  private set metaIDKeys(value: string[]) {
    this._metaIDKeys = checkSetter(value, "Meta ID Keys", name);
  }
  public get routines(): { [metaID: string]: Routine } {
    return checkGetter(this._routines, "Routines", name);
  }
  private set routines(value: { [metaID: string]: Routine }) {
    this._routines = checkSetter(value, "Routines", name);
  }
  public get scheduleName(): string {
    return checkGetter(this._scheduleName, "Schedule Name", name);
  }
  private set scheduleName(value: string) {
    this._scheduleName = checkSetter(value, "Schedule Name", name);
  }
  public get scheduleType(): ScheduleTypes {
    return checkGetter(this._scheduleType, "Schedule Type", name);
  }
  private set scheduleType(value: ScheduleTypes) {
    this._scheduleType = checkSetter(value, "Schedule Type", name);
  }
  public get week(): Weeks {
    return checkGetter(this._week, "Week", name);
  }
  private set week(value: Weeks) {
    this._week = checkSetter(value, "Week", name);
  }

  public get maxSets(): number {
    return this._maxSets;
  }
  private set maxSets(value: number) {
    this._maxSets = value;
  }

}
