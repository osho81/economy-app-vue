export default class User {
// Class mirroring  User entity in backend (Economy-app)
// No id - id will be added at backend

  // id; // Is added dynamically at backend
  firstName = "";
  lastName = "";
  email = "";
  userName = "";
  password = "";

  // List of savingsgoals for user
  // can be skipped at frontend, but weill initially set as null here, since it is used in ListUsers
  savingGoals = []; 

  // constructor(id, firstName, lastName, email, userName, password, savingGoals) { // No id needed at frontend in this case
  constructor(firstName, lastName, email, userName, password) {
    // this.id = id;
    this.firstName = firstName;
    this.lastName = lastName;
    this.email = email;
    this.userName = userName;
    this.password = password;
    // this.savingGoals = savingGoals;
  }

  // getId() {
  //   return this.id;
  // }
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

  // getSavingGoals() {
  //   return this.savingGoals;
  // }

}