let employees = [
                    {id:101,name:"9SAI",salary:50000},
                    {id:101,name:"9SAI",salary:50000},
                    {id:101,name:"9SAI",salary:50000},
                 ]
function add(){
    let rows = " "
    employees.map((employee)=>{
            rows = rows + `<tr>
                                <td>${employee.id}</td>
                                <td>${employee.name}</td>
                                <td>${employee.salary}</td>
                            </tr>`
    })
    document.getElementById("id").innerHTML = rows
}