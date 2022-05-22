// WRITE A FUNCTION IN A FUNCTION [ INNER FUNCTION ]

function outer ( ) {
    console.log ( "OUTER FUNCTION" )
    function inner ( ) {
        console.log ( "INNER FUNCTION" )
    }
    inner ( )
}
outer ( )                                               // OUTER FUNCTION
                                                        // INNER FUNCTION