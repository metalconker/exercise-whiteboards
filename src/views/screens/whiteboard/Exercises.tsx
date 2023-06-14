import * as React from "react";
import * as Schedule from "../../../controller/schedule/Schedule";
import * as ConstantsSchedule from "../../../controller/schedule/ConstantsSchedule";
import { Typography, Box, Grid, ThemeProvider } from "@mui/material";
import {
  WhiteboardClickableTextModalMuscles,
  WhiteboardErasableText,
} from "./Typography";
import { WhiteboardScreenBackground } from "./Template";
import * as Exercises from "../../../controller/exercises/Exercises";
import { COLORS, EXERCISE_BOARD_STYLES, theme } from "./Styles";
import SeparateMuscles from "../../../controller/muscles/Muscles";
import {
  Colors,
  MuscleImages,
} from "../../../controller/muscles/ConstantsMuscles";

interface ExerciseBoardScreenProps {
  day: string;
  week: number;
}

export class ExerciseBoardScreenTemplate extends React.Component<ExerciseBoardScreenProps> {
  scheduleName: string;
  scheduleData: Schedule.ScheduleData;
  day: string;
  week: number;
  maxSets: number;
  metaIDKeys: any[];

  // ExerciseBoardScreen constructor
  // This constructor sets the initial state of the ExerciseBoardScreen
  // component by accessing the properties passed from the parent component.
  // It retrieves the schedule name, sets the maximum no. of sets, and get
  // the meta ID keys.
  constructor(props: { day: string; week: number }) {
    super(props);
    this.day = props.day;
    this.week = props.week;
  }

  render() {
    // Renders the board to the screen
    return (
      <ThemeProvider theme={theme}>
        <WhiteboardScreenBackground>
          <Box sx={EXERCISE_BOARD_STYLES.SPLIT_SCREEN.root}>
            <Box sx={EXERCISE_BOARD_STYLES.SPLIT_SCREEN.top}>
              <ExTitle day={this.day} name={this.scheduleName} />
            </Box>
            <Box sx={EXERCISE_BOARD_STYLES.SPLIT_SCREEN.bottom}>
              <ExSets maxSets={this.maxSets} />
              {this.metaIDKeys.map((i, index) => (
                <ExExercises
                  index={index}
                  data={this.scheduleData}
                  maxSets={this.maxSets}
                  maxExercises={this.metaIDKeys.length}
                  key={index}
                />
              ))}
            </Box>
          </Box>
        </WhiteboardScreenBackground>
      </ThemeProvider>
    );
  }
}

export class ExerciseBoardScreen extends ExerciseBoardScreenTemplate {
  exerciseTypeIndex: number = 1;
  constructor(props: { day: string; week: number; exerciseTypeIndex: number }) {
    super(props);
    if (props.exerciseTypeIndex != null)
      this.exerciseTypeIndex = props.exerciseTypeIndex;
    this.scheduleName = Schedule.getScheduleNameDWT(
      this.day,
      this.week,
      Object.keys(ConstantsSchedule.EXERCISE_TYPE)[this.exerciseTypeIndex]
    );
    // Initialize ScheduleData using schedule name
    this.scheduleData = new Schedule.ScheduleData(this.scheduleName);
    // Get maximum no. of sets
    this.maxSets = this.scheduleData.getMaxSets();
    // Get metadata keys
    this.metaIDKeys = this.scheduleData.getMetadataKeys();
    // this.preloadImages();
    // this.preloadMedia();
  }

  // mapColors(muscles): any {
  //   console.log(muscles);
  //   const mappedColors = {};
  //   Object.keys(Colors).forEach((colorKey) => {
  //     const color = Colors[colorKey];
  //     const unmappedColors = muscles[color];
  //     mappedColors[color] = new Set();
  //     unmappedColors.forEach((unmapped) => {
  //       const muscleMap = mapkeys[unmapped];
  //       if (muscleMap) {
  //         muscleMap.forEach((currentKey) => {
  //           mappedColors[color].add(currentKey);
  //         });
  //       }
  //     });
  //   });

  //   return mappedColors;
  // }

  // loopColor(color, colorArray) {
  //   const temp: any[] = [];
  //   colorArray.forEach((muscleContainer) => {
  //     if (muscleContainer) {
  //       const current = MuscleImages[muscleContainer];
  //       const uniqueKey = `${color}-${muscleContainer}`;

  //       temp.push(
  //         <Box key={uniqueKey}>
  //           <img src={current[color]} />
  //         </Box>
  //       );
  //     }
  //   });
  //   return temp;
  // }

  // preloadImages() {
  //   this.metaIDKeys.forEach((metaid) => {
  //     if (!metaid) return;
  //     console.log(metaid);
  //     const separateMuscles = SeparateMuscles(metaid);
  //     console.log(separateMuscles);
  //     const muscles = this.mapColors(separateMuscles);
  //     console.log(muscles);
  //     const drawable: any[] = [];
  //     Object.keys(Colors).forEach((colorkey) => {
  //       const color = Colors[colorkey];
  //       drawable.push(this.loopColor(color, muscles[color]));
  //     });
  //   });
  // }

  // preloadMedia() {
  //   this.metaIDKeys.forEach((metaID) => {
  //     const mediaType = Exercises.GetMediaType(metaID);
  //     const uri = Exercises.GetMedia(metaID);

  //     const mediaProps = {
  //       maxWidth: "50%",
  //     };

  //     return mediaType === "video" ? (
  //       <video autoPlay src={uri} style={mediaProps} />
  //     ) : (
  //       <img src={uri} alt="popup" style={mediaProps} />
  //     );
  //   });
  // }
}

export class WarmupBoardScreen extends ExerciseBoardScreen {
  constructor(props: { day: string; week: number }) {
    super({ ...props, exerciseTypeIndex: 0 });
  }
}

/** 
  ExTitle() function takes two arguments 'day' and 'name' and renders a
  Typography element with the title of the exercise.
*/
export class ExTitle extends React.Component<any> {
  day: string;
  name: string;
  constructor(props: { day: string; name: string }) {
    super(props);
    this.day = props.day;
    this.name = props.name;
  }

  render() {
    return (
      <Box sx={EXERCISE_BOARD_STYLES.TOP_COMPONENT.container}>
        {/* <Typography sx={TEXT_STYLES.TITLE}> */}
        <Typography variant="h1">
          {this.day} : {this.name}
        </Typography>
      </Box>
    );
  }
}

/** 
  ExSets() function takes one argument maxSets which is the maximum no.
  of sets and renders a Grid element that holds the Set numbers.
*/
export class ExSets extends React.Component<any> {
  maxSets: number;
  constructor(props: { maxSets: number }) {
    super(props);
    this.maxSets = props.maxSets;
  }

  render() {
    return (
      <Grid
        container
        spacing={0}
        columns={this.maxSets * 2}
        sx={{
          height: "10%",
        }}
      >
        {[...Array(this.maxSets + 1)].map((_, index) => {
          if (index == 0) {
            return <Grid key={index} item xs={this.maxSets}></Grid>;
          } else {
            return (
              <Grid key={index} item xs={1}>
                <Typography variant="h2" key={index}>
                  SET {index}
                </Typography>
              </Grid>
            );
          }
        })}
      </Grid>
    );
  }
}

/** 
  ExExercises function
  ExExercises() function takes three arguments 'data', 'index' and 'maxSets'
  and renders a Grid element with exercise name and Rep numbers.
*/
export class ExExercises extends React.Component<any> {
  data: Schedule.ScheduleData;
  index: number;
  maxSets: number;
  maxExercises: number;

  exerciseData: Schedule.ExerciseData;
  time: number;
  numReps: number;
  numSets: number;
  media: any;
  mediaType: any;
  divHeight: number;

  constructor(props: {
    index: number;
    data: Schedule.ScheduleData;
    maxSets: number;
    maxExercises: number;
    key: any;
  }) {
    super(props);
    this.data = props.data;
    this.index = props.index;
    this.maxSets = props.maxSets;
    this.maxExercises = props.maxExercises;
    this.exerciseData = props.data.getExerciseData(
      props.data.getMetadataKeys()[props.index]
    );
    this.numSets = this.exerciseData.getNumSets();
    this.numReps = this.exerciseData.getNumReps();
    this.time = this.exerciseData.getTime();
    this.media = Exercises.GetMedia(props.data.getMetadataKeys()[props.index]);
    this.mediaType = Exercises.GetMediaType(
      props.data.getMetadataKeys()[props.index]
    );
    this.divHeight = 90 / props.maxExercises; // TODO find a proper place for this calculation
  }

  render() {
    return (
      <Grid
        container
        spacing={0}
        columns={this.maxSets * 2}
        sx={{
          height: this.divHeight + "%",
        }}
      >
        {[...Array(this.numSets + 1)].map((_, index) => {
          if (index == 0) {
            return (
              <Grid key={index} item xs={this.maxSets}>
                <WhiteboardClickableTextModalMuscles
                  uri={this.media}
                  readableName={this.exerciseData.getName()}
                  mediaType={this.mediaType}
                  metaID={this.data.getMetadataKeys()[this.index]}
                />
              </Grid>
            );
          } else {
            return (
              <Grid key={index} item xs={1}>
                <WhiteboardErasableText
                  key={index}
                  color={
                    this.exerciseData.getIsAlternating()
                      ? index % 2 == 0
                        ? COLORS.BOARD_COLORS.LEFT
                        : COLORS.BOARD_COLORS.RIGHT
                      : COLORS.BOARD_COLORS.DEFAULT
                  }
                >
                  {this.exerciseData.getIsTimeBased()
                    ? `${this.time} sec`
                    : `${this.numReps} rep`}
                </WhiteboardErasableText>
              </Grid>
            );
          }
        })}
      </Grid>
    );
  }
}

var mapkeys = {
  Back: [],
  General: [],
  "Hip Abductors (listed below)": [
    "AnteriorHipAbductors",
    "PosteriorHipAbductors",
  ],
  "Hip Abductors (opposite)": ["AnteriorHipAbductors", "PosteriorHipAbductors"],
  "Hip External Rotators (listed below)": [],
  "Hip Internal Rotators (listed below)": [],
  "Longus capitis": ["AnteriorSternocleidomastoid"],
  "Longus colli": ["AnteriorSternocleidomastoid"],
  "No significant stabilizer": [],
  "No significant stabilizers": [],
  "No significant stabilizers.": [],
  None: [],
  "Rectus capitus": [],
  "See comments": [],
  Supinator: ["AnteriorForearms", "PosteriorForearms"],
  adductors: ["AnteriorHipAdductors", "PosteriorHipAdductors"],
  bicepsbrachii: ["AnteriorBiceps"],
  brachialis: ["AnteriorBiceps"],
  brachioradialis: ["AnteriorForearms", "PosteriorForearms"],
  deltoidanterior: ["AnteriorDeltoids"],
  deltoidlateral: ["AnteriorDeltoids", "PosteriorDeltoids", ,],
  deltoidposterior: ["PosteriorDeltoids"],
  erectorspinae: ["PosteriorErectorSpinae"],
  "forearm#pronation": ["AnteriorForearms", "PosteriorForearms"],
  gastrocnemius: [
    "AnteriorInnerGastrocnemius",
    "AnteriorOuterGastrocnemius",
    "PosteriorOuterGastrocnemius",
    "PosteriorInnerGastrocnemius",
  ],
  gluteusmaximus: ["PosteriorGluteusMaximus"],
  gluteusmedius: ["PosteriorHipAbductors"],
  gluteusminimus: ["PosteriorHipAbductors"],
  gracilis: ["AnteriorHipAdductors"],
  hamstrings: ["PosteriorHamstrings"],
  "hip#abduction": ["AnteriorHipAbductors", "PosteriorHipAbductors"],
  "hip#flexion": ["AnteriorOuterQuadriceps", "AnteriorMidQuadriceps"],
  hipexernalrotators: ["PosteriorHipAdductors"],
  iliopsoas: ["AnteriorHipAdductors"],
  infraspinatus: ["PosteriorRhomboids"],
  latissimusdorsi: ["PosteriorLatissimus"],
  levatorscapulae: ["PosteriorUpperTrapezius"],
  obliques: ["AnteriorObliques"],
  pectineus: ["AnteriorHipAdductors"],
  pectoralisclavicular: ["AnteriorPectoralis"],
  pectoralisminor: ["AnteriorPectoralis"],
  pectoralissternal: ["AnteriorPectoralis"],
  popliteus: ["PosteriorOuterGastrocnemius", "PosteriorInnerGastrocnemius"],
  quadratuslumborum: ["AnteriorObliques"],
  quadriceps: ["AnteriorOuterQuadriceps", "AnteriorMidQuadriceps"],
  rectusabdominis: [
    "AnteriorUpperRectusAbdominis",
    "AnteriorUpperMidRectusAbdominis",
    "AnteriorLowerMiddleRectusAbdominis",
    "AnteriorLowerRectusAbdominis",
  ],
  rhomboids: ["PosteriorRhomboids"],
  sartorius: ["AnteriorHipAdductors"],
  serratusanterior: [],
  soleus: ["PosteriorSoleus"],
  splenius: ["PosteriorUpperTrapezius"],
  sternocleidomastoid: ["AnteriorSternocleidomastoid"],
  subscapularis: ["PosteriorRhomboids"],
  supraspinatus: ["PosteriorRhomboids"],
  tensorfasciaelatae: ["AnteriorHipAdductors"],
  teresmajor: ["PosteriorRhomboids"],
  teresminor: ["PosteriorRhomboids"],
  tibialisanterior: ["AnteriorTibialis"],
  trapeziuslower: ["PosteriorLowerTrapezius"],
  trapeziusmiddle: [
    "PosteriorLowerTrapezius",
    "PosteriorUpperTrapezius",
    "AnteriorTrapezius",
    ,
  ],
  trapeziusupper: ["PosteriorUpperTrapezius", "AnteriorTrapezius", ,],
  tricepsbrachii: ["PosteriorTriceps"],
  wristextensors: ["AnteriorForearms", "PosteriorForearms"],
  wristflexors: ["AnteriorForearms", "PosteriorForearms"],
};
