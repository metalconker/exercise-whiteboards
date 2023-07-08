import * as React from "react";
import Typography from "@mui/material/Typography";
import { Grid } from "@mui/material";
import { COLORS } from "../styles/Stylesheet";
import { ClickableModalText, ErasableText } from "./TypographyElements";
// import { WhiteboardClickableTextModalMuscles } from "./ModalComponents";

{
  /* <ClickableModalText
text={name}
uri={props.media}
readableName={props.exerciseName}
mediaType={props.mediaType}
metaID={props.metaID}
/> */
}

//         maxExercises={this.props.metaIDKeys.length}

/** 
  Class that renders a grid of the exercises for each set based on props
*/
export class RoutineViewContainer extends React.Component<RoutineViewContainerProps> {
  render() {
    return this.props.names.map((i, index) => (
      <RoutineView index={index} columns={this.props.columns} key={index} />
    ));
  }
}

interface RoutineViewProps {
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
export const RoutineView = React.memo((props: RoutineViewProps) => {
  return (
    <Grid
      container
      spacing={0}
      columns={props.maxSets * 2}
      sx={{
        height: props.divHeight + "%",
      }}
    >
      {[...Array(props.numSets + 1)].map((_, index) =>
        repsRow(props, index, props.exerciseName)
      )}
    </Grid>
  );
});



