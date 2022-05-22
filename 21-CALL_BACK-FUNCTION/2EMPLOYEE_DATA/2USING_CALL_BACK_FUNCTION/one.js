// BY USING CALL BACK FUNCTION

let employees = [{id:101,name:"9SAI",salary:50000},
                 {id:102,name:"ANIL",salary:45000}]
let createEmployee = (emp,callBack)=>{
    setTimeout(()=>{
        employees.push(emp)
        callBack()
    },3000)
}
let getEmployee = ()=>{
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
}
createEmployee({id:103,name:"TEJA",salary:40000},getEmployee);