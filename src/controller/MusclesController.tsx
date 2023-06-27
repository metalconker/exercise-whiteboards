import { Box } from "@mui/material";
import React from "react";
import { MUSCLE_COLORS } from "../Constants";
import { MUSCLES_CONSTANTS } from "../view/styles/Stylesheet";
import * as MusclesModel from "../model/MusclesModel";
/**
 * MuscleViewController class creates objects
 * based on color in order to draw muscles
 */
export class MusclesController {

  drawable: any[] = [];

  constructor(muscleInformation: {}) {
    // Seperate muscles basied on provided muscle information
    const separateMuscles = this.separateMuscles(muscleInformation);
    // Constuct a mapping of colors to related muscle names
    const mappedColors = this.mapColors(separateMuscles);
    // Create array in which To hold the objects can be draw
    // const drawable: any[] = [];
    // Loop through the available muscle colors
    Object.keys(MUSCLE_COLORS).forEach((colorkey) => {
      const color = MUSCLE_COLORS[colorkey];
      // Create the objects for each color to be drawable
      this.drawable.push(this.loopColor(color, mappedColors[color]));
    });
  }

  render()
  {
    return this.drawable;
  }

  separateMuscles(muscleInformation: {}) {
    let muscles = {};
    // Intialize new Set for each colors and add them to `muscles` object
    for (let colorkey in MUSCLE_COLORS) {
      muscles[MUSCLE_COLORS[colorkey]] = new Set();
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
    Object.keys(MUSCLE_COLORS).forEach((colorKey) => {
      const color = MUSCLE_COLORS[colorKey];
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
        const current = MusclesModel.getMuscleImage(muscleContainer);
        // const current = MUSCLE_IMAGES[muscleContainer];
        const uniqueKey = `${color}-${muscleContainer}`;
        // Add objects to drawabled array
        temp.push(
          <Box key={uniqueKey}>
            {/* use unique keys to associate data retrieval */}
            <img src={current[color]} alt="popup" style={popupStyle} />
          </Box>
        );
      }
    });

    return temp;
  }

  /**
   * Associate the provided muscle group with its applicable color
   */
  filterColor(musclegroup) {
    switch (musclegroup) {
      case "antagonist stabilizers":
        return MUSCLE_COLORS.GREEN;
      case "dynamic stabilizers":
        return MUSCLE_COLORS.GREEN;
      case "other":
        return MUSCLE_COLORS.GREEN;
      case "stabilizers":
        return MUSCLE_COLORS.GREEN;
      case "synergists":
        return MUSCLE_COLORS.BLUE;
      case "target":
        return MUSCLE_COLORS.RED;
      default:
        throw "Muscle Group doesn't exist: " + musclegroup;
    }
  }
}
