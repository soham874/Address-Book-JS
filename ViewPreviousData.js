const utility = require('./Utility.js')
const detailsRequired = ["First_Name", "Last_Name", "Address", "City", "State", "PIN", "Phone_Number"]

class ViewData {

    //main menu controlling the view options
    viewMenu = () => {
        console.log("\n###### VIEW PREVIOUS DATA #####")
        console.log("<1> View previous records for a particular person")
        console.log("<2> View all records sorted in a particular order by Last Name or PIN")
        console.log("<3> Go back to Main menu")
        let choice = utility.takeUserInput("Please enter your choice")
        switch (+choice) {
            case 1:
                this.viewParticular()
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

    //view file data sorted in a particular order
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
        console.table(addressbookdata.sort(this.getSortOrder(column, order)))
    }

    //internal function to help sorting (not for public use)
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

    //view records of a particular person
    viewParticular = () => {
        var data = utility.retriveData()
        console.log("\n<1> First Name <2> Last Name <3> Address <4> City <5> State <6> PIN <7> Phone Number")
        let choice = utility.takeUserInput("\nPlease enter on which detail's basis you want to search")
        var input = utility.takeUserInput(`Please enter ${detailsRequired[choice - 1]} to search by`)

        var i = data.findIndex(val => val[detailsRequired[choice - 1]] === input)

        if (i == -1)
            console.log("Sorry. matching records were not found.")
        else
            console.log(`\n${data[i].First_Name} ${data[i].Last_Name}\n${data[i].Address}, ${data[i].City}, ${data[i].State} - ${data[i].PIN}\nPhone number-${data[i].Phone_Number}`)

        return i
    }
}

module.exports = new ViewData()