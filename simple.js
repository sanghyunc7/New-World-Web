let sampleWord1 = "8pass99";
let sampleWord2 = "bana12";
let pwRegex = /^(?=\w{5,})(?=\w+\d{2})/;


let result = pwRegex.test(sampleWord1);
let result2 = pwRegex.test(sampleWord2);

console.log("fdasfdsaf", result);

for (let i = 0; i < 10; i++) {
    console.log(i);

}

let a = {
    age: 30,
    name: "John",
    arr: [100, 90, 90]
}





var students = [
    { name: 'Quincy', grade: 96 },
    { name: 'Jason', grade: 84 },
    { name: 'Alexis', grade: 100 },
    { name: 'Sam', grade: 65 },
    { name: 'Katie', grade: 90 }
  ];
  
  var studentGrades = students.filter(student => student.grade >= 90);
console.log(studentGrades[0]);