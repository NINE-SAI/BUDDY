// CHECK IF THE GIVEN OBJECT IS EMPTY OR NOT EMPTY

let employees = { }
console.log(Object.keys(employees))
/*console.log(employees.length == 0) ? console.log("EMPTY") : console.log("NOT EMPTY")*/

if ( Object.keys(employees) == 0) {
    console.log("EMPTY")
}
else {
    console.log("NOT EMPTY")
}