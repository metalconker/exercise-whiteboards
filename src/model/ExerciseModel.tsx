import {
  ImageExtensions,
  MediaTypes,
  MuscleTypes,
  VideoExtensions,
} from "../Constants";

/* Promises to return a dictionary as follows:
  {
    metaID:
        {
            id:
            details:
            media:
        }
  }
*/
export function GetMultipleMetadata(metaIDs: Array<string>) {
  var temp = {};
  for (var metaID of metaIDs) {
    temp[metaID] = GetSingleMetadata(metaID);
  }
  return temp;
}

/* Promises to return a dictionary as follows:
  metaID:
    {
      id:
      details:
      media:
    }
*/
export function GetSingleMetadata(metaID: string): string {
  return SelectDatabase(metaID)[metaID];
}

export function GetExerciseDetails(metaID: string): string {
  return SelectDatabase(metaID)[metaID]["details"][metaID];
}

export function GetExerciseID(metaID: string): string {
  return SelectDatabase(metaID)[metaID]["id"];
}

export function GetMedia(metaID: string): string {
  // console.log(SelectDatabase(metaID).METADATA[metaID]["media"]);
  try {
    return SelectDatabase(metaID)[metaID]["media"];
  } catch {
    return "";
  }
}

export function GetMediaType(metaID: string): string {
  let uri = GetMedia(metaID);
  if (uri == "") return MediaTypes.IMAGE;
  for (let type in ImageExtensions) {
    if (uri.includes("." + ImageExtensions[type])) return MediaTypes.IMAGE;
    if (uri.includes("image/")) return MediaTypes.IMAGE;
  }
  for (let type in VideoExtensions) {
    if (uri.includes("." + VideoExtensions[type])) return MediaTypes.VIDEO;
    if (uri.includes("video/")) return MediaTypes.VIDEO;
  }
  return MediaTypes.IMAGE;
  throw "Media Extension not found: " + metaID;
}

// Returns the muscle inf in set format
export function GetMuscleInformation(metaID: string): string {
  var temp = {};
  let details = GetExerciseDetails(metaID);

  for (let key in MuscleTypes) {
    let muscletype = MuscleTypes[key];
    if (muscletype in details) {
      temp[muscletype] = new Set();
      let muscles = ParseMuscleString(details[muscletype]);
      for (let muscle of muscles) {
        temp[muscletype].add(muscle);
      }
    }
  }
  return temp;
}

export function GetMuscleGroup(metaID: string): string {
  return GetExerciseDetails(metaID)["musclegroup"];
}
export function GetEquipment(metaID: string): string {
  return GetExerciseDetails(metaID)["equipment"];
}
export function GetExerciseType(metaID: string): string {
  return GetExerciseDetails(metaID)["exercisetype"];
}
export function GetName(metaID: string): string {
  return GetExerciseDetails(metaID)["name"];
}
export function GetMuscleClass(metaID: string): string {
  return GetExerciseDetails(metaID)["muscleclass"];
}
export function GetUtility(metaID: string): string {
  return GetExerciseDetails(metaID)["utility"];
}
export function GetMechanics(metaID: string): string {
  return GetExerciseDetails(metaID)["mechanics"];
}
export function GetForce(metaID: string): string {
  return GetExerciseDetails(metaID)["force"];
}
export function GetPreparation(metaID: string): string {
  return GetExerciseDetails(metaID)["preparation"];
}
export function GetExecution(metaID: string): string {
  return GetExerciseDetails(metaID)["execution"];
}
export function GetComments(metaID: string): string {
  return GetExerciseDetails(metaID)["comments"];
}

function ParseMuscleString(muscles: string): Array<string> {
  var muscles = muscles.replace(/ /g, "");
  var musclesArr = muscles.split(",");
  return musclesArr;
}

// Chooses the correct database to return information from
function SelectDatabase(metaID: string): string {
  if (metaID.startsWith("Custom")) {
    // console.log(metaID);
    // var METADATA = CUSTOM_METADATA;
    return CUSTOM_METADATA;
  } else {
    // console.log(metaID);
    return EXRX_METADATA;
  }
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
