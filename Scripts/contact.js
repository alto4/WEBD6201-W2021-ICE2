"use strict";

// Contact class
class Contact {
  // constructor
  /**
   * @param {string} fullName 
   * @param {string} contactNumber 
   * @param {string} email 
   */
  constructor(fullName = '', contactNumber = '', email = '') {
    this.FullName = fullName;
    this.ContactNumber = contactNumber;
    this.Email = email;
  }

  // Accessor and mutators
  get FullName() 
  {
    return this.fullName;
  }
  set FullName(value) 
  {
    this.fullName = value;
  }
  get ContactNumber() 
  {
    return this.contactNumber;
  }
  set ContactNumber(value) {
    this.contactNumber = value;
  }
  get Email() 
  {
    return this.email;
  }
  set Email(value) 
  {
    this.email = value;
  }

  // Methods - handle localStorage data
  toString() 
  {
    return `Full Name:         ${this.FullName}\nContact Number:    ${this.ContactNumber}\nEmail Address:     ${this.Email}`;
  }

  /**
   * toJSON - returns JSON object detailing properties of an individual contacts
   * 
   * @returns {Object}
   */
  toJSON()
  {
    return {
      "fullName": this.FullName,
      "contactNumber": this.ContactNumber,
      "email": this.Email
    }
  }

  /**
   * serialize - converts an individual contact into comma-separate value string
   * 
   * @returns {string}
   */
  serialize() 
  {

    if(this.FullName !== "" && this.ContactNumber !== "" && this.Email !== "")
    { 
      return `${this.FullName},${this.ContactNumber},${this.Email}`;    
    }
    else {
      console.error("One or more fields in the contact form are empty.");
      return null;
    }
  }

  /**
   * deserialize - takes a comma-seperated string and assigns values to properties of a contact instance
   * 
   * @param {string} data
   * @return {void}
   */
  deserialize(data) 
  {
    let propertyArray = data.split(',');
    this.FullName = propertyArray[0];    
    this.ContactNumber = propertyArray[1];
    this.Email = propertyArray[2];
  }
}
