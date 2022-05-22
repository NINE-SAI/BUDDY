// MEARGING TWO ARRAYS IN ANOTHER ARRAY BY USUNG SPREAD OPERATOR

let size = [1,2,3]
let new_Size = [2,3,4]
let result = [...size,...new_Size]
console.log(result);                        // [ 1, 2, 3, 2, 3, 4 ]  ARRAY ALLOWS DUPLICATES