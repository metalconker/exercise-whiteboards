import Routines from "../objects/Routines";
import { MusclesController } from "./MusclesController";
import { checkGetter, checkSetter } from "../Helpers";

const name = "RoutinesController";

export default class RoutinesController {
  render() {}

  private _routines: Routines;
  private _musclesController: MusclesController;

  constructor(scheduleName: string) {
    this._routines = new Routines(scheduleName);

    // musclesImagesController = new MusclesImagesController(this.routine.);
    // muscleInformation
    // this.scheduleData = new ScheduleLoader(day, week, scheduleType);
    // const information = [preparation, execution, comments];
    // const titles = ["Preparation", "Execution", "Comments"];
  }

  public get routines(): Routines {
    return checkGetter(this._routines, "routines", name);
  }
  public set routines(value: Routines) {
    this._routines = checkSetter(value, "routines", name);
  }
}

// render() {
//     return (
//       <RoutineRow>
//         name={this.scheduleData.scheduleName}
//         maxSets={this.scheduleData.maxSets}
//         data={this.scheduleData.scheduleData}
//       </RoutineRow>
//     );
//     this.renderMedia(this.props.metaID);
//     this.renderInformation(this.props.metaID);

//   }

//   renderMedia(metaID: string) {
//     return mediaType === "video" ? (
//       <video autoPlay src={uri} style={mediaProps} />
//     ) : (
//       <img src={uri} alt="popup" style={mediaProps} />
//     );
//   }

// data: ExExercisesGridController;
// constructor(props: {
//   index: number;
//   data: Schedule.ScheduleData;
//   maxSets: number;
//   maxExercises: number;
//   key: any;
// }) {
//   super(props);
//   this.props = new ExExercisesGridController(props);
// }
// TODO FIND A SPACE FOR THIS TO BE CALLED

//   // Function 3
// const getRepsOrTime = (props: IndividualExercisesRowProps) => {
//   return props.isTimeBased
//     ? `${props.time} sec`
//     : `${props.numReps} rep`
// };
