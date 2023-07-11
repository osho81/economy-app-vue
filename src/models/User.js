import SavingsGoal from "./SavingsGoal";

export default class User {

  firstName = "";
  lastName = "";
  email = "";
  userName = "";
  password = "";

  // List of savingsgoals for user
  // savingsGoals = SavingsGoal;
  savingsGoals = [];

  constructor(firstName, lastName, email, userName, password, savingsGoals) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.email = email;
    this.userName = userName;
    this.password = password;
    this.savingsGoals = savingsGoals;
  }

  getFullName() {
    return this.firstName + ' ' + this.lastName;
  }
  getFirstName() {
    return this.firstName;
  }
  getLastName() {
    return this.lastName;
  }
  getEmail() {
    return this.email;
  }
  getUserName() {
    return this.userName;
  }
  getPassword() {
    return this.password;
  }

  getSavingsGoals() {
    return this.savingsGoals;
  }

}