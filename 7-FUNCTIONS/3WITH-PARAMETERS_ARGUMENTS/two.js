// WAF WITH MORE STATEMENTS

function result ( a , b ) {
    console.log ( a - b ) ;
    console.log ( a + b ) ;
}
result ( 30 , 10 )                                                  // 20
                                                                   // 40                                          


// WAF WITH MORE STATEMNTS AND INVOCING NUMBER OF TIMES

function result ( a , b ) {
    console.log ( a + b ) ;
    console.log ( a - b ) ;
}
result ( 50 , 20 ) ;
result ( 50 , 40 ) ;
result ( 100 , 60 ) ;
result ( 20 , 10 ) ;                                                // 40
                                                                   // 20
                                                                    // 70
                                                                   // 30
                                                                    // 160
                                                                   // 40
                                                                    // 30
                                                                   // 10