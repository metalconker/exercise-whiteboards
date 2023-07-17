import React from "react";
import { Day, ScheduleType, Week } from "../Enums";
import { checkGetter, checkSetter } from "../Helpers";
import {
  WhiteboardBackground,
  WhiteboardTitle,
  WhiteboardBody,
} from "../view/whiteboard/WhiteboardComponents";
import Routines from "../objects/Routines";
import Schedule from "../objects/Schedule";
import {
  HeaderContainer,
  IndividualRow,
} from "../view/whiteboard/GridComponents";
import Routine from "../objects/Routine";
import Exercise from "../objects/Exercise";
import {
  ExerciseDetailsView,
  ExerciseMediaView,
  MusclesImagesView,
} from "../view/whiteboard/ModalWindowComponents";
import { Box, Typography } from "@mui/material";
import { EXERCISE_DETAILS_WINDOW, MEDIA_VIEW } from "../view/styles/Stylesheet";
import { ModalText } from "../view/whiteboard/TypographyElements";

const name = "WhiteboardController";

/**
 * This is the WhiteboardController class to provide necessary components
 * for Whiteboard view. Constructor takes Day, Week, and ScheduleType enum
 * values to initialize the required components for the Whiteboard view.
 * init means this class will render the Whiteboard view with given props.
 * It also defines two getters and setters for Schedule. Moreover,
 * getRepsOrTime function is also called to decide whether the routine
 * requires reps or time.
 */
export class WhiteboardController {
  private _routines: Routines;
  private _schedule: Schedule;
  private _scheduleName: string;
  private _maxSets: number;

  constructor(day: Day, week: Week, scheduleType: ScheduleType) {
    this._schedule = new Schedule(day, week, scheduleType);
    this._scheduleName = this._schedule.scheduleName;
    this._routines = this._schedule.routines;
    this._maxSets = this._routines.maxSets;
  }

  init() {
    return (
      <WhiteboardBackground>
        <WhiteboardTitle>{this._scheduleName}</WhiteboardTitle>
        <WhiteboardBody>
          <HeaderContainer maxSets={this._maxSets} />
          {this._routines.map((routine) => {
            let exercise: Exercise = routine.exercise;
            return (
              <IndividualRow
                key={routine.name}
                maxSets={this._maxSets}
                sets={routine.sets}
                height={this._routines.numRoutines}
                name={routine.name}
                alternating={routine.alternating}
                reps={this.getRepsOrTime(routine)}
                modalWindowContents={
                  <Box sx={{ width: "100%" }}>
                    <Box
                      sx={{
                        height: "50%",
                        width: "100%",
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        backgroundImage:
                          "radial-gradient(circle, rgba(188,217,247,1) 0%, rgba(225,239,253,1) 100%);",
                        //  backgroundColor: "#c7f9f0",
                        boxShadow: "0 0 6px rgba(0, 0, 0, 0.2)",
                      }}
                    >
                      {exercise.mediaType == "video" ? (
                        <video
                          autoPlay
                          src={exercise.uri}
                          style={{
                            width: "90%",
                            maxHeight: "90%",
                            borderRadius: "2rem",
                          }}
                        />
                      ) : (
                        <img
                          src={exercise.uri}
                          alt="popup"
                          style={{
                            width: "90%",
                            maxHeight: "90%",
                            borderRadius: "2rem",
                          }}
                        />
                      )}
                    </Box>
                    <Box sx={{ height: "50%", width: "100%" }}>
                      <Box
                        key="ExerciseDetailsView"
                        sx={{
                          backgroundColor: "#B6D3EE",
                          height: "100%",
                          width: "50%",
                          alignItems: "flex-start",
                          justifyContent: "flex-start",
                          display: "flex",
                          flexDirection: "column" /* or 'column' */,
                          flexWrap: "nowrap" /* or 'wrap' */,
                          float: "right",
                        }}
                      >
                        <Box key={"preparation"}>
                          <Typography
                            sx={{
                              fontWeight: "bold",
                              textAlign: "left",
                              marginBottom: 2,
                              fontFamily: "Roboto, sans-serif",
                              fontSize: "24px",
                              color: "#4a90e2",
                            }}
                          >
                            Preparation:
                          </Typography>
                          <Typography
                            sx={{
                              fontWeight: "normal",
                              textAlign: "left",
                              marginBottom: 2,
                              fontFamily: "Roboto, sans-serif",
                              fontSize: "20px",
                              color: "#4a90e2",
                            }}
                          >
                            {exercise.preparation}
                          </Typography>
                        </Box>
                        <Box key={"execution"}>
                          <Typography
                            sx={{
                              fontWeight: "bold",
                              textAlign: "left",
                              marginBottom: 2,
                              fontFamily: "Roboto, sans-serif",
                              fontSize: "24px",
                              color: "#4a90e2",
                            }}
                          >
                            Execution:
                          </Typography>
                          <Typography
                            sx={{
                              fontWeight: "normal",
                              textAlign: "left",
                              marginBottom: 2,
                              fontFamily: "Roboto, sans-serif",
                              fontSize: "20px",
                              color: "#4a90e2",
                            }}
                          >
                            {exercise.execution}
                          </Typography>
                        </Box>
                        <Box key={"comments"}>
                          <Typography
                            sx={{
                              fontWeight: "bold",
                              textAlign: "left",
                              marginBottom: 2,
                              fontFamily: "Roboto, sans-serif",
                              fontSize: "24px",
                              color: "#4a90e2",
                            }}
                          >
                            Comments:
                          </Typography>
                          <Typography
                            sx={{
                              fontWeight: "normal",
                              textAlign: "left",
                              marginBottom: 2,
                              fontFamily: "Roboto, sans-serif",
                              fontSize: "20px",
                              color: "#4a90e2",
                            }}
                          >
                            {exercise.comments}
                          </Typography>
                        </Box>
                      </Box>
                      <Box
                        sx={{
                          height: "100%",
                          width: "50%",
                          float: "left",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          backgroundColor: "#c7f9f0",
                        }}
                      >
                        <MusclesImagesView
                          muscles={exercise.muscles.colorMap}
                        />
                      </Box>
                    </Box>
                  </Box>
                }
              />
            );
          })}
        </WhiteboardBody>
      </WhiteboardBackground>
    );
  }

  public get schedule(): Schedule {
    return checkGetter(this._schedule, "schedule", name);
  }
  public set schedule(value: Schedule) {
    this._schedule = checkSetter(value, "schedule", name);
  }

  getRepsOrTime(routine: Routine) {
    if (routine.reps > 0) return routine.reps + " reps";
    return routine.time + " secs";
  }
}

// modalWindowContents={
//   <Box sx={{ width: "100%" }}>
//     <Box sx={{ height: "50%", width: "100%" }}>
//       <ExerciseMediaView
//         uri={exercise.uri}
//         mediaType={exercise.mediaType}
//       />
//     </Box>
//     <Box sx={{ height: "50%", width: "100%" }}>
//       <ExerciseDetailsView
//         preparation={exercise.preparation}
//         execution={exercise.execution}
//         comments={exercise.comments}
//       />
//       <MusclesImagesView muscles={exercise.muscles.colorMap} />
//     </Box>
//   </Box>
// }

// <Box sx={{ width: "100%" }}>
//   <Box
//     sx={{
//       padding: "3rem",
//       height: "50%",
//       width: "100%",
//       display: "flex",
//       justifyContent: "center",
//       backgroundImage: "radial-gradient(circle, rgba(188,217,247,1) 0%, rgba(225,239,253,1) 100%);"
//     }}
//   >
//      {exercise.mediaType == "video" ? (
//        <video
//          autoPlay
//          src={exercise.uri}
//          style={{
//            width: "80%",
//            maxHeight: "70%",
//            borderRadius: "10%",
//            boxShadow: "0 0 6px rgba(0, 0, 0, 0.2)"
//            }}
//        />
//      ) : (
//        <img
//          src={exercise.uri}
//          alt="popup"
//          style={{
//            width: "80%",
//            maxHeight: "70%",
//            borderRadius: "10%",
//            boxShadow: "0 0 6px rgba(0, 0, 0, 0.2)"
//            }}
//        />
//      )}
//     </Box>
//    <Box
//      sx={{
//      padding: "3rem",
//      height: "50%",
//      width: "100%",
//      display: "flex",
//      justifyContent: "space-evenly",
//      backgroundColor: "white"
//    }}>
//      <Box
//        key="ExerciseDetailsView"
//        sx={{
//          padding: "1rem",
//          backgroundColor: "white",
//          height: "100%",
//          width: "90%",
//          display: "flex",
//          flexDirection: "column" /* or 'column' */,
//          flexWrap: "nowrap" /* or 'wrap' */,
//        }}>
//        <Box key={"preparation"}>
//          <ModalText color={"#0050ff"}>Preparation:</ModalText>
//          <ModalText color={"#066dd7"} size={1.3}>
//            {exercise.preparation}
//          </ModalText>
//        </Box>
//        <Box key={"execution"}>
//          <ModalText color={"#0050ff"}>Execution:</ModalText>
//          <ModalText color={"#066dd7"} size={1.3}>
//            {exercise.execution}
//          </ModalText>
//        </Box>
//        <Box key={"comments"}>
//          <ModalText color={"#0050ff"}>Comments:</ModalText>
//          <ModalText color={"#066dd7"} size={1.3}>
//            {exercise.comments}
//          </ModalText>
//        </Box>
//      </Box>
//      <Box
//        sx={{
//          padding: "1rem",
//          backgroundColor: "white",
//          height: "100%",
//          width: "20%:",
//          display: "flex",
//          alignItems: "center",
//          justifyContent: "center",
//        }}
//      >
//        <MusclesImagesView
//          muscles={exercise.muscles.colorMap} />
//      </Box>
//    </Box>
// </Box>
