// test class
import * as ScheduleModel from "../model/ScheduleModel";
import {
  Day,
  ScheduleType,
  Week,
} from "../Enums";
import {checkGetter, checkSetter} from "../Helpers";
import Routines from "./Routines";
import Schedule from "./Schedule"; 

describe("Schedule", () => {
  let schedule: Schedule;
  let day: Day;
  let week: Week; 
  let scheduleType: ScheduleType; 
  let routines: Routines; 
  let scheduleName: string; 

  beforeEach(() => {
    day = Day.MONDAY;
    week = Week.ONE; 
    scheduleType = ScheduleType.WORKOUTS; 
    routines = new Routines("CrossFit WOD A"); 
    scheduleName = ScheduleModel.getScheduleName(day, week, scheduleType);

    schedule = new Schedule(day, week, scheduleType);
  });

  describe("new Schedule", () => {
    it("Initializes without errors", () => {
      expect(schedule).toBeDefined();
    }); 
  }); 

  describe("get/set day", () => {
    it("Get returns Day", () => {
      expect(schedule.day).toEqual(day);
    });

    it("Set sets day", () => {
      schedule.day = Day.TUESDAY; 
      expect(schedule.day).toEqual(Day.TUESDAY);
    }); 
  });

  describe("get/set routines", () => {
    it("Get returns Routine", () => {
      expect(schedule.routines).toEqual(routines);
    });

    it("Set sets Routine", () => {
      schedule.routines = new Routines("CrossFit WOD B"); 
      expect(schedule.routines).toEqual(new Routines("CrossFit WOD B")); 
    }); 
  });

  describe("get/set scheduleName", () => {
    it("Get returns Schedule Name", () => {
      expect(schedule.scheduleName).toEqual(scheduleName);
    });

    it("Set sets Schedule Name", () => {
      schedule.scheduleName = ScheduleModel.getScheduleName(day, week, ScheduleType.Registration);
      expect(schedule.scheduleName).toEqual(ScheduleModel.getScheduleName(day, week, ScheduleType.Registration));
    }); 
  });

  describe("get/set scheduleType", () => {
    it("Get returns ScheduleType", () => {
      expect(schedule.scheduleType).toEqual(scheduleType);
    });

    it("Set sets ScheduleType", () => {
      schedule.scheduleType = ScheduleType.Rest;
      expect(schedule.scheduleType).toEqual(ScheduleType.Rest);;
    }); 
  });

  describe("get/set week", () => {
    it("Get returns Week", () => {
      expect(schedule.week).toEqual(week);
    });

    it("Set sets Week", () => {
      schedule.week = Week.Week2; 
      expect(schedule.week).toEqual(Week.Week2);
    }); 
  });

});