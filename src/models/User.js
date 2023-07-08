export default class MyNameClass {

  firstName = "";
  lastName = "";
  email = "";
  userName = "";
  password = "";

  constructor(fname, lname) {
    this.firstName = fname;
    this.lastName = lname;
    this.email = email;
    this.userName = userName;
    this.password = password;
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

}