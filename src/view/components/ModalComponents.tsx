import * as React from "react";
import { Box, Modal, Paper } from "@mui/material";
import { paperStyles, popupStyle, styles } from "../styles/Stylesheet";
import { render } from "react-dom";

interface MusclesImagesContainerProps {
  muscles: Array<string>;
}
export class MusclesImagesContainer extends React.Component<MusclesImagesContainerProps> {
  render() {
    return (
      <Paper elevation={0} square sx={paperStyles}>
        {this.props.muscles.map((src) => {
          return (
            <Box key={src}>
              {/* use unique keys to associate data retrieval */}
              <img src={src} alt="popup" style={popupStyle} />
            </Box>
          );
        })}
      </Paper>
    );
  }
}

interface WhiteboardClickableTextModalMusclesProps {
  metaID: string;
  readableName: string;
}
interface WhiteboardClickableTextModalMusclesState {
  open: boolean;
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

handleOpen() {
  this.setState({ open: true });
}

handleClose() {
  this.setState({ open: false });
}

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
