import React from "react";
import { ScheduleType, Day, Week } from "../../Enums";
import { getWeek } from "../../Helpers";
import { WhiteboardController } from "../../controller/WhiteboardController";

class WhiteboardMenu extends React.Component {
    state = {
      showWarmupsMenu: true,
      showWorkoutsMenu: false,
      currentDayIndex: 0,
      currentWeekIndex: 0,
      currentScheduleType: ScheduleType.WARMUPS,
      currentDay: null,
      currentWeek: null
    };
  
    constructor(props) {
      super(props);
      this.days = Object.keys(Day).map(key => Day[key]);
      this.weeks = Object.keys(Week).map(key => Week[key]);
    }
  
    componentDidMount(){
      let currentDayIndex = new Date().getDay() % this.days.length;
      //Get week as a number between 0 and 4 (because weeks start from Monday)
      let currentWeekIndex = getWeek(new Date()) % this.weeks.length;
      let currentWeek = this.weeks[currentWeekIndex];
      let currentDay = this.days[currentDayIndex];
      this.setState({
        currentWeekIndex, 
        currentDayIndex,
        currentWeek,
        currentDay
      })
    }
  
    onDayChange = index => {
      let currentDayIndex = index % this.days.length;
      let currentDay = this.days[currentDayIndex];
      this.setState({
        currentDayIndex, 
        currentDay
      });
    };
  
    onWeekChange = index => {
      let currentWeekIndex = index % this.weeks.length;
      let currentWeek = this.weeks[currentWeekIndex];
      this.setState({
        currentWeekIndex,
        currentWeek
      });
    };
  
    render() {
      const {
        showWarmupsMenu,
        showWorkoutsMenu,
        currentDayIndex,
        currentWeekIndex,
      } = this.state;
  
      return (
        <div>
          <div>
            <h4 className="mb-3">Choose Day:</h4>
            <div className="d-flex flex-row">
              {this.days.map((day, index) => (
                <button
                  key={day}
                  type="button"
                  className="btn btn-primary mr-2 custom-btn-day"
                  style={{
                    backgroundColor:
                      index === currentDayIndex
                        ? "#fce700"
                        : "rgba(0, 0, 0, 0.7)",
                    color:
                      index === currentDayIndex
                        ? "#000"
                        : "#FFF"
                  }}
                  onClick={() => this.onDayChange(index)}
                >
                  {day}
                </button>
              ))}
            </div>
          </div>
          <div>
            <h4 className="mb-3 mt-3">Choose Week:</h4>
            <div className="d-flex flex-row">
              {this.weeks.map((week, index) => (
                <button
                  key={week}
                  type="button"
                  className="btn btn-primary mr-2 custom-btn-week"
                  style={{
                    backgroundColor:
                      index === currentWeekIndex
                        ? "#fce700"
                        : "rgba(0, 0, 0, 0.7)",
                    color:
                      index === currentWeekIndex ||
                      index === currentDayIndex
                        ? "#000"
                        : "#FFF"
                  }}
                  onClick={() => this.onWeekChange(index)}
                >
                  {week}
                </button>
              ))}
            </div>
          </div>
          <div>
            <h4 className="mt-3">Choose Schedule Type:</h4>
            <div className="d-flex flex-row">
              <button
                type="button"
                className="btn btn-primary mr-2"
                style={{ backgroundColor: showWarmupsMenu ? "#fce700" : "#363636" }}
                onClick={() =>
                  this.setState({
                    showWarmupsMenu: true,
                    showWorkoutsMenu: false,
                    currentScheduleType: ScheduleType.WARMUPS
                  })
                }
              >
                Warmups
              </button>
              <button
                type="button"
                className="btn btn-primary mr-2"
                style={{ backgroundColor: showWorkoutsMenu ? "#fce700" : "#363636" }}
                onClick={() =>
                  this.setState({
                    showWorkoutsMenu: true,
                    showWarmupsMenu: false,
                    currentScheduleType: ScheduleType.WORKOUTS
                  })
                }
              >
                Workouts
              </button>
            </div>
          </div>
          {showWarmupsMenu && (
            <WhiteboardController
              day={this.state.currentDay}
              week={this.state.currentWeek}
              eventScheduleType={ScheduleType.WARMUPS}
            />
          )}
          {showWorkoutsMenu && (
            <WhiteboardController
              day={this.state.currentDay}
              week={this.state.currentWeek}
              eventScheduleType={ScheduleType.WORKOUTS}
            />
          )}
        </div>
      );
    }
  }