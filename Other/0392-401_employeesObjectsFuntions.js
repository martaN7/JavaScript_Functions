const employees = [
    {
        name: "Alan Smith",
        age: 35,
        salary: 5879,
        languages: ['english', 'spanish'],
        leader: false,
    },
    {
        name: "Susan Bones",
        age: 32,
        salary: 15879,
        languages: ['english', 'spanish', 'german'],
        leader: true,

    },
    {
        name: "John Locke",
        age: 40,
        salary: 9500,
        languages: ['english', 'german', 'finnish'],
        leader: false,

    },
    {
        name: "Melinda May",
        age: 37,
        salary: 19500,
        languages: ['english', 'mandarin', 'finnish', 'italian'],
        leader: true,

    }
]

//392
function getHighestSalary(employees){
    const sorted = employees.sort((a,b) => b.salary - a.salary);
    return  `Employee with highest salary: ${sorted[0].name} - ${sorted[0].salary}`;
}
console.log(getHighestSalary(employees));


//393
function getLowestSalary(employees){
    const sorted = employees.sort((a,b) => a.salary - b.salary);
    return  `Employee with lowest salary: ${sorted[0].name} - ${sorted[0].salary}`;
}
console.log(getLowestSalary(employees));

//394
function getAverageSalary(employees){
    return employees.map(employee => employee.salary).reduce((p,n) => p + n)/employees.length;
}
console.log(getAverageSalary(employees));

//395
function giveRaise(employees, percent){
    return employees.map(employee => {
        return {
            ...employee,
            salary: employee.salary * ((100+percent)/100)
        }
    })
}
console.log(giveRaise(employees, 10));

//396
function getPersonalData(employeeName){
    const [employee] = employees.filter(employee => employee.name === employeeName);
    const languages = employee.languages.join(', ');
    return  `Personal data of ${employeeName}:
             age: ${employee.age}
             salary: ${employee.age}
             mastered languages: ${languages}`;
}

console.log(getPersonalData("John Locke"));

//397
function getManagers(employees){
    return employees.filter(employee => employee.leader === true);
}
console.log(getManagers(employees));

//398
function getTeamMembers(employees){
    return employees.filter(employee => employee.leader === false);
}
console.log(getTeamMembers(employees));

//399
function givePromotion(employeeName){
    return employees.map(employee => {
        if(employee.name === employeeName){
            return {
                ...employee,
                leader: true
            }
        }
        return employee;
    });
}
console.log(givePromotion("John Locke"));

//400
function fireEmployee(employeeName){
    return employees.filter(employee => employee.name !== employeeName);
}
console.log(fireEmployee("John Locke"));

//401
function hireEmployee(name, age, languages){
    employees.push({
        name: name,
        age: age,
        salary: 5500,
        languages: languages,
        leader: false
    });
    return employees;
}
console.log(hireEmployee("Eli Baker", 39, ["english", "portuguese"]));

















