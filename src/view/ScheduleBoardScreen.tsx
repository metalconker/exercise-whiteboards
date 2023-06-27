import * as React from "react";
import {
  WhiteboardBody,
  WhiteboardContainer,
  WhiteboardTitle,
} from "./containers/WhiteboardContainer";
import {
  ScheduleGrid,
  SetsRowHeader,
} from "./components/ScheduleGridComponents";

interface ScheduleBoardScreenProps {
  name: string;
  maxSets: number;
  data: any;
}

export class ScheduleBoardScreen extends React.Component<ScheduleBoardScreenProps> {
  render() {
    // Renders the board to the screen
    return (
      <WhiteboardContainer>
        <WhiteboardTitle>{this.props.name}</WhiteboardTitle>
        <WhiteboardBody>
          <SetsRowHeader maxSets={this.props.maxSets} />
          {/* <ScheduleGrid data={this.props.data} /> */}
        </WhiteboardBody>
      </WhiteboardContainer>
    );
  }
}
