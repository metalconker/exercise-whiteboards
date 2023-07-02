import React from "react";
import { ScheduleBoardScreen } from "../view/ScheduleBoardScreen";
import { ScheduleImporter } from "./importers/ScheduleImporter";
import { MusclesController } from "./MusclesController";

export class MasterBoardController {
  importedSchedule: ScheduleImporter;
  musclesController : MusclesController;

  constructor(day: string, week: number, scheduleType: number) {
    this.importedSchedule = new ScheduleImporter(day, week, scheduleType);
  }

  render() {
    return (
      <ScheduleBoardScreen
        name={this.importedSchedule.scheduleName}
        maxSets={this.importedSchedule.maxSets}
        data={this.importedSchedule.scheduleData}
      ></ScheduleBoardScreen>
    );
  }
}
