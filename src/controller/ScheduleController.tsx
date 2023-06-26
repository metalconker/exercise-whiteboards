import * as Schedule from "../model/ScheduleModel";
import * as ConstantsSchedule from "../Constants";
import * as Exercises from "../model/ExercisesDatabaseModel";
import { MUSCLE_IMAGES } from "../model/MusclesModel";
import { MUSCLES_CONSTANTS } from "../view/styles/Stylesheet";
import { checkGetter, checkSetter, validateProps } from "../Helpers";
import { MUSCLE_COLORS } from "../Constants";
// import React from "react";
import { ScheduleBoard } from "../view/ScheduleBoardView";
import React from "react";

/** 
This class is used to create a controller for the ExerciseBoardScreen. 
It stores the schedule name, the schedule data, the day and week values, 
the max sets and the metaIDKeys. It also contains a setSchedule method 
which initializes the scheduleData, maxSets and metaIDKeys when given an 
exerciseTypeIndex.
*/
export class ScheduleBoardScreenController {
  constructor(day: string, week: number, scheduleType: number) {
    this.day = day;
    this.week = week;
    this.setSchedule(scheduleType);
  }

  render() {
    return (
      <ScheduleBoard
        name={this._scheduleName}
        maxSets={this._maxSets}
        data={this._scheduleData}
      ></ScheduleBoard>
    );
  }

  private setSchedule(scheduleType: number) {
    if (scheduleType != null) {
      try {
        this.scheduleName = Schedule.getScheduleNameDWT(
          this.day,
          this.week,
          Object.keys(ConstantsSchedule.EXERCISE_TYPE)[scheduleType]
        );
      } catch (e) {
        throw new Error(
          "Error while setting schedule name. Invalid scheduleType."
        );
      }
    }
    // Initialize ScheduleData using schedule name
    if (this.scheduleName) {
      try {
        this.scheduleData = new Schedule.ScheduleData(this.scheduleName);
      } catch (e) {
        throw new Error(
          "Error while initializing schema data. Invalid scheduleName."
        );
      }
    }
    // Get maximum no. of sets
    if (this.scheduleData) {
      try {
        this.maxSets = this.scheduleData.getMaxSets();
      } catch (e) {
        throw new Error("Error while getting max sets. Invalid scheduleData.");
      }
    }
    // Get metadata keys
    if (this.scheduleData) {
      try {
        this.metaIDKeys = this.scheduleData.getMetadataKeys();
      } catch (e) {
        throw new Error(
          "Error while getting metaIDKeys. Invalid scheduleData."
        );
      }
    }
  }

  private _scheduleName: string;
  public get scheduleName(): string {
    return checkGetter(this._scheduleName, "Schedule name");
  }
  public set scheduleName(value: string) {
    this._scheduleName = checkSetter(value, "Schedule name");
  }
  private _scheduleData: Schedule.ScheduleData;
  public get scheduleData(): Schedule.ScheduleData {
    return checkGetter(this._scheduleData, "Schedule data");
  }
  public set scheduleData(value: Schedule.ScheduleData) {
    this._scheduleData = checkSetter(value, "Schedule data");
  }
  private _day: string;
  public get day(): string {
    return checkGetter(this._day, "Day");
  }
  public set day(value: string) {
    this._day = checkSetter(value, "Day");
  }
  private _week: number;
  public get week(): number {
    return checkGetter(this._week, "Week");
  }
  public set week(value: number) {
    this._week = checkSetter(value, "Week");
  }
  private _maxSets: number;
  public get maxSets(): number {
    return checkGetter(this._maxSets, "Max sets");
  }
  public set maxSets(value: number) {
    this._maxSets = checkSetter(value, "Max sets");
  }
  private _metaIDKeys: any[];
  public get metaIDKeys(): any[] {
    return checkGetter(this._metaIDKeys, "MetaiIdKeys");
  }
  public set metaIDKeys(value: any[]) {
    this._metaIDKeys = checkSetter(value, "MetaiIdKeys");
  }
}

// export class MuscleViewController {
//   mapColors(muscles) {
//     const mappedColors = {};
//     Object.keys(MUSCLE_COLORS).forEach((colorKey) => {
//       const color = MUSCLE_COLORS[colorKey];
//       const unmappedColors = muscles[color];

//       mappedColors[color] = new Set();
//       unmappedColors.forEach((unmapped) => {
//         const muscleMap = MUSCLES_CONSTANTS[unmapped.toUpperCase()];
//         if (muscleMap) {
//           muscleMap.forEach((currentKey) => {
//             mappedColors[color].add(currentKey);
//           });
//         }
//       });
//     });

//     return mappedColors;
//   }

//   loopColor(color, colorArray) {
//     const temp: any[] = [];
//     colorArray.forEach((muscleContainer) => {
//       if (muscleContainer) {
//         const current = MUSCLE_IMAGES[muscleContainer];
//         const uniqueKey = `${color}-${muscleContainer}`;

//         temp.push(
//           <Box key={uniqueKey}>
//             <img src={current[color]} alt="popup" style={popupStyle} />
//           </Box>
//         );
//       }
//     });
//     return temp;
//   }
// }
