import * as Schedule from "../model/schedule/Schedule";
import * as ConstantsSchedule from "../model/schedule/ConstantsSchedule";
import * as Exercises from "../controller/exercises/Exercises";
import { Colors, MuscleImages } from "../model/muscles/ConstantsMuscles";
import { MUSCLES_CONSTANTS } from "../view/screens/whiteboard/Styles";
import { checkGetter, checkSetter, validateProps } from "../GlobalConstants";
/** 
This class is used to create a controller for the ExerciseBoardScreen. 
It stores the schedule name, the schedule data, the day and week values, 
the max sets and the metaIDKeys. It also contains a setSchedule method 
which initializes the scheduleData, maxSets and metaIDKeys when given an 
exerciseTypeIndex.
*/
export class ExerciseBoardScreenController {
  private _scheduleName: string;
  public get scheduleName(): string {
    return checkGetter(this._scheduleName, "Schedule name");
  }
  public set scheduleName(value: string) {
    this._scheduleName = checkSetter(value, "Schedule name");
  }
  private _scheduleData: Schedule.ScheduleData;
  public get scheduleData(): Schedule.ScheduleData {
    return checkGetter(this._scheduleData, "Schedule data");
  }
  public set scheduleData(value: Schedule.ScheduleData) {
    this._scheduleData = checkSetter(value, "Schedule data");
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

  constructor(props: { day: string; week: number }) {
    validateProps(props);
    this.day = props.day;
    this.week = props.week;
  }

  setSchedule(exerciseTypeIndex: number) {
    if (exerciseTypeIndex != null) {
      try {
        this.scheduleName = Schedule.getScheduleNameDWT(
          this.day,
          this.week,
          Object.keys(ConstantsSchedule.EXERCISE_TYPE)[exerciseTypeIndex]
        );
      } catch (e) {
        throw new Error(
          "Error while setting schedule name. Invalid exerciseTypeIndex."
        );
      }
    }
    // Initialize ScheduleData using schedule name
    if (this.scheduleName) {
      try {
        this.scheduleData = new Schedule.ScheduleData(this.scheduleName);
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
}

export class ExExercisesGridController {
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
    this.time = this.exerciseData.getTime();
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

export class MuscleViewController {
  mapColors(muscles) {
    const mappedColors = {};
    Object.keys(Colors).forEach((colorKey) => {
      const color = Colors[colorKey];
      const unmappedColors = muscles[color];

      mappedColors[color] = new Set();
      unmappedColors.forEach((unmapped) => {
        const muscleMap = MUSCLES_CONSTANTS[unmapped.toUpperCase()];
        if (muscleMap) {
          muscleMap.forEach((currentKey) => {
            mappedColors[color].add(currentKey);
          });
        }
      });
    });

    return mappedColors;
  }

  loopColor(color, colorArray) {
    const temp: any[] = [];
    colorArray.forEach((muscleContainer) => {
      if (muscleContainer) {
        const current = MuscleImages[muscleContainer];
        const uniqueKey = `${color}-${muscleContainer}`;

        temp.push(
          <Box key={uniqueKey}>
            <img src={current[color]} alt="popup" style={popupStyle} />
          </Box>
        );
      }
    });
    return temp;
  }
}
