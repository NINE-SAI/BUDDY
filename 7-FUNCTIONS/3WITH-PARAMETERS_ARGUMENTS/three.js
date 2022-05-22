//  WRITE A FUNCTION WHEN DEFAULT VALUES ARE GIVEN

function result ( a , b , c , d = 10 ) {
    console.log( a + b + c + d ) ;
}
result ( 20 , 30 , 40 )                                         // 100


// WAF WITH ARGUMENTS AND DEFAULT VALUES

function reuslt ( a , b , c , d = 30 ) {
    console.log( a + b + c + d ) ;
}
result ( 100 , 300 , 400 , 200 )                                // 1000