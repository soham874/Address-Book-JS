const readLine = require('../../node_modules/readline-sync')
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
            console.log(`\nData loaded from pervious file successfully`)
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

}

module.exports = new Utility()