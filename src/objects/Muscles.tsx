import * as MusclesModel from "../model/MusclesModel";
import { MuscleColor } from "../Enums";
import { checkGetter, checkSetter } from "../Helpers";
import { MUSCLES_CONSTANTS } from "../view/styles/Stylesheet";

const name = "Muscles";

export default class Muscles {
  private _colorMap: any[] = [];

  constructor(muscleInformation: {}) {
    // Seperate muscles basied on provided muscle information
    const separateMuscles = this.separateMuscles(muscleInformation);
    console.log(separateMuscles);
    // Constuct a mapping of colors to related muscle names
    const mappedColors = this.mapColors(separateMuscles);
    // Create array in which To hold the objects can be draw
    // const drawable: any[] = [];
    // Loop through the available muscle colors
    Object.keys(MuscleColor).forEach((colorkey) => {
      const color = MuscleColor[colorkey];
      // Create the objects for each color to be drawable
      this.colorMap.push(this.loopColor(color, mappedColors[color]));
    });
  }

  public get colorMap(): any[] {
    return checkGetter(this._colorMap, "colorMap", name);
  }
  public set colorMap(value: any[]) {
    this._colorMap = checkSetter(value, "colorMap", name);
  }

  separateMuscles(muscleInformation: {}) {
    let muscles = {};
    // Intialize new Set for each colors and add them to `muscles` object
    for (let colorkey in MuscleColor) {
      muscles[MuscleColor[colorkey]] = new Set();
    }
    console.log(muscles);
    // Get needed informational details from the file
    for (let category in muscleInformation) {
      let color;
      if (
        category in
        [
          "antagonist stabilizers",
          "dynamic stabilizers",
          "other",
          "stabilizers",
          "synergists",
          "target",
        ]
      ) {
        color = this.filterColor(category);
      } else continue;
      let info = muscleInformation[category];
      console.log(color);
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
    Object.keys(MuscleColor).forEach((colorKey) => {
      const color = MuscleColor[colorKey];
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
        temp.push(current[color]);
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
        return MuscleColor.GREEN;
      case "dynamic stabilizers":
        return MuscleColor.GREEN;
      case "other":
        return MuscleColor.GREEN;
      case "stabilizers":
        return MuscleColor.GREEN;
      case "synergists":
        return MuscleColor.BLUE;
      case "target":
        return MuscleColor.RED;
      default:
        throw "Muscle Group doesn't exist: " + musclegroup;
    }
  }
}
