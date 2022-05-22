// COMPARISON BETWEEN CONSTRUCTOR METHOD AND A NORMAL METHOD

class Employees {
    constructor () {
        console.log("9SAI")                                     // THIS METHOD IS EXECUTED WITHOUT REFERAL OBJECT
    }
    get_Details () {
        console.log("ANIL")                                     // THIS METHOD NEEDS REFERAL OBJECT TO EXECUTE
    }
}
new Employees()                                                 // 9SAI
new Employees()                                                 // 9SAI