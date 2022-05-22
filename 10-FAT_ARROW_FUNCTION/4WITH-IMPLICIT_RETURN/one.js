// NORMAL FUNCTION DOESNOT HAVE IMPLICT RETURN

// FAT ARROW FUNCTION [IMPLICT RETURN GETS THE CODE SHORTER] APPLICABLE WHEN FUNCTION CONSISTS ONLY ONE RETURN STATEMENT

let add = (a,b) => a+b
console.log(add(10,30))                                             // 40
// FAT ARROW WITH SINGLE PARAMETER AND WITH A STRING
let name = (a) => a+"SAI"
console.log(name(9))                                                // 9SAI