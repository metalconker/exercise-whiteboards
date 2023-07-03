import React from "react";
import Schedule from "../objects/Schedule";
import { ScheduleBoardScreen } from "../view/ScheduleBoardScreen";
import { MusclesController } from "./MusclesController";
import { Days, ScheduleTypes, Weeks } from "../Constants";

export class MasterBoardController {
  schedule: Schedule;
  musclesController: MusclesController;

  constructor(day: Days, week: Weeks, scheduleType: ScheduleTypes) {
    this.schedule = new Schedule(day, week, scheduleType);
  }

  render() {
    return (
      <ScheduleBoardScreen
        name={this.schedule.scheduleName}
        maxSets={this.schedule.maxSets}
        // data={this.schedule.scheduleData}
      ></ScheduleBoardScreen>
    );
  }
}
