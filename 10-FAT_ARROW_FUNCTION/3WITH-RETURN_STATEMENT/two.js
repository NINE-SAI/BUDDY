// INVOCKING NUMBER OF TIMES NORMAL FUNCTION

function name (a,b) {
    return a+b
}
let answer = name (10,40)
console.log(answer)
// we can use this also for invocation
console.log(name(30,10))
console.log(name(30,40))                                                // 50
                                                                        // 40
                                                                        // 70


// INVOCKING NUMBER OF TIMES FAT ARROW FUNCTION

let add = (a,b) => {
    return a+b
}
console.log(add(10,20))
console.log(add(30,20))
// we can use this also for invocation
let result = add (30,10)
console.log(result)                                                     // 30
                                                                        // 50
                                                                        // 40