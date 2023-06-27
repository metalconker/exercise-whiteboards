import { RoutineRow } from "../view/components/ScheduleGridComponents";
import { MusclesController } from "./MusclesController";

export class RoutineRowController {
  musclesController: MusclesController;
  informationController: InformationController;

  constructor(day: string, week: number, scheduleType: number) {
    this.scheduleData = new ScheduleLoader(day, week, scheduleType);
  }

  render() {
    return (
      <RoutineRow>
        name={this.scheduleData.scheduleName}
        maxSets={this.scheduleData.maxSets}
        data={this.scheduleData.scheduleData}
      </RoutineRow>
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




