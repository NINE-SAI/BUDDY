//  WAP BY USING for loop \ for(){}

let employees = [
    { id:101 , name:"9SAI" , salary:45000 } ,
    { id:102 , name:"ANIL" , salary:35000 } ,
    { id:103 , name:"TEJA" , salary:55000 }
]
for( var i = 1 ; i <= 3 ; i++ ) {                   // 3 or employees.length-1                  // i++ or i=i+1
    console.log(employees[i])
}                                                                   // { id: 101, name: '9SAI', salary: 45000 }
                                                                    // { id: 102, name: 'ANIL', salary: 35000 }
                                                                    // { id: 103, name: 'TEJA', salary: 55000 }