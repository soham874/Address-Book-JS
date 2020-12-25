const utility = require('./MainUtility/Utility.js')

const patternFirstName = RegExp('^[A-Z][a-z]{2,}$', 'gm')
const patternLastName = RegExp('^[A-Z][a-z]{2,}$', 'gm')
const patternAddress = RegExp('^[A-Z].{9,}$', 'gm')
const patternCity = RegExp('^[A-Z][a-z]{2,}$', 'gm')
const patternState = RegExp('^[A-Z][a-z]{2,}$', 'gm')
const patternPIN = RegExp('^[0-9]{6}$', 'gm')
const patternPhoneNumber = RegExp('^[0-9]{2}[ ][0-9]{10}$', 'gm')

const regexArray = [patternFirstName, patternLastName, patternAddress, patternCity, patternState, patternPIN, patternPhoneNumber]
const detailsRequired = ["first name", "last name", "address", "city", "state", "PIN", "Phone Number"]

const newData = []

class AddDataUtility {

    //adds new Details to the required file
    addNewData = (fileName) => {
        for (let i = 0; i < detailsRequired.length; i++) {
            do {
                let inputData = utility.takeUserInput(`Please input the ${detailsRequired[i]}`)
                var result = this.detailVerification(regexArray[i], detailsRequired[i], inputData)
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
    detailVerification = (regexString, testingString, name) => {
        if (regexString.test(name)) {
            console.log(`${testingString} is according to pattern.`)
            return name
        }
        console.log("Error in input. Please try again.")
        return 0
    }
}

module.exports = new AddDataUtility()