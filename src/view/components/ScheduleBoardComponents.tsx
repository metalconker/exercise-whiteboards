import * as React from "react";
import { useState } from "react";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Box, Grid, Modal, Paper } from "@mui/material";
import * as Exercises from "../../model/ExercisesModel";
import { styles, MUSCLES_CONSTANTS, COLORS } from "../styles/Stylesheet";
import { MALE_BODY_IMAGE, MUSCLE_IMAGES } from "../../model/MusclesModel";
import SeparateMuscles from "../../model/MusclesModel";
import { MuscleViewController } from "../../controller/ScheduleController";
import { MUSCLE_COLORS } from "../../Constants";
import { ErasableText } from "./TextComponents";



/** 
  Class that renders an exercise board to the screen with data from the ExerciseBoardScreenController
*/
interface ScheduleGridProps {
  scheduleData : any;
  maxSets: number;
  metaIDKeys: any
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

interface IndividualExercisesRowProps {
  index: number;
  media: any;
  mediaType: any;
  divHeight: number;
  numSets: number;
  maxSets: number;
  maxExercises: number;
  key: any;
  exerciseName: string;
  metaID : string;
  isAlternating: boolean;
  isTimeBased: boolean;
  time: number;
  numReps: number;
}
/** 
  Class that renders a particular exercise grid row based on props
*/
export class IndividualExercisesRow extends React.Component<IndividualExercisesRowProps> {
  // data: ExExercisesGridController;
  // constructor(props: {
  //   index: number;
  //   data: Schedule.ScheduleData;
  //   maxSets: number;
  //   maxExercises: number;
  //   key: any;
  // }) {
  //   super(props);
  //   this.props = new ExExercisesGridController(props);
  // }
  // TODO FIND A SPACE FOR THIS TO BE CALLED

  render() {
    return (
      <Grid
        container
        spacing={0}
        columns={this.props.maxSets * 2}
        sx={{
          height: this.props.divHeight + "%",
        }}
      >
        {[...Array(this.props.numSets + 1)].map((_, index) => {
          if (index == 0) {
            return (
              <Grid key={index} item xs={this.props.maxSets}>
                <WhiteboardClickableTextModalMuscles
                  uri={this.props.media}
                  readableName={this.props.exerciseName}
                  mediaType={this.props.mediaType}
                  metaID={this.props.metaID}
                  // this.props.data.getMetadataKeys()[this.props.index]
                />
              </Grid>
            );
          } else {
            return (
              <Grid key={index} item xs={1}>
                <ErasableText
                  key={index}
                  color={
                    this.props.isAlternating
                      ? index % 2 == 0
                        ? COLORS.BOARD_COLORS.LEFT
                        : COLORS.BOARD_COLORS.RIGHT
                      : COLORS.BOARD_COLORS.DEFAULT
                  }
                >
                  {this.props.isTimeBased
                    ? `${this.props.time} sec`
                    : `${this.props.numReps} rep`}
                </ErasableText>
              </Grid>
            );
          }
        })}
      </Grid>
    );
  }
}
