let employees = [{id:101,name:"9SAI",salary:50000},
                 {id:102,name:"ANIL",salary:45000},
                 {id:103,name:"TEJA",salary:40000}]
function onload () {
    let rows = " "
    employees.filter((employee)=>{
        rows = rows + `<tr>
                            <td>${employee.id}</td>
                            <td>${employee.name}</td>
                            <td>${employee.salary}</td>
                        </tr>`
    })
    document.getElementById("id").innerHTML = rows
}