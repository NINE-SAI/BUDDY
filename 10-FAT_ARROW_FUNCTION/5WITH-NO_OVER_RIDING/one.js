// NORMAL FUNCTION IS OVER RIDING

function name ( ) {
    console.log ("9SAI")
}
name ( )
function name ( ) {
    console.log ("ANIL")
}
name ( )                                                            // ANIL
                                                                    // ANIL


// FAT ARROW FUNCTION IS NOT OVER RIDING

let add = () => {
    console.log("9SAI")
}
add()
let okay = () => {
    console.log("ANIL")
}
okay()                                                              // 9SAI
                                                                    // ANIL