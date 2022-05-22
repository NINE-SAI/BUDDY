// EXPANDING ARRAY BY USING SPREAD OPERATOR

let marks = [38,49,29]
let new_Marks = [69,50,90]
let all_Marks = [...marks,...new_Marks,59,79,48]
console.log(all_Marks);                             // [38, 49, 29, 69, 50, 90, 59, 79, 48]