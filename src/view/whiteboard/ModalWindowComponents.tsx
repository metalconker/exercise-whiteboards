import * as React from "react";
import { Box, Paper } from "@mui/material";
import {
  EXERCISE_DETAILS_WINDOW,
  MUSCLES_BACKGROUND,
  MUSCLES_IMAGES,
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
      <>
        {this.props.mediaType == "video" ? (
          <video autoPlay src={this.props.uri} style={{ maxWidth: "50%" }} />
        ) : (
          <img src={this.props.uri} alt="popup" style={{ maxWidth: "50%" }} />
        )}
      </>
    );
  }
}

interface MusclesImagesProps {
  muscles: Array<Array<NodeRequire>>;
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
          img.src = src2.toString();
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
      <Paper elevation={0} square sx={MUSCLES_BACKGROUND}>
        {this.state.imagesLoaded &&
          this.props.muscles
            .filter((src) => src.length > 0)
            .map((src) =>
              src.map((src2) => (
                <Box key={src2.toString()}>
                  <img
                    src={src2.toString()}
                    alt="popup"
                    style={MUSCLES_IMAGES}
                  />
                </Box>
              ))
            )}
      </Paper>
    );
  }
}

// export class MuscleView extends React.Component {
//   render() {
//     var separatemuscles = SeparateMuscles(this.props.metaid);
//     var muscles = MapColors(separatemuscles);
//     var drawable = [];
//     for (let colorkey in Colors) {
//       let color = Colors[colorkey];
//       drawable.push(LoopColor(color, muscles[color]));
//     }

//     return (
//       <ImageBackground style={styles.background} source={MaleBodyImage}>
//         {drawable}
//       </ImageBackground>
//     );
//   }
// }

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
      <Box key="InformationRow" sx={EXERCISE_DETAILS_WINDOW}>
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

// <Modal
// open={this.state.open}
// onClose={this.handleClose}
// style={clickableStyles}
// >
// {this.props.mediaType == "video" ? (
//   <video autoPlay src={this.props.uri} style={{ maxWidth: "50%" }} />
// ) : (
//   <img src={this.props.uri} alt="popup" style={{ maxWidth: "50%" }} />
// )}
// </Modal>

// handleOpen() {
//   this.setState({ open: true });
// }

// handleClose() {
//   this.setState({ open: false });
// }

// };

// render() {

// <Modal open={this.state.open} onClose={this.handleClose}>
// {this.props.children}
// </Modal>

//   return (
//     <>
//       <Button onClick={this.handleOpen} key={this.props.metaID}>
//         <Typography variant="h3">
//           {this.props.readableName.toLowerCase()}
//         </Typography>
//       </Button>
//       <Modal
//         open={this.state.open}
//         onClose={this.handleClose}
//         style={musclesStyles}
//       >
//         <Box sx={styles.modalcontents}>
//           <DefaultText key="ExerciseName">
//             {/* {Exercises.GetName(this.props.metaID)} */}
//           </DefaultText>
//           <Box key="MediaAndMusclesRow" sx={styles.mediaandmusclesrow}>
//             <Box key="Media" sx={styles.mediacontainer}>
//               {this.renderMedia(this.props.metaID)}
//               <Box key="Muscles" sx={styles.muscles}>
//                 <MuscleView
//                   key="Muscles"
//                   sx={styles.muscles}
//                   metaid={this.props.metaID}
//                 />
//               </Box>
//             </Box>
//           </Box>
//           {/* {renderInformation(this.props.metaID)} */}
//         </Box>
//       </Modal>
//     </>
//   );
// }
// }
