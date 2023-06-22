import * as React from "react";
import { Typography, Box, Grid, ThemeProvider } from "@mui/material";
import Paper from "@mui/material/Paper";
import {
  WhiteboardClickableTextModalMuscles,
  WhiteboardErasableText,
} from "./TypographyView";
import { WHITEBOARD_BACKGROUND } from "./styles/Stylesheet";

import { COLORS, EXERCISE_BOARD_STYLES, theme } from "./styles/Stylesheet";
import {
  ExExercisesGridController,
  ExerciseBoardScreenController,
} from "../controller/ExerciseController";
import * as Schedule from "../model/ScheduleModel";

/** 
  Class that renders a board to the screen
*/
export class WhiteboardScreenBackground extends React.Component<any, any> {
  render() {
    // Renders the board to the screen
    return (
      <Paper elevation={0} square sx={WHITEBOARD_BACKGROUND}>
        {this.props.children}
      </Paper>
    );
  }
}

/** 
  Class that renders an exercise board to the screen with data from the ExerciseBoardScreenController
*/
export class ExerciseBoardScreenTemplate extends React.Component<ExerciseBoardScreenTemplateProps> {
  data: ExerciseBoardScreenController;

  constructor(props) {
    super(props);
    this.data = new ExerciseBoardScreenController(props);
  }

  render() {
    // Renders the board to the screen
    return (
      <ThemeProvider theme={theme}>
        <WhiteboardScreenBackground>
          <Box sx={EXERCISE_BOARD_STYLES.SPLIT_SCREEN.root}>
            <Box sx={EXERCISE_BOARD_STYLES.SPLIT_SCREEN.top}>
              <ExTitle day={this.data.day} name={this.data.scheduleName} />
            </Box>
            <Box sx={EXERCISE_BOARD_STYLES.SPLIT_SCREEN.bottom}>
              <ExSets maxSets={this.data.maxSets} />
              <ExExercisesGrid data={this.data} />
            </Box>
          </Box>
        </WhiteboardScreenBackground>
      </ThemeProvider>
    );
  }
}

/** 
  Class that renders a title to the board based on props
*/
export class ExTitle extends React.Component<ExTitleProps> {
  render() {
    return (
      <Box sx={EXERCISE_BOARD_STYLES.TOP_COMPONENT.container}>
        <Typography variant="h1">
          {this.props.day} : {this.props.name}
        </Typography>
      </Box>
    );
  }
}

/** 
  Class that renders a grid of the sets to the board based on props
*/
export class ExSets extends React.Component<ExSetsProps> {
  render() {
    return (
      <Grid
        container
        spacing={0}
        columns={this.props.maxSets * 2}
        sx={{
          height: "10%",
        }}
      >
        {[...Array(this.props.maxSets + 1)].map((_, index) => {
          if (index == 0) {
            return <Grid key={index} item xs={this.props.maxSets}></Grid>;
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
  Class that renders a grid of the exercises for each set based on props
*/
export class ExExercisesGrid extends React.Component<ExExercisesGridProps> {
  data: ExerciseBoardScreenController;
  constructor(props) {
    super(props);
    this.data = props.data;
  }

  render() {
    return this.data.metaIDKeys.map((i, index) => (
      <ExExercisesRow
        index={index}
        data={this.data.scheduleData}
        maxSets={this.data.maxSets}
        maxExercises={this.data.metaIDKeys.length}
        key={index}
      />
    ));
  }
}

/** 
  Class that renders a particular exercise grid row based on props
*/
export class ExExercisesRow extends React.Component<ExExercisesRowProps> {
  data: ExExercisesGridController;
  constructor(props: {
    index: number;
    data: Schedule.ScheduleData;
    maxSets: number;
    maxExercises: number;
    key: any;
  }) {
    super(props);
    this.data = new ExExercisesGridController(props);
  }

  render() {
    return (
      <Grid
        container
        spacing={0}
        columns={this.data.maxSets * 2}
        sx={{
          height: this.data.divHeight + "%",
        }}
      >
        {[...Array(this.data.numSets + 1)].map((_, index) => {
          if (index == 0) {
            return (
              <Grid key={index} item xs={this.data.maxSets}>
                <WhiteboardClickableTextModalMuscles
                  uri={this.data.media}
                  readableName={this.data.exerciseData.getName()}
                  mediaType={this.data.mediaType}
                  metaID={this.data.data.getMetadataKeys()[this.data.index]}
                />
              </Grid>
            );
          } else {
            return (
              <Grid key={index} item xs={1}>
                <WhiteboardErasableText
                  key={index}
                  color={
                    this.data.exerciseData.getIsAlternating()
                      ? index % 2 == 0
                        ? COLORS.BOARD_COLORS.LEFT
                        : COLORS.BOARD_COLORS.RIGHT
                      : COLORS.BOARD_COLORS.DEFAULT
                  }
                >
                  {this.data.exerciseData.getIsTimeBased()
                    ? `${this.data.time} sec`
                    : `${this.data.numReps} rep`}
                </WhiteboardErasableText>
              </Grid>
            );
          }
        })}
      </Grid>
    );
  }
}

/** 
  Child class of ExerciseBoardScreenTemplate that sets up the warmup board 
*/
export class WarmupBoardScreen extends ExerciseBoardScreenTemplate {
  constructor(props) {
    super(props);
    this.data.setSchedule(0);
  }
}

/** 
  Child class of ExerciseBoardScreenTemplate that sets up the exercise board
*/
export class ExerciseBoardScreen extends ExerciseBoardScreenTemplate {
  constructor(props) {
    super(props);
    this.data.setSchedule(1);
  }
}

interface ExerciseBoardScreenTemplateProps {
  day: string;
  week: number;
}

interface ExExercisesGridProps {
  data: ExerciseBoardScreenController;
}

interface ExExercisesRowProps {
  index: number;
  data: Schedule.ScheduleData;
  maxSets: number;
  maxExercises: number;
  key: any;
}

interface ExTitleProps {
  day: string;
  name: string;
}

interface ExSetsProps {
  maxSets: number;
}
