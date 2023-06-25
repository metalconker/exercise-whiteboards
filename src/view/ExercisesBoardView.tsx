import * as React from "react";
import { Typography, Box, Grid, ThemeProvider } from "@mui/material";
import Paper from "@mui/material/Paper";
import {
  WhiteboardClickableTextModalMuscles,
  WhiteboardErasableText,
} from "./TypographyView";
import { WHITEBOARD_BACKGROUND } from "./styles/Stylesheet";

import { COLORS, EXERCISE_BOARD_STYLES, THEME } from "./styles/Stylesheet";
import {
  ExExercisesGridController,
  ExerciseBoardScreenController,
} from "../controller/ExerciseController";
import * as Schedule from "../model/ScheduleModel";
import {
  WhiteboardContainer
} from "./containers/WhiteboardContainer";
import { SetsRow } from "./components/ExerciseBoardComponents";

interface ExerciseBoardScreenTemplateProps {
  day: string;
  week: number;
}
/** 
  Class that renders an exercise board to the screen with data from the ExerciseBoardScreenController
*/
interface ExercisesGridProps {
  scheduleData : any;
  maxSets: number;
  metaIDKeys: any
}

/** 
  Class that renders a grid of the exercises for each set based on props
*/
export class ExercisesGrid extends React.Component<ExercisesGridProps> {

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


export class ExerciseBoardScreenTemplate extends React.Component<ExerciseBoardScreenTemplateProps> {
  data: ExerciseBoardScreenController;

  constructor(props) {
    super(props);
    this.data = new ExerciseBoardScreenController(props);
  }

  render() {
    // Renders the board to the screen
    return (
      <WhiteboardContainer title={this.data.scheduleName}>
        <SetsRow maxSets={this.data.maxSets} />
        {/* <ExExercisesGrid data={this.data} /> */}
      </WhiteboardContainer>
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





