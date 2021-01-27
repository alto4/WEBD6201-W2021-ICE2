"use strict";

// Contact class
class Contact {
  // constructor
  constructor(fullName, contactNumber, email) {
    this.m_fullName = fullName;
    this.m_contactNumber = contactNumber;
    this.m_email = email;
  }
  // methods
  toString() {
    return `Full Name:         ${this.m_fullName}\nContact Number:    ${this.m_contactNumber}\nEmail Address:     ${this.m_email}`;
  }

  // Accessor and mutators
  get FullName() 
  {
    return this.m_fullName;
  }
  set FullName(value) 
  {
    this.m_fullName = value;
  }
  get ContactNumber() 
  {
    return this.m_contactNumber;
  }
  set ContactNumber(value) {
    this.m_contactNumber = value;
  }
  get Email() 
  {
    return this.m_email;
  }
  set Email(value) 
  {
    this.m_email = value;
  }
}
