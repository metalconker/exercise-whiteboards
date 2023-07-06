import { checkGetter, checkSetter } from "../Helpers";
import Exercise from "../objects/Exercise";
import { MusclesController } from "./MusclesController";

const name = "ExerciseController";

export default class ExerciseController {
  render() {}

  private _exercise: Exercise;
  private _musclesController: MusclesController;

  constructor(metaID: string) {
    this._exercise = new Exercise(metaID);
    let muscleInformation = this._exercise.muscleInformation;
    this._musclesController = new MusclesController(muscleInformation);

    // this.scheduleData = new ScheduleLoader(day, week, scheduleType);
    // const information = [preparation, execution, comments];
    // const titles = ["Preparation", "Execution", "Comments"];
  }

  public get exercise(): Exercise {
    return checkGetter(this._exercise, "exercise", name);
  }
  public set exercise(value: Exercise) {
    this._exercise = checkSetter(value, "exercise", name);
  }
}
