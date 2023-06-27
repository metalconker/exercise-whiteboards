import * as React from "react";
import Typography from "@mui/material/Typography";
import { Grid } from "@mui/material";
import { COLORS } from "../styles/Stylesheet";
import { ErasableText } from "./TypographyElements";

/** 
  Class that renders an exercise board to the screen with data from the ExerciseBoardScreenController
*/
interface ScheduleGridProps {
  scheduleData: any;
  maxSets: number;
  metaIDKeys: any;
}

/** 
  Class that renders a grid of the exercises for each set based on props
*/
export class ScheduleGrid extends React.Component<ScheduleGridProps> {
  render() {
    return this.props.metaIDKeys.map((i, index) => (
      <ExercisesRow
        index={index}
        // data={this.props.scheduleData}
        maxSets={this.props.maxSets}
        maxExercises={this.props.metaIDKeys.length}
        key={index}
      />
    ));
  }
}

interface SetsRowHeaderProps {
  maxSets: number;
}
/** 
  Class that renders a grid of the sets to the board based on props
*/
export const SetsRowHeader = React.memo((props: SetsRowHeaderProps) => {
  return (
    <Grid
      container
      spacing={0}
      columns={props.maxSets * 2}
      sx={{
        height: "10%",
      }}
    >
      {[...Array(props.maxSets + 1)].map((_, index) => {
        if (index == 0) {
          return <Grid key={index} item xs={props.maxSets}></Grid>;
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
});

interface RoutineRowProps {
  index: number;
  media: any;
  mediaType: any;
  divHeight: number;
  numSets: number;
  maxSets: number;
  maxExercises: number;
  key: any;
  exerciseName: string;
  metaID: string;
  isAlternating: boolean;
  isTimeBased: boolean;
  time: number;
  numReps: number;
}
/** 
  Class that renders a particular exercise grid row based on props
*/
export const RoutineRow = React.memo(
  (props: RoutineRowProps) => {
    return (
      <Grid
        container
        spacing={0}
        columns={props.maxSets * 2}
        sx={{
          height: props.divHeight + "%",
        }}
      >
        {[...Array(props.numSets + 1)].map((_, index) => repsRow(props, index))}
      </Grid>
    );
  }
);

// Function 2
const repsRow = (props: RoutineRowProps, index: number): Grid => {
  if (index == 0) {
    return (
      <Grid key={index} item xs={props.maxSets}>
        <WhiteboardClickableTextModalMuscles
          uri={props.media}
          readableName={props.exerciseName}
          mediaType={props.mediaType}
          metaID={props.metaID}
        />
      </Grid>
    );
  } else {
    return (
      <Grid key={index} item xs={1}>
        <ErasableText
          key={index}
          color={
            props.isAlternating
              ? index % 2 == 0
                ? COLORS.BOARD_COLORS.LEFT
                : COLORS.BOARD_COLORS.RIGHT
              : COLORS.BOARD_COLORS.DEFAULT
          }
        >
          {getRepsOrTime(props)}
        </ErasableText>
      </Grid>
    );
  }
}

