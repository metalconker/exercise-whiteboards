import * as React from "react";
import { useState } from "react";
import { Typography, Button } from "@mui/material";



// Text that gets erased once touched
export const ErasableText = (props: any) => {
    const [textValue, setTextValue] = useState(props.children);
  
    const onPress = () => {
      setTextValue("");
    };
  
    return (
      <Button
        // style={styles.reps}
        onClick={onPress}
        key={textValue}
      >
        <Typography
          variant="h2"
          fontFamily="DryWhiteboardMarker-Regular"
          fontSize="35"
          color="black"
        >
          {textValue}
        </Typography>
        {props.imageValue}
      </Button>
    );
  };