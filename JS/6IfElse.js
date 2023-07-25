console.log("this is js")

// the value which is given in bracket will bechecked

// if (3 > 5) {

//     // if true then upper value will be printed
//     console.log("5 is greater than 0");
// }

// else {
//     // if false then this value is printed
//     console.log("5 is less than 0");
// }



// console.log(Boolean(["aa"]))
// const middle = 10
// console.log(middle < 5)

// const str = "aaa"

// console.log(str.length)

// if (str.length > 10) {
//     console.log("string length is less than 10")
// }

// else {
//     console.log("string length is greater than 10")
// }



// const arr = [1, 2, 3, 4, 5, 2, 2, 2, 2000, 4000, 30, 37, 24, 23, 345, 9678, 856, 132, 567, 76, 654]

// if (arr[arr.length - 1] < 10) {
//     console.log("arr 5 is less than 10")
// }

// else {
//     console.log("arr 5 is grater than 10")
// }
// // to print array last element prement i we change aganest to do it first we have to give arr then [arr.length-1 ] so it will give the array last element i.e code is hear console.log(arr.length-1,arr[arr.length-1])
// console.log(arr.length - 1, arr[arr.length - 1])

// const array = [2000, 4000, 30, 37, 24, 23, 345, 9678, 856, 132, 567, 76, 65]

// if (array < 10) {
//     console.log("arr is less than 10")
// }

// else {
//     console.log("arr is grater than 10")
// }

// else if 

const salary = 1000

// 
if(salary>1000){
    console.log("salary is greater then 1000")
}
else if(salary<1000){
console.log("Salary is less then 1000")
}
else {
    console.log("Salary is equal to 1000")
}

const landmoney = 15000

if (landmoney < salary){
    console.log("landmoney is less than salary")
}
else if (landmoney > salary){
    console.log("landmoney is greater than salary")
}
else {
    console.log("landmoney and salary are equal")
}



// or gate |
// console.log(false|| false)
// console.log(false|| true)
// console.log(true|| false)
// console.log(true ||true)

const num= 100
// what is && 
console.log(false && false)
console.log(false && true)
console.log(true && false)
console.log(true && true)
console.log(num >= 0&&num<=20)

// if (num>=0 && num<=20){
//     console.log("nuber is in between 0-20")
// }
// else if (num>=21 && num<=40){
//     console.log("num is between 21-40")
// }
// else if (num>=41 && num<=60){
//     console.log("num is between 41-60")
// }
// else if (num>=61 && num<=80){
//     console.log("num is between 61-80")
// }
// else if (num>=81 && num<=100){
//     console.log("num is between 81-100")
// }
// else {
//     console.log("num is between greater then 100")
// }
// this up if or else and else if write in sort form HOME/WORK
// JavaScript if else shortcut: ternary operator:-
// console.log(num>landmoney? "Greater" : "Smaller")


// console.log(num >= 0 && num<=20? "between" : "not in between")
// console.log(num >= 20 && num<=40? "between" : "not in between")
// console.log(num >= 40 && num<=60? "between" : "not in between")
// console.log(num >= 60 && num<=80? "between" : "not in between")
// console.log(num >= 80 && num<=100? "between" : "not in between")

console.log(num >= 0 && num<=20? "between" : " " && num >= 20 && num<=40? "between" : "not in between" && num >= 40 && num<=60? "between" : "not in between" && num >= 60 && num<=80? "between" : "not in between" && num >= 80 && num<=100? "between" : "not in between")