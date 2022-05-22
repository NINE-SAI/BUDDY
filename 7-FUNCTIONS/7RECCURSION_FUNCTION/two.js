// WAF OF RECCURSION FUNCTION [ NON-STOPPABLE INVOCATION ]

var i = 1
function wish ( ) {
    console.log ( "GM" , i )
    i++
    wish ( )
}
wish ( )