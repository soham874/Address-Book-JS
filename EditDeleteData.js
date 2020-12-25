const utility = require('./MainUtility/Utility.js')
const viewUtility = require('./ViewPreviousData.js')
const addUtility = require('./TakeNewData.js')
const fs = require('fs');

class EditDelete {

    //main menu controlling the view options
    editDeleteMenu = (fileName) => {
        console.log("\n###### EDIT PREVIOUS DATA #####")
        console.log("<1> Edit previous records for a particular person")
        console.log("<2> Delete all records from the file")
        console.log("<3> Delete records of a particular person")
        console.log("<4> Go back to Main menu")
        let choice = utility.takeUserInput("Please enter your choice")
        switch (+choice) {
            case 1:
                this.editParticular(fileName)
                break;
            case 2:
                this.deleteAllData(fileName)
                break;
            case 3:
                this.deleteParticular(fileName)
                break;
            case 4:
                break;
            default:
                console.log("Wrong choice. Please try again.")
        }
        if (choice != 4)
            this.editDeleteMenu()
    }

    deleteParticular = (fileName) => {
        let res = viewUtility.viewParticular()
        if (res == -1)
            return

        let flag = utility.takeUserInput("\nAre you sure you want to delete this persons records? Enter 0 to abort")
        if (flag == 0) {
            console.log("Data deleting aborted.")
            return
        }

        var array = utility.retriveData()
        delete array[res]

        let data = JSON.stringify(array, (k, v) => Array.isArray(v) ? v.filter(e => e !== null) : v, 2);
        fs.writeFileSync(fileName, data);

        console.log("\nData of person deleted successfully. Reinitializing code data....")
        utility.readPresentData(fileName)
    }

    editParticular = (fileName) => {
        let res = viewUtility.viewParticular()
        if (res == -1)
            return

        let flag = utility.takeUserInput("\nAre you sure you want to edit this persons records? Enter 0 to abort")
        if (flag == 0) {
            console.log("Data editting aborted.")
            return
        }

        var array = utility.retriveData()
        var editting = array[res]
        delete array[res]

        console.log(editting)

        console.log("First name and last name are not changable. Apart from that choose which data you want to change.")
        do {
            var choice = utility.takeUserInput("<1> Address <2> City <3> State <4> PIN <5> Phone Number <0> Finish")

            if (choice >= 1 && choice <= 5) {
                do {
                    console.log(+choice + 1)
                    var result = addUtility.detailVerification(+choice + 1)
                } while (result == 0)

                switch (+choice) {
                    case 1:
                        editting.Address = result
                        break;
                    case 2:
                        editting.City = result
                        break;
                    case 3:
                        editting.State = result
                        break;
                    case 4:
                        editting.PIN = result
                        break;
                    case 5:
                        editting.Phone_Number = result
                        break;
                }

            } else if (choice != 0)
                console.log("Wrong input. Please try again.")
        } while (choice != 0)

        array.push(editting)
        let data = JSON.stringify(array, (k, v) => Array.isArray(v) ? v.filter(e => e !== null) : v, 2);
        fs.writeFileSync(fileName, data);

        console.log("\nData of person editted successfully. Reinitializing code data....")
        utility.readPresentData(fileName)
    }

    deleteAllData = (fileName) => {

        let flag = utility.takeUserInput("\nAre you sure you want to delete all records? Enter 0 to abort")
        if (flag == 0) {
            console.log("Data deleting aborted.")
            return
        }

        fs.writeFileSync(fileName,JSON.stringify([]))
        console.log("All data deleted. Reinitializing code data....")
    }
}

module.exports = new EditDelete()