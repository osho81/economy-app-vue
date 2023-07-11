export default class SavingsGoal {

    goalName = "";
    currentAmountOfCash = "";
    targetAmountOfCash = "";
    user = "";

    // Skip all of the other backend fields, for now
  
    constructor(goalName, currentAmountOfCash, targetAmountOfCash, user) {
      this.goalName = goalName;
      this.currentAmountOfCash = currentAmountOfCash;
      this.targetAmountOfCash = targetAmountOfCash;
      this.user = user;
    }
  
    getFullName() {
      return this.goalName + ' ' + this.currentAmountOfCash;
    }
    getGoalName() {
      return this.goalName;
    }
    getCurrentAmountOfCash() {
      return this.currentAmountOfCash;
    }
    getTargetAmountOfCash() {
      return this.targetAmountOfCash;
    }
    getUser() {
      return this.user;
    }
  
  }