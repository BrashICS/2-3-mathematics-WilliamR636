/**
 * 2.3 - Mathematics
 * ICS3 - Mr. Brash 🐿️
 * 
 * Make sure to read the README.md (especially if you missed class)
 * Then checkout the YOUR_TASK.md to see the practice plan
 * 
 * Don't forget - these are playgrounds. Once you finish the requested task, feel free to play.
 **/ 

// Get a random number between 0 and 100
let random_number = Math.random() * 100

// Round it to the nearest whole number
random_number = Math.round(random_number)

// Output the result usijng a new way to insert a variable into a string (called a template)
console.log(`I generated the number ${random_number}`)

// ***  Your code goes below  ***

// Part 1

let Celcius = 100
let Fahrenheit = 0

Celcius += 2

Fahrenheit = (Celcius * 9/5) + 32

console.log(Fahrenheit)

// Part 2

Fahrenheit = 77

Celcius = (Fahrenheit - 32) * 5/9

console.log(Celcius)

// Part 3

console.log(`${Fahrenheit} degrees Fahrenheit is ${Celcius} degrees Celcius`)

// Part 4

let x1 = 4
let x2 = 6
let y1 = -5
let y2 = 0
let m = (y2 - y1)/(x2 - x1)

console.log(m)

// Part 5

let Radius = Math.random()*10
let Height = Math.random()*10

let Volume = Math.round(Math.PI * 2 * Radius * Height)

console.log(`The volume of my random cylinder is ${Volume}`)