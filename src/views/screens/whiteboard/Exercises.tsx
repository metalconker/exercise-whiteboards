import * as React from "react";
import * as Schedule from "../../../controller/schedule/Schedule";
import * as ConstantsSchedule from "../../../controller/schedule/ConstantsSchedule";
import { Typography, Button, Box, Grid, ThemeProvider } from "@mui/material";
import {
  WhiteboardClickableText,
  WhiteboardDefaultText,
  WhiteboardErasableText,
} from "./Typography";
import { WhiteboardScreenBackground } from "./Template";
import * as Exercises from "../../../controller/exercises/Exercises";
import { EXERCISE_BOARD_STYLES, theme } from "./Styles";

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
  constructor(props: { day: string; week: number}) {
    super(props);
    this.day = props.day;
    this.week = props.week;
    // Get the schedule name using day, week and Object.keys
    // console.log(Object.keys(ConstantsSchedule.EXERCISE_TYPE)[1]);
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
                  key={index}
                  index={index}
                  data={this.scheduleData}
                  maxSets={this.maxSets}
                  maxExercises={this.metaIDKeys.length}
                />
              ))}
            </Box>
          </Box>
        </WhiteboardScreenBackground>
      </ThemeProvider>
    );
  }
}

export default class ExerciseBoardScreen extends ExerciseBoardScreenTemplate {
  constructor(props: { day: string; week: number}) {
    super(props);
    this.scheduleName = Schedule.getScheduleNameDWT(
      this.day,
      this.week,
      Object.keys(ConstantsSchedule.EXERCISE_TYPE)[1]
    );
    // Initialize ScheduleData using schedule name
    this.scheduleData = new Schedule.ScheduleData(this.scheduleName);
    // Get maximum no. of sets
    this.maxSets = this.scheduleData.getMaxSets();
    // Get metadata keys
    this.metaIDKeys = this.scheduleData.getMetadataKeys();
  }

}

export class WarmupBoardScreen extends ExerciseBoardScreenTemplate {
  constructor(props: { day: string; week: number}) {
    super(props);
    this.scheduleName = Schedule.getScheduleNameDWT(
      this.day,
      this.week,
      Object.keys(ConstantsSchedule.EXERCISE_TYPE)[0]
    );
    // Initialize ScheduleData using schedule name
    this.scheduleData = new Schedule.ScheduleData(this.scheduleName);
    // Get maximum no. of sets
    this.maxSets = this.scheduleData.getMaxSets();
    // Get metadata keys
    this.metaIDKeys = this.scheduleData.getMetadataKeys();
  }

}


/** 
  ExTitle() function takes two arguments 'day' and 'name' and renders a
  Typography element with the title of the exercise.
*/
export const ExTitle = ({ day, name }: { day: string; name: string }) => {
  return (
    <Box sx={EXERCISE_BOARD_STYLES.TOP_COMPONENT.container}>
      {/* <Typography sx={TEXT_STYLES.TITLE}> */}
      <Typography variant="h1">
        {day} : {name}
      </Typography>
    </Box>
  );
};

/** 
  ExSets() function takes one argument maxSets which is the maximum no.
  of sets and renders a Grid element that holds the Set numbers.
*/
export const ExSets = ({ maxSets }: { maxSets: number }) => {
  return (
    <Grid
      container
      spacing={0}
      columns={maxSets * 2}
      sx={{
        height: "10%",
      }}
    >
      {[...Array(maxSets)].map((_, index) => {
        if (index == 0) {
          return <Grid key={index} item xs={maxSets}></Grid>;
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
};

/** 
  ExExercises function
  ExExercises() function takes three arguments 'data', 'index' and 'maxSets'
  and renders a Grid element with exercise name and Rep numbers.
*/
export const ExExercises = ({
  data,
  index,
  maxSets,
  maxExercises,
}: {
  data: Schedule.ScheduleData;
  index: number;
  maxSets: number;
  maxExercises: number;
}) => {
  const exerciseData = data.getExerciseData(data.getMetadataKeys()[index]);
  const media = Exercises.GetMedia(data.getMetadataKeys()[index]);
  const mediaType = Exercises.GetMediaType(data.getMetadataKeys()[index]);
  let divHeight = 90 / maxExercises; // TODO find a proper place for this calculation

  return (
    <Grid
      container
      spacing={0}
      columns={maxSets * 2}
      sx={{
        height: divHeight + "%",
      }}
    >
      {[...Array(maxSets)].map((_, index) => {
        if (index == 0) {
          return (
            <Grid key={index} item xs={maxSets}>
              <WhiteboardClickableText
                uri={media}
                readableName={exerciseData.getName()}
                mediaType={mediaType}
              />
            </Grid>
          );
        } else {
          return (
            <Grid key={index} item xs={1}>
              <WhiteboardErasableText key={index}>
                Rep {index}
              </WhiteboardErasableText>
            </Grid>
          );
        }
      })}
    </Grid>
  );
};

// export class ExerciseBoardDataLine extends React.Component {
//   constructor(props) {
//     super(props);
//     this.exercisedata = new Schedule(props.exercisedata);
//     this.name = "   " + this.exercisedata.Name();
//   }

//   renderSets = () => {
//     let temp = [];
//     for (var i = 0; i < props.maxsets; i++) {
//       if (i < this.exercisedata.NumSets()) {
//         temp.push(
//           <Box sx={styles.sets} key={i}>
//             <WhiteboardErasableText textColor={getcolor(i)}>
//               {getdatastring()}
//             </WhiteboardErasableText>
//           </Box>
//         );
//       } else {
//         temp.push(<Box sx={styles.sets} key={i} />);
//       }
//     }
//     return temp;
//   };

//   getdatastring = () => {
//     let exercisedata = this.exercisedata;
//     if (exercisedata.IsTimeBased()) return exercisedata.Time() + "secs";
//     return exercisedata.NumReps() + "reps";
//   };

//   getcolor = (index) => {
//     let alternating = this.exercisedata.IsAlternating();
//     if (!alternating) return props.defaultcolor;
//     if (index % 2 == 0) return props.leftcolor;
//     return props.rightcolor;
//   };

//   render() {
//     return (
//       <Box sx={styles.line} key={this.exercisedata.Name()}>
//         {/* <WhiteboardBlankModalContainer text={name}>
//         <ExerciseBoardModalContents metaid={props.metaid} />
//       </WhiteboardBlankModalContainer> */}
//         {renderSets()}
//       </Box>
//     );
//   }
// }
