import * as React from "react";
import { Box, Paper } from "@mui/material";
import {
  EXERCISE_DETAILS_WINDOW,
  MEDIA_VIEW,
  MUSCLES_BACKGROUND,
  MUSCLES_IMAGES,
  MUSCLES_IMAGES_BOX,
} from "../styles/Stylesheet";
import { ModalText } from "./TypographyElements";

interface ExerciseMediaViewProps {
  uri: string;
  mediaType: string;
}
interface ExerciseMediaViewState {
  imagesLoaded: boolean;
}

/** 
The ClickableText component is a Button component with a 
Typography component as its children. 
When the Button is clicked, the Modal pop-up is set to "open," 
and either a video or image is rendered depending on the mediaType
prop that is passed in.
*/

export class ExerciseMediaView extends React.Component<
  ExerciseMediaViewProps,
  ExerciseMediaViewState
> {
  render() {
    return (
      <Box sx={MEDIA_VIEW}>
        {this.props.mediaType == "video" ? (
          <video autoPlay src={this.props.uri} style={{ maxWidth: "50%" }} />
        ) : (
          <img src={this.props.uri} alt="popup" style={{ maxWidth: "50%" }} />
        )}
      </Box>
    );
  }
}

interface MusclesImagesProps {
  muscles: Array<Array<string>>;
}
interface MusclesImagesState {
  imagesLoaded: boolean;
}

export class MusclesImagesView extends React.Component<
  MusclesImagesProps,
  MusclesImagesState
> {
  constructor(props) {
    super(props);

    this.state = {
      imagesLoaded: false,
    };
  }

  componentDidMount = () => {
    let promises: any[] = this.props.muscles.map((src) => {
      return src.map((src2) => {
        return new Promise((resolve, reject) => {
          let img = new Image();
          img.src = src2;
          img.onload = resolve;
        });
      });
    });

    promises = [].concat(...promises);

    Promise.all(promises).then(() => {
      this.setState({
        imagesLoaded: true,
      });
    });
  };

  render() {
    return (
      <Box sx={MUSCLES_BACKGROUND}>
        {this.state.imagesLoaded &&
          this.props.muscles
            .filter((src) => src.length > 0)
            .map((src) =>
              src.map((src2) => (
                <Box key={src2.toString()} sx={MUSCLES_IMAGES_BOX}>
                  <img
                    src={src2.toString()}
                    alt="popup"
                    style={MUSCLES_IMAGES}
                  />
                </Box>
              ))
            )}
      </Box>
    );
  }
}

interface ExerciseDetailsViewProps {
  preparation: string;
  execution: string;
  comments: string;
}
/**
 * Takes in an array of NodeRequires
 */
export class ExerciseDetailsView extends React.Component<ExerciseDetailsViewProps> {
  render() {
    return (
      <Box key="ExerciseDetailsView" sx={EXERCISE_DETAILS_WINDOW}>
        <Box key={"preparation"}>
          <ModalText color={"black"}>Preparation:</ModalText>
          <ModalText color={"black"}>{this.props.preparation}</ModalText>
        </Box>
        <Box key={"execution"}>
          <ModalText color={"black"}>Execution:</ModalText>
          <ModalText color={"black"}>{this.props.execution}</ModalText>
        </Box>
        <Box key={"comments"}>
          <ModalText color={"black"}>Comments:</ModalText>
          <ModalText color={"black"}>{this.props.comments}</ModalText>
        </Box>
      </Box>
    );
  }
}
