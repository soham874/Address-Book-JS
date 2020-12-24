const utility = require('./Utility.js')

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

            break;
        case 2:

            break;
        case 2:

            break;
        case 3:

            break;
        case 4:

            console.log("\nThank You for using address book!\n")
            process.exit(0)
        default:
            console.log("\nWrong input. Please try again.")
            displayMainMenu()
    }
}

console.log("\nWelcome to Address Book!")
var fileName = utility.takeUserInput("\nPlease enter file name to load from")

utility.readPresentData(fileName)
var addressbookdata = utility.retriveData()
console.log(`Number of records present currently = ${addressbookdata.length}\n`)

displayMainMenu()