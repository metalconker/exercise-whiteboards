class ExerciseData {
    private data: any;
  
    constructor(data: any) {
      if (data instanceof ExerciseData) {
        this.data = data.data;
        return;
      }
      this.data = data;
    }
    getName(): string {
      return this.data["Name"];
    }
  
    getNumSets(): number {
      return parseInt(this.data["Sets"]);
    }
  
    getNumReps(): number {
      return parseInt(this.data["Reps"]);
    }
  
    getTime(): number {
      return parseInt(this.data["Time"]);
    }
  
    getIsAlternating(): boolean {
      if (parseInt(this.data["Alternating"]) == 0) return false;
      return true;
    }
  
    getIsTimeBased(): boolean {
      if (this.getTime() > 0) return true;
      return false;
    }
  }
}


  // Get Exercise Data
  // Returns the ExerciseData for the specified exercise ID
  // Throws an error if the exercise ID is invalid
  getExerciseData(metaID: string): ExerciseData {
    let exerciseData = this.exercisesData[metaID];
    if (exerciseData) {
      return exerciseData;
    }
    throw `No Exercise Data for key: ${metaID}`;
  }


  // Load Exercise Data
  // Loads the data for each exercise in the schedule and stores the results in the exercisesData map
  private loadExerciseData() {
    for (let exercise in this.scheduleData) {
      // Key
      this.keys.push(exercise);

      // Data
      let rawData = this.scheduleData[exercise];
      let exerciseData = new ExerciseData(rawData);
      this.exercisesData[exercise] = exerciseData;

      // Max Sets
      let numSets = exerciseData.getNumSets();
      if (numSets > this.maxSets) {
        this.maxSets = numSets;
      }
    }
  }



  // Get Max Sets
  // Returns the maximum number of sets in this schedule
  getMaxSets(): number {
    return this.maxSets;
  }


}