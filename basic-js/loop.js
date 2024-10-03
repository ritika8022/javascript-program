// print WeB-Developments 10 times...

for(let i=1; i<=10; i++){
   console.log("Web Developement")
}

// calculate the sum of 1 to 5 ??

let sum = 0;
for(let i=1; i<=5; i++){
    sum = sum + i;
}
console.log("sum =", sum)

// print web developement 5times ...(while loop)

let i=1;
while(i <= 5){
    console.log("web developement");
    i++;
}

// example of do-while loop
//  print web developement (do-while loop)

// let i=1;
// do{
//     console.log("web developement");
//     i++
// } while(i<=5)

// let str= "web"
// let size= 0;
// for( let i of str){
//     console.log ("i=",i)
//     size++;
// }
// console.log("string size =", size)


let student = {
    name : "rahul",
    age : 21,
    cgpa : 9.5,
    isPass : false
}

for(let key in student){
    console.log("key = ", key, "value = ", student[key])
}