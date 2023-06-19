export function validateProps(props) {
  //First check if the props itself is null or unefined
  if (!props) {
    throw new Error("props are required parameter");
  }

  //Second check for each child of the props
  for (let key in props) {
    if (props[key] === null || typeof props[key] === "undefined") {
      throw new Error(key + " is required parameter ");
    }
  }
}

//Error check
export function checkSetter(value: any, variable: string): any {
  if (!value || value === null || value === undefined) {
    throw new Error(variable + " is invalid!");
  }
  return value;
}

export function checkGetter(value: any, variable: string): any {
  if (!value || value === null || value === undefined) {
    throw new Error(variable + " is invalid!");
  }
  return value;
}

export const MEDIA_TYPES: { [key: string]: any } = {
  VIDEO: "video",
  IMAGE: "image",
};

export const IMAGE_EXTENSIONS: { [key: string]: any } = {
  GIF: "gif",
  JPEG: "jpeg",
  JPG: "jpg",
  PNG: "png",
};

export const VIDEO_EXTENSIONS: { [key: string]: any } = {
  MP4: "mp4",
};

export const DAYS: { [key: string]: any } = {
  SUNDAY: "Sunday",
  MONDAY: "Monday",
  TUESDAY: "Tuesday",
  WEDNESDAY: "Wednesday",
  THURSDAY: "Thursday",
  FRIDAY: "Friday",
  SATURDAY: "Saturday",
};

export const JSON_DETAILS: { [key: string]: any } = {
  ID: "id",
  EXERCISEID: "exerciseid",
  MUSCLEGROUP: "musclegroup",
  EQUIPMENT: "equipment",
  EXERCISETYPE: "exercisetype",
  MUSCLECLASS: "muscleclass",
  NAME: "name",
  UTILITY: "utility",
  MECHANICS: "mechanics",
  FORCE: "force",
  PREPARATION: "preparation",
  EXECUTION: "execution",
  COMMENTS: "comments",
};

export const MUSCLE_GROUPS: { [key: string]: any } = {
  BACK: "Back",
  CALVES: "Calves",
  CHEST: "Chest",
  FOREARMS: "Forearms",
  HIPS: "Hips",
  NECK: "Neck",
  SHOULDERS: "Shoulders",
  THIGHS: "Thighs",
  UPPERARMS: "UpperArms",
  WAIST: "Waist",
};

export const MUSCLE_TYPES: { [key: string]: any } = {
  ANTAGONISTSTABILIZERS: "antagonist stabilizers",
  DYNAMICSTABILIZERS: "dynamic stabilizers",
  OTHER: "other",
  STABILIZERS: "stabilizers",
  SYNERGISTS: "synergists",
  TARGET: "target",
};

export const MUSCLES: { [key: string]: any } = {
  ADDUCTORS: "Group of muscles mostly used for bringing the thighs together.",
  BICEPSBRACHII:
    "Two-headed muscle whose function is at the elbow where it flexes the forearm and supinates the forearm.",
  BRACHIALIS: "Flexes the elbow joint.",
  BRACHIORADIALIS: "Flexes the forearm at the elbow.",
  DELTOIDANTERIOR: "Assists the pectoralis major to flex the shoulder.",
  DELTOIDLATERAL:
    "Performs basic shoulder abduction when the shoulder is internally rotated, and performs shoulder transverse abduction when the shoulder is externally rotated.",
  DELTOIDPOSTERIOR: "Assists the latissimus dorsi to extend the shoulder.",
  ERECTORSPINAE:
    "Group of muscles and tendons that straighten and rotate the back.",
  FOREARM_PRONATION:
    "Many muscles, including the flexors and extensors of the digits, a flexor of the elbow (brachioradialis), and pronators and supinators that turn the hand to face down or upwards, respectively.",
  GASTROCNEMIUS:
    "Primarily involved in running, jumping and other fast movements of leg, and to a lesser degree in walking and standing.",
  GLUTEUSMAXIMUS:
    "External rotation and extension of the hip joint, supports the extended knee through the iliotibial tract, chief antigravity muscle in sitting and abduction of the hip.",
  GLUTEUSMEDIUS:
    "Abduction of the hip; preventing adduction of the hip. Medial/internal rotation and flexion of the hip (anterior fibers). Extension and Lateral/external rotation of the hip (posterior fibers) ",
  GLUTEUSMINIMUS:
    "Works in concert with gluteus medius: abduction of the hip; preventing adduction of the hip. Medial rotation of thigh.",
  GRACILIS:
    "Adducts, medially rotates (with hip flexion), laterally rotates, and flexes the hip; also aids in flexion of the knee",
  HAMSTRINGS:
    "Flexes the knee joint and extends the thigh to the backside of the body",
  HIP_ABDUCTION: "Group of muscles mostly used for bringing the thighs apart.",
  HIP_FLEXION:
    "Several muscles that bring your legs and trunk together in a flexion movement.",
  HIPEXTERNALROTATORS: "The thigh and knee rotate outward, away from the body.",
  ILIOPSOAS: "Flexion of hip.",
  INFRASPINATUS:
    "Externally rotates the humerus and stabilizes the shoulder joint.",
  LATISSIMUSDORSI:
    "Responsible for extension, adduction, transverse extension also known as horizontal abduction, flexion from an extended position, and (medial) internal rotation of the shoulder joint. It also has a synergistic role in extension and lateral flexion of the lumbar spine.",
  LEVATORSCAPULAE: "Lifts the scapula.",
  OBLIQUES:
    "Responsible for the twisting of the trunk. Flexes the trunk, compresses its contents (bilaterally) and rotates it to the same side (unilaterally)",
  PECTINEUS:
    "One of the muscles primarily responsible for hip flexion. It also adducts the thigh.",
  PECTORALISCLAVICULAR:
    "Flexion, adduction, and internal rotation of the humerus.",
  PECTORALISMINOR:
    "Stabilizes the scapula by drawing it inferiorly and anteriorly against the thoracic wall, raises ribs in inspiration.",
  PECTORALISSTERNAL:
    "Flexion, adduction, and internal rotation of the humerus.",
  POPLITEUS:
    "Assists in flexing the leg upon the thigh; when the leg is flexed, it will rotate the tibia inward.",
  QUADRATUSLUMBORUM:
    "Alone(unilateral), lateral flexion of vertebral column; Together (bilateral), depression of thoracic rib cage.",
  QUADRICEPS: "All four quadriceps are powerful extensors of the knee joint.",
  RECTUSABDOMINIS: "Flex the spinal column or trunk of the body.",
  RHOMBOIDS:
    "Pulls scapulae medially, rotates scapulae, holds scapulae into thorax wall.",
  SARTORIUS:
    "Flexion, abduction, and lateral rotation of the hip, flexion of the knee.",
  SERRATUSANTERIOR:
    "Protracts and stabilizes scapula, assists in upward rotation.",
  SOLEUS:
    "Plantarflexion of the foot (that is, they increase the angle between the foot and the leg).",
  SPLENIUS:
    "Prime mover for head extension; also allows lateral flexion and rotation of the cervical spine. ",
  STERNOCLEIDOMASTOID:
    "Rotation of the head to the opposite side and flexion of the neck.",
  SUBSCAPULARIS:
    "Rotates the head of the humerus medially (internal rotation) and adducts it; when the arm is raised, it draws the humerus forward and downward.",
  SUPINATOR:
    "Encircling the radius, supinator brings the hand into the supinated position.",
  SUPRASPINATUS: "Abduction of arm and stabilization of humerus.",
  TENSORFASCIAELATAE:
    "Assists in keeping the balance of the pelvis while standing, walking, or running.",
  TERESMAJOR: "Assists in the extension and medial rotation of the humerus.",
  TERESMINOR:
    "Modulates the action of the deltoid, preventing the humeral head from sliding upward as the arm is abducted. It also functions to rotate the humerus laterally.",
  TIBIALISANTERIOR: "Dorsiflex and invert the foot.",
  TRAPEZIUSLOWER: "Depresses the scapulae.",
  TRAPEZIUSMIDDLE: "Moves the scapulae",
  TRAPEZIUSUPPER: "Elevates the scapulae.",
  TRICEPSBRACHII:
    "Responsible for extension of the elbow joint (straightening of the arm).",
  WRISTEXTENSORS: "Extends or opens flat the joints in the hand",
  WRISTFLEXORS: "Flexes or closes and clenches the joints in the hand",
  HIP_ABDUCTORS_LISTED_BELOW: "",
  HIP_ABDUCTORS_OPPOSITE: "",
  HIP_EXTERNAL_ROTATORS_LISTED_BELOW: "",
  HIP_INTERNAL_ROTATORS_LISTED_BELOW: "",
  LONGUS_CAPITIS: "",
  LONGUS_COLLI: "",
  NO_SIGNIFICANT_STABILIZER: "",
  NO_SIGNIFICANT_STABILIZERS: "",
  RECTUS_CAPITIS: "",
  SEE_COMMENTS: "",
  BACK: "",
  GENERAL: "",
};

export const DEFINITIONS: { [key: string]: any } = {
  ISOMETRIC:
    '"Equal length," so that your muscles do not get longer or shorter by bending a joint.',
  ISOTONIC:
    '"Equal tension" so that the weight on your muscles stays the same.',
  ISOKINETIC:
    '"Equal speed" so that your muscles are contracting at the same speed throughout the workout.',
};
