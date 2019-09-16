const loginPage = require('../pages/login.page')
const patientPage = require('../pages/patient.page')
const newPatientPage = require('../pages/newPatient.page')
const patientDetails = require('../data/patientDetails.json')
const newPatient = require('../data/newPatient.json')
const testEnv = require('../data/test-env.js')

describe('New patient Login page', () => {
  before(() => {

    loginPage.fillForm(testEnv.env.username, testEnv.env.password)

    patientPage.addPatient()
    patientPage.fillForm(patientDetails)
    patientPage.saveForm()

    var tempLogin = newPatientPage.newPatientSuccessPopUp()
    loginPage.fillForm(tempLogin[0],tempLogin[1])
  });

  it('Check the release info page is displayed for the new patient page.', () => {
    const releaseInfoTitle = newPatientPage.releaseInfo()
    newPatientPage.closePage()

    expect(releaseInfoTitle).to.equal(newPatient.releaseInfoTitle)
  });

  it('Navigate to login page', () => {
    const tAndCTitle = newPatientPage.tAndC()
    expect(tAndCTitle).to.equal(newPatient.tAndCTitle)
  });
});