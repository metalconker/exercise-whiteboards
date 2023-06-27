import * as ScheduleModel from "../model/ScheduleModel";
import * as Constants from "../Constants";
import { checkGetter, checkSetter } from "../Helpers";
// import React from "react";

/** 
This class is used to create a controller for the ExerciseBoardScreen. 
It stores the ScheduleModel name, the ScheduleModel data, the day and week values, 
the max sets and the metaIDKeys. It also contains a setSchedule method 
which initializes the scheduleData, maxSets and metaIDKeys when given an 
exerciseTypeIndex.
*/
export class ScheduleImporter {
  // Variables
  // private readonly scheduleData; // The data of the specified schedule
  private readonly keys: Array<string> = []; // An array of strings representing the ID of all exercises in the schedule
  private readonly exercisesData: { [exercise: string]: any } = {}; // A map of exercise IDs to ExerciseData objects
  scheduleType: number;
  // private maxSets: number = 0; // The max number of sets in the schedule

  constructor(day: string, week: number, scheduleType: number) {
    this.day = day;
    this.week = week;
    this.scheduleType = scheduleType;
    this.scheduleName = ScheduleModel.getScheduleName(day, week, scheduleType);
    this.metaIDKeys = ScheduleModel.getMetaIDKeys();
    // ScheduleModel.loadData();
    // this.setScheduleName(scheduleType);
  }

  private setMetaIDKeys(scheduleName: string) {}

  private setSchedule(scheduleType: number) {
    // Initialize ScheduleData using ScheduleModel name
    if (this.scheduleName) {
      try {
        this.scheduleData = new ScheduleModel.ScheduleData(this.scheduleName);
      } catch (e) {
        throw new Error(
          "Error while initializing schema data. Invalid scheduleName."
        );
      }
    }
    // Get maximum no. of sets
    if (this.scheduleData) {
      try {
        this.maxSets = this.scheduleData.getMaxSets();
      } catch (e) {
        throw new Error("Error while getting max sets. Invalid scheduleData.");
      }
    }
    // Get metadata keys
    if (this.scheduleData) {
      try {
        this.metaIDKeys = this.scheduleData.getMetadataKeys();
      } catch (e) {
        throw new Error(
          "Error while getting metaIDKeys. Invalid scheduleData."
        );
      }
    }
  }

  private _scheduleName: string;
  public get scheduleName(): string {
    return checkGetter(this._scheduleName, "ScheduleModel name");
  }
  public set scheduleName(value: string) {
    this._scheduleName = checkSetter(value, "ScheduleModel name");
  }
  private _scheduleData: ScheduleModel.ScheduleData;
  public get scheduleData(): ScheduleModel.ScheduleData {
    return checkGetter(this._scheduleData, "ScheduleModel data");
  }
  public set scheduleData(value: ScheduleModel.ScheduleData) {
    this._scheduleData = checkSetter(value, "ScheduleModel data");
  }
  private _day: string;
  public get day(): string {
    return checkGetter(this._day, "Day");
  }
  public set day(value: string) {
    this._day = checkSetter(value, "Day");
  }
  private _week: number;
  public get week(): number {
    return checkGetter(this._week, "Week");
  }
  public set week(value: number) {
    this._week = checkSetter(value, "Week");
  }
  private _maxSets: number;
  public get maxSets(): number {
    return checkGetter(this._maxSets, "Max sets");
  }
  public set maxSets(value: number) {
    this._maxSets = checkSetter(value, "Max sets");
  }
  private _metaIDKeys: any[];
  public get metaIDKeys(): any[] {
    return checkGetter(this._metaIDKeys, "MetaiIdKeys");
  }
  public set metaIDKeys(value: any[]) {
    this._metaIDKeys = checkSetter(value, "MetaiIdKeys");
  }
}
