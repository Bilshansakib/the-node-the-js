// const colors = {
//     red: "#ff0000",
//     green: "#00ff00",
//     blue: "#0000ff",
//     "golden rod": '#daa520'
// };
// console.log(colors["golden rod"])

// const car = {
//     make: "Toyota",
//     model: "Corolla",
//     year: 2020,
//     'passenger capacity' : 5
// };

// console.log(car["passenger capacity"])

// const student = {
//     name: "Hamim Sakep",
//     id: 5421,
//     physics: {
//         subject: "HSC Physics",
//         author: "Shahjahan Tapan",
//         marks: 30
//     }
// };
// console.log(student.physics.marks)

// let student = {
//     name: 'Ariana Grande',
//     age: 21,
//     city: 'Gaibandha',
//     isStudent: true,
//     marks : 30
// };

// const keyArray = Object.keys(student)
// const count = keyArray.length
// console.log(count)

// let myObject = {
//     name: 'John Doe',
//     age: 25,
//     city: 'Example City',
//     isStudent: true

// }
// const keyArray = Object.values
// const values = keyArray.values;
// for (const prop in myObject) {
//     console.log('key:', prop + "|" + typeof(values))

// }


// var person = {};
// person.name = "John";
// person.age = 30;

// var persons = person
// const keyArray = Object.keys(person)
// const count = keyArray.length
// console.log(count)

// let str = "Mississippi"
// console.log(str.indexOf("i", 3))

// const x = ""
// if (!x.length){
//     console.log("Hey")
// } else {
//     console.log("Hi")
// }

// const str = "Hello";
// str[0] = "h";
// console.log(str);
// const friends = ['Elon', 'Bill', 'Mark', 'Warren']

// for (const friend of friends) {
//     const bondhu = friend ;
//     console.log(bondhu)
// }


// for (const friend of friends){
//     console.log(friend)
// }
// for (i = 0; i < friends.length; i++){
//     console.log(friends[i]) ;
// }

// const numbers = [ 1, 2, 3, 4, 5, 54,4, 66, 565 ,5]
// for ( const numbers in number) {
//     console.log(numbers)
// }
// for ( let i = 0 ; i < numbers.length ; i++){
//     numbers.sort()
//     console.log(numbers[i])

// }

const numbers = [ 1, 2, 3, 4, 5, 54]
// const rev_numbers = [];

// for (const num of numbers) {
//     // console.log(num)
//     // rev_numbers.unshift(num);
//     const reverse = numbers.reverse();
//     console.log(reverse)
// }

// const rev_numbers = [];
// for (let i = numbers.length - 1 ; i >= 0 ; i --) {
//     const num = numbers[i];
//     console.log(num);

//     rev_numbers.push(num);
// }
// console.log(rev_numbers)

// function sum(num1) {
//     let total = num1 * num1;
//     console.log(total)
// }
// sum(9);


// function sumOfArray(array) {
//     for (const totals of array ) {
//         console.log(totals);
//     }
    
// }
// const array = [1, 2, 3,4 ,5 ,55 ,65, 76]

// sumOfArray();

// function sumOfArray(numbers) {
//     let sum = 0;
//     for (const number of numbers){
//         console.log(number);
//         sum = sum + number;


//     }
//     return sum;
    
// }
// const numbs = [1, 2, 3, 4 ,5 ,55 ,65, 76]
// const sum = sumOfArray(numbs);
// console.log('total:',  sum)
function getMenu() {
    console.log("Burger, Pizza, Pasta");
}
getMenu();