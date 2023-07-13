import * as MusclesModel from "../model/MusclesImagesModel";
import { MuscleColor } from "../Enums";
import { checkGetter, checkSetter } from "../Helpers";

const name = "Muscles";

export default class MusclesImages {
  private _colorMap: any[] = [];

  constructor(muscleInformation: {}) {
    // Seperate muscles basied on provided muscle information
    const separateMuscles = this.separateMuscles(muscleInformation);
    // Constuct a mapping of colors to related muscle names
    const mappedColors: {} = this.mapColors(separateMuscles);
    // Create array in which To hold the objects can be draw
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
    Object.keys(MuscleColor).forEach(
      (key) => (muscles[MuscleColor[key]] = new Set())
    );

    // Get needed informational details from the file
    Object.keys(muscleInformation).forEach((category) => {
      let color = this.filterColor(category);
      muscleInformation[category].forEach((muscle) =>
        muscles[color].add(muscle)
      );
    });

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

const MUSCLES_CONSTANTS = {
  BACK: [],
  GENERAL: [],
  "HIP ABDUCTORS (LISTED BELOW)": [
    "AnteriorHipAbductors",
    "PosteriorHipAbductors",
  ],
  "HIP ABDUCTORS (OPPOSITE)": ["AnteriorHipAbductors", "PosteriorHipAbductors"],
  "HIP EXTERNAL ROTATORS (LISTED BELOW)": [],
  "HIP INTERNAL ROTATORS (LISTED BELOW)": [],
  "LONGUS CAPITIS": ["AnteriorSternocleidomastoid"],
  "LONGUS COLLI": ["AnteriorSternocleidomastoid"],
  "NO SIGNIFICANT STABILIZER": [],
  "NO SIGNIFICANT STABILIZERS": [],
  "NO SIGNIFICANT STABILIZERS.": [],
  NONE: [],
  "RECTUS CAPITUS": [],
  "SEE COMMENTS": [],
  SUPINATOR: ["AnteriorForearms", "PosteriorForearms"],
  ADDUCTORS: ["AnteriorHipAdductors", "PosteriorHipAdductors"],
  BICEPSBRACHII: ["AnteriorBiceps"],
  BRACHIALIS: ["AnteriorBiceps"],
  BRACHIORADIALIS: ["AnteriorForearms", "PosteriorForearms"],
  DELTOIDANTERIOR: ["AnteriorDeltoids"],
  DELTOIDLATERAL: ["AnteriorDeltoids", "PosteriorDeltoids", ,],
  DELTOIDPOSTERIOR: ["PosteriorDeltoids"],
  ERECTORSPINAE: ["PosteriorErectorSpinae"],
  "FOREARM#PRONATION": ["AnteriorForearms", "PosteriorForearms"],
  GASTROCNEMIUS: [
    "AnteriorGastrocnemius",
    "PosteriorOuterGastrocnemius",
    "PosteriorInnerGastrocnemius",
  ],
  GLUTEUSMAXIMUS: ["PosteriorGluteusMaximus"],
  GLUTEUSMEDIUS: ["PosteriorHipAbductors"],
  GLUTEUSMINIMUS: ["PosteriorHipAbductors"],
  GRACILIS: ["AnteriorHipAdductors"],
  HAMSTRINGS: ["PosteriorHamstrings"],
  "HIP#ABDUCTION": ["AnteriorHipAbductors", "PosteriorHipAbductors"],
  "HIP#FLEXION": ["AnteriorOuterQuadriceps", "AnteriorMidQuadriceps"],
  HIPEXERNALROTATORS: ["PosteriorHipAdductors"],
  ILIOPSOAS: ["AnteriorHipAdductors"],
  INFRASPINATUS: ["PosteriorRhomboids"],
  LATISSIMUSDORSI: ["PosteriorLatissimus"],
  LEVATORSCAPULAE: ["PosteriorUpperTrapezius"],
  OBLIQUES: ["AnteriorObliques"],
  PECTINEUS: ["AnteriorHipAdductors"],
  PECTORALISCLAVICULAR: ["AnteriorPectoralis"],
  PECTORALISMINOR: ["AnteriorPectoralis"],
  PECTORALISSTERNAL: ["AnteriorPectoralis"],
  POPLITEUS: ["PosteriorOuterGastrocnemius", "PosteriorInnerGastrocnemius"],
  QUADRATUSLUMBORUM: ["AnteriorObliques"],
  QUADRICEPS: ["AnteriorOuterQuadriceps", "AnteriorMidQuadriceps"],
  RECTUSABDOMINIS: [
    "AnteriorUpperRectusAbdominis",
    "AnteriorUpperMidRectusAbdominis",
    "AnteriorLowerMiddleRectusAbdominis",
    "AnteriorLowerRectusAbdominis",
  ],
  RHOMBOIDS: ["PosteriorRhomboids"],
  SARTORIUS: ["AnteriorHipAdductors"],
  SERRATUSANTERIOR: [],
  SOLEUS: ["PosteriorSoleus"],
  SPLENIUS: ["PosteriorUpperTrapezius"],
  STERNOCLEIDOMASTOID: ["AnteriorSternocleidomastoid"],
  SUBSCAPULARIS: ["PosteriorRhomboids"],
  SUPRASPINATUS: ["PosteriorRhomboids"],
  TENSORFASCIAELATAE: ["AnteriorHipAdductors"],
  TERESMAJOR: ["PosteriorRhomboids"],
  TERESMINOR: ["PosteriorRhomboids"],
  TIBIALISANTERIOR: ["AnteriorTibialis"],
  TRAPEZIUSLOWER: ["PosteriorLowerTrapezius"],
  TRAPEZIUSMIDDLE: [
    "PosteriorLowerTrapezius",
    "PosteriorUpperTrapezius",
    "AnteriorTrapezius",
    ,
  ],
  TRAPEZIUSUPPER: ["PosteriorUpperTrapezius", "AnteriorTrapezius", ,],
  TRICEPSBRACHII: ["PosteriorTriceps"],
  WRISTEXTENSORS: ["AnteriorForearms", "PosteriorForearms"],
  WRISTFLEXORS: ["AnteriorForearms", "PosteriorForearms"],
};
