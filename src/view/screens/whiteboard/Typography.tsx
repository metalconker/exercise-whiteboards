import * as React from "react";
import { useState } from "react";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Box, Modal, Paper } from "@mui/material";
import * as Exercises from "../../../controller/exercises/Exercises";
import { styles, MUSCLES_CONSTANTS } from "./Styles";
import {
  MaleBodyImage,
  MuscleImages,
  Colors,
} from "../../../model/muscles/ConstantsMuscles";
import SeparateMuscles from "../../../model/muscles/Muscles";
import { MuscleViewController } from "../../../controller/ExerciseController";

/**
WhiteboardErasableText - Button component with a Typography as children. 
When clicked, textValue set to an empty string.
*/
export class WhiteboardErasableText extends React.Component<
  ErasableTextProps,
  ErasableTextState
> {
  constructor(props) {
    super(props);
    this.state = {
      textValue: props.children || "",
    };
  }

  onPress = () => {
    this.setState({ textValue: "" });
  };
  render() {
    return (
      <Button onClick={this.onPress} key={this.state.textValue}>
        <Typography variant="h4" style={{ color: this.props.color }}>
          {this.state.textValue}
        </Typography>
      </Button>
    );
  }
}

/** 
WhiteboardDefaultText - Button component with a Typography as its children. 
When clicked, textValue remains as it was.
*/
export class WhiteboardDefaultText extends React.Component<
  DefaultTextProps,
  DefaultTextState,
  any
> {
  constructor(props) {
    super(props);
    this.state = {
      textValue: props.children,
    };
  }

  render() {
    return <Typography variant="h5">{this.state.textValue}</Typography>;
  }
}

/**
WhiteboardClickableText - Button component with a Typography as its children. 
When clicked, Modal pop-up will open with a video or image depending on the mediaType prop.
*/
export class WhiteboardClickableText extends React.Component<
  ClickableTextProps,
  ClickableTextState
> {
  constructor(props) {
    super(props);
    this.state = {
      open: false,
    };
  }

  handleOpen() {
    this.setState({ open: true });
  }

  handleClose() {
    this.setState({ open: false });
  }
  render() {
    return (
      <>
        <Button onClick={this.handleOpen} key={this.props.uri}>
          <Typography variant="h3">
            {this.props.readableName.toLowerCase()}
          </Typography>
        </Button>
        <Modal
          open={this.state.open}
          onClose={this.handleClose}
          style={clickableStyles}
        >
          {this.props.mediaType == "video" ? (
            <video autoPlay src={this.props.uri} style={{ maxWidth: "50%" }} />
          ) : (
            <img src={this.props.uri} alt="popup" style={{ maxWidth: "50%" }} />
          )}
        </Modal>
      </>
    );
  }
}

/** 
The WhiteboardClickableText component is a Button component with a 
Typography component as its children. 
When the Button is clicked, the Modal pop-up is set to "open," 
and either a video or image is rendered depending on the mediaType
prop that is passed in.
*/
export class WhiteboardClickableTextModalMuscles extends React.Component<
  WhiteboardClickableTextModalMusclesProps,
  WhiteboardClickableTextModalMusclesState
> {
  constructor(props) {
    super(props);
    this.state = {
      open: false,
    };
    this.handleOpen = this.handleOpen.bind(this);
    this.handleClose = this.handleClose.bind(this);
  }

  handleOpen() {
    this.setState({ open: true });
  }

  handleClose() {
    this.setState({ open: false });
  }

  renderMedia(metaID) {
    const uri = Exercises.GetMedia(metaID);
    const mediaType = Exercises.GetMediaType(metaID);
    return mediaType === "video" ? (
      <video autoPlay src={uri} style={mediaProps} />
    ) : (
      <img src={uri} alt="popup" style={mediaProps} />
    );
  }

  renderInformation = (metaID) => {
    try {
      Exercises.GetPreparation(metaID)
    }
    catch
    {
      return;
    }
    console.log(metaID);
    const preparation = Exercises.GetPreparation(metaID);
    const execution = Exercises.GetExecution(metaID);
    const comments = Exercises.GetComments(metaID);

    const information = [preparation, execution, comments];
    const titles = ["Preparation", "Execution", "Comments"];

    return (
      <Box key="InformationRow" sx={styles.informationrow}>
        {information.map(
          (item, index) =>
            !!item && (
              <Box key={index}>
                <WhiteboardDefaultText key={`TitleText${index}`}>
                  {titles[index]}
                </WhiteboardDefaultText>
                <WhiteboardDefaultText>{item}</WhiteboardDefaultText>
              </Box>
            )
        )}
      </Box>
    );
  };

  render() {

    this.renderMedia(this.props.metaID);
    this.renderInformation(this.props.metaID);
    return (
      <>
        <Button onClick={this.handleOpen} key={this.props.metaID}>
          <Typography variant="h3">
            {this.props.readableName.toLowerCase()}
          </Typography>
        </Button>
        <Modal
          open={this.state.open}
          onClose={this.handleClose}
          style={musclesStyles}
        >
          <Box sx={styles.modalcontents}>
            <WhiteboardDefaultText key="ExerciseName">
              {/* {Exercises.GetName(this.props.metaID)} */}

            </WhiteboardDefaultText>
            <Box key="MediaAndMusclesRow" sx={styles.mediaandmusclesrow}>
              <Box key="Media" sx={styles.mediacontainer}>
                {this.renderMedia(this.props.metaID)}
                <Box key="Muscles" sx={styles.muscles}>
                  <MuscleView
                    key="Muscles"
                    sx={styles.muscles}
                    metaid={this.props.metaID}
                  />
                </Box>
              </Box>
            </Box>
            {/* {renderInformation(this.props.metaID)} */}
          </Box>
        </Modal>
      </>
    );
  }
}

export class MuscleView extends React.Component<any> {

  controller: MuscleViewController;
  
  constructor(props) {
    super(props);
  }

  render() {
    const separateMuscles = SeparateMuscles(this.props.metaid);
    const muscles = this.controller.mapColors(separateMuscles)
    // const muscles = this.mapColors(separateMuscles);
    // console.log(muscles);
    const drawable: any[] = [];
    Object.keys(Colors).forEach((colorkey) => {
      const color = Colors[colorkey];
      drawable.push(this.controller.loopColor(color, muscles[color]));
    });

    return (
      <Paper elevation={0} square sx={paperStyles}>
        {drawable}
      </Paper>
    );
  }
}

interface ErasableTextProps {
  children;
  color;
}
interface ErasableTextState {
  textValue: string;
}

interface DefaultTextProps {
  children;
}
interface DefaultTextState {
  textValue: any;
}

interface ClickableTextProps {
  uri: string;
  readableName: string;
  mediaType: string;
}

interface ClickableTextState {
  open: boolean;
}

interface WhiteboardClickableTextModalMusclesProps {
  metaID: string;
  readableName: string;
}

interface WhiteboardClickableTextModalMusclesState {
  open: boolean;
}

const popupStyle = {
  // backgroundSize: "50vw 50vh",
  // backgroundPosition: "center",
  // backgroundRepeat: "no-repeat",
  position: "fixed",
  width: "50%",
  height: "50%",
  // display: "flex",
};

const paperStyles = {
  backgroundImage: `url(${MaleBodyImage})`,
  backgroundSize: "50vw 50vh",
  backgroundPosition: "center",
  backgroundRepeat: "no-repeat",
  position: "fixed",
  width: "50%",
  height: "50%",
};

const musclesStyles = {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  WebkitAlignItems: "center",
  width: "75%",
  left: "12.5%",
};

const clickableStyles = {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  WebkitAlignItems: "center",
};

const mediaProps = {
  width: "100%",
};
