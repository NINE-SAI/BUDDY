let employees = [{id:101,name:"9SAI",salary:50000},
                 {id:102,name:"ANIL",salary:45000}]
let createEmployee = ((emp)=>{
    return new Promise((resolve,reject)=>{
        let flag = true
        setTimeout(()=>{
            employees.push(emp)
            flag ? resolve ("SUCCESS") : reject ("REJECT")
        },3000)
    })
})
let getEmployee = (()=>{
    setTimeout(()=>{
        let rows = " "
        employees.map((employee)=>{
            rows = rows + `<tr>
                                <td>${employee.id}</td>
                                <td>${employee.name}</td>
                                <td>${employee.salary}</td>
                           </tr>`
        })
        document.getElementById("id").innerHTML = rows
    },1000)
})
let run = async () => {
    await createEmployee({id:103,name:"TEJA",salary:40000})
    getEmployee()
}
run()