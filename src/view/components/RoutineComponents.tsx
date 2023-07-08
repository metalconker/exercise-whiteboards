import * as React from "react";
import Typography from "@mui/material/Typography";
import { Grid } from "@mui/material";
import { COLORS } from "../styles/Stylesheet";
import { ClickableModalText, ErasableText } from "./TypographyElements";
// import { WhiteboardClickableTextModalMuscles } from "./ModalComponents";

interface RoutineContainerProps {
  numSets: number;
  height: number;
  children: any;
}
export class RoutineContainer extends React.Component<RoutineContainerProps> {
  cols = this.props.numSets * 2;
  height = this.props.height;
  render() {
    return (
      <Grid
        container
        spacing={0}
        columns={this.cols}
        sx={{ height: this.height }}
      >
        {this.props.children}
      </Grid>
    );
  }
}

interface RoutineRepComponentProps {
  children: string;
}
export class RoutineRepComponent extends React.Component<RoutineRepComponentProps> {
  render() {
    let text = this.props.children;
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
            {/* {getRepsOrTime(props)} */}
          </ErasableText>
        </Grid>
      );
  }
}

interface RoutineNameComponentProps {
  name: string;
  children: any;
}
export class RoutineNameComponent extends React.Component<RoutineNameComponentProps> {
  render() {
    let name = this.props.name;

    return (
      <Grid key={index} item xs={props.maxSets}>
        <ClickableModalText
          text={name}
          uri={props.media}
          readableName={props.exerciseName}
          mediaType={props.mediaType}
          metaID={props.metaID}
        />
      </Grid>
    );
  }
}

interface SetsHeaderViewProps {
    numSets: number;
  }

class SetsHeaderView extends React.Component {
    render() {
      return (
        <Grid 
          container
          spacing={0}
          columns={this.props.numSets * 2}
          sx={{
            height: "10%",
          }}
        >
          <Grid key={"setDivider"} item xs={this.props.numSets} />
          {[...Array(this.props.numSets + 1)].map((_, index) => {
            if (index != 0) {
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
      )
    }
  }