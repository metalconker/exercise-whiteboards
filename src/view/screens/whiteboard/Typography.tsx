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
} from "../../../controller/muscles/ConstantsMuscles";
import SeparateMuscles from "../../../controller/muscles/Muscles";

/**
WhiteboardErasableText - Button component with a Typography as children. 
When clicked, textValue set to an empty string.
*/
export const WhiteboardErasableText = ({
  children,
  imageValue,
  color,
}: any) => {
  const [textValue, setTextValue] = useState(children);
  const onPress = () => setTextValue("");

  return (
    <Button onClick={onPress} key={textValue}>
      <Typography variant="h4" style={{ color: color }}>
        {textValue}
      </Typography>
      {imageValue}
    </Button>
  );
};
/** 
WhiteboardDefaultText - Button component with a Typography as its children. 
When clicked, textValue remains as it was.
*/
export const WhiteboardDefaultText = (props: any) => {
  const [textValue] = useState(props.children);
  return <Typography variant="h5">{textValue}</Typography>;
};

/**
WhiteboardClickableText - Button component with a Typography as its children. 
When clicked, Modal pop-up will open with a video or image depending on the mediaType prop.
*/
export const WhiteboardClickableText = ({
  uri,
  readableName,
  mediaType,
}: WhiteboardClickableTextProps) => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <>
      <Button onClick={handleOpen} key={uri}>
        <Typography variant="h3">{readableName.toLowerCase()}</Typography>
      </Button>
      <Modal open={open} onClose={handleClose} style={clickableStyles}>
        {mediaType == "video" ? (
          <video autoPlay src={uri} style={{ maxWidth: "50%" }} />
        ) : (
          <img src={uri} alt="popup" style={{ maxWidth: "50%" }} />
        )}
      </Modal>
    </>
  );
};

/** 
The WhiteboardClickableText component is a Button component with a 
Typography component as its children. 
When the Button is clicked, the Modal pop-up is set to "open," 
and either a video or image is rendered depending on the mediaType
prop that is passed in.
*/
export const WhiteboardClickableTextModalMuscles = ({
  metaID,
  readableName,
}: WhiteboardClickableTextModalMuscles) => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const mediaType = Exercises.GetMediaType(metaID);
  const uri = Exercises.GetMedia(metaID);

  const renderMedia = (metaID) => {
    const mediaType = Exercises.GetMediaType(metaID);
    const media = Exercises.GetMedia(metaID);
    return mediaType === "video" ? (
      <video autoPlay src={uri} style={mediaProps} />
    ) : (
      <img src={uri} alt="popup" style={mediaProps} />
    );
  };

  const renderInformation = (metaID) => {
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
                <WhiteboardDefaultText sx={styles.modaldefaultText}>
                  {item}
                </WhiteboardDefaultText>
              </Box>
            )
        )}
      </Box>
    );
  };

  return (
    <>
      <Button onClick={handleOpen} key={uri}>
        <Typography variant="h3">{readableName.toLowerCase()}</Typography>
      </Button>
      <Modal open={open} onClose={handleClose} style={musclesStyles}>
        <Box sx={styles.modalcontents}>
          <WhiteboardDefaultText key="ExerciseName">
            {Exercises.GetName(metaID)}
          </WhiteboardDefaultText>
          <Box key="MediaAndMusclesRow" sx={styles.mediaandmusclesrow}>
            <Box key="Media" sx={styles.mediacontainer}>
              {renderMedia(metaID)}
              <Box key="Muscles" sx={styles.muscles}>
                <MuscleView key="Muscles" sx={styles.muscles} metaid={metaID} />
              </Box>
            </Box>
          </Box>
          {renderInformation(metaID)}
        </Box>
      </Modal>
    </>
  );
};

export class MuscleView extends React.Component<any> {
  constructor(props) {
    super(props);
  }

  mapColors(muscles) {
    const mappedColors = {};
    Object.keys(Colors).forEach((colorKey) => {
      const color = Colors[colorKey];
      const unmappedColors = muscles[color];

      mappedColors[color] = new Set();
      unmappedColors.forEach((unmapped) => {
        const muscleMap = MUSCLES_CONSTANTS[unmapped.toUpperCase()];
        if (muscleMap) {
          muscleMap.forEach((currentKey) => {
            mappedColors[color].add(currentKey);
          });
        }
      });
    });

    return mappedColors;
  }

  loopColor(color, colorArray) {
    const temp: any[] = [];
    colorArray.forEach((muscleContainer) => {
      if (muscleContainer) {
        const current = MuscleImages[muscleContainer];
        const uniqueKey = `${color}-${muscleContainer}`;

        temp.push(
          <Box key={uniqueKey}>
            <img src={current[color]} alt="popup" style={imgStyles} />
          </Box>
        );
      }
    });
    return temp;
  }

  render() {
    const separateMuscles = SeparateMuscles(this.props.metaid);
    const muscles = this.mapColors(separateMuscles);
    console.log(muscles);
    const drawable: any[] = [];
    Object.keys(Colors).forEach((colorkey) => {
      const color = Colors[colorkey];
      drawable.push(this.loopColor(color, muscles[color]));
    });

    return (
      <Paper elevation={0} square sx={paperStyles}>
        {drawable}
      </Paper>
    );
  }
}

interface WhiteboardClickableTextProps {
  uri: string;
  readableName: string;
  mediaType: string;
}

interface WhiteboardClickableTextModalMuscles {
  uri: string;
  readableName: string;
  mediaType: string;
  metaID: string;
}

const imgStyles = {
  backgroundSize: "50vw 50vh",
  backgroundPosition: "center",
  backgroundRepeat: "no-repeat",
  position: "fixed",
  width: "50%",
  height: "50%",
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
