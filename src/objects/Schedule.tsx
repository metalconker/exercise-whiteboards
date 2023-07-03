import * as ScheduleModel from "../model/ScheduleModel";
import * as RoutineModel from "../model/RoutineModel";
import { Days, ScheduleTypes, Weeks } from "../Constants";
import { checkGetter, checkSetter } from "../Helpers";
import Routine from "./Routine";

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
  private _maxSets: number = 0;
  private _metaIDKeys: string[];
  private _routines: { [metaID: string]: Routine } = {};
  private _scheduleName: string;
  private _scheduleType: ScheduleTypes;
  private _week: Weeks;

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
    return checkGetter(this._day, "Day");
  }
  private set day(value: Days) {
    this._day = checkSetter(value, "Day");
  }
  public get maxSets(): number {
    return checkGetter(this._maxSets, "Max Sets");
  }
  private set maxSets(value: number) {
    this._maxSets = checkSetter(value, "Max Sets");
  }
  public get metaIDKeys(): string[] {
    return checkGetter(this._metaIDKeys, "Meta ID Keys");
  }
  private set metaIDKeys(value: string[]) {
    this._metaIDKeys = checkSetter(value, "Meta ID Keys");
  }
  public get routines(): { [metaID: string]: Routine } {
    return checkGetter(this._routines, "Routines");
  }
  private set routines(value: { [metaID: string]: Routine }) {
    this._routines = checkSetter(value, "Routines");
  }
  public get scheduleName(): string {
    return checkGetter(this._scheduleName, "Schedule Name");
  }
  private set scheduleName(value: string) {
    this._scheduleName = checkSetter(value, "Schedule Name");
  }
  public get scheduleType(): ScheduleTypes {
    return checkGetter(this._scheduleType, "Schedule Type");
  }
  private set scheduleType(value: ScheduleTypes) {
    this._scheduleType = checkSetter(value, "Schedule Type");
  }
  public get week(): Weeks {
    return checkGetter(this._week, "Week");
  }
  private set week(value: Weeks) {
    this._week = checkSetter(value, "Week");
  }
}
