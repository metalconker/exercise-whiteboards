import * as React from "react";
import Button from "@mui/material/Button";
// import { Button, Text, View, TouchableOpacity, StyleSheet } from "react-native";
// import { TabView, SceneMap } from "react-native-tab-view";
// import Animated from "react-native-reanimated";
import * as Schedule from "../../../controller/schedule/Schedule";
import * as ConstantsSchedule from "../../../controller/schedule/ConstantsSchedule";
// import { NavigationContainer } from '@react-navigation/native';
// import { createNativeStackNavigator } from '@react-navigation/native-stack';
// import ScrollableTabView, {
//   DefaultTabBar,
// } from "react-native-scrollable-tab-view";

// import WhiteboardScreenBackground from "../whiteboard/WhiteboardScreenBackground";
// // import {
// //   WhiteboardScreenExerciseMainContainer,
// //   WhiteboardScreenExerciseTopContainer,
// // } from "../whiteboardscreens/WhiteboardScreenExercise";

// // const Stack = createNativeStackNavigator();
// // var ExerciseScheduleKeys = {};
// // var loadedscreens;

// export default class AutoNavigationScreen extends React.Component {

//   constructor(props) {
//     super(props);
//     this.state = {
//       index: 0,
//       routes: [
//         {
//           key: "Warmups",
//           title: "Warmups",
//           schedule_name: get_schedule(this.props.day, this.props.week, 0),
//           route: set_route(0, get_schedule(this.props.day, this.props.week, 0))
//         },
//         {
//           key: "Exercises",
//           title: "Exercises",
//           schedule_name: get_schedule(this.props.day, this.props.week, 1),
//           route: set_route(1, get_schedule(this.props.day, this.props.week, 1))
//         },
//       ],
//     };
//   }

//   _handleIndexChange = (index) => this.setState({ index });

//   render() {
//     return (
//       <div>

//         <WhiteboardScreenBackground>

//         </WhiteboardScreenBackground>
//       </div>
//     );
//   }
// }

// const get_schedule = (day, week, num) => {
//   return Schedule.GetScheduleNameDWT(
//     day,
//     week,
//     Object.keys(ConstantsSchedule.EXERCISE_TYPE)[num]
//   );
// };

// const set_route = (routeIndex, schedulename) => {
//   return (
//     // <WhiteboardScreenBackground
//     //   toprender={
//     //     <WhiteboardScreenExerciseTopContainer
//     //       day={this.day}
//     //       week={this.week}
//     //       type={this.state.routes[routeIndex].key}
//     //     />
//     //   }
//     //   mainrender={
//     //     <WhiteboardScreenExerciseMainContainer schedulename={schedulename} />
//     //   }
//     // />
//     <WhiteboardScreenBackground>

//     </WhiteboardScreenBackground>
//   );
// };
