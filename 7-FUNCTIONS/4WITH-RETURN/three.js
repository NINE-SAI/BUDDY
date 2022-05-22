// WRITE A RETURN FUNCTION WITH DEFAULTPARAMETERS AND DEFAULT RETURN VALUES IN THE PRESENTS OF ARGUMENTS

function add ( a , b , c = 100 ) {
    return a + b + c + 500
}
var result = add ( 20 , 30 )
console.log ( result )                                              // 650