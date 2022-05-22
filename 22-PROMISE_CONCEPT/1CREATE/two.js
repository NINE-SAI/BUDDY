let gotoMovie = (resolve,reject)=>{
    let flag = 600
    if (flag > 500) {
        resolve("GOT TO MOVIE")
    }
    else {
        reject("GO TO PG")
    }
}
gotoMovie((ticket)=>{
    console.log(ticket)
},
(err)=>{
    console.log(err)
})                                       // GO TO MOVIE (when flag avlue if above 500)