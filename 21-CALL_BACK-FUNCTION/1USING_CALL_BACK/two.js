// BY USING CALL BACK FUNCTION

let sum = (a,b)=>{
    return a+b
}
let multi = (a,b)=>{
    return a*b
}
let calculate = (a,b,c)=>{
    return c (a,b)
}
let r1 = calculate(10,20,"sum")
let r2 = calculate(10,20,"multi")
console.log(r1)
console.log(r2)