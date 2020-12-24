const utility = require('./Utility.js')

console.log("\nWelcome to Address Book!")

var fileName = utility.takeUserInput("Please enter file name to load from.")

console.log(fileName)