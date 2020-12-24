const readLine = require('../../node_modules/readline-sync')

class Utility {

    takeUserInput = (message) => {
        let input = readLine.question(`\n${message} : `)
        return input
        }

}

module.exports = new Utility()