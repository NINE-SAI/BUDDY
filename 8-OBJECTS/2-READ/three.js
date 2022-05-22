// READ AN OBJECT BY USING for(in)


let employees = { id:101 , name:"9SAI" , salary:45000 }
        // WAP TO PRINT ALL OBJECT KEYS
for (employee in employees) {
    console.log(employee)
}                                                               // ID
                                                                // NAME
                                                                // SALARY
        // WAP TO PRINT ALL OBJECT VALUES
for (employee in employees) {
    console.log (employees[employee])
}                                                               // 101
                                                                // 9SAI
                                                                // 45000
        // TO GET UNDEFINED
for (employee in employees) {
    console.log(employee.key)
}                                                               // UNDEFINED
                                                                // UNDEFINED
                                                                // UNDEFINED