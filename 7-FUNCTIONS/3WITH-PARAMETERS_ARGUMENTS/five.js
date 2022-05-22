// WAF WITH BOTH PARAMETERS AND ARGUMENTS

function details ( id , name , salary ) {
    console.log ( id ) ;
    console.log ( name ) ;
    console.log ( salary ) ;
}
details ( 101 , "9SAI" , 45000 )                                        // 101
                                                                        // 9SAI
                                                                        // 45000

// WAF WITH PARAMETERS , ARGUMENTS AND DEFAULT VALUES IN STATEMENTS

function details ( id , name , salary ) {
    console.log ( id ) ;
    console.log ( name ) ;
    console.log ( salary + 5000 ) ;
}
details ( 101 , "9SAI" , 45000 )                                        // 101
                                                                        // 9SAI
                                                                        // 50000