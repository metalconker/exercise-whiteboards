import { RoutineRow } from "../view/components/ScheduleGridComponents";
import { ExerciseImporter } from "./importers/ExerciseImporter";
import { MusclesController } from "./MusclesController";

export class RoutineRowController {
  musclesController: MusclesController;
  exerciseImporter: ExerciseImporter;

  constructor(day: string, week: number, scheduleType: number) {
    this.scheduleData = new ScheduleLoader(day, week, scheduleType);
    const information = [preparation, execution, comments];
    const titles = ["Preparation", "Execution", "Comments"];
  }

  render() {
    return (
      <RoutineRow>
        name={this.scheduleData.scheduleName}
        maxSets={this.scheduleData.maxSets}
        data={this.scheduleData.scheduleData}
      </RoutineRow>
    );
    this.renderMedia(this.props.metaID);
    this.renderInformation(this.props.metaID);


  }

  renderMedia(metaID: string) {
    return mediaType === "video" ? (
      <video autoPlay src={uri} style={mediaProps} />
    ) : (
      <img src={uri} alt="popup" style={mediaProps} />
    );
  }

}



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



  // Function 3
const getRepsOrTime = (props: IndividualExercisesRowProps) => {
  return props.isTimeBased
    ? `${props.time} sec`
    : `${props.numReps} rep`
};





