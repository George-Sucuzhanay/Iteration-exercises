//Exercise #1
//Using map, write a function that takes an array of numbers
//and makes them strings
function covertToString(arr){
    let arrOfString = arr.map(String);
    return arrOfString
}
// console.log(covertToString([1,2,3,4,5]))

//Exercise #2
//You must use forEach for this exercise
//Write a function that accepts an array and returns a new array
//with all the values in the array passed to the function doubled

function doubleValue(arr){
    let newArr = []
    arr.forEach(element => newArr.push(element * 2))
    return newArr
  }
// console.log(doubleValue([1,2,3,4,5]))

//Exercise #3
//Write a function called firstAndLast which accepts
//an array of strings and returns a new array with
//only the first and last character of each string
//Example: ['winning', 'tomato'] => ['wg', 'to']
//hint: forEach show be used here
function firstAndLast(arr){
    let newArr = []
    arr.forEach(function (element) {
      if (typeof element == "string"){
        newArr.push(element[0] + element[element.length - 1])
      }
    })
    return newArr
  }
// console.log(firstAndLast(['winning', 'tomato']))

//Bonus:
//Write a for loop that outputs this:
// 1 1 1 2 2 2 3 3 3 4 4 4
function loop(){
    let myArr = [1,2,3,4]
    let newArr = []
    myArr.forEach(element => newArr.push(element, element, element))
    return newArr
  }
// console.log(loop())

// Another example of the bonus exercise
for(let i = 1; i < 5; i++){
  for(let j = 0; j < 3; j++){
    console.log(i)
  }
}