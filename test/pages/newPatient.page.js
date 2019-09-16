function newPatientElements() {
  return {
    casperId: function() { return $('div.d-flex.justify-content-between.mt-3 > div:nth-child(3) > div:nth-child(2)') },
    casperTempPass: function() { return $('div.d-flex.justify-content-between.mt-3 > div:nth-child(4) > div:nth-child(2)') },
    releaseOfMedicalInformation:function() { return $('div.tos-large.text-left > p:nth-child(1) > span:nth-child(2)') },
    tAndC:function() { return $('div.tos-large.text-left > p:nth-child(2) > span:nth-child(1)') },
    closePage:function() { return $('button.remove.mat-icon-button > span > mat-icon') },
    releaseInfoTitle:function() { return $('div.ng-star-inserted > p:nth-child(1) > strong') },
    tAndCTitle:function() { return $('app-contract-preview > div > app-terms > div > h3') }
  }
}

function newPatientMethods() {
  const element = newPatientElements()

  return {

    caserId: function() {
      element.casperId().waitForExist()
      const id  = element.casperId()
      return id.getText()
    },

    casperTempPass: function() {
      element.casperTempPass().waitForExist()
      const pass  = element.casperTempPass()
      return pass.getText()
    },

    releaseInfo: function() {
      element.releaseOfMedicalInformation().waitForExist()
      element.releaseOfMedicalInformation().click()
    },

    releaseInfoTitle: function() {
      element.releaseInfoTitle().waitForExist()
      const title  = element.releaseInfoTitle()
      return title.getText()
    },

    tAndC: function() {
      element.tAndC().waitForExist()
      element.tAndC().click()
    },

    tAndCTitle: function() {
      element.tAndCTitle().waitForExist()
      const title  = element.tAndCTitle()
      return title.getText()
    },

    closePage: function() {
      element.closePage().waitForExist()
      element.closePage().click()
    }
  }
}

function newPatient() {
  const newPatient = newPatientMethods()

  return {

    newPatientSuccessPopUp: function() {
      let list = []
      list.push(newPatient.caserId())
      list.push(newPatient.casperTempPass())
      return list
    },

    releaseInfo: function(){
      newPatient.releaseInfo()
      return newPatient.releaseInfoTitle()
    },

    tAndC: function(){
      newPatient.tAndC()
      return newPatient.tAndCTitle()
    },

    closePage: function(){
      newPatient.closePage()
    },
  }
}

module.exports = newPatient()