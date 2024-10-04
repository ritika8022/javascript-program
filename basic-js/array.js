// let marks= [87,90,44,77,77]

// console.log(marks);
// console.log(marks[0])
// console.log(marks[1])
// console.log(marks.length)

//  let heros = ["iron man", "hulk", "super man", "spyder man", "chota bheem"]

// for(let i=0; i< heros.length; i++){
//     console.log(heros[i])
// }

// for-of
// for(let i of heros){
//     console.log(i.toUpperCase())
// }

// const marks = [86, 78, 45, 32, 67]; 

// function calculateAverage(marks) {
//     let total = 0;
//     for (let i = 0; i < marks.length; i++) {
//         total += marks[i]; 
//     }
//     const average = total / marks.length;
//     return average; 
// }
// const averageMark = calculateAverage(marks);
// console.log(`The average mark of the class is: ${averageMark}`);

// let item = [567,973,390,321,689]
// let i = 0;
// for (let val of item){
//     console.log('value at index ${i} = ${val}');
//     let offer = val/10;
//     item[i] - offer;
//     console.log('value offer after')
// }


// let foodItem = ["burger","pizza","sandwich","samosa","gupchup"]
// console.log(foodItem)
// foodItem.push("dahibara","masala dosa")
// console.log(foodItem)
// foodItem.pop()
// console.log(foodItem)

// let marks = [67,98,43,23,89]
// console.log(marks)
// let mark = marks.toString();
// console.log(mark)

let marvelHeros = ["thon","ironman","superman"]
let odiaHeros = ["anubhab","abusan"]

let heros = marvelHeros.concat(odiaHeros)
console.log(heros)