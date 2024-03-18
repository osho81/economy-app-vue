export default class SavingsGoal {
// Class mirroring savingsGoal entity in backend (Economy-app)

  id;
  goalName = "";
  currentAmountOfCash = "";
  targetAmountOfCash = "";
  startDate = "";
  endDate = "";
  userId = "";

  // Skip all of the other backend fields, for now

  constructor(id, goalName, currentAmountOfCash, targetAmountOfCash, startDate, endDate, userId) {
    this.id = id;
    this.goalName = goalName;
    this.currentAmountOfCash = currentAmountOfCash;
    this.targetAmountOfCash = targetAmountOfCash;
    this.startDate = startDate;
    this.endDate = endDate;
    this.userId = userId;
  }

  getId() {
    return this.id;
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
  getStartDate() {
    return this.startDate;
  }
  getEndDate() {
    return this.endDate;
  }
  getUserId() {
    return this.userId;
  }

}