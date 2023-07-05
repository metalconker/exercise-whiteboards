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

describe("Test Exercise Metadata", function () {
  // Test getSingleMetadata
  it("getSingleMetadata should return an object given the input metadata ID", function () {
    var metaID = "Leg Raise";
    var expected = {
      "Leg Raise": {
        details: {
          legraise: {
            id: "Leg Raise",
            name: "Leg Raise",
            muscleclass: "Abdominals",
            musclegroup: "Lower Abdominals",
            major: "Rectus Abdominis,Obliques",
            utility: "Isolation",
            force: "Pulling",
            mechanics: "Isolation",
            equipment: "Body Only",
            exercisetype: "Bodyweight",
            preparation:
              "Lie Supine on Floor with Arms outstretched above you.",
            execution:
              "Raise Legs slightly so Thighs and Upper Torso Form a 90 Degree Angle. Raise Legs to Vertical.",
            comments:
              "Continue Abduction if Possible. Pelvis Remains in Place. Do not Let Lower Back Move off the Floor.",
          },
        },
      },
    };
    expect(getSingleMetadata(metaID)).toEqual(expected);
  });

  // Test getExerciseDetails
  it("getExerciseDetails should return an object containing the details about the exercise given the input metadata ID", function () {
    var metaID = "Leg Raise";
    var expected = {
      id: "Leg Raise",
      name: "Leg Raise",
      muscleclass: "Abdominals",
      musclegroup: "Lower Abdominals",
      major: "Rectus Abdominis,Obliques",
      utility: "Isolation",
      force: "Pulling",
      mechanics: "Isolation",
      equipment: "Body Only",
      exercisetype: "Bodyweight",
      preparation: "Lie Supine on Floor with Arms outstretched above you.",
      execution:
        "Raise Legs slightly so Thighs and Upper Torso Form a 90 Degree Angle. Raise Legs to Vertical.",
      comments:
        "Continue Abduction if Possible. Pelvis Remains in Place. Do not Let Lower Back Move off the Floor.",
    };
    expect(getExerciseDetails(metaID)).toEqual(expected);
  });

  // Test getExerciseID
  it("getExerciseID should return a string of the exercise name", function () {
    var metaID = "Leg Raise";
    expect(getExerciseID(metaID)).toBe("Leg Raise");
  });

  // Test getMedia
  it("getMedia should return a string of the exercise media", function () {
    var metaID = "Leg Raise";
    expect(getMedia(metaID)).toBe("");
  });

  // Test getMediaType
  it("getMediaType should return a MediaTypes given the metadataID of an exercise with an image", function () {
    var metaID = "Leg Raise";
    expect(getMediaType(metaID)).toBe("IMAGE");
  });

  // Test getMuscleInformation
  it("getMuscleInformation should return an object containing the muscle information", function () {
    var metaID = "Leg Raise";
    var expected = {
      major: new Set(["Rectus Abdominis", "Obliques"]),
    };
    expect(getMuscleInformation(metaID)).toEqual(expected);
  });

  // Test getMuscleGroup
  it("getMuscleGroup should return a string of the muscle group", function () {
    var metaID = "Leg Raise";
    expect(getMuscleGroup(metaID)).toBe("Lower Abdominals");
  });

  // Test getEquipment
  it("getEquipment should return a string of the equipment used in the exercise", function () {
    var metaID = "Leg Raise";
    expect(getEquipment(metaID)).toBe("Body Only");
  });

  // Test getExerciseType
  it("getExerciseType should return a string of the exercise type", function () {
    var metaID = "Leg Raise";
    expect(getExerciseType(metaID)).toBe("Bodyweight");
  });

  // Test getName
  it("getName should return a string of the name of the exercise", function () {
    var metaID = "Leg Raise";
    expect(getName(metaID)).toBe("Leg Raise");
  });

  // Test getMuscleClass
  it("getMuscleClass should return a string of the muscle class of the exercise", function () {
    var metaID = "Leg Raise";
    expect(getMuscleClass(metaID)).toBe("Abdominals");
  });

  // Test getUtility
  it("getUtility should return a string of the utility of the exercise", function () {
    var metaID = "Leg Raise";
    expect(getUtility(metaID)).toBe("Isolation");
  });

  // Test getMechanics
  it("getMechanics should return a string of the mechanics of the exercise", function () {
    var metaID = "Leg Raise";
    expect(getMechanics(metaID)).toBe("Isolation");
  });

  // Test getForce
  it("getForce should return a string of the force of the exercise", function () {
    var metaID = "Leg Raise";
    expect(getForce(metaID)).toBe("Pulling");
  });

  // Test getPreparation
  it("getPreparation should return a string of the preparation for the exercise", function () {
    var metaID = "Leg Raise";
    expect(getPreparation(metaID)).toBe(
      "Lie Supine on Floor with Arms outstretched above you."
    );
  });

  // Test getExecution
  it("getExecution should return a string of the execution of the exercise", function () {
    var metaID = "Leg Raise";
    expect(getExecution(metaID)).toBe(
      "Raise Legs slightly so Thighs and Upper Torso Form a 90 Degree Angle. Raise Legs to Vertical."
    );
  });

  // Test getComments
  it("getComments should return a string of the comments about the exercise", function () {
    var metaID = "Leg Raise";
    expect(getComments(metaID)).toBe(
      "Continue Abduction if Possible. Pelvis Remains in Place. Do not Let Lower Back Move off the Floor."
    );
  });
});
