// PROMISE IS A CALL BACK FUNCTION WITH CONTAINING TWO ARGUMRNTS ARE RESOLVE & REJECT
// RESOLVES GIVES SUCCESS AND .then BLOCK WILL EXECUTES AND DATA WILL SHOWS
// REJECT GIVES FAILURE AND .catch BLOCK WILL EXECUTES AND DATA WILL NOT SHOWED

let test = (resolve,reject)=>{
    let flag = true
    if (flag == true) {
        resolve("SUCCESS")
    }
    else {
        reject("FAILURE")
    }
}
test((emp)=>{
    console.log(emp)
},
(err)=>{
    console.log(err)
})                                           // SUCCESS