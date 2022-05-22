// CONSTRUCTOR METHOD BY USING THIS KEYWORD

class Employees {
    min_Balance = 500 ;
    name ;
    id ;
    constructor ( a,b ) {
        this.name = a ;
        this.id = b ;
    }
}
let r1 = new Employees ("9SAI" , 101) ;
let r2 = new Employees ("ANIL" , 102) ;
console.log(r1);                                    // Employees { min_Balance: 500, name: '9SAI', id: 101 }
console.log(r2);                                    // Employees { min_Balance: 500, name: 'ANIL', id: 102 }