import * as RoutineModel from "../model/RoutineModel";
import { checkGetter, checkSetter } from "../Helpers";
import Exercise from "./Exercise";

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
  private _alternating: boolean;
  private _exercise: Exercise;
  private _metaID: string;
  private _name: string;
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

  public get alternating(): boolean {
    return checkGetter(this._alternating, "Alternating");
  }
  private set alternating(value: boolean) {
    this._alternating = checkSetter(value, "Alternating");
  }

  public get exercise(): Exercise {
    return checkGetter(this._exercise, "Exercise");
  }
  private set exercise(value: Exercise) {
    this._exercise = checkSetter(value, "Exercise");
  }

  public get metaID(): string {
    return checkGetter(this._metaID, "MetaID");
  }
  private set metaID(value: string) {
    this._metaID = checkSetter(value, "MetaID");
  }

  public get name(): string {
    return checkGetter(this._name, "Name");
  }
  private set name(value: string) {
    this._name = checkSetter(value, "Name");
  }

  public get reps(): number {
    return checkGetter(this._reps, "Reps");
  }
  private set reps(value: number) {
    this._reps = checkSetter(value, "Reps");
  }

  public get sets(): number {
    return checkGetter(this._sets, "Number");
  }
  private set sets(value: number) {
    this._sets = checkSetter(value, "Number");
  }

  public get time(): number {
    return checkGetter(this._time, "Time");
  }
  private set time(value: number) {
    this._time = checkSetter(value, "Time");
  }
}
