import * as ScheduleModel from "../model/ScheduleModel";
import { Day, ScheduleType, Week } from "../Enums";
import { checkGetter, checkSetter } from "../Helpers";
import Routines from "./Routines";

const name = "Schedule";

/** 
This class is used to create a controller for the ExerciseBoardScreen. 
It stores the ScheduleModel name, the ScheduleModel data, the day and week values, 
the max sets and the metaIDKeys. It also contains a setSchedule method 
which initializes the scheduleData, maxSets and metaIDKeys when given an 
exerciseTypeIndex.
*/
export default class Schedule {
  private _day: Day;
  private _routines: Routines;
  private _scheduleName: string;
  private _scheduleType: ScheduleType;
  private _week: Week;

  constructor(day: Day, week: Week, scheduleType: ScheduleType) {
    this.day = day;
    this.week = week;
    this.scheduleType = scheduleType;
    this.scheduleName = ScheduleModel.getScheduleName(day, week, scheduleType);
    this.routines = new Routines(this.scheduleName);
  }

  public get day(): Day {
    return checkGetter(this._day, "Day", name);
  }
  private set day(value: Day) {
    this._day = checkSetter(value, "Day", name);
  }
  public get routines(): Routines {
    return checkGetter(this._routines, "Routines", name);
  }
  private set routines(value: Routines) {
    this._routines = checkSetter(value, "Routines", name);
  }
  public get scheduleName(): string {
    return checkGetter(this._scheduleName, "Schedule Name", name);
  }
  private set scheduleName(value: string) {
    this._scheduleName = checkSetter(value, "Schedule Name", name);
  }
  public get scheduleType(): ScheduleType {
    return checkGetter(this._scheduleType, "Schedule Type", name);
  }
  private set scheduleType(value: ScheduleType) {
    this._scheduleType = checkSetter(value, "Schedule Type", name);
  }
  public get week(): Week {
    return checkGetter(this._week, "Week", name);
  }
  private set week(value: Week) {
    this._week = checkSetter(value, "Week", name);
  }
}
