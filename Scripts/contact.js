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
    this.m_fullName = fullName;
    this.m_contactNumber = contactNumber;
    this.m_email = email;
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

  // Methods - handle localStorage data
  toString() 
  {
    return `Full Name:         ${this.m_fullName}\nContact Number:    ${this.m_contactNumber}\nEmail Address:     ${this.m_email}`;
  }

  /**
   * toJSON - returns JSON object detailing properties of an individual contacts
   * 
   * @returns {Object}
   */
  toJSON()
  {
    return {
      "fullName": this.fullName,
      "contactNumber": this.contactNumber,
      "email": this.email
    }
  }

  /**
   * serialize - converts an individual contact into comma-separate value string
   * 
   * @returns {string}
   */
  serialize() 
  {
    return `${this.m_fullName},${this.m_contactNumber},${this.m_email}`;    
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
    this.fullName = propertyArray[0];    
    this.contactNumber = propertyArray[1];
    this.emailAddres = propertyArray[2];
  }
}
