let employees = [{id:101 , name:"9SAI" , salary:45000} ,
                 {id:102 , name:"ANIL" , salary:40000} ,
                 {id:103 , name:"TEJA" , salary:35000}
                ]

function display_Data () {
    let row = " "
    for (employee of employees) {
        row = row + `<tr>
                        <td>${employee.id}</td>
                        <td>${employee.name}</td>
                        <td>${employee.salary}</td>
                    </tr>`
    }
    document.getElementById("tbody_Data").innerHTML=row
}