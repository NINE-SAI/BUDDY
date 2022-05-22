// WAF WITH RETURN STATEMENT

function wish ( ) {
    return "GM"
}
wish ( )                                                    // NO RESULT


// WAF

function wish ( ) {
    return "GM"
}
var message = wish ( )
console.log (message)                                       // GM