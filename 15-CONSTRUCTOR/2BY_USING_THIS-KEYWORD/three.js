// COMPARISON BETWEEN CONSTRUCTOR METHOD AND A NORMAL METHOD BY USING THIS KEYWORD 
// (STRING LITERAL INVOLVES IN NORMAL METHOD)

class Employees {
    constructor (a,b) {
        this.id = a ;
        this.name = b ;
    }
    get_Details () {
        console.log (`id:${this.id} and name:${this.name}`)
    }
}
let r1 = new Employees (101 , "9SAI") ;
let r2 = new Employees (102 , "ANIL") ;
console.log(r1);                                    // Employees { id: 101, name: '9SAI' }
r1.get_Details() ;                                  // id:101 and name:9SAI
console.log(r2) ;                                   // Employees { id: 102, name: 'ANIL' }
r2.get_Details() ;                                  // id:102 and name:ANIL