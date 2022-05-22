// CONSTRUCTOR METHOD BY THIS KEYWORD WITHOUT PROPERTIES

class Employees {
    constructor (a,b,c) {
        this.id = a ;
        this.name = b ;
        this.salary = c ;
    }
}
let r1 = new Employees (101 , "9SAI" , 45000);
let r2 = new Employees (102 , "ANIL" , 50000);
console.log(r1);                                        // Employees { id: 101, name: '9SAI', salary: 45000 }
console.log(r2);                                        // Employees { id: 102, name: 'ANIL', salary: 50000 }