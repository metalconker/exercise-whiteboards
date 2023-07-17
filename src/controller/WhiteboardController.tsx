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
import "../view/styles/Stylesheet.css";

const name = "WhiteboardController";

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
    let scheduleName = this._scheduleName;
    let maxSets = this._maxSets;
    let height = this._routines.numRoutines;
    return (
      <WhiteboardBackground>
        <WhiteboardTitle>{scheduleName}</WhiteboardTitle>
        <WhiteboardBody>
          <HeaderContainer sets={maxSets} />
          {this._routines.map((routine) => {
            let exercise = routine.exercise;
            let exerciseName = routine.name;
            let alternating = routine.alternating;
            let sets = routine.sets;
            let reps = this.getRepsOrTime(routine);
            let modalWindowContents = this.getModalWindowContents(exercise);
            return (
              <IndividualRow
                key={exerciseName}
                maxSets={maxSets}
                sets={sets}
                height={height}
                name={exerciseName}
                alternating={alternating}
                reps={reps}
                modalWindowContents={modalWindowContents}
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

  getModalWindowContents(exercise: Exercise) {
    let muscles = exercise.muscles.colorMap;
    let uri = exercise.uri;
    let mediaType = exercise.mediaType;
    let preparation = exercise.preparation;
    let execution = exercise.execution;
    let comments = exercise.comments;
    return (
      // <div style={{ display: "flex", flexDirection: "column", width: "100%" }}>
      //   <MusclesImagesView muscles={muscles} />
      //   <ExerciseMediaView uri={uri} mediaType={mediaType} />
      //   <ExerciseDetailsView
      //     preparation={preparation}
      //     execution={execution}
      //     comments={comments}
      //   />
      // </div>
      <div className="parentDiv" style={{width: "100%" }}>
        <div className="topDiv" style={{ height: "33.33%", width: "100%" }}>
          <MusclesImagesView muscles={muscles} />
        </div>
        <div className="middleDiv" style={{ height: "33.33%", width: "100%" }}>
          <ExerciseMediaView uri={uri} mediaType={mediaType} />
        </div>
        <div className="bottomDiv" style={{ height: "33.33%", width: "100%" }}>
          <ExerciseDetailsView
            preparation={preparation}
            execution={execution}
            comments={comments}
          />
        </div>
      </div>
    );
  }
}
