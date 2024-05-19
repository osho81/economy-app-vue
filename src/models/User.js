export default class User {
// Class mirroring  User entity in backend (Economy-app)
// No id - id will be added dynamically at backend

  // id; 
  firstName = "";
  lastName = "";
  email = "";
  userName = "";
  password = "";

  // List of savingsgoals for user
  // savingGoals = []; // Ignore this property at frontend, or add and initially set as null

  // constructor(id, firstName, lastName, email, userName, password, savingGoals) {
    
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