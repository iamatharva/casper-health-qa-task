function addPatientElements() {
  return {
    addPatient: function() { return $('app-stats-display > div > div:nth-child(1) > button') },
    firstName: function() { return $('//*[@id="mat-input-7"]') },
    lastName: function() { return $('//*[@id="mat-input-8"]') },
    dayBirthDropdown: function() { return $('#mat-select-3') },
    dateBirth: function() { return $('//*[@id="mat-option-44"]') },
    monthBirthDropdown: function() { return $('#mat-select-4') },
    monthBirth: function() { return $('//*[@id="mat-option-56"]') },
    yearBirthDropdown: function() { return $('#mat-select-5') },
    yearBirth: function() { return $('//*[@id="mat-option-174"]') },
    genderDropdown: function() { return $('//*[@id="mat-select-2"]') },
    gender: function() { return $('//*[@id="mat-option-12"]') },
    height: function() { return $('//*[@id="mat-input-11"]') },
    weight: function() { return $('//*[@id="mat-input-12"]') },
    bmi: function() { return $('//*[@id="mat-input-13"]') },
    therapyGoal: function() { return $('//*[@id="mat-input-14"]') },
    therapistRec: function() { return $('//*[@id="mat-input-15"]') },
    other: function() { return $('//*[@id="mat-input-16"]') },
    email: function() { return $('//*[@id="mat-input-11"]') },
    primaryPhone: function() { return $('//*[@id="mat-input-10"]') },
    street: function() { return $('//*[@id="mat-input-17"]') },
    streetNumber: function() { return $('//*[@id="mat-input-18"]') },
    zip: function() { return $('//*[@id="mat-input-19"]') },
    city: function() { return $('//*[@id="mat-input-20"]') },
    countryDropdown: function() { return $('//*[@id="mat-select-6"]') },
    country: function() { return $('//*[@id="mat-option-176"]') },
    saveForm: function() { return $('.divider-right.mat-ripple.caspar-button') }
  }
}

function addPatientMethods() {
  const element = addPatientElements()

  return {

    addPatient: function() {
      element.addPatient().waitForExist()
      element.addPatient().click()
    },

    setFirstName: function(firstName) {
      element.firstName().waitForExist()
      element.firstName().clearValue()
      element.firstName().setValue(firstName)
    },

    setLastName: function(lastName) {
      element.firstName().waitForExist()
      element.lastName().clearValue()
      element.lastName().setValue(lastName)
    },

    setMonthBirth: function() {
      element.monthBirthDropdown().click()
      element.monthBirth().waitForExist()
      element.monthBirth().click()
    },

    setDayBirth: function() {
      element.dayBirthDropdown().click()
      element.dateBirth().waitForExist()
      element.dateBirth().click()
    },

    setYearBirth: function() {
      element.yearBirthDropdown().click()
      element.yearBirth().waitForExist()
      element.yearBirth().click()
    },

    setGender: function() {
      element.genderDropdown().click()
      element.gender().waitForExist()
      element.gender().click()
    },

    setHeight: function(height) {
      element.height().waitForExist()
      element.height().clearValue()
      element.height().setValue(height)
    },

    setWeight: function(weight) {
      element.weight().waitForExist()
      element.weight().clearValue()
      element.weight().setValue(weight)
    },

    setBmi: function(bmi) {
      element.bmi().waitForExist()
      element.bmi().clearValue()
      element.bmi().setValue(bmi)
    },

    setTherapyGoal: function(therapyGoal) {
      element.therapyGoal().waitForExist()
      element.therapyGoal().clearValue()
      element.therapyGoal().setValue(therapyGoal)
    },

    setTherapistRec: function(therapistRec) {
      element.therapistRec().waitForExist()
      element.therapistRec().clearValue()
      element.therapistRec().setValue(therapistRec)
    },

    setOther: function(other) {
      element.other().waitForExist()
      element.other().clearValue()
      element.other().setValue(other)
    },

    setEmail: function(email) {
      element.email().waitForExist()
      element.email().clearValue()
      element.email().setValue(email)
    },

    setPrimaryPhone: function(primaryPhone) {
      element.primaryPhone().waitForExist()
      element.primaryPhone().clearValue()
      element.primaryPhone().setValue(primaryPhone)
    },

    setStreet: function(street) {
      element.street().waitForExist()
      element.street().clearValue()
      element.street().setValue(street)
    },

    setStreetNumber: function(streetNumber) {
      element.streetNumber().waitForExist()
      element.streetNumber().clearValue()
      element.streetNumber().setValue(streetNumber)
    },

    setZip: function(zip) {
      element.zip().waitForExist()
      element.zip().clearValue()
      element.zip().setValue(zip)
    },

    setCity: function(city) {
      element.city().waitForExist()
      element.city().clearValue()
      element.city().setValue(city)
    },

    setCountry: function() {
      element.countryDropdown().click()
      element.country().waitForExist()
      element.country().click()
    },

    saveForm: function() {
      element.saveForm().waitForExist()
      element.saveForm().click()
    }
  }
}

function patient() {
  const patient = addPatientMethods()

  return {
    addPatient: function() {
      patient.addPatient()
    },

    fillForm: function(patientDetails) {
      patient.setFirstName(patientDetails.firstName)
      patient.setLastName(patientDetails.lastName)
      patient.setDayBirth()
      patient.setMonthBirth()
      patient.setYearBirth()
      patient.setGender()
      patient.setHeight(patientDetails.height)
      patient.setWeight(patientDetails.weight)
      patient.setBmi(patientDetails.bmi)
      patient.setTherapyGoal(patientDetails.therapyGoal)
      patient.setTherapistRec(patientDetails.therapistRec)
      patient.setOther(patientDetails.other)
      patient.setEmail(patientDetails.email)
      patient.setPrimaryPhone(patientDetails.primaryPhone)
      patient.setStreet(patientDetails.street)
      patient.setStreetNumber(patientDetails.streetNumber)
      patient.setZip(patientDetails.zip)
      patient.setCity(patientDetails.city)
      patient.setCountry()
    },

    saveForm: function() {
      patient.saveForm()
    }
  }
}

module.exports = patient()