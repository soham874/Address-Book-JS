const utility = require('./MainUtility/Utility.js')

class ViewData {

    viewMenu = () => {
        console.log("\n###### VIEW PREVIOUS DATA #####")
        console.log("<1> View previous records for a particular person")
        console.log("<2> View all records sorted in a particular order by Last Name or PIN")
        console.log("<3> Go back to Main menu")
        let choice = utility.takeUserInput("Please enter your choice")
        switch (+choice) {
            case 1:

                break;
            case 2:
                this.viewSortedRecord()
                break;
            case 3:
                break;
            default:
                console.log("Wrong choice. Please try again.")
        }
        if (choice != 3)
            this.viewMenu()
    }

    viewSortedRecord = () => {
        let order = utility.takeUserInput("\n<1> Ascending order <2> Descending order")
        let column = utility.takeUserInput("<1> Last Name <2> PIN code")

        if ((order != 1 && order != 2) && (column != 1 && column != 2)) {
            console.log("Wrong input. Please try again.")
            return
        }

        order = (order == 1) ? 1 : -1
        column = (column == 1) ? "Last_Name" : "PIN"

        var addressbookdata = utility.retriveData()
        console.table(addressbookdata.sort(this.getSortOrder(column,order)))
    }

    getSortOrder = (key, order) => {
        return function (a, b) {
            if (a[key] > b[key]) {
                return order;
            } else if (a[key] < b[key]) {
                return (-1 * order);
            }
            return 0;
        }
    }
}

module.exports = new ViewData()