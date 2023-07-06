import React from "react";
import { Day, ScheduleType, Week } from "../Enums";
import { ScheduleController } from "./ScheduleController";
import { checkGetter, checkSetter } from "../Helpers";
import {
  WhiteboardBackground,
  WhiteboardTitle,
  WhiteboardBody,
} from "../view/WhiteboardScreen";

const name = "WhiteboardController";

// const warmups = new WhiteboardController(day, week, ScheduleType.WARMUPS);

// hav ethis be tghe single render controller TODO ??
export class WhiteboardController {
  // Call main Whiteboard and set up
  render() {
    // Renders the board to the screen
    return (
      <WhiteboardBackground>
        {this._scheduleController.render}
      </WhiteboardBackground>
    );
  }

  _scheduleController: ScheduleController;

  constructor(day: Day, week: Week, scheduleType: ScheduleType) {
    this._scheduleController = new ScheduleController(day, week, scheduleType);
  }

  public get scheduleController(): ScheduleController {
    return checkGetter(this._scheduleController, "scheduleController", name);
  }
  public set scheduleController(value: ScheduleController) {
    this._scheduleController = checkSetter(value, "scheduleController", name);
  }
}
