import * as Schedule from "../model/ScheduleModel";
import * as ConstantsSchedule from "../Constants";
import * as Exercises from "../model/ExercisesModel";
import { MUSCLE_IMAGES } from "../model/MusclesModel";
import { MUSCLES_CONSTANTS } from "../view/styles/Stylesheet";
import { checkGetter, checkSetter, validateProps } from "../Helpers";
import { MUSCLE_COLORS } from "../Constants";

export class ExercisesGridController {
  private _data: Schedule.ScheduleData;
  public get data(): Schedule.ScheduleData {
    return checkGetter(this._data, "Data");
  }
  public set data(value: Schedule.ScheduleData) {
    this._data = checkSetter(value, "Data");
  }
  private _index: number;
  public get index(): number {
    return checkGetter(this._index, "Index");
  }
  public set index(value: number) {
    this._index = checkSetter(value, "Index");
  }
  private _maxSets: number;
  public get maxSets(): number {
    return checkGetter(this._maxSets, "Max sets");
  }
  public set maxSets(value: number) {
    this._maxSets = checkSetter(value, "Max sets");
  }
  private _maxExercises: number;
  public get maxExercises(): number {
    return checkGetter(this._maxExercises, "Max exercises");
  }
  public set maxExercises(value: number) {
    this._maxExercises = checkSetter(value, "Max exercises");
  }
  private _exerciseData: Schedule.ExerciseData;
  public get exerciseData(): Schedule.ExerciseData {
    return checkGetter(this._exerciseData, "Exercise data");
  }
  public set exerciseData(value: Schedule.ExerciseData) {
    this._exerciseData = checkSetter(value, "Exercise data");
  }
  private _time: number;
  public get time(): number {
    return checkGetter(this._time, "Time");
  }
  public set time(value: number) {
    this._time = checkSetter(value, "Time");
  }
  private _numReps: number;
  public get numReps(): number {
    return checkGetter(this._numReps, "Number of reps");
  }
  public set numReps(value: number) {
    this._numReps = checkSetter(value, "Number of reps");
  }
  private _numSets: number;
  public get numSets(): number {
    return checkGetter(this._numSets, "Number of sets");
  }
  public set numSets(value: number) {
    this._numSets = checkSetter(value, "Number of sets");
  }
  private _media: any;
  public get media(): any {
    return checkGetter(this._media, "Media");
  }
  public set media(value: any) {
    this._media = checkSetter(value, "Media");
  }
  private _mediaType: any;
  public get mediaType(): any {
    return checkGetter(this._mediaType, "Media type");
  }
  public set mediaType(value: any) {
    this._mediaType = checkSetter(value, "Media type");
  }
  private _divHeight: number;
  public get divHeight(): number {
    return checkGetter(this._divHeight, "Div height");
  }
  public set divHeight(value: number) {
    this._divHeight = checkSetter(value, "Div height");
  }

  constructor(props: {
    index: number;
    data: Schedule.ScheduleData;
    maxSets: number;
    maxExercises: number;
    key: any;
  }) {
    validateProps(props);
    this.data = props.data;
    this.index = props.index;
    this.maxSets = props.maxSets;
    this.maxExercises = props.maxExercises;
    this.exerciseData = props.data.getExerciseData(
      props.data.getMetadataKeys()[props.index]
    );
    this.numSets = this.exerciseData.getNumSets();
    this.numReps = this.exerciseData.getNumReps();
    // this.time = this.exerciseData.getTime();
    this.media =
      props.data.getMetadataKeys().length > props.index && props.index >= 0
        ? Exercises.GetMedia(props.data.getMetadataKeys()[props.index])
        : "";
    this.mediaType = Exercises.GetMediaType(
      props.data.getMetadataKeys()[props.index]
    );
    this.divHeight = 90 / props.maxExercises;
  }
}
