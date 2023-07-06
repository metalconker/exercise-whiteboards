import { checkGetter, checkSetter } from "../Helpers";
import Schedule from "../objects/Schedule";
import { Day, Week, ScheduleType } from "../Enums";
import RoutinesController from "./RoutinesController";
import React from "react";
import { WhiteboardTitle } from "../view/WhiteboardScreen";

const name = "ScheduleController";

export class ScheduleController {
  render()
  {
    <div>
    <WhiteboardTitle>{this._scheduleName}</WhiteboardTitle>
    {/* <WhiteboardBody>{this._scheduleController.render()}</WhiteboardBody> */}
    </div>
  }

  private _schedule: Schedule;
  private _scheduleName: string;
  private _routinesController: RoutinesController;

  constructor(day: Day, week: Week, scheduleType: ScheduleType) {
    this._schedule = new Schedule(day, week, scheduleType);
    this._scheduleName= this._schedule.scheduleName;
    console.log(this._scheduleName);
    this._routinesController = new RoutinesController(this._scheduleName);
    console.log(this._scheduleName);
  }

  public get routinesController(): RoutinesController {
    return checkGetter(this._routinesController, "routinesController", name);
  }
  public set routinesController(value: RoutinesController) {
    this._routinesController = checkSetter(value, "routinesController", name);
  }

  public get schedule(): Schedule {
    return checkGetter(this._schedule, "schedule", name);
  }
  public set schedule(value: Schedule) {
    this._schedule = checkSetter(value, "schedule", name);
  }

  public get scheduleName(): string {
    return checkGetter(this._scheduleName, "_scheduleName", name);
  }
  public set scheduleName(value: string) {
    this._scheduleName = checkSetter(value, "_scheduleName", name);
  }
}


  


// let name = this._schedule.scheduleName;
// return <ScheduleBoardScreen name={name}></ScheduleBoardScreen>;
// <ScheduleView></ScheduleView>
// private _mediaType: any;
// public get mediaType(): any {
//   return checkGetter(this._mediaType, "Media type", name);
// }
// public set mediaType(value: any) {
//   this._mediaType = checkSetter(value, "Media type", name);
// }
// private _index: number;
// public get index(): number {
//   return this._index;
// }
// public set index(value: number) {
//   this._index = value;
// }

// private _maxExercises: number;
// public get maxExercises(): number {
//   return this._maxExercises;
// }
// public set maxExercises(value: number) {
//   this._maxExercises = value;
// }
// private _time: number;
// public get time(): number {
//   return this._time;
// }
// public set time(value: number) {
//   this._time = value;
// }
// private _numReps: number;
// public get numReps(): number {
//   return this._numReps;
// }
// public set numReps(value: number) {
//   this._numReps = value;
// }
// private _numSets: number;
// public get numSets(): number {
//   return this._numSets;
// }
// public set numSets(value: number) {
//   this._numSets = value;
// }
// private _divHeight: number;
// public get divHeight(): number {
//   return this._divHeight;
// }
// public set divHeight(value: number) {
//   this._divHeight = value;
// }

// constructor(props: {
//   index: number;
//   data: ScheduleModel.ScheduleData;
//   maxSets: number;
//   maxExercises: number;
//   key: any;
// }) {
//   validateProps(props);
//   this.data = props.data;
//   this.index = props.index;
//   this.maxSets = props.maxSets;
//   this.maxExercises = props.maxExercises;
//   this.exerciseData = props.data.getExerciseData(
//     props.data.getMetadataKeys()[props.index]
//   );
//   this.numSets = this.exerciseData.getNumSets();
//   this.numReps = this.exerciseData.getNumReps();
//   // this.time = this.exerciseData.getTime();
//   this.media =
//     props.data.getMetadataKeys().length > props.index && props.index >= 0
//       ? ExerciseModel.GetMedia(props.data.getMetadataKeys()[props.index])
//       : "";
//   this.mediaType = ExerciseModel.GetMediaType(
//     props.data.getMetadataKeys()[props.index]
//   );
//   this.divHeight = 90 / props.maxExercises;
// }

// private _data: ScheduleModel.ScheduleData;
// public get data(): ScheduleModel.ScheduleData {
//   return checkGetter(this._data, "Data",name);
// }
// public set data(value: ScheduleModel.ScheduleData) {
//   this._data = checkSetter(value, "Data",name);
// }

// private _exerciseData: ScheduleModel.ExerciseData;
// public get exerciseData(): ScheduleModel.ExerciseData {
//   return checkGetter(this._exerciseData, "Exercise data", name);
// }
// public set exerciseData(value: ScheduleModel.ExerciseData) {
//   this._exerciseData = checkSetter(value, "Exercise data", name);
// }
