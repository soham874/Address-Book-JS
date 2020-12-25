const utility = require('./MainUtility/Utility.js')

const patternFirstName = RegExp('^[A-Z]{1}[a-z]{2,}.*$', 'gm')
const patternLastName = RegExp('^[A-Z]{1}[a-z]{2,}.*$', 'gm')
const patternAddress = RegExp('^.{10,}$', 'gm')
const patternCity = RegExp('^[A-Z]{1}[a-z]{2,}.*$', 'gm')
const patternState = RegExp('^[A-Z]{1}[a-z]{2,}.*$', 'gm')
const patternPIN = RegExp('^[0-9]{6}$', 'gm')
const patternPhoneNumber = RegExp('^[0-9]{2}[ ][0-9]{10}$', 'gm')

var regexArray = [patternFirstName, patternLastName, patternAddress, patternCity, patternState, patternPIN, patternPhoneNumber]
const detailsRequired = ["first name", "last name", "address", "city", "state", "PIN", "Phone Number"]

class AddDataUtility {

    //adds new Details to the required file
    addNewData = (fileName) => {
        var newData = []
        for (let i = 0; i < detailsRequired.length; i++) {
            do {  
                var result = this.detailVerification(regexArray[i],detailsRequired[i])
            } while (result == 0)
            newData.push(result)
        }
        let formattedData = {
            First_Name: newData[0],
            Last_Name: newData[1],
            Address: newData[2],
            City: newData[3],
            State: newData[4],
            PIN: newData[5],
            Phone_Number: newData[6]
          }
        utility.writeNewData(fileName,formattedData)
    }

    //verify a particular required detail
    detailVerification = (regexString, input) => {
        var inputData = utility.takeUserInput(`\nPlease input the ${input}`)
        if (regexString.test(inputData)) {
            console.log(`Entered detail is according to pattern.`)
            return inputData
        }
        console.log("Error in input. Please try again.")
        return 0
    }
}

module.exports = new AddDataUtility()