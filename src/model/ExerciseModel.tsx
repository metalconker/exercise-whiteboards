import {
  ImageExtension,
  MediaType,
  MuscleType,
  VideoExtension,
} from "../Enums";
import { checkGetter, checkParameters } from "../Helpers";
const name = "ExerciseModel";

/* Promises to return an array of dictionaries as follows:
  {
    metaID:
        {
            id:
            details:
            media:
        }
  }
*/
export function getMultipleMetadata(metaIDs: Array<string>): Array<{}> {
  checkParameters(Object.entries(arguments), "getMultipleMetadata");
  let temp: Array<{}> = [];
  for (let metaID of metaIDs) {
    temp[metaID] = getSingleMetadata(metaID);
  }
  return checkGetter(temp, "getMultipleMetadata", name);
}

/* Promises to return a dictionary as follows:
  metaID:
    {
      id:
      details:
      media:
    }
*/
export function getSingleMetadata(metaID: string): {} {
  checkParameters(Object.entries(arguments), "getSingleMetadata");
  let temp = selectDatabase(metaID)[metaID];
  return checkGetter(temp, "getSingleMetadata", name);
}

export function getExerciseDetails(metaID: string) {
  checkParameters(Object.entries(arguments), "getExerciseDetails");
  let temp = selectDatabase(metaID)[metaID]["details"][metaID];
  return checkGetter(temp, "getExerciseDetails", name);
}

export function getExerciseID(metaID: string): string {
  checkParameters(Object.entries(arguments), "getExerciseID");
  let temp = selectDatabase(metaID)[metaID]["id"];
  return checkGetter(temp, "getExerciseID", name);
}

export function getMedia(metaID: string): string {
  checkParameters(Object.entries(arguments), "getMedia");
  let temp = selectDatabase(metaID)[metaID]["media"] ?? "";
  return checkGetter(temp, "getMedia", name);
}

export function getMediaType(metaID: string): MediaType {
  checkParameters(Object.entries(arguments), "getMediaType");
  let uri = getMedia(metaID);
  if (!uri) return MediaType.IMAGE;

  if (
    uri.includes("image") ||
    Object.values(ImageExtension).some((ext) => uri.includes(ext))
  ) {
    return MediaType.IMAGE;
  }

  if (
    uri.includes("video") ||
    Object.values(VideoExtension).some((ext) => uri.includes(ext))
  ) {
    return MediaType.VIDEO;
  }

  throw "Media Extension not found: " + metaID;
}

// // Returns the muscle inf in set format
export function getMuscleInformation(metaID: string): {} {
  checkParameters(Object.entries(arguments), "getMuscleInformation");
  const exerciseDetails = getExerciseDetails(metaID);
  const muscleInformation = {};
  for (let [muscleType, muscleString] of Object.entries(exerciseDetails)) {
    const muscles = parseMuscleString(muscleString);
    muscleInformation[muscleType] = new Set(muscles);
  }
  return muscleInformation;
}

export function getMuscleGroup(metaID: string): string {
  checkParameters(Object.entries(arguments), "getMuscleGroup");
  let temp = getExerciseDetails(metaID)["musclegroup"];
  return checkGetter(temp, "getMuscleGroup", name);
}
export function getEquipment(metaID: string): string {
  checkParameters(Object.entries(arguments), "getEquipment");
  let temp = getExerciseDetails(metaID)["equipment"];
  return checkGetter(temp, "getEquipment", name);
}
export function getExerciseType(metaID: string): string {
  checkParameters(Object.entries(arguments), "getExerciseType");
  let temp = getExerciseDetails(metaID)["exercisetype"];
  return checkGetter(temp, "getExerciseType", name);
}
export function getName(metaID: string): string {
  checkParameters(Object.entries(arguments), "getName");
  let temp = getExerciseDetails(metaID)["name"];
  return checkGetter(temp, "getName", name);
}
export function getMuscleClass(metaID: string): string {
  checkParameters(Object.entries(arguments), "getMuscleClass");
  let temp = getExerciseDetails(metaID)["muscleclass"];
  return checkGetter(temp, "getMuscleClass", name);
}
export function getUtility(metaID: string): string {
  checkParameters(Object.entries(arguments), "getUtility");
  let temp = getExerciseDetails(metaID)["utility"];
  return checkGetter(temp, "getUtility", name);
}
export function getMechanics(metaID: string): string {
  checkParameters(Object.entries(arguments), "getMechanics");
  let temp = getExerciseDetails(metaID)["mechanics"];
  return checkGetter(temp, "getMechanics", name);
}
export function getForce(metaID: string): string {
  checkParameters(Object.entries(arguments), "getForce");
  let temp = getExerciseDetails(metaID)["force"];
  return checkGetter(temp, "getForce", name);
}
export function getPreparation(metaID: string): string {
  checkParameters(Object.entries(arguments), "getPreparation");
  return getExerciseDetails(metaID)["preparation"] ?? "No Preparation Found";
}
export function getExecution(metaID: string): string {
  checkParameters(Object.entries(arguments), "getExecution");
  return getExerciseDetails(metaID)["execution"]?? "No Execution Found";
}
export function getComments(metaID: string): string {
  checkParameters(Object.entries(arguments), "getComments");
  return getExerciseDetails(metaID)["comments"] ?? "No Comments Found";
}

function parseMuscleString(muscles: any): Array<string> {
  checkParameters(Object.entries(arguments), "parseMuscleString");
  return muscles.replace(/\s/g, "").split(",");
}

// Chooses the correct database to return information from
function selectDatabase(metaID: string): {} {
  checkParameters(Object.entries(arguments), "selectDatabase");
  if (metaID.startsWith("Custom")) {
    return CUSTOM_METADATA;
  }
  return EXRX_METADATA;
}

const CUSTOM_METADATA = {
  CustomStandAndReach: {
    id: "StandAndReach",
    details: require("../_database/exerciseDB/custom/details.json"),
    media: require("../_database/exerciseDB/custom/StandAndReach.jpg"),
  },
  CustomQuadrupedThoracicRotation: {
    id: "QuadrupedThoracicRotation",
    details: require("../_database/exerciseDB/custom/details.json"),
    media: require("../_database/exerciseDB/custom/QuadrupedThoracicRotation.gif"),
  },
  CustomScarecrow: {
    id: "Scarecrow",
    details: require("../_database/exerciseDB/custom/details.json"),
    media: require("../_database/exerciseDB/custom/Scarecrow.jpg"),
  },
  CustomForearmMachine: {
    id: "ForearmMachine",
    details: require("../_database/exerciseDB/custom/details.json"),
    media: require("../_database/exerciseDB/custom/ForearmMachine.jpg"),
  },
  CustomMcGillCurlUp: {
    id: "McGillCurlUp",
    details: require("../_database/exerciseDB/custom/details.json"),
    media: require("../_database/exerciseDB/custom/McGillCurlUp.mp4"),
  },

  CustomLyingObliqueReach: {
    id: "LyingObliqueReach",
    details: require("../_database/exerciseDB/custom/details.json"),
    media: require("../_database/exerciseDB/custom/LyingObliqueReach.gif"),
  },
  CustomClamshell: {
    id: "Clamshell",
    details: require("../_database/exerciseDB/custom/details.json"),
    media: require("../_database/exerciseDB/custom/Clamshell.jpg"),
  },
};

const EXRX_METADATA = {
  NeckNeckRetraction: {
    id: "NeckRetraction",
    details: require("../_database/exerciseDB/exrx/Neck/Sternocleidomastoid/stretch/details.json"),
    media: require("../_database/exerciseDB/exrx/Neck/Sternocleidomastoid/stretch/NeckRetraction.jpg"),
  },
  BackDoorway: {
    id: "Doorway",
    details: require("../_database/exerciseDB/exrx/Back/Subscapularis/stretch/details.json"),
    media: require("../_database/exerciseDB/exrx/Back/Subscapularis/stretch/Doorway.jpg"),
  },
  ChestDoorway: {
    id: "Doorway",
    details: require("../_database/exerciseDB/exrx/Chest/PectoralSternal/stretch/details.json"),
    media: require("../_database/exerciseDB/exrx/Chest/PectoralSternal/stretch/Doorway.jpg"),
  },
  BackWall: {
    id: "Wall",
    details: require("../_database/exerciseDB/exrx/Back/LatissimusDorsi/stretch/details.json"),
    media: require("../_database/exerciseDB/exrx/Back/LatissimusDorsi/stretch/Wall.jpg"),
  },
  ChestTowel: {
    id: "Towel",
    details: require("../_database/exerciseDB/exrx/Chest/PectoralisMinor/stretch/details.json"),
    media: require("../_database/exerciseDB/exrx/Chest/PectoralisMinor/stretch/Towel.jpg"),
  },

  NeckLyingIsometricNeckRetr: {
    id: "LyingIsometricNeckRetr",
    details: require("../_database/exerciseDB/exrx/Neck/Splenius/isometric/details.json"),
    media: require("../_database/exerciseDB/exrx/Neck/Splenius/isometric/LyingIsometricNeckRetr.jpg"),
  },

  ChestWall: {
    id: "Wall",
    details: require("../_database/exerciseDB/exrx/Chest/PectoralisMinor/stretch/details.json"),
    media: require("../_database/exerciseDB/exrx/Chest/PectoralisMinor/stretch/Wall.mp4"),
  },
  ShouldersDBArnoldPress: {
    id: "DBArnoldPress",
    details: require("../_database/exerciseDB/exrx/Shoulders/DeltoidAnterior/dumbbell/details.json"),
    media: require("../_database/exerciseDB/exrx/Shoulders/DeltoidAnterior/dumbbell/DBArnoldPress.mp4"),
  },
  ShouldersDBLateralRaise: {
    id: "DBLateralRaise",
    details: require("../_database/exerciseDB/exrx/Shoulders/DeltoidLateral/dumbbell/details.json"),
    media: require("../_database/exerciseDB/exrx/Shoulders/DeltoidLateral/dumbbell/DBLateralRaise.mp4"),
  },
  ChestBBFloorPress: {
    id: "BBFloorPress",
    details: require("../_database/exerciseDB/exrx/Chest/PectoralSternal/barbell/details.json"),
    media: require("../_database/exerciseDB/exrx/Chest/PectoralSternal/barbell/BBFloorPress.mp4"),
  },
  ShouldersDBSeatedRearLateralRaise: {
    id: "DBSeatedRearLateralRaise",
    details: require("../_database/exerciseDB/exrx/Shoulders/DeltoidPosterior/dumbbell/details.json"),
    media: require("../_database/exerciseDB/exrx/Shoulders/DeltoidPosterior/dumbbell/DBSeatedRearLateralRaise.mp4"),
  },
  UpperArmsDBTriExt: {
    id: "DBTriExt",
    details: require("../_database/exerciseDB/exrx/UpperArms/Triceps/dumbbell/details.json"),
    media: require("../_database/exerciseDB/exrx/UpperArms/Triceps/dumbbell/DBTriExt.mp4"),
  },
  ForearmsDBHammerCurl: {
    id: "DBHammerCurl",
    details: require("../_database/exerciseDB/exrx/Forearms/Brachioradialis/dumbbell/details.json"),
    media: require("../_database/exerciseDB/exrx/Forearms/Brachioradialis/dumbbell/DBHammerCurl.mp4"),
  },

  NeckWtLyingNeckExtension: {
    id: "WtLyingNeckExtension",
    details: require("../_database/exerciseDB/exrx/Neck/Splenius/weighted/details.json"),
    media: require("../_database/exerciseDB/exrx/Neck/Splenius/weighted/WtLyingNeckExtension.mp4"),
  },
  NeckWtNeckLateralFlex: {
    id: "WtNeckLateralFlex",
    details: require("../_database/exerciseDB/exrx/Neck/Sternocleidomastoid/weighted/details.json"),
    media: require("../_database/exerciseDB/exrx/Neck/Sternocleidomastoid/weighted/WtNeckLateralFlex.mp4"),
  },
  NeckWtLyingNeckFlexion: {
    id: "WtLyingNeckFlexion",
    details: require("../_database/exerciseDB/exrx/Neck/Sternocleidomastoid/weighted/details.json"),
    media: require("../_database/exerciseDB/exrx/Neck/Sternocleidomastoid/weighted/WtLyingNeckFlexion.mp4"),
  },
  ChestBWDeclinePushup: {
    id: "BWDeclinePushup",
    details: require("../_database/exerciseDB/exrx/Chest/PectoralClavicular/bodyweight/details.json"),
    media: require("../_database/exerciseDB/exrx/Chest/PectoralClavicular/bodyweight/BWDeclinePushup.mp4"),
  },
  BackDBBentOverRow: {
    id: "DBBentOverRow",
    details: require("../_database/exerciseDB/exrx/Back/BackGeneral/dumbbell/details.json"),
    media: require("../_database/exerciseDB/exrx/Back/BackGeneral/dumbbell/DBBentOverRow.mp4"),
  },
  ChestBWChestDip: {
    id: "BWChestDip",
    details: require("../_database/exerciseDB/exrx/Chest/PectoralSternal/bodyweight/details.json"),
    media: require("../_database/exerciseDB/exrx/Chest/PectoralSternal/bodyweight/BWChestDip.mp4"),
  },
  BackBWUnderhandChinup: {
    id: "BWUnderhandChinup",
    details: require("../_database/exerciseDB/exrx/Back/LatissimusDorsi/bodyweight/details.json"),
    media: require("../_database/exerciseDB/exrx/Back/LatissimusDorsi/bodyweight/BWUnderhandChinup.mp4"),
  },

  BackDBShrug: {
    id: "DBShrug",
    details: require("../_database/exerciseDB/exrx/Back/TrapeziusUpper/dumbbell/details.json"),
    media: require("../_database/exerciseDB/exrx/Back/TrapeziusUpper/dumbbell/DBShrug.mp4"),
  },
  ChestBWPushup: {
    id: "BWPushup",
    details: require("../_database/exerciseDB/exrx/Chest/PectoralSternal/bodyweight/details.json"),
    media: require("../_database/exerciseDB/exrx/Chest/PectoralSternal/bodyweight/BWPushup.mp4"),
  },

  ChestBWInclinePushup: {
    id: "BWInclinePushup",
    details: require("../_database/exerciseDB/exrx/Chest/PectoralSternal/bodyweight/details.json"),
    media: require("../_database/exerciseDB/exrx/Chest/PectoralSternal/bodyweight/BWInclinePushup.mp4"),
  },

  ChestDBInclineShoulderRaise: {
    id: "DBInclineShoulderRaise",
    details: require("../_database/exerciseDB/exrx/Chest/SerratusAnterior/dumbbell/details.json"),
    media: require("../_database/exerciseDB/exrx/Chest/SerratusAnterior/dumbbell/DBInclineShoulderRaise.mp4"),
  },

  ThighsStanding: {
    id: "Standing",
    details: require("../_database/exerciseDB/exrx/Thighs/Hamstrings/stretch/details.json"),
    media: require("../_database/exerciseDB/exrx/Thighs/Hamstrings/stretch/Standing.jpg"),
  },
  HipsStanding: {
    id: "Standing",
    details: require("../_database/exerciseDB/exrx/Hips/HipFlexors/stretch(iliopsoas)/details.json"),
    media: require("../_database/exerciseDB/exrx/Hips/HipFlexors/stretch(iliopsoas)/Standing.jpg"),
  },
  HipsSeated: {
    id: "Seated",
    details: require("../_database/exerciseDB/exrx/Hips/GluteusMaximus/stretch/details.json"),
    media: require("../_database/exerciseDB/exrx/Hips/GluteusMaximus/stretch/Seated.jpg"),
  },
  WaistSeatedBentover: {
    id: "SeatedBentover",
    details: require("../_database/exerciseDB/exrx/Waist/ErectorSpinae/stretch/details.json"),
    media: require("../_database/exerciseDB/exrx/Waist/ErectorSpinae/stretch/SeatedBentover.jpg"),
  },
  HipsKneelingHipFlexor: {
    id: "KneelingHipFlexor",
    details: require("../_database/exerciseDB/exrx/Hips/HipFlexors/stretch(iliopsoas)/details.json"),
    media: require("../_database/exerciseDB/exrx/Hips/HipFlexors/stretch(iliopsoas)/KneelingHipFlexor.jpg"),
  },
  WaistCatMovement: {
    id: "CatMovement",
    details: require("../_database/exerciseDB/exrx/Waist/ErectorSpinae/stretch/details.json"),
    media: require("../_database/exerciseDB/exrx/Waist/ErectorSpinae/stretch/CatMovement.mp4"),
  },
  HipsLyingModified: {
    id: "LyingModified",
    details: require("../_database/exerciseDB/exrx/Hips/GluteusMaximus/stretch/details.json"),
    media: require("../_database/exerciseDB/exrx/Hips/GluteusMaximus/stretch/LyingModified.jpg"),
  },
  ThighsLyingSingleLeg: {
    id: "LyingSingleLeg",
    details: require("../_database/exerciseDB/exrx/Thighs/Hamstrings/stretch/details.json"),
    media: require("../_database/exerciseDB/exrx/Thighs/Hamstrings/stretch/LyingSingleLeg.jpg"),
  },
  WaistProne: {
    id: "Prone",
    details: require("../_database/exerciseDB/exrx/Waist/RectusAbdominis/stretch/details.json"),
    media: require("../_database/exerciseDB/exrx/Waist/RectusAbdominis/stretch/Prone.jpg"),
  },
  WaistBWAlternatingBirdDog: {
    id: "BWAlternatingBirdDog",
    details: require("../_database/exerciseDB/exrx/Waist/ErectorSpinae/bodyweight/details.json"),
    media: require("../_database/exerciseDB/exrx/Waist/ErectorSpinae/bodyweight/BWAlternatingBirdDog.mp4"),
  },

  WaistBWFrontPlank: {
    id: "BWFrontPlank",
    details: require("../_database/exerciseDB/exrx/Waist/RectusAbdominis/isometric/details.json"),
    media: require("../_database/exerciseDB/exrx/Waist/RectusAbdominis/isometric/BWFrontPlank.jpg"),
  },
  WaistBWCrunch: {
    id: "BWCrunch",
    details: require("../_database/exerciseDB/exrx/Waist/RectusAbdominis/bodyweight/details.json"),
    media: require("../_database/exerciseDB/exrx/Waist/RectusAbdominis/bodyweight/BWCrunch.mp4"),
  },
  HipsBWStraightLegRaise: {
    id: "BWStraightLegRaise",
    details: require("../_database/exerciseDB/exrx/Hips/HipFlexors/bodyweight/details.json"),
    media: require("../_database/exerciseDB/exrx/Hips/HipFlexors/bodyweight/BWStraightLegRaise.mp4"),
  },
  WaistBWSidePlank: {
    id: "BWSidePlank",
    details: require("../_database/exerciseDB/exrx/Waist/Obliques/isometric/details.json"),
    media: require("../_database/exerciseDB/exrx/Waist/Obliques/isometric/BWSidePlank.jpg"),
  },

  WaistBWLyingLegHipRaise: {
    id: "BWLyingLegHipRaise",
    details: require("../_database/exerciseDB/exrx/Waist/RectusAbdominis/bodyweight/details.json"),
    media: require("../_database/exerciseDB/exrx/Waist/RectusAbdominis/bodyweight/BWLyingLegHipRaise.mp4"),
  },

  HipsDBSquat: {
    id: "DBSquat",
    details: require("../_database/exerciseDB/exrx/Hips/GluteusMaximus/dumbbell/details.json"),
    media: require("../_database/exerciseDB/exrx/Hips/GluteusMaximus/dumbbell/DBSquat.mp4"),
  },
  HipsDBLunge: {
    id: "DBLunge",
    details: require("../_database/exerciseDB/exrx/Hips/GluteusMaximus/dumbbell/details.json"),
    media: require("../_database/exerciseDB/exrx/Hips/GluteusMaximus/dumbbell/DBLunge.mp4"),
  },
  HipsBBHipThrust: {
    id: "BBHipThrust",
    details: require("../_database/exerciseDB/exrx/Hips/GluteusMaximus/barbell/details.json"),
    media: require("../_database/exerciseDB/exrx/Hips/GluteusMaximus/barbell/BBHipThrust.mp4"),
  },

  CalvesBWStandingCalfRaise: {
    id: "BWStandingCalfRaise",
    details: require("../_database/exerciseDB/exrx/Calves/Gastrocnemius/bodyweight/details.json"),
    media: require("../_database/exerciseDB/exrx/Calves/Gastrocnemius/bodyweight/BWStandingCalfRaise.mp4"),
  },
  CalvesSMSeatedCalfRaise: {
    id: "SMSeatedCalfRaise",
    details: require("../_database/exerciseDB/exrx/Calves/Soleus/smith/details.json"),
    media: require("../_database/exerciseDB/exrx/Calves/Soleus/smith/SMSeatedCalfRaise.mp4"),
  },
  HipsDBRearLunge: {
    id: "DBRearLunge",
    details: require("../_database/exerciseDB/exrx/Hips/GluteusMaximus/dumbbell/details.json"),
    media: require("../_database/exerciseDB/exrx/Hips/GluteusMaximus/dumbbell/DBRearLunge.mp4"),
  },
  HipsDBStepUp: {
    id: "DBStepUp",
    details: require("../_database/exerciseDB/exrx/Hips/GluteusMaximus/dumbbell/details.json"),
    media: require("../_database/exerciseDB/exrx/Hips/GluteusMaximus/dumbbell/DBStepUp.mp4"),
  },
  HipsCBHipAbduction: {
    id: "CBHipAbduction",
    details: require("../_database/exerciseDB/exrx/Hips/HipAbductors/cable/details.json"),
    media: require("../_database/exerciseDB/exrx/Hips/HipAbductors/cable/CBHipAbduction.mp4"),
  },

  NeckLVNeckFlexionH: {
    id: "LVNeckFlexionH",
    details: require("../_database/exerciseDB/exrx/Neck/Sternocleidomastoid/lever(plateloaded)/details.json"),
    media: require("../_database/exerciseDB/exrx/Neck/Sternocleidomastoid/lever(plateloaded)/LVNeckFlexionH.mp4"),
  },

  ThighsDBSingleLegStiffLegDeadlift: {
    id: "DBSingleLegStiffLegDeadlift",
    details: require("../_database/exerciseDB/exrx/Hips/GluteusMaximus/dumbbell/details.json"),
    media: require("../_database/exerciseDB/exrx/Hips/GluteusMaximus/dumbbell/DBSingleLegStiffLegDeadlift.mp4"),
  },
};
