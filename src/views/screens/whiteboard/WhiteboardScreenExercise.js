import * as React from "react";
import * as Constants from "../../../constants/ConstantsCode";
import * as ScheduleConstants from "../../../controller/schedule/ConstantsSchedule";
import WhiteboardScreen from "./WhiteboardScreen";


export class WarmupScreen extends WhiteboardScreen() {
  constructor(props) {
    super(props);
    this.schedulename = Schedule.GetScheduleNameDWT(
      this.day,
      this.week,
      Object.keys(ConstantsSchedule.EXERCISE_TYPE)[0]
    );
  }

  render() {
    super.render()
  }

}


export class ExerciseScreen extends WhiteboardScreen() {
  constructor(props) {
    super(props);
    this.schedulename = Schedule.GetScheduleNameDWT(
      this.day,
      this.week,
      Object.keys(ConstantsSchedule.EXERCISE_TYPE)[1]
    );
  }

  render() {
    super.render()
  }

}




// export class WhiteboardScreenExerciseTopContainer extends React.Component {
//     render() {
//       let day = this.props.day;
//       let week = this.props.week;
//       let type = this.props.type;
  
//       let daystring = Constants.DAYS[day];
//       let weekstring = ScheduleConstants.WEEKS[week];
//       let typestring = ScheduleConstants.EXERCISETYPE[type];
  
//       var TitleData = [daystring, weekstring, typestring];
//       let title = [];

//       for (let detail of TitleData) {
//         title.push(
//           <Item key={detail}>
//             {detail}
//           </Item>
//         );
//       }
//       return title;
//     }
//   }