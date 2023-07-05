import * as RoutineModel from "../model/RoutineModel";
import { checkGetter, checkSetter } from "../Helpers";
import Exercise from "./Exercise";

const name = "Routine";

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
export default class Routine {
  private _exercise: Exercise;
  private _metaID: string;
  private _name: string;
  
  private _alternating: boolean;
  private _reps: number;
  private _sets: number;
  private _time: number;

  constructor(scheduleName: string, metaID: string) {
    this.metaID = metaID;
    this.alternating = RoutineModel.getIsAlternating(scheduleName, metaID);
    this.name = RoutineModel.getName(scheduleName, metaID);
    this.reps = RoutineModel.getNumReps(scheduleName, metaID);
    this.sets = RoutineModel.getNumSets(scheduleName, metaID);
    this.time = RoutineModel.getTime(scheduleName, metaID);
    this.exercise = new Exercise(metaID);
  }

  public get exercise(): Exercise {
    return checkGetter(this._exercise, "Exercise", name);
  }
  private set exercise(value: Exercise) {
    this._exercise = checkSetter(value, "Exercise", name);
  }

  public get metaID(): string {
    return checkGetter(this._metaID, "MetaID", name);
  }
  private set metaID(value: string) {
    this._metaID = checkSetter(value, "MetaID", name);
  }

  public get name(): string {
    return checkGetter(this._name, "Name", name);
  }
  private set name(value: string) {
    this._name = checkSetter(value, "Name", name);
  }

  public get alternating(): boolean {
    return this._alternating;
  }
  private set alternating(value: boolean) {
    this._alternating = value;
  }

  public get reps(): number {
    return this._reps;
  }
  private set reps(value: number) {
    this._reps = value;
  }

  public get sets(): number {
    return this._sets;
  }
  private set sets(value: number) {
    this._sets = value;
  }

  public get time(): number {
    return this._time;
  }
  private set time(value: number) {
    this._time = value;
  }
}
