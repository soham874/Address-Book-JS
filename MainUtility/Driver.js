const utility = require('./Utility.js')
const addUtility = require('../TakeNewData.js')
const viewUtility = require('../ViewPreviousData.js')
const editUtility = require('../EditDeleteData.js')

//main menu display function
displayMainMenu = () => {
    console.log("\n###### MAIN MENU ######   ")
    console.log("<1> Add new data")
    console.log("<2> View current data")
    console.log("<3> Edit or delete previous data")
    console.log("<4> Exit address book")
    var choice = utility.takeUserInput("Please enter your choice")
    console.log(choice)
    switch (+choice) {
        case 1:
            console.log("\n#### ADD NEW DATA ###")
            addUtility.addNewData(fileName)
            break;
        case 2:
            viewUtility.viewMenu()
            break;
        case 3:
            editUtility.editDeleteMenu(fileName)
            break;
        case 4:
            console.log("\nThank You for using address book!\n")
            process.exit(0)
        default:
            console.log("\nWrong input. Please try again.")
    }
    displayMainMenu()
}

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~Main code starts here~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

console.log("\nWelcome to Address Book!")
var fileName = utility.takeUserInput("\nPlease enter file name to load from")
//var fileName = "demo.json"

utility.readPresentData(fileName)
var addressbookdata = utility.retriveData()
console.log(`Number of records present currently = ${addressbookdata.length}\n`)

displayMainMenu()