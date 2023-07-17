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
import { Box } from "@mui/material";
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
                    <Box sx={{ height: "50%", width: "100%" }}>
                      <Box sx={MEDIA_VIEW}>
                        {exercise.mediaType == "video" ? (
                          <video
                            autoPlay
                            src={exercise.uri}
                            style={{ maxWidth: "50%" }}
                          />
                        ) : (
                          <img
                            src={exercise.uri}
                            alt="popup"
                            style={{ maxWidth: "50%" }}
                          />
                        )}
                      </Box>
                    </Box>
                    <Box sx={{ height: "50%", width: "100%" }}>
                      <Box
                        key="ExerciseDetailsView"
                        sx={EXERCISE_DETAILS_WINDOW}
                      >
                        <Box key={"preparation"}>
                          <ModalText color={"black"}>Preparation:</ModalText>
                          <ModalText color={"black"}>
                            {exercise.preparation}
                          </ModalText>
                        </Box>
                        <Box key={"execution"}>
                          <ModalText color={"black"}>Execution:</ModalText>
                          <ModalText color={"black"}>
                            {exercise.execution}
                          </ModalText>
                        </Box>
                        <Box key={"comments"}>
                          <ModalText color={"black"}>Comments:</ModalText>
                          <ModalText color={"black"}>
                            {exercise.comments}
                          </ModalText>
                        </Box>
                      </Box>
                      <MusclesImagesView muscles={exercise.muscles.colorMap} />
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
