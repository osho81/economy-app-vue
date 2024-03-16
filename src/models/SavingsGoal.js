export default class SavingsGoal {
// Class mirroring savingsGoal entity in backend (Economy-app)

  id;
  goalName = "";
  currentAmountOfCash = "";
  targetAmountOfCash = "";
  user = "";

  // Skip all of the other backend fields, for now

  constructor(id, goalName, currentAmountOfCash, targetAmountOfCash, user) {
    this.id = id;
    this.goalName = goalName;
    this.currentAmountOfCash = currentAmountOfCash;
    this.targetAmountOfCash = targetAmountOfCash;
    this.user = user;
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
  getUser() {
    return this.user;
  }

}