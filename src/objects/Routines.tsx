import * as RoutineModel from "../model/RoutineModel";
import { checkGetter, checkSetter } from "../Helpers";
import Routine from "./Routine";
import React from "react";
import { SetsHeaderView } from "../view/components/ScheduleComponents";

const name = "Routines";

/**
 *   SCHEDULE_NAME: {
 *     META_ID: {
 *       NAME,
 *       SETS,
 *       REPS,
 *       TIME,
 *       ALTERNATING
 *     }
 */
export default class Routines {
  private _maxSets: number = 0;
  private _metaIDKeys: {};
  private _routines: { [metaID: string]: Routine } = {};

  constructor(scheduleName: string) {
    this._metaIDKeys = RoutineModel.getMetaIDKeys(scheduleName);
    // Creates dictionary of routines and sets max sets
    for (let metaIDKey of this.metaIDKeys) {
      const routine = new Routine(metaIDKey);
      this.routines[metaIDKey] = routine;
      if (routine.sets > this.maxSets) this.maxSets = routine.sets;
    }
  }

  /**  
   * this.forEach((key, routine) => {
    // do something
  }); 
  */
  public forEach(callback: (key: string, routine: Routine) => any): any[] {
    return Object.keys(this._routines).map(key => callback(key, this._routines[key]));
  }

  public get metaIDKeys(): string[] {
    return checkGetter(this._metaIDKeys, "Meta ID Keys", name);
  }
  private set metaIDKeys(value: string[]) {
    this._metaIDKeys = checkSetter(value, "Meta ID Keys", name);
  }

  public get routines(): { [metaID: string]: Routine } {
    return this._routines;
  }
  private set routines(value: { [metaID: string]: Routine }) {
    this._routines = value;
  }

  public get maxSets(): number {
    return this._maxSets;
  }
  private set maxSets(value: number) {
    this._maxSets = value;
  }
}
