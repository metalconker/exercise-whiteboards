import { Box } from "@mui/material";
import React from "react";
import { MuscleColors } from "../Enums";
import { MUSCLES_CONSTANTS } from "../view/styles/Stylesheet";
import * as MusclesImagesModel from "../model/MusclesImagesModel";
import { MusclesImagesContainer } from "../view/components/ModalComponents";
/**
 * MuscleViewController class creates objects
 * based on color in order to draw muscles
 */
export class MusclesImagesController {
  drawable: any[] = [];

  constructor(muscleInformation: {}) {
    // Seperate muscles basied on provided muscle information
    const separateMuscles = this.separateMuscles(muscleInformation);
    // Constuct a mapping of colors to related muscle names
    const mappedColors = this.mapColors(separateMuscles);
    // Create array in which To hold the objects can be draw
    // const drawable: any[] = [];
    // Loop through the available muscle colors
    Object.keys(MuscleColors).forEach((colorkey) => {
      const color = MuscleColors[colorkey];
      // Create the objects for each color to be drawable
      this.drawable.push(this.loopColor(color, mappedColors[color]));
    });
  }

  render() {
    return <MusclesImagesContainer muscles={this.drawable} />;
  }

  separateMuscles(muscleInformation: {}) {
    let muscles = {};
    // Intialize new Set for each colors and add them to `muscles` object
    for (let colorkey in MuscleColors) {
      muscles[MuscleColors[colorkey]] = new Set();
    }
    // Get needed informational details from the file
    for (let category in muscleInformation) {
      let color = this.filterColor(category);
      let info = muscleInformation[category];

      // Loop through the muscular information in a category,
      //  adding a single muscle to the assocaited array
      for (let muscle of info) {
        muscles[color].add(muscle);
      }
    }
    return muscles;
  }

  mapColors(muscles) {
    const mappedColors = {};
    // Iterate through each color and map related muscle names to that color
    Object.keys(MuscleColors).forEach((colorKey) => {
      const color = MuscleColors[colorKey];
      const unmappedColors = muscles[color];
      // List to hold the currently mappedMuscles
      mappedColors[color] = new Set();
      unmappedColors.forEach((unmapped) => {
        const muscleMap = MUSCLES_CONSTANTS[unmapped.toUpperCase()];
        // map the muscle to key group of associated muscles
        if (muscleMap) {
          // Add associated muscles to mapped group
          muscleMap.forEach((currentKey) => {
            mappedColors[color].add(currentKey);
          });
        }
      });
    });

    return mappedColors;
  }

  loopColor(color, colorArray) {
    const temp: any[] = [];
    colorArray.forEach((muscleContainer) => {
      if (muscleContainer) {
        const current = MusclesImagesModel.getMuscleImage(muscleContainer);
        // const current = MUSCLE_IMAGES[muscleContainer];
        const uniqueKey = `${color}-${muscleContainer}`;
        // Add objects to drawabled array
        temp.push(current[color]);
      }
    });
    return temp;
  }

  /**
   * Associate the provided muscle group with its applicable color
   */
  filterColor(musclegroup): MuscleColors {
    switch (musclegroup) {
      case "antagonist stabilizers":
      case "dynamic stabilizers": 
      case "other":
      case "stabilizers":
        return MuscleColors.GREEN;
      case "synergists":
        return MuscleColors.BLUE;
      case "target":
        return MuscleColors.RED;
      default:
        throw "Muscle Group doesn't exist: " + musclegroup;
    }
  }
}
