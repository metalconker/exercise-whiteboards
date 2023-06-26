import * as Constants from "../Constants";

/* Promises to return a dictionary as follows:
  {
    metaid:
        {
            id:
            details:
            media:
        }
  }
*/
export function GetMultipleMetadata(metaids) {
  var temp = {};
  for (var metaid of metaids) {
    temp[metaid] = GetSingleMetadata(metaid);
  }
  return temp;
}

/* Promises to return a dictionary as follows:
  metaid:
    {
      id:
      details:
      media:
    }
*/
export function GetSingleMetadata(metaid) {
  return SelectDatabase(metaid)[metaid];
}

export function GetExerciseDetails(metaid) {
  return SelectDatabase(metaid)[metaid]["details"][metaid];
}

export function GetExerciseID(metaid) {
  return SelectDatabase(metaid)[metaid]["id"];
}

export function GetMedia(metaid) {
  // console.log(SelectDatabase(metaid).METADATA[metaid]["media"]);
try{
  return SelectDatabase(metaid)[metaid]["media"];
}
catch
{
  return '';
}
}

export function GetMediaType(metaid) {
  let uri = GetMedia(metaid);
  if (uri == '') return Constants.MEDIA_TYPES.IMAGE;
  for (let type in Constants.IMAGE_EXTENSIONS) {
    if (uri.includes("." + Constants.IMAGE_EXTENSIONS[type]))
      return Constants.MEDIA_TYPES.IMAGE;
    if (uri.includes("image/")) return Constants.MEDIA_TYPES.IMAGE;
  }
  for (let type in Constants.VIDEO_EXTENSIONS) {
    if (uri.includes("." + Constants.VIDEO_EXTENSIONS[type]))
      return Constants.MEDIA_TYPES.VIDEO;
    if (uri.includes("video/")) return Constants.MEDIA_TYPES.VIDEO;
  }
  return Constants.MEDIA_TYPES.IMAGE;
  throw "Media Extension not found: " + metaid;
}

// Returns the muscle inf in set format
export function GetMuscleInformation(metaid) {
  var temp = {};
  let details = GetExerciseDetails(metaid);

  for (let key in Constants.MUSCLE_TYPES) {
    let muscletype = Constants.MUSCLE_TYPES[key];
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

export function GetMuscleGroup(metaid) {
  return GetExerciseDetails(metaid)["musclegroup"];
}
export function GetEquipment(metaid) {
  return GetExerciseDetails(metaid)["equipment"];
}
export function GetExerciseType(metaid) {
  return GetExerciseDetails(metaid)["exercisetype"];
}
export function GetName(metaid) {
  return GetExerciseDetails(metaid)["name"];
}
export function GetMuscleClass(metaid) {
  return GetExerciseDetails(metaid)["muscleclass"];
}
export function GetUtility(metaid) {
  return GetExerciseDetails(metaid)["utility"];
}
export function GetMechanics(metaid) {
  return GetExerciseDetails(metaid)["mechanics"];
}
export function GetForce(metaid) {
  return GetExerciseDetails(metaid)["force"];
}
export function GetPreparation(metaid) {
  return GetExerciseDetails(metaid)["preparation"];
}
export function GetExecution(metaid) {
  return GetExerciseDetails(metaid)["execution"];
}
export function GetComments(metaid) {
  return GetExerciseDetails(metaid)["comments"];
}

function ParseMuscleString(muscles) {
  var muscles = muscles.replace(/ /g, "");
  var muscles = muscles.split(",");
  return muscles;
}

// Chooses the correct database to return information from
function SelectDatabase(metaid) {
  if (metaid.startsWith("Custom")) {
    // console.log(metaid);
    // var METADATA = CUSTOM_METADATA;
    return CUSTOM_METADATA;
  } else {
    // console.log(metaid);
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
  