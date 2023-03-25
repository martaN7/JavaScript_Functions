const students = [
    {
        name: "Alan Smith",
        age: 18,
        grades: [4,5,4.5,6],
        hobby: 'football',
        height: 180,
        gender: 'male',
    },
    {
        name: "Susan Bones",
        age: 17,
        grades: [4,3,4.5,3.5],
        hobby: 'books',
        height: 172,
        gender: 'female',

    },
    {
        name: "John Locke",
        age: 19,
        grades: [5,4.7,5.5,6],
        hobby: 'books',
        height: 193,
        gender: 'male',

    },
    {
        name: "Melinda May",
        age: 16,
        grades: [2,5,4.2,3.5],
        hobby: 'martial arts',
        height: 164,
        gender: 'female',

    }
]

//376
function getSmartestStudent(students){
    const studentsGrades = students
        .map(student => {
            return {
                ...student,
                avgGrades: student.grades.reduce((p,n) => p+n)/student.grades.length
            }})
        .sort((a,b) => b.avgGrades - a.avgGrades);
    return  `Best person in class: ${studentsGrades[0].name} - ${studentsGrades[0].avgGrades}`;
}

console.log(getSmartestStudent(students));

//377
function getSmartestFemaleStudent(students){
    const studentsGrades = students
        .filter(student => student.gender === 'female')
        .map(student => {
            return {
                ...student,
                avgGrades: student.grades.reduce((p,n) => p+n)/student.grades.length
            }})
        .sort((a,b) => b.avgGrades - a.avgGrades);
    return  `Best female in class: ${studentsGrades[0].name} - ${studentsGrades[0].avgGrades}`;
}
console.log(getSmartestFemaleStudent(students));

//378
function getSmartestMaleStudent(students){
    const studentsGrades = students
        .filter(student => student.gender === 'male')
        .map(student => {
            return {
                ...student,
                avgGrades: student.grades.reduce((p,n) => p+n)/student.grades.length
            }})
        .sort((a,b) => b.avgGrades - a.avgGrades);
    return  `Best male in class: ${studentsGrades[0].name} - ${studentsGrades[0].avgGrades}`;
}
console.log(getSmartestMaleStudent(students));

//379
function getLeastSmartStudent(students){
    const studentsGrades = students
        .map(student => {
            return {
                ...student,
                avgGrades: student.grades.reduce((p,n) => p+n)/student.grades.length
            }})
        .sort((a,b) => a.avgGrades - b.avgGrades);
    return  `Worst person in class: ${studentsGrades[0].name} - ${studentsGrades[0].avgGrades}`;
}

console.log(getLeastSmartStudent(students));

//380
function getAverageGrades(students){
    students
        .map(student => {
            return {
                ...student,
                avgGrades: student.grades.reduce((p,n) => p+n)/student.grades.length
            }}).forEach(student => {
        return console.log(`${student.name} - ${student.avgGrades}`);
    });
}
getAverageGrades(students);

//381
function getAverageAge(students){
    return students.map(student => student.age).reduce((p,n) => p + n)/students.length;
}
console.log(getAverageAge(students));

//382
function getOldestStudent(students){
    const byAge = students.sort((a,b) => b.age - a.age);
    return  `Oldest person in class: ${byAge[0].name} - ${byAge[0].age}`;
}

console.log(getOldestStudent(students));

//383
function getYoungestStudent(students){
    const byAge = students.sort((a,b) => a.age - b.age);
    return  `Youngest person in class: ${byAge[0].name} - ${byAge[0].age}`;
}

console.log(getYoungestStudent(students));

//384
function getAverageHeight(students){
    return students.map(student => student.height).reduce((p,n) => p + n)/students.length;
}
console.log(getAverageHeight(students));

//385
function getTallestStudent(students){
    const byHeight = students.sort((a,b) => b.height - a.height);
    return  `Tallest person in class: ${byHeight[0].name} - ${byHeight[0].age}`;
}

console.log(getTallestStudent(students));

//386
function getShortestStudent(students){
    const byHeight = students.sort((a,b) => a.height - b.height);
    return  `Shortest person in class: ${byHeight[0].name} - ${byHeight[0].age}`;
}

//387
function getStudentsHobby(students){
    return students.forEach(student => {
        return console.log(`${student.name} - ${student.hobby}`);
    });

}

getStudentsHobby(students);

//388

function greetTheWorld(students){
    console.log('Greet the world students!')
    students.forEach(student => {
        return console.log(`Hello, I'm ${student.name}`);
    });

}

greetTheWorld(students);