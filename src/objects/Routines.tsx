import * as RoutineModel from "../model/RoutineModel";
import { checkGetter, checkSetter } from "../Helpers";
import Routine from "./Routine";

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
  private _metaIDKeys: Array<string>;
  private _routines: Array<Routine> = [];
  private _numRoutines: number = 0;

  constructor(scheduleName: string) {
    this._metaIDKeys = RoutineModel.getMetaIDKeys(scheduleName);
    // Creates dictionary of routines and sets max sets
    for (let metaIDKey of this._metaIDKeys) {
      this._numRoutines++;
      const routine = new Routine(metaIDKey);
      this._routines.push(routine);
      if (routine.sets > this._maxSets) this._maxSets = routine.sets;
    }
  }

  public iterate(callback: (routine: Routine) => void): void {
    for (let routine of this._routines) {
      callback(routine);
    }
  }

  public map(callback: (routine: Routine) => any): any[] {
    let mappedRoutines = this._routines.map((routine) => callback(routine));
    return mappedRoutines;
  }

  public get metaIDKeys(): string[] {
    return checkGetter(this._metaIDKeys, "Meta ID Keys", name);
  }
  private set metaIDKeys(value: string[]) {
    this._metaIDKeys = checkSetter(value, "Meta ID Keys", name);
  }

  public get routines(): Array<Routine> {
    return this._routines;
  }
  private set routines(value: Array<Routine>) {
    this._routines = value;
  }

  public get maxSets(): number {
    return this._maxSets;
  }
  private set maxSets(value: number) {
    this._maxSets = value;
  }

  public get numRoutines(): number {
    return this._numRoutines;
  }
  private set numRoutines(value: number) {
    this._numRoutines = value;
  }
}
