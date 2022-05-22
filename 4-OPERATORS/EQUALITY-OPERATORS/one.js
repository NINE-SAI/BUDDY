// EQUALITY-OPERATORS [ == ]
// EQUALITY CHECKS ONLY CONTENT

// NUMBER == NUMBER
var a = 10 ;
var b = 10 ;
console.log(a == b)    //TRUE
var a = 10 ;
var b = 20 ;
console.log(a == b)    //FALSE
// NUMBER == STRING
var a = 10 ;
var b = "10" ;
console.log(a == b)    //TRUE
var a = 10 ;
var b = "20" ;
console.log(a == b)    //FALSE
// STRING == STRING
var a = "SAI" ;
var b = "SAI" ;
console.log(a == b)    //TRUE
var a = "Sai" ;
var b = "SAI" ;
console.log(a == b)    //FALSE


// STRICT EQUALITY [ === ]
// STRICT EQUALITY CHECKS DATA TYPE AND CONTENT

//NUMBER === STRING
var a = 2 ;
var b = "2" ;
console.log(a === b)    //FALSE