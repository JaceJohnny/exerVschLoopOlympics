/* Preliminaries
1. write a loop that prints to console 0-9
2. Write a for loop that prines to the console 9-0
3. Write a for loop that printes these fruits to the console
    const fruit = ["banana", "orange", "apple", "kiwi"]*/

console.log("Answer to Prelim #1")
    for(var i = 0; i <10; i++){
        console.log(i)
    }

console.log("Answer to Prelim #2")
    for(var i = 10; i > -1; i--){
        console.log(i)
    }

console.log("Answer to Prelim #3")
var fruit = ["banana", "orange", "apple", "kiwi"]
for(var i=0; i<fruit.length; i++){
    console.log(fruit[i])
}
/*Bronze Medal
1. write a for loop that will push the numbers 0-9 to an array
2. Write a for loop that prints to the console only even numbers 0-100
3. write a for loop that will push every other fruit to an array
const fruit = ["banana", "orange", "apple", "kiwi", "pear", "peach"]*/

var number = [];
number.push(0, 1, 2, 3, 4, 5, 6, 7, 8, 9)
console.log("Answer to Bronze #1")
console.log(number)

var number2 = [];
for (var i =0; i < 101; i ++){
    if(i % 2 === 0){
        number2.push(i)
    }
}
console.log("Answer to Bronze #2")
console.log(number2)


var fruit = ["banana", "orange", "apple", "kiwi", "pear", "peach"]
function every_other(array){
    var temporaryArray = []
    for (var i = 0; i < array.length; i += 2){ 
        temporaryArray.push(array[i]) 
    }
    return temporaryArray.join(", ")
}
console.log("Answer to Bronze #3")
console.log(every_other(fruit))

/* Silver Medal
1. Write a loop that will print out all the names of the people of the people array
2. Write a loop that pushes the names into a names array, and the occupations into an occupation arrray
3. WRite a loop that pushes every other name to an array
starting witht eh tfirst person, and every other occupation to another array
*/
var peopleArray = [
    {
      name: "Harrison Ford",
      occupation: "Actor"
    },
    {
      name: "Justin Bieber",
      occupation: "Singer"
    },
    {
      name: "Vladimir Putin",
      occupation: "Politician"
    },
    {
      name: "Oprah",
      occupation: "Entertainer"
    }
  ]
  console.log("Answer to Silver #1")
  var people = [];
  for (var i = 0; i < peopleArray.length; i ++){
      console.log(peopleArray[i].name)
  }

  console.log("Answer to Silver #2 (people and occupations)")
var people = [];
for (var i = 0; i < peopleArray.length; i ++){
    people.push(peopleArray[i].name)
}
console.log(people)

var occupations = [];
for (var i = 0; i < peopleArray.length; i ++){
    occupations.push(peopleArray[i].occupation)
}
console.log(occupations)

console.log("Answer to Silver #3, every other")

var people2 = [];
for (var i = 0; i < peopleArray.length; i +=2){
    people2.push(peopleArray[i].name)
}
console.log(people2)

var occupations2 = [];
for (var i = 1; i < peopleArray.length; i +=2){
    occupations2.push(peopleArray[i].occupation)
}
console.log(occupations2)

// Gold Medal - Nesting
console.log("Answer to Gold #1")
var MyVar = [[0]];
let rows = MyVar.length;
for(let i = 0; i < rows; i ++){
    let items = MyVar[i].length;
    console.log(i, i, i)
    console.log(i, i, i)
    console.log(i, i, i)
}
console.log("Answer to Gold #2")
var Grid2 = [[0, 0][0]];
let row = Grid2.length;
for(let i = 0; i < row; i ++){
    let items = Grid2.length + 1;
    console.log(i, i, i)
    console.log(Grid2.length, Grid2.length,Grid2.length, )
    console.log(items, items, items)
}

console.log("Answer to Gold #3")
var Grid3 = [[0, 0][0]];
let ro = Grid3.length;
for(let i = 0; i < ro; i ++){
    let item = Grid3.length + 1;
    console.log(i, Grid2.length, item)
    console.log(i, Grid2.length, item)
    console.log(i, Grid2.length, item)}

console.log("Answer to Gold #4")
var Grid4 = [[0, 1, 2, 3],
            [1, 3, 4], [2, 3, 6]];
let entirety = Grid4.length;
let x = Grid4
console.log(x)
for (let i = 0; i < entirety; i ++){
    if (x === 2){
        x = "x";
    } else {
        if (x !== 2){
            x = "x"
        }
    }
}

console.log(x)
