// INVOCKING NUMBER OF TIMES NORMAL FUNCTIION

function name (a,b) {
    console.log(a+b)
}
name(10,20)
name(10,30)
name(20,20)                                                      // 30
                                                                // 40
                                                               // 40


// INVOCKING NUMBER OF TIMES FAT ARROW FUNCTION

let add = (a,b) => {
    console.log(a+b)
}
add(20,30)
add(40,20)
add(20,10)                                                       // 50
                                                                // 60
                                                               // 30