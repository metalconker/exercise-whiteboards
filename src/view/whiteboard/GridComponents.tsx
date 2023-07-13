import React from "react";
import { Grid } from "@mui/material";
import {
  ClickableModalText,
  DefaultText,
  ErasableText,
} from "./TypographyElements";
import { COLORS } from "../styles/Stylesheet";

interface HeaderContainerProps {
  sets: number;
}

export class HeaderContainer extends React.Component<HeaderContainerProps> {
  render() {
    return (
      <Grid
        container
        spacing={0}
        columns={this.props.sets * 2}
        sx={{ height: "15%", width: "100%" }}
      >
        <Grid key={"setDivider"} item xs={this.props.sets}></Grid>
        {[...Array(this.props.sets + 1)].map((_, index) => {
          if (index !== 0) {
            return (
              <Grid key={index} item xs={1}>
                <DefaultText key={index} color={"pink"}>
                  {"SET" + index}
                </DefaultText>
              </Grid>
            );
          }
        })}
      </Grid>
    );
  }
}

interface IndividualRowProps {
  maxSets: number;
  sets: number;
  height: number;
  name: string;
  alternating: boolean;
  reps: string;
  modalWindowContents: any;
}

export class IndividualRow extends React.Component<IndividualRowProps> {
  render() {
    return (
      <Grid
        container
        spacing={0}
        columns={this.props.maxSets * 2}
        sx={{ height: 86 / this.props.height + "%" }}
      >
        <Grid key={"Grid" + this.props.name} item xs={this.props.maxSets}>
          <ClickableModalText
            color={"black"}
            modalWindowContents={this.props.modalWindowContents}
          >
            {this.props.name}
          </ClickableModalText>
        </Grid>

        {Array.from({ length: this.props.sets }).map((_, i) => (
          <Grid key={"Grid" + this.props.name + i} item xs={1}>
            <ErasableText
              key={"Key" + this.props.name + i}
              color={this.getColor(i, this.props.alternating)}
            >
              {this.props.reps}
            </ErasableText>
          </Grid>
        ))}
      </Grid>
    );
  }

  getColor(index: number, alternating: boolean): string {
    return alternating
      ? index % 2 == 0
        ? COLORS.BOARD_COLORS.LEFT
        : COLORS.BOARD_COLORS.RIGHT
      : COLORS.BOARD_COLORS.DEFAULT;
  }
}
