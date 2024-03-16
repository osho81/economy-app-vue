export default class User {
// Class mirroring  User entity in backend (Economy-app)

  id; 
  firstName = "";
  lastName = "";
  email = "";
  userName = "";
  password = "";

  // List of savingsgoals for user
  savingGoals = [];

  constructor(id, firstName, lastName, email, userName, password, savingGoals) {
    this.id = id;
    this.firstName = firstName;
    this.lastName = lastName;
    this.email = email;
    this.userName = userName;
    this.password = password;
    this.savingGoals = savingGoals;
  }

  getId() {
    return this.id;
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

  getSavingGoals() {
    return this.savingGoals;
  }

}