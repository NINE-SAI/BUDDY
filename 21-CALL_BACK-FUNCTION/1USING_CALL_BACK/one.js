// WITHOUT USING CALL BACK

function calculate (a,b,c) {
    let result = " "
    if (c == "sum") {
        result = a+b
    }
    if (c == "multi") {
        result = a*b
    }
    return result
}
let r1 = calculate (10,20,"sum")
let r2 = calculate (10,20,"multi")
console.log(r1)                                 // 30
console.log(r2)                                 // 200