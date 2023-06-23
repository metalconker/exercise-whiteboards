import * as React from "react";
import { useState } from "react";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Box, Modal, Paper } from "@mui/material";
import * as Exercises from "../../model/ExercisesModel";
import { styles, MUSCLES_CONSTANTS } from "../styles/Stylesheet";
import { MALE_BODY_IMAGE, MUSCLE_IMAGES } from "../../model/MusclesModel";
import SeparateMuscles from "../../model/MusclesModel";
import { MuscleViewController } from "../../controller/ExerciseController";
import { MUSCLE_COLORS } from "../../GlobalConstants";



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