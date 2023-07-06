import React from "react";
import { MusclesImagesContainer } from "../view/components/ModalComponents";
import Muscles from "../objects/Muscles";
import { checkGetter, checkSetter } from "../Helpers";

const name = "MusclesController";

/**
 * MuscleViewController class creates objects
 * based on color in order to draw muscles
 */
export class MusclesController {
  render() {
    return <MusclesImagesContainer muscles={this._muscles.colorMap} />;
  }

  _muscles: Muscles;

  constructor(muscleInformation: {}) {
    this._muscles = new Muscles(muscleInformation);
  }

  // TODO write the render function for the muscles here

  public get muscles(): Muscles {
    return checkGetter(this._muscles, "musclse", name);
  }
  public set muscles(value: Muscles) {
    this._muscles = checkSetter(value, "muscles", name);
  }
}
