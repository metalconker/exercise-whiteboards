import React from "react";
import Schedule from "../objects/Schedule";
import { ScheduleBoardScreen } from "../view/ScheduleBoardScreen";
// import { MusclesImagesController } from "./MusclesImagesController";
import { Days, ScheduleTypes, Weeks } from "../Enums";

export class MasterBoardController {
  schedule: Schedule;
  // musclesController: MusclesImagesController;

  constructor(day: Days, week: Weeks, scheduleType: ScheduleTypes) {
    console.log(day);
    this.schedule = new Schedule(day, week, scheduleType);
  }

  render() {
    return (
      <ScheduleBoardScreen
        name={this.schedule.scheduleName}
        maxSets={this.schedule.maxSets}
      ></ScheduleBoardScreen>
    );
  }
}
