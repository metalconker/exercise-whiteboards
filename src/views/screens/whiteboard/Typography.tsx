import * as React from "react";
import { useState } from "react";

import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Modal } from "@mui/material";
import { TEXT_STYLES } from "./Styles";

/** 
The WhiteboardErasableText component is a Button component with a 
Typography component as its children. 
When the Button is clicked, 
the textValue is set to an empty string.
*/
export const WhiteboardErasableText = ({ children, imageValue }: any) => {
  const [textValue, setTextValue] = useState(children);

  const onPress = () => {
    setTextValue("");
  };

  return (
    <Button onClick={onPress} key={textValue}>
      <Typography variant="h6">{textValue}</Typography>
      {imageValue}
    </Button>
  );
};
/**
The WhiteboardDefaultText component is a Button component with a 
Typography component as its children. 
When the Button is clicked, the
 textValue remains as it was.
*/
export const WhiteboardDefaultText = (props: any) => {
  const [textValue] = useState(props.children);

  return <Typography variant="h5">{textValue}</Typography>;
};

/** 
The WhiteboardClickableText component is a Button component with a 
Typography component as its children. 
When the Button is clicked, the Modal pop-up is set to "open," 
and either a video or image is rendered depending on the mediaType
prop that is passed in.
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
        <Typography variant="h6">{readableName}</Typography>
      </Button>
      <Modal
        open={open}
        onClose={handleClose}
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        {mediaType == "video" ? (
          <video autoPlay src={uri} />
        ) : (
          <img src={uri} alt="popup" />
        )}
      </Modal>
    </>
  );
};

interface WhiteboardClickableTextProps {
  // children: any;
  uri: string;
  readableName: string;
  mediaType: string;
}