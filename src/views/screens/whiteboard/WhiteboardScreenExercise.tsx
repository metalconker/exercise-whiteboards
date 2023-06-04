import * as React from "react";
import { useState } from "react";
import Paper from "@mui/material/Paper";
// import * as Constants from "../../../constants/ConstantsCode";
// import * as ScheduleConstants from "../../../controller/schedule/ConstantsSchedule";
// import WhiteboardScreen from "./WhiteboardScreen";
import * as Schedule from "../../../controller/schedule/Schedule";
import * as ConstantsSchedule from "../../../controller/schedule/ConstantsSchedule";
import { Typography, Button, Box, Grid } from "@mui/material";
import PropTypes from "prop-types";
import { Console } from "console";
import BackgroundImage from "../../../assets/images/whiteboard/Whiteboard.png";

// const BackgroundImage = "../../../assets/images/whiteboard/Whiteboard.png";

// Private Variables for use across multiple internal react components, set at the call of Exercise Board Screen
let scheduleName: string;
let scheduleData: Schedule.ScheduleData;
let day: string;
let week: number;
let maxSets: number;
let metaIDKeys: any[];

export default class ExerciseBoardScreen extends React.Component<any, any> {
  constructor(props: any) {
    super(props);
    day = props.day;
    week = props.week;
        console.log(props);
    // console.log(this.props.day);
    scheduleName = Schedule.getScheduleNameDWT(
      day,
      week,
      Object.keys(ConstantsSchedule.EXERCISE_TYPE)[1]
    );
    scheduleData = new Schedule.ScheduleData(scheduleName);
    maxSets = scheduleData.getMaxSets();
    metaIDKeys = scheduleData.getMetadataKeys();
  }

  render() {
    // Renders the board to the screen
    return (
      <WhiteboardScreenBackground>
        <ExerciseScreenContainer></ExerciseScreenContainer>
      </WhiteboardScreenBackground>
    );
  }
}

export class WhiteboardScreenBackground extends React.Component<any, any> {
  constructor(props: any) {
    super(props);
    // this.props = props;
  }

  render() {
    // Renders the board to the screen
    return (
      <Paper elevation={0} square sx={STYLES.WHITEBOARD_BACKGROUND}>
        {this.props.children}
      </Paper>
    );
  }
}

export class ExerciseScreenContainer extends React.Component {
  constructor(props: any) {
    super(props);
  }
  render() {
    return (
      <Box sx={STYLES.SPLIT_SCREEN.root}>
        <Box sx={STYLES.SPLIT_SCREEN.red}>
          <ExTitle />
        </Box>
        <Box sx={STYLES.SPLIT_SCREEN.blue}>
          <ExSets />
          <ExExercises />
        </Box>
      </Box>
    );
  }
}

export class ExTitle extends React.Component {
  constructor(props: any) {
    super(props);
  }

  render() {
    return (
      <Box sx={STYLES.TOP_COMPONENT.container}>
        <Typography
          variant="h2"
          color="textPrimary"
          fontFamily="DryWhiteboardMarker-Regular"
        >
          {day} : {scheduleName}
        </Typography>
      </Box>
    ); React.Component
  }
}

export class ExExercises extends React.Component {
  constructor(props: any) {
    super(props);
  }

  render() {
    return (
      <Grid container spacing={2} columns={maxSets}>
        {[...Array(maxSets)].map((_, index) => (
          <Grid key={index} item xs={1}>
            {index == 0 && (
              <WhiteboardErasableText>Shit {index}</WhiteboardErasableText>
            )}
            {index !== 0 && (
              <WhiteboardErasableText>Set {index}</WhiteboardErasableText>
            )}
          </Grid>
        ))}
      </Grid>
    );
  }
}

export class ExSets extends React.Component{
  constructor(props: any) {
    super(props);
  }
  render() {
    return (
      <Grid container spacing={2} columns={maxSets}>
        {[...Array(maxSets)].map((_, index) => (
          <Grid key={index} item xs={1}>
            {index !== 0 && (
              <WhiteboardErasableText>Set {index}</WhiteboardErasableText>
            )}
          </Grid>
        ))}
      </Grid>
    );
  }
}

// Text that gets erased once touched
export const WhiteboardErasableText = (props: any) => {
  const [textValue, setTextValue] = useState(props.children);

  const onPress = () => {
    setTextValue("");
  };

  return (
    <Button
      // style={styles.reps}
      onClick={onPress}
      key={textValue}
    >
      <Typography
        variant="h2"
        fontFamily="DryWhiteboardMarker-Regular"
        fontSize="35"
        color="black"
      >
        {textValue}
      </Typography>
      {props.imageValue}
    </Button>
  );
};
//   this.temp = [];
//   this.temp.push(
//     <ExerciseBoardHeaderLine
//       key={"ExerciseBoardHeaderLine"}
//       maxsets={this.maxsets}
//     />
//   );

//   for (let metaid of this.metaidkeys) {
//     let exercisedata = this.scheduledata.GetExerciseData(metaid);
//     this.temp.push(
//       <ExerciseBoardDataLine
//         key={metaid}
//         metaid={metaid}
//         exercisedata={exercisedata}
//         maxsets={this.maxsets}
//       />
//     );
//   }

// // First row is the row of sets
// // Second row contains individual exercise information
// export class ExerciseTable extends React.Component {
//   constructor(props) {
//     super(props);
//     this.scheduleData = new Schedule.ScheduleData(this.props.scheduleName);
//     this.maxSets = this.scheduleData.GetMaxSets();
//     this.metaIDKeys = this.scheduleData.GetMetadataKeys();
//   }
//   render() {
//     return (
//       <Grid container spacing={2} columns={5}>
//         {[...Array(5)].map((_, index) => (
//           <Grid key={index} item xs={1}>
//             <WhiteboardErasableText>Hello</WhiteboardErasableText>
//             {/* <Box sx={{ bgcolor: 'primary.main', height: "20vh" }} /> */}
//           </Grid>
//         ))}
//       </Grid>
//     );
//   }
// }

// export class ExerciseRow extends React.Component {
//   constructor(props) {
//     super(props);
//   }
// }

// export class SetsRow extends React.Component {
//   constructor(props) {
//     super(props);
//   }
//   render() {
//     return (
//       <Grid container spacing={2} columns={5}>
//         {[...Array(5)].map((_, index) => (
//           <Grid key={index} item xs={1}>
//             <WhiteboardErasableText>Hello</WhiteboardErasableText>
//             {/* <Box sx={{ bgcolor: 'primary.main', height: "20vh" }} /> */}
//           </Grid>
//         ))}
//       </Grid>
//     );
//   }
// }

// // const boxStyle = {
// //   height: '30px',
// //   width: '50px',
// //   background: '#000000',
// //   margin: '5px',
// //   borderRadius: '5px',
// // };
// function GridComponent() {
//   const boxStyle = {
//     height: "30px",
//     width: "50px",
//     background: "#000000",
//     margin: "5px",
//     borderRadius: "5px",
//   };

//   return (
//     <Grid container spacing={2} columns={5}>
//       {[...Array(5)].map((_, index) => (
//         <Grid key={index} item xs={1}>
//           <WhiteboardErasableText>Hello</WhiteboardErasableText>
//           {/* <Box sx={{ bgcolor: 'primary.main', height: "20vh" }} /> */}
//         </Grid>
//       ))}
//     </Grid>
//   );
// }

// //   render() {
// //     return (
// //       <WhiteboardScreenBackground>
// //         {/* {this.temp} */}
// //         <SplitScreen
// //           day={this.day}
// //           schedule={this.schedulename}
// //           version={this.week}
// //         >
// //           {/* <WhiteboardScreenExerciseTopContainer
// //             day={this.day}
// //             week={this.week}
// //             // type={this.state.routes[0].key}
// //           />

// //           <WhiteboardScreenExerciseMainContainer
// //             schedulename={this.schedulename}
// //           /> */}
// //         </SplitScreen>
// //       </WhiteboardScreenBackground>
// //     );
// //   }
// // }

// const ExerciseBoardHeaderLine = (props) => {
//   const renderSetHeaders = () => {
//     let sets = [];
//     for (var j = 1; j <= props.maxsets; j++) {
//       sets.push(
//         <Box sx={styles.sets} key={"Set" + j}>
//           <Typography variant="subtitle1">Set {j}</Typography>
//         </Box>
//       );
//     }
//     return sets;
//   };

//   return (
//     <Box sx={styles.line} key={"ExerciseBoardHeaderLine"}>
//       <Box sx={styles.name} key={"Name"}>
//         <Typography variant="subtitle1">Name</Typography>
//       </Box>
//       {renderSetHeaders()}
//     </Box>
//   );
// };
// ExerciseBoardHeaderLine.propTypes = {
//   maxsets: PropTypes.number.isRequired,
// };

// // export class WarmupScreen extends IExerciseScreen() {
// //   constructor(props) {
// //     super(props);
// //     this.schedulename = Schedule.GetScheduleNameDWT(
// //       this.day,
// //       this.week,
// //       Object.keys(ConstantsSchedule.EXERCISE_TYPE)[0]
// //     );
// //   }

// //   render() {
// //     super.render();
// //     <SplitScreen day={this.day} schedule={this.schedulename}></SplitScreen>
// //   }

// // }

// // export class ExerciseScreen extends React.Component {
// //   constructor(props) {
// //     super(props);
// //     this.schedulename = Schedule.GetScheduleNameDWT(
// //       this.day,
// //       this.week,
// //       Object.keys(ConstantsSchedule.EXERCISE_TYPE)[1]
// //     );
// //   }

// //   render() {
// //     super.render();
// //     return (
// //       <SplitScreen day={this.day} schedule={this.schedulename}></SplitScreen>
// //     );
// //   }
// // }

// // render() {
// //   super.render();
// //   return (
// //     <div>
// //       <WhiteboardScreenExerciseTopContainer
// //         day={this.day}
// //         week={this.week}
// //         type={this.state.routes[0].key}
// //       />

// //       <WhiteboardScreenExerciseMainContainer
// //         schedulename={this.schedulename}
// //       />
// //     </div>
// //   );
// // }
// // }

// export class ExerciseBoardDataLine extends React.Component {
//   constructor(props) {
//     super(props);
//     this.exercisedata = new Schedule(props.exercisedata);
//     this.name = "   " + this.exercisedata.Name();
//   }

//   renderSets = () => {
//     let temp = [];
//     for (var i = 0; i < props.maxsets; i++) {
//       if (i < this.exercisedata.NumSets()) {
//         temp.push(
//           <Box sx={styles.sets} key={i}>
//             <WhiteboardErasableText textColor={getcolor(i)}>
//               {getdatastring()}
//             </WhiteboardErasableText>
//           </Box>
//         );
//       } else {
//         temp.push(<Box sx={styles.sets} key={i} />);
//       }
//     }
//     return temp;
//   };

//   getdatastring = () => {
//     let exercisedata = this.exercisedata;
//     if (exercisedata.IsTimeBased()) return exercisedata.Time() + "secs";
//     return exercisedata.NumReps() + "reps";
//   };

//   getcolor = (index) => {
//     let alternating = this.exercisedata.IsAlternating();
//     if (!alternating) return props.defaultcolor;
//     if (index % 2 == 0) return props.leftcolor;
//     return props.rightcolor;
//   };

//   render() {
//     return (
//       <Box sx={styles.line} key={this.exercisedata.Name()}>
//         {/* <WhiteboardBlankModalContainer text={name}>
//         <ExerciseBoardModalContents metaid={props.metaid} />
//       </WhiteboardBlankModalContainer> */}
//         {renderSets()}
//       </Box>
//     );
//   }
// }

// function WhiteboardBlankModalContainer(props) {
//   const [modalcontainerVisibility, setModalcontainerVisibility] =
//     useState(false);

//   function onPress() {
//     setModalcontainerVisibility(true);
//   }

//   function renderModal() {
//     return (
//       <Modal
//         open={modalcontainerVisibility}
//         onClose={() => setModalcontainerVisibility(false)}
//         aria-labelledby={props.text}
//         aria-describedby={`${props.text}-modal-description`}
//       >
//         <Box
//           sx={{
//             position: "absolute",
//             top: "20%",
//             left: "0px",
//             right: "0px",
//             margin: "auto",
//             width: "300px",
//             bgcolor: "background.paper",
//             boxShadow: 24,
//             p: 4,
//           }}
//         >
//           {props.children}
//           {renderCloseButton()}
//         </Box>
//       </Modal>
//     );
//   }

//   function renderCloseButton() {
//     return (
//       <IconButton
//         onClick={() => setModalcontainerVisibility(false)}
//         sx={{ position: "absolute", top: "0px", right: "0px" }}
//       >
//         <CloseIcon />
//       </IconButton>
//     );
//   }

//   return (
//     <>
//       <Typography variant="body1" sx={{ cursor: "pointer" }} onClick={onPress}>
//         {props.text}
//       </Typography>
//       {renderModal()}
//     </>
//   );
// }

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

const STYLES = {
  WHITEBOARD_BACKGROUND: {
    backgroundImage: `url(${BackgroundImage})`,
    position: "fixed",
    height: "100vh",
    minWidth: "100%",
    minHeight: "100%",
    backgroundSize: "100vw 100vh",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
  },
  SPLIT_SCREEN: {
    root: {
      width: "100%",
      height: "100vh",
      minWidth: "100%",
      minHeight: "100%",
    },
    red: {
      backgroundColor: "transparent",
      height: "calc(100vh / 7)",
      width: "100%",
    },
    blue: {
      backgroundColor: "transparent",
      height: "calc((6 * 100vh) / 7)",
      width: "100%",
    },
  },

  TOP_COMPONENT: {
    container: {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      height: "100%",
    },
  },
};

const styles = {
  reps: {
    color: "red",
    alignItems: "center",
    flex: 1,
    //backgroundColor: "pink",
  },
  name: {
    // backgroundColor: "purple",
    flex: 6.5,
  },
  background: {
    flex: 1,
    justifyContent: "center",
  },
  modalBackground: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22,
  },
  modalView: {
    width: "70%",
    margin: 20,
    // backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  openButton: {
    backgroundColor: "#F194FF",
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  textStyle: {
    // color: "white",
    fontWeight: "bold",
    textAlign: "center",
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center",
    fontFamily: "Arial",
  },
  sets: {
    color: "red",
    alignItems: "center",
    flex: 1,
  },
  line: {
    flexDirection: "row",
  },
  modalcontents: {
    // justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
    position: "relative",
    width: "100%",
    height: "90%",
  },
  informationrow: {
    height: "45%",
    width: "100%",
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "flex-start",
    // alignSelf: "flex-start",
  },
  mediaandmusclesrow: {
    height: "45%",
    flexDirection: "row",
    alignItems: "center",
  },
  mediacontainer: {
    position: "relative",
    justifyContent: "center",
    alignItems: "flex-start",
    alignSelf: "flex-start",
    width: "100%",
    height: "100%",
    flex: 1,
    // flexWrap: "wrap",
  },
  // video: {
  //   height: "100%",
  //   width: "100%",
  //   alignItems: "stretch",
  //   alignSelf: "flex-start",
  // },
  image: {
    width: "100%",
    alignItems: "flex-start",
    alignSelf: "flex-start",
    // flexShrink: 1,
  },
  muscles: {
    position: "relative",
    justifyContent: "center",
    alignItems: "center",
    alignSelf: "center",
    flex: 1,
    width: "100%",
    height: "100%",
  },
  modaltitleText: {
    fontFamily: "Arial",
    fontSize: 30,
  },
  modaldefaultText: {
    fontFamily: "Arial",
    fontSize: 15,
  },
};

const grid = {
  workouts: {
    backgroundColor: "blue",
    flex: 7,
    flexDirection: "column",
    justifyContent: "flex-start",
  },
  exercises: {
    backgroundColor: "yellow",
    flexDirection: "row",
  },
  name: {
    backgroundColor: "white",
    flex: 6.5,
  },
  reps: {
    color: "red",
    alignItems: "center",
    backgroundColor: "pink",
    flex: 1,
  },
};
