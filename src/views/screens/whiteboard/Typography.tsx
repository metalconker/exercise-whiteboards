import * as React from "react";
import { useState } from "react";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Box, Modal, Paper } from "@mui/material";
import * as Exercises from "../../../controller/exercises/Exercises";
import { styles } from "./Styles";
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
      <Modal
        open={open}
        onClose={handleClose}
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          WebkitAlignItems: "center",
        }}
      >
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

    const mediaProps = {
      width: "100%",
      // maxWidth: "50%"
      // maxHeight:"25%"
    };

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
      <Modal
        open={open}
        onClose={handleClose}
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          WebkitAlignItems: "center",
          width: "75%",
          left: "12.5%",
        }}
      >
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
        const muscleMap = mapkeys[unmapped];
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
        const imgStyles = {
          backgroundSize: "50vw 50vh",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          position: "fixed",
          width: "50%",
          height: "50%",
        };

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
    const drawable: any[] = [];
    Object.keys(Colors).forEach((colorkey) => {
      const color = Colors[colorkey];
      drawable.push(this.loopColor(color, muscles[color]));
    });

    const paperStyles = {
      backgroundImage: `url(${MaleBodyImage})`,
      backgroundSize: "50vw 50vh",
      backgroundPosition: "center",
      backgroundRepeat: "no-repeat",
      position: "fixed",
      width: "50%",
      height: "50%",
    };

    return (
      <Paper elevation={0} square sx={paperStyles}>
        {drawable}
      </Paper>
    );
  }
}

interface WhiteboardClickableTextProps {
  // children: any;
  uri: string;
  readableName: string;
  mediaType: string;
}
interface WhiteboardClickableTextModalMuscles {
  // children: any;
  uri: string;
  readableName: string;
  mediaType: string;
  metaID: string;
}

const muscleStyles = {
  background: {
    position: "relative",
    width: "100%",
    height: "100%",
    aspectRatio: 1.3333333333333333333,
    flex: 1,
  },
  muscle: {
    width: "100%",
    aspectRatio: 1,
    height: undefined,
  },
};

var mapkeys = {
  Back: [],
  General: [],
  "Hip Abductors (listed below)": [
    "AnteriorHipAbductors",
    "PosteriorHipAbductors",
  ],
  "Hip Abductors (opposite)": ["AnteriorHipAbductors", "PosteriorHipAbductors"],
  "Hip External Rotators (listed below)": [],
  "Hip Internal Rotators (listed below)": [],
  "Longus capitis": ["AnteriorSternocleidomastoid"],
  "Longus colli": ["AnteriorSternocleidomastoid"],
  "No significant stabilizer": [],
  "No significant stabilizers": [],
  "No significant stabilizers.": [],
  None: [],
  "Rectus capitus": [],
  "See comments": [],
  Supinator: ["AnteriorForearms", "PosteriorForearms"],
  adductors: ["AnteriorHipAdductors", "PosteriorHipAdductors"],
  bicepsbrachii: ["AnteriorBiceps"],
  brachialis: ["AnteriorBiceps"],
  brachioradialis: ["AnteriorForearms", "PosteriorForearms"],
  deltoidanterior: ["AnteriorDeltoids"],
  deltoidlateral: ["AnteriorDeltoids", "PosteriorDeltoids", ,],
  deltoidposterior: ["PosteriorDeltoids"],
  erectorspinae: ["PosteriorErectorSpinae"],
  "forearm#pronation": ["AnteriorForearms", "PosteriorForearms"],
  gastrocnemius: [
    "AnteriorInnerGastrocnemius",
    "AnteriorOuterGastrocnemius",
    "PosteriorOuterGastrocnemius",
    "PosteriorInnerGastrocnemius",
  ],
  gluteusmaximus: ["PosteriorGluteusMaximus"],
  gluteusmedius: ["PosteriorHipAbductors"],
  gluteusminimus: ["PosteriorHipAbductors"],
  gracilis: ["AnteriorHipAdductors"],
  hamstrings: ["PosteriorHamstrings"],
  "hip#abduction": ["AnteriorHipAbductors", "PosteriorHipAbductors"],
  "hip#flexion": ["AnteriorOuterQuadriceps", "AnteriorMidQuadriceps"],
  hipexernalrotators: ["PosteriorHipAdductors"],
  iliopsoas: ["AnteriorHipAdductors"],
  infraspinatus: ["PosteriorRhomboids"],
  latissimusdorsi: ["PosteriorLatissimus"],
  levatorscapulae: ["PosteriorUpperTrapezius"],
  obliques: ["AnteriorObliques"],
  pectineus: ["AnteriorHipAdductors"],
  pectoralisclavicular: ["AnteriorPectoralis"],
  pectoralisminor: ["AnteriorPectoralis"],
  pectoralissternal: ["AnteriorPectoralis"],
  popliteus: ["PosteriorOuterGastrocnemius", "PosteriorInnerGastrocnemius"],
  quadratuslumborum: ["AnteriorObliques"],
  quadriceps: ["AnteriorOuterQuadriceps", "AnteriorMidQuadriceps"],
  rectusabdominis: [
    "AnteriorUpperRectusAbdominis",
    "AnteriorUpperMidRectusAbdominis",
    "AnteriorLowerMiddleRectusAbdominis",
    "AnteriorLowerRectusAbdominis",
  ],
  rhomboids: ["PosteriorRhomboids"],
  sartorius: ["AnteriorHipAdductors"],
  serratusanterior: [],
  soleus: ["PosteriorSoleus"],
  splenius: ["PosteriorUpperTrapezius"],
  sternocleidomastoid: ["AnteriorSternocleidomastoid"],
  subscapularis: ["PosteriorRhomboids"],
  supraspinatus: ["PosteriorRhomboids"],
  tensorfasciaelatae: ["AnteriorHipAdductors"],
  teresmajor: ["PosteriorRhomboids"],
  teresminor: ["PosteriorRhomboids"],
  tibialisanterior: ["AnteriorTibialis"],
  trapeziuslower: ["PosteriorLowerTrapezius"],
  trapeziusmiddle: [
    "PosteriorLowerTrapezius",
    "PosteriorUpperTrapezius",
    "AnteriorTrapezius",
    ,
  ],
  trapeziusupper: ["PosteriorUpperTrapezius", "AnteriorTrapezius", ,],
  tricepsbrachii: ["PosteriorTriceps"],
  wristextensors: ["AnteriorForearms", "PosteriorForearms"],
  wristflexors: ["AnteriorForearms", "PosteriorForearms"],
};
