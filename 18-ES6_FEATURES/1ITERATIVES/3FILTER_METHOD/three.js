// RETURNS THE SAME ARRAY

let marks = [60,70,80]
let new_Marks = marks.filter((mark)=>{
    return mark + 100
})
console.log(new_Marks);                             // [ 60, 70, 80 ]