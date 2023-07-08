import React from "react";
import { Day, ScheduleType, Week } from "../Enums";
import { checkGetter, checkSetter } from "../Helpers";
import {
  WhiteboardBackground,
  WhiteboardTitle,
  WhiteboardBody,
} from "../view/WhiteboardScreen";
import Muscles from "../objects/Muscles";
import Routines from "../objects/Routines";
import Schedule from "../objects/Schedule";
import { MusclesImagesContainer } from "../view/components/ModalComponents";
import {
  RoutineView,
  SetsHeader,
  SetsHeaderView,
} from "../view/components/ScheduleComponents";

const name = "WhiteboardController";



// Function 2
const repsRow = (
  props: RoutineViewProps,
  index: number,
  name: string
): Grid => {
  if (index == 0) {

  } else {

  }
};

export class WhiteboardController {
  private _muscles: Muscles;
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

    return (
      <WhiteboardBackground>
        <WhiteboardTitle>{scheduleName}</WhiteboardTitle>
        <WhiteboardBody>
          <SetsHeader numSets={maxSets} />
          <RoutineView />
          {/* <MusclesImagesContainer muscles={this._muscles.colorMap} />; */}
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
}
