const readLine = require('../node_modules/readline-sync')
const fs = require('fs');
var addressBookData = []

class Utility {

    //displays passed message and takes input from user
    takeUserInput = (message) => {
        let input = readLine.question(`${message} : `)
        return input
    }


    //reads present data. Creates new file if file not present (sync)
    readPresentData = (fileName) => {

        try {
            var data = fs.readFileSync(fileName)
            addressBookData = JSON.parse(data);
            console.log(`\nData loaded successfully`)
        }
        catch (err) {
            let data = JSON.stringify([]);
            fs.writeFileSync(fileName, data);
            console.log("\nFile not found. Created new file");
        }

    }

    //retrive current addressbook data
    retriveData = () => {
        return addressBookData
    }

    //appends new info to the file
    writeNewData = (filename, input) => {
        addressBookData.push(input);
        try {
            let data = JSON.stringify(addressBookData);
            fs.writeFileSync(filename, data);
            console.log("New Data Written to file successfully!\n")
        } catch (err) {
            console.log("Uh Oh there was some error. Please try again\n")
        }
    }

}

module.exports = new Utility()