// JSON WHICH THE GROUP OF OBJECTS ARE BLOCKED IN THE ARRAY
// WAP BY USING for(of)

let employees = [
    { id:101 , name:"9SAI" , salary:45000 } ,
    { id:102 , name:"ANIL" , salary:35000 } ,
    { id:103 , name:"TEJA" , salary:55000 } ,
]
for (employee of employees) {
    console.log(employee)
}                                                       // { id: 101, name: '9SAI', salary: 45000 }
                                                        // { id: 102, name: 'ANIL', salary: 35000 }
                                                        // { id: 103, name: 'TEJA', salary: 55000 }
for (employee of employees) {
    console.log(employee.id)
}                                                       // 101
                                                        // 102
                                                        // 103
for (employee of employees) {
    console.log(employee.name)
}                                                       // 9SAI
                                                        // ANIL
                                                        // TEJA
for (employee of employees) {
    console.log(employee.salary)
}                                                       // 45000
                                                        // 35000
                                                        // 55000