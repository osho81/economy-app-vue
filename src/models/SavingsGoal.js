export default class SavingsGoal {
// Class mirroring savingsGoal entity in backend (Economy-app)

  id;
  bajs = "";
  currentAmountOfCash = "";
  targetAmountOfCash = "";
  startDate = "";
  endDate = "";
  userId = "";

  // Skip all of the other backend fields, for now

  constructor(id, bajs, currentAmountOfCash, targetAmountOfCash, startDate, endDate, userId) {
    this.id = id;
    this.bajs = bajs;
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
    return this.bajs + ' ' + this.currentAmountOfCash;
  }
  getbajs() {
    return this.bajs;
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