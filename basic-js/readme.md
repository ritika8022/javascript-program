javascript:-
-javascript is used for building logics of a web page.
-it is a high level programing language used in both clint side as well as server side.
-javascript is comes from echma script so we see the latest version of javascript in the form of echma script.
-now we use javascript version 6 i.e ES6(echma-script 6).
in another way we called ES6 as the vanilla javascript.
-node js is the run time environment of javascript.

vriable:-
-variable is type of container to store some data.
-in javascript there are 3 types of variable are there...

 1.let:-let is a type of variable which is used for changing the variable name later.
       - now these days , most of the cases we used let for creating variable.
      -let is a block scope code so we have been used let for most of the cases.
 2.var:-var is a type of variable which is also used for changing the variable in later stage.
       -var is used in oldest browser so now a days we dont use var.
 3.const:- const means constant.
  task: difference between Let $ Var.

  Rules for creating variable name:-
  -variable names are case sensitive "a", & A" is different.
  -only letter ,digit,underscore & special character is allowed, (not even white space)
  -only letter, underscore or special character should be 1t character only.
  -reserve words cannot be a variable name. 

  Datatypes in js:-
  -datatypes is an attributes associated with a piece of data that tells a computer system how to interprit its value.
  -in datatype we used "typeof" operator to know what type of data it is.
  -in javascript there are 2 types of datatype.

  1.primitive Datatype:-
  - in javascript there are 7types of primitive datatypes are used.

  1.number- number are the type of datatypes those it contains some numerical values
  2.boolean- in boolean datatypes we get boolean value means nothing
  3.undefined- data is not define
  4.null- in this datatype we get null for the value means nothing
  5.bigINT- in bigINT we will get big int value (-99999999 to +99999999) on the above
  6.string- string is a type of datatypes that can hold some character like names or words etc.
  7.symbol- in symbol we get one symbol of more than one value

  2.Reference Datatypes:-
  -Reference datatypes are the type of datatype which can hold multiple element  in a single time.
  -Reference datatypes are -> array, object, function

  1.Array:-
  -array is a datatype where we can store similar type of data is a contigious memory location.
  -array indexing starts from "0"
  ex:- let arr = ["ram", "hari", "sita"]
                    0      1        2
  2.Object:-
  - object is reference type datatype where we can store more than one element in a single entity.
  -mainly objects are working on (key:value) pair.
   ex:-
   let emp1={
    "name" : "rahul",
    "age" : "21",
    "address" : "bbsr",
    "mobile no." : "947576689",
   }      
-in the above example we can see that the left hand side elements are the keys & the right hand side elements are values so we can tell that object is key:values.

3. function:-
-in function we repeatedly do the task in function.
-function reduce our code complexity time & space complexity.
-syntax->
//function
function my_schedule(){
   console.log("we wake up at 6am")
   console.log("we go for a morning walk")
   console.log("we go to our college for time pass")
}
// function calling
my_schedule()

Operator in js:-
-operator are the key features to do some task or operate some task.
-ex: A+B
-in the above example A,B are the operands & +" is the operator.
-there are 5 types of operator are present in java script.

1.Arithmatic operator:- (+,-,*,/), %(modulus), **(exponentiation)
2.Logical operator:- logical AND (&&), logical OR (||) , logical NOT(!)
 A  B  (A && B)
 T  T     T
 T  F     F
 F  T     F
 F  F     F

 A  B   (A||B)
3.Assignment operator:- (=,+=,-+,*=,%=,**=)
4.Unary operator:- increment (++), decrement(--)
5.comparision operator:- (==, !==,===, etc....)

Conditional statement:-
-to implement some condition in the code.
-there are three types of condition statement are there.
1.if condition:-
-if condition is true then statement is true.
-syntax:-
if(condition){
   statement
}
2.if- else condition:-
-if condition is true then statement is true otherwise false.
-syntax:-
if(condition){
   statement
} else {
   statement
}
3.if-elif condition:-
-its check the condition multiple times , where the condition is true.
-syntax:-
if(condition){
   statement
} else if(condition){
   statement
} else if(condition){
   statement
} else{
   statement
}

practice question:-
- write a code which can give grades to students according to their scores:-
1. 80 - 100 (A)
2. 70 - 79 (B)
3. 60 - 69 (C)
4. 50 - 59 (D)
5. 0 - 49 (fail- go to anganwadi)

LOOPS in javascript:-
-loops are used to execute a piece of code again and again.
-there are 5 types of loops present in javascript.

1. for loop:
-syntax->
for (initialization ; condition; incre/decre){
   statement
}
- example-> (we want to print web bocket 5 times)
for (let i = 1; i <= 5;++){
   console.log("web bocket")
}

2. while loop:
-syntax->
initialization
while(condition){
   statement
   inc/dec
}

3. do-while loop:
-syntax->
do {
   statement
   inc/dec
} while(condition)

4. for-of loop:- it iterates on string & array .
5. for-in loop: it iterates over the objects.

String in javascript:
-string is sequence of character used to represent text.
-create a string -> let str = "web bocket"
-we calculate the string length -> str.length() property.
-we calculate the string index -> str[0], str[1]...etc

String literals :-
-its a way to have embedded expression in string .
-its denoted by symbol.

String interpoation:-
-to create string by doing substituion of placeholder.
-ex-> string text ${expression} string text.

string escape symbol:-
- \n -> new line
- \t -> tab inside a string

String method:-
1. str.upperCase()
2. str.toLowerCase()
3. str.trim()
4. str.slice(start,end)
5. str1.concat(str2)
6. str.replace(searchVal, newVal)
7. str.charAt(idx)