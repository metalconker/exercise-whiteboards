import {
  getSingleMetadata,
  getExerciseDetails,
  getExerciseID,
  getMedia,
  getMediaType,
  getMuscleInformation,
  getMuscleGroup,
  getEquipment,
  getExerciseType,
  getName,
  getMuscleClass,
  getUtility,
  getMechanics,
  getForce,
  getPreparation,
  getExecution,
  getComments,
} from "../ExerciseModel";

// metaID:
// {
//   id:
//   details:
//   media:
// }

describe("Test Exercise Metadata", function () {
  // Test getSingleMetadata
  it("getSingleMetadata should return an object given the input metadata ID", function () {
    var metaID = "CalvesBWStandingCalfRaise";
    var expected = {
      id: "BWStandingCalfRaise",
      details: {
        CalvesBWStandingCalfRaise: {
          id: "0",
          exerciseid: "BWStandingCalfRaise",
          musclegroup: "Calves",
          equipment: "bodyweight",
          exercisetype: "WeightExercises",
          muscleclass: "Gastrocnemius",
          name: "Standing Calf Raise",
          utility: "Basic",
          mechanics: "Isolated",
          force: "Push",
          preparation:
            "Position toes and balls of feet on calf block with arches and heels extending off. Place hand on support for balance.",
          execution:
            "Raise heels by extending ankles as high as possible. Lower heels by bending ankles until calves are stretched. Repeat.",
          comments:
            "Exercise step that will not overturn can be used as calf block. Keep knees straight throughout exercise or bend knees slightly only during stretch. Quadriceps serve as synergists muscle if knees are bent slightly during stretch. See Calf Exercise Analyses. Easier Resistance can be reduced by assisting raise by pullingpushing on support. Harder Hold dumbbell in one hand to make exercise more difficult. Dumbbell",
          synergists: "soleus",
          target: "gastrocnemius",
        },
        CalvesBWSingleLegCalfRaise: {
          id: "1",
          exerciseid: "BWSingleLegCalfRaise",
          musclegroup: "Calves",
          equipment: "bodyweight",
          exercisetype: "WeightExercises",
          muscleclass: "Gastrocnemius",
          name: "Single Leg Calf Raise",
          utility: "Basic or Auxiliary",
          mechanics: "Isolated",
          force: "Push",
          preparation:
            "Position toes and balls of feet on calf block or elevation with heels and arches extending off. Place hand or hands on support for balance. Lift one leg to rear by bending knee.",
          execution:
            "Raise heel by extending ankle as high as possible. Lower heel by bending ankle until calf is stretched. Repeat. Continue with opposite leg.",
          comments:
            "Keep knee straight throughout exercise or bend knee slightly only during stretch. Quadriceps serve as synergists muscle if knee is bent slightly during stretch. See Calf Exercise Analyses. Easier Resistance can be reduced by assisting raise with other leg or pullingpushing body upward. Movement can be performed leaning forward over support bar. Both feet can also be used even with additional weight. Selfassisted with upper bodySelfassisted with other footSingle Leg Forward Angled Calf RaiseDumbbell Standing Calf Raise Harder Hold dumbbell in one hand to make exercise more difficult. Dumbbell Single Leg Calf Raise",
          stabilizers:
            "gluteusmedius, gluteusminimus, quadratuslumborum, obliques",
          synergists: "soleus",
          target: "gastrocnemius",
        },
        CalvesBWSingleLegForwardAngledCalfRaise: {
          id: "2",
          exerciseid: "BWSingleLegForwardAngledCalfRaise",
          musclegroup: "Calves",
          equipment: "bodyweight",
          exercisetype: "WeightExercises",
          muscleclass: "Gastrocnemius",
          name: "Single Leg Forward Angled Calf Raise",
          utility: "Basic or Auxiliary",
          mechanics: "Isolated",
          force: "Push",
          preparation:
            "Stand facing midthigh to hip high vertical bar. Grasp bar with wide overhand grip. Step back so body is angled forward with body straight and arms extended approximately perpendicular to body. Feet should be pointed forward. Lift one leg to rear by bending knee.",
          execution:
            "Raise heel by extending ankle as high as possible. Allow body to travel forward and upward in same direction as body is orientated. Lower heel allowing foot to come back down flat on floor. Repeat. Continue with opposite leg.",
          comments:
            "Keep knee straight throughout exercise or bend knee slightly only during stretch. Quadriceps serve as synergists muscle if knee is bent slightly during stretch. Bar height can be adjusted to vary resistance. See Gravity Vectors for greater understanding of body angles influence resistance. See Calf Exercise Analyses. Easier Resistance can be reduced by lowering support bar, as far down as ankle flexibility will allow. Both feet can also be used. Also try self assisted single leg calf raises. Selfassisted with upper bodySelfassisted with other foot Harder Perform calf raise upright on calf block to make movement more difficult. Single Leg Calf Raise",
          stabilizers:
            "hipexernalrotators, pectoralisclavicular, tricepsbrachii, gluteusmedius, serratusanterior, pectoralissternal, gluteusminimus, quadratuslumborum, pectoralisminor, obliques",
          synergists: "soleus",
          target: "gastrocnemius",
        },
      },
      media: "BWStandingCalfRaise.mp4",
    };
    expect(getSingleMetadata(metaID)).toEqual(expected);
  });

  // Test getExerciseDetails
  it("getExerciseDetails should return an object containing the details about the exercise given the input metadata ID", function () {
    var metaID = "CalvesBWStandingCalfRaise";
    var expected = {
      id: "0",
      exerciseid: "BWStandingCalfRaise",
      musclegroup: "Calves",
      equipment: "bodyweight",
      exercisetype: "WeightExercises",
      muscleclass: "Gastrocnemius",
      name: "Standing Calf Raise",
      utility: "Basic",
      mechanics: "Isolated",
      force: "Push",
      preparation:
        "Position toes and balls of feet on calf block with arches and heels extending off. Place hand on support for balance.",
      execution:
        "Raise heels by extending ankles as high as possible. Lower heels by bending ankles until calves are stretched. Repeat.",
      comments:
        "Exercise step that will not overturn can be used as calf block. Keep knees straight throughout exercise or bend knees slightly only during stretch. Quadriceps serve as synergists muscle if knees are bent slightly during stretch. See Calf Exercise Analyses. Easier Resistance can be reduced by assisting raise by pullingpushing on support. Harder Hold dumbbell in one hand to make exercise more difficult. Dumbbell",
      synergists: "soleus",
      target: "gastrocnemius",
    };
    expect(getExerciseDetails(metaID)).toEqual(expected);
  });

  // Test getExerciseID
  it("getExerciseID should return a string of the exercise name", function () {
    var metaID = "CalvesBWStandingCalfRaise";
    expect(getExerciseID(metaID)).toBe("BWStandingCalfRaise");
  });

  // Test getMedia
  it("getMedia should return a string of the exercise media", function () {
    var metaID = "CalvesBWStandingCalfRaise";
    expect(getMedia(metaID)).toBe("BWStandingCalfRaise.mp4");
  });

  // Test getMediaType
  it("getMediaType should return a MediaTypes given the metadataID of an exercise with an image", function () {
    var metaID = "CalvesBWStandingCalfRaise";
    expect(getMediaType(metaID)).toBe("VIDEO");
  });

  // Test getMuscleInformation
  it("getMuscleInformation should return an object containing the muscle information", function () {
    var metaID = "CalvesBWStandingCalfRaise";
    var expected = {
      major: new Set(["Rectus Abdominis", "Obliques"]),
    };
    expect(getMuscleInformation(metaID)).toEqual(expected);
  });

  // Test getMuscleGroup
  it("getMuscleGroup should return a string of the muscle group", function () {
    var metaID = "CalvesBWStandingCalfRaise";
    expect(getMuscleGroup(metaID)).toBe("Lower Abdominals");
  });

  // Test getEquipment
  it("getEquipment should return a string of the equipment used in the exercise", function () {
    var metaID = "CalvesBWStandingCalfRaise";
    expect(getEquipment(metaID)).toBe("Body Only");
  });

  // Test getExerciseType
  it("getExerciseType should return a string of the exercise type", function () {
    var metaID = "CalvesBWStandingCalfRaise";
    expect(getExerciseType(metaID)).toBe("Bodyweight");
  });

  // Test getName
  it("getName should return a string of the name of the exercise", function () {
    var metaID = "CalvesBWStandingCalfRaise";
    expect(getName(metaID)).toBe("Standing Calf Raise");
  });

  // Test getMuscleClass
  it("getMuscleClass should return a string of the muscle class of the exercise", function () {
    var metaID = "CalvesBWStandingCalfRaise";
    expect(getMuscleClass(metaID)).toBe("Abdominals");
  });

  // Test getUtility
  it("getUtility should return a string of the utility of the exercise", function () {
    var metaID = "CalvesBWStandingCalfRaise";
    expect(getUtility(metaID)).toBe("Isolation");
  });

  // Test getMechanics
  it("getMechanics should return a string of the mechanics of the exercise", function () {
    var metaID = "CalvesBWStandingCalfRaise";
    expect(getMechanics(metaID)).toBe("Isolation");
  });

  // Test getForce
  it("getForce should return a string of the force of the exercise", function () {
    var metaID = "CalvesBWStandingCalfRaise";
    expect(getForce(metaID)).toBe("Pulling");
  });

  // Test getPreparation
  it("getPreparation should return a string of the preparation for the exercise", function () {
    var metaID = "CalvesBWStandingCalfRaise";
    expect(getPreparation(metaID)).toBe(
      "Position toes and balls of feet on calf block with arches and heels extending off. Place hand on support for balance."
    );
  });

  // Test getExecution
  it("getExecution should return a string of the execution of the exercise", function () {
    var metaID = "CalvesBWStandingCalfRaise";
    expect(getExecution(metaID)).toBe(
      "Raise heels by extending ankles as high as possible. Lower heels by bending ankles until calves are stretched. Repeat."
    );
  });

  // Test getComments
  it("getComments should return a string of the comments about the exercise", function () {
    var metaID = "CalvesBWStandingCalfRaise";
    expect(getComments(metaID)).toBe(
      "Exercise step that will not overturn can be used as calf block. Keep knees straight throughout exercise or bend knees slightly only during stretch. Quadriceps serve as synergists muscle if knees are bent slightly during stretch. See Calf Exercise Analyses. Easier Resistance can be reduced by assisting raise by pullingpushing on support. Harder Hold dumbbell in one hand to make exercise more difficult. Dumbbell"
    );
  });
});
