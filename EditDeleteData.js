const utility = require('./MainUtility/Utility.js')
const viewUtility = require('./ViewPreviousData.js')
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

                break;
            case 2:

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
        if(flag == 0){
            console.log("Data deleting aborted.")
            return
        }

        var array = utility.retriveData()
        delete array[res]

        let data = JSON.stringify(array, (k, v) => Array.isArray(v) ? v.filter(e => e !== null) : v, 2);
        fs.writeFileSync(fileName, data);

        console.log("\nData of person deleted successfully. Reinitializing data...")
        utility.readPresentData(fileName)
    }
}

module.exports = new EditDelete()