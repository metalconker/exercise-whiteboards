import { MuscleColors } from "../Enums";
import MALE_BODY_IMAGE from "../_database/musclesDB/MaleBody.png";

/**
 * gets the base male body image
 * This function returns the imported MaleBody.png image
 */
export function getMaleBodyImage() {
  return MALE_BODY_IMAGE;
}

export function getMuscleImage(muscleContainer) {
  return MUSCLE_IMAGES[muscleContainer];
}

/**
 * This function takes two parameters, a given muscle name and a color
 * and returns a targeted muscle image with that given color
 */
export function getSingleMuscleImageOfColor(
  muscle: string,
  color: MuscleColors
): NodeRequire {
  return MUSCLE_IMAGES[muscle][color];
}

/**
 * This function takes two parameters, an array of muscles names and a
 * color, and finds and returns an array of unique muslce images with
 * each muscle in the array in the given corresponding color.
 */
export function getAllUniqueMuscleImagesOfColor(
  muscles: string[],
  color: MuscleColors
): NodeRequire[] {
  let musclecolors: NodeRequire[] = [];
  // This 'for' loop will loop over the provided array of
  // muscle names and return musclecolor images
  for (let muscle of muscles) {
    // error check for muscles
    // This 'if' statement throws an error message if
    // the given muscle does not exist
    if (!MUSCLE_IMAGES.hasOwnProperty(muscle)) {
      throw "Muscle doesn't exist";
    }
    let musclecolor = getSingleMuscleImageOfColor(muscle, color);
    musclecolors.push(musclecolor);
  }
  // This line creates an array from the targeted set
  // of muscle images without any duplicates
  return Array.from(new Set(musclecolors));
}

const MUSCLE_IMAGES = {
  AnteriorBiceps: {
    green: require("../_database/musclesDB/green/AnteriorBiceps.png"),
    blue: require("../_database/musclesDB/blue/AnteriorBiceps.png"),
    red: require("../_database/musclesDB/red/AnteriorBiceps.png"),
  },
  AnteriorDeltoids: {
    green: require("../_database/musclesDB/green/AnteriorDeltoids.png"),
    blue: require("../_database/musclesDB/blue/AnteriorDeltoids.png"),
    red: require("../_database/musclesDB/red/AnteriorDeltoids.png"),
  },
  AnteriorForearms: {
    green: require("../_database/musclesDB/green/AnteriorForearms.png"),
    blue: require("../_database/musclesDB/blue/AnteriorForearms.png"),
    red: require("../_database/musclesDB/red/AnteriorForearms.png"),
  },
  AnteriorGastrocnemius: {
    green: require("../_database/musclesDB/green/AnteriorGastrocnemius.png"),
    blue: require("../_database/musclesDB/blue/AnteriorGastrocnemius.png"),
    red: require("../_database/musclesDB/red/AnteriorGastrocnemius.png"),
  },
  AnteriorHipAbductors: {
    green: require("../_database/musclesDB/green/AnteriorHipAbductors.png"),
    blue: require("../_database/musclesDB/blue/AnteriorHipAbductors.png"),
    red: require("../_database/musclesDB/red/AnteriorHipAbductors.png"),
  },
  AnteriorHipAdductors: {
    green: require("../_database/musclesDB/green/AnteriorHipAdductors.png"),
    blue: require("../_database/musclesDB/blue/AnteriorHipAdductors.png"),
    red: require("../_database/musclesDB/red/AnteriorHipAdductors.png"),
  },
  AnteriorLowerMiddleRectusAbdominis: {
    green: require("../_database/musclesDB/green/AnteriorLowerMiddleRectusAbdominis.png"),
    blue: require("../_database/musclesDB/blue/AnteriorLowerMiddleRectusAbdominis.png"),
    red: require("../_database/musclesDB/red/AnteriorLowerMiddleRectusAbdominis.png"),
  },
  AnteriorLowerRectusAbdominis: {
    green: require("../_database/musclesDB/green/AnteriorLowerRectusAbdominis.png"),
    blue: require("../_database/musclesDB/blue/AnteriorLowerRectusAbdominis.png"),
    red: require("../_database/musclesDB/red/AnteriorLowerRectusAbdominis.png"),
  },
  AnteriorObliques: {
    green: require("../_database/musclesDB/green/AnteriorObliques.png"),
    blue: require("../_database/musclesDB/blue/AnteriorObliques.png"),
    red: require("../_database/musclesDB/red/AnteriorObliques.png"),
  },
  AnteriorPectoralis: {
    green: require("../_database/musclesDB/green/AnteriorPectoralis.png"),
    blue: require("../_database/musclesDB/blue/AnteriorPectoralis.png"),
    red: require("../_database/musclesDB/red/AnteriorPectoralis.png"),
  },
  AnteriorOuterQuadriceps: {
    green: require("../_database/musclesDB/green/AnteriorOuterQuadriceps.png"),
    blue: require("../_database/musclesDB/blue/AnteriorOuterQuadriceps.png"),
    red: require("../_database/musclesDB/red/AnteriorOuterQuadriceps.png"),
  },
  AnteriorMidQuadriceps: {
    green: require("../_database/musclesDB/green/AnteriorMidQuadriceps.png"),
    blue: require("../_database/musclesDB/blue/AnteriorMidQuadriceps.png"),
    red: require("../_database/musclesDB/red/AnteriorMidQuadriceps.png"),
  },
  AnteriorSternocleidomastoid: {
    green: require("../_database/musclesDB/green/AnteriorSternocleidomastoid.png"),
    blue: require("../_database/musclesDB/blue/AnteriorSternocleidomastoid.png"),
    red: require("../_database/musclesDB/red/AnteriorSternocleidomastoid.png"),
  },
  AnteriorTibialis: {
    green: require("../_database/musclesDB/green/AnteriorTibialis.png"),
    blue: require("../_database/musclesDB/blue/AnteriorTibialis.png"),
    red: require("../_database/musclesDB/red/AnteriorTibialis.png"),
  },
  AnteriorTrapezius: {
    green: require("../_database/musclesDB/green/AnteriorTrapezius.png"),
    blue: require("../_database/musclesDB/blue/AnteriorTrapezius.png"),
    red: require("../_database/musclesDB/red/AnteriorTrapezius.png"),
  },
  AnteriorUpperMidRectusAbdominis: {
    green: require("../_database/musclesDB/green/AnteriorUpperMidRectusAbdominis.png"),
    blue: require("../_database/musclesDB/blue/AnteriorUpperMidRectusAbdominis.png"),
    red: require("../_database/musclesDB/red/AnteriorUpperMidRectusAbdominis.png"),
  },
  AnteriorUpperRectusAbdominis: {
    green: require("../_database/musclesDB/green/AnteriorUpperRectusAbdominis.png"),
    blue: require("../_database/musclesDB/blue/AnteriorUpperRectusAbdominis.png"),
    red: require("../_database/musclesDB/red/AnteriorUpperRectusAbdominis.png"),
  },
  PosteriorDeltoids: {
    green: require("../_database/musclesDB/green/PosteriorDeltoids.png"),
    blue: require("../_database/musclesDB/blue/PosteriorDeltoids.png"),
    red: require("../_database/musclesDB/red/PosteriorDeltoids.png"),
  },
  PosteriorErectorSpinae: {
    green: require("../_database/musclesDB/green/PosteriorErectorSpinae.png"),
    blue: require("../_database/musclesDB/blue/PosteriorErectorSpinae.png"),
    red: require("../_database/musclesDB/red/PosteriorErectorSpinae.png"),
  },
  PosteriorForearms: {
    green: require("../_database/musclesDB/green/PosteriorForearms.png"),
    blue: require("../_database/musclesDB/blue/PosteriorForearms.png"),
    red: require("../_database/musclesDB/red/PosteriorForearms.png"),
  },
  PosteriorOuterGastrocnemius: {
    green: require("../_database/musclesDB/green/PosteriorOuterGastrocnemius.png"),
    blue: require("../_database/musclesDB/blue/PosteriorOuterGastrocnemius.png"),
    red: require("../_database/musclesDB/red/PosteriorOuterGastrocnemius.png"),
  },
  PosteriorInnerGastrocnemius: {
    green: require("../_database/musclesDB/green/PosteriorInnerGastrocnemius.png"),
    blue: require("../_database/musclesDB/blue/PosteriorInnerGastrocnemius.png"),
    red: require("../_database/musclesDB/red/PosteriorInnerGastrocnemius.png"),
  },
  PosteriorGluteusMaximus: {
    green: require("../_database/musclesDB/green/PosteriorGluteusMaximus.png"),
    blue: require("../_database/musclesDB/blue/PosteriorGluteusMaximus.png"),
    red: require("../_database/musclesDB/red/PosteriorGluteusMaximus.png"),
  },
  PosteriorHamstrings: {
    green: require("../_database/musclesDB/green/PosteriorHamstrings.png"),
    blue: require("../_database/musclesDB/blue/PosteriorHamstrings.png"),
    red: require("../_database/musclesDB/red/PosteriorHamstrings.png"),
  },
  PosteriorHipAbductors: {
    green: require("../_database/musclesDB/green/PosteriorHipAbductors.png"),
    blue: require("../_database/musclesDB/blue/PosteriorHipAbductors.png"),
    red: require("../_database/musclesDB/red/PosteriorHipAbductors.png"),
  },
  PosteriorHipAdductors: {
    green: require("../_database/musclesDB/green/PosteriorHipAdductors.png"),
    blue: require("../_database/musclesDB/blue/PosteriorHipAdductors.png"),
    red: require("../_database/musclesDB/red/PosteriorHipAdductors.png"),
  },
  PosteriorLatissimus: {
    green: require("../_database/musclesDB/green/PosteriorLatissimus.png"),
    blue: require("../_database/musclesDB/blue/PosteriorLatissimus.png"),
    red: require("../_database/musclesDB/red/PosteriorLatissimus.png"),
  },
  PosteriorLowerTrapezius: {
    green: require("../_database/musclesDB/green/PosteriorLowerTrapezius.png"),
    blue: require("../_database/musclesDB/blue/PosteriorLowerTrapezius.png"),
    red: require("../_database/musclesDB/red/PosteriorLowerTrapezius.png"),
  },
  PosteriorRhomboids: {
    green: require("../_database/musclesDB/green/PosteriorRhomboids.png"),
    blue: require("../_database/musclesDB/blue/PosteriorRhomboids.png"),
    red: require("../_database/musclesDB/red/PosteriorRhomboids.png"),
  },
  PosteriorSoleus: {
    green: require("../_database/musclesDB/green/PosteriorSoleus.png"),
    blue: require("../_database/musclesDB/blue/PosteriorSoleus.png"),
    red: require("../_database/musclesDB/red/PosteriorSoleus.png"),
  },
  PosteriorTriceps: {
    green: require("../_database/musclesDB/green/PosteriorTriceps.png"),
    blue: require("../_database/musclesDB/blue/PosteriorTriceps.png"),
    red: require("../_database/musclesDB/red/PosteriorTriceps.png"),
  },
  PosteriorUpperTrapezius: {
    green: require("../_database/musclesDB/green/PosteriorUpperTrapezius.png"),
    blue: require("../_database/musclesDB/blue/PosteriorUpperTrapezius.png"),
    red: require("../_database/musclesDB/red/PosteriorUpperTrapezius.png"),
  },
};
