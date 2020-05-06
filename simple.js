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

console.clear();
console.log(a.arr[2]);