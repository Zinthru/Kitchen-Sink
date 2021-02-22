var myName = 'Dustin Ashley';
////////////////////////////////
const stateNum = 50;

let compute = 5+4;

function sayHello() {
    alert("Hello World!");
}
// Alerts browers with a pop-up, "Hello World!"
sayHello();
// Calls sayHello function

let Charles1 = {
    name: "Charles", age: 21
};
let Abby1 = {
    name: "Abby", age: 27
};
let James1 = {
    name: "James", age: 18
};
let John1 = {
    name: "John", age: 17
};

var people=[Charles1,Abby1,James1,John1];
// Array for the for statement to count
for(i=0;i<people.length;i++) {
    checkAge(people[i].name, people[i].age);
    break;
};

function checkAge (name,age) {
    if(age<21) {
        alert("Sorry "+name+ ", you aren't old enough to view this page!");
    } //Checks if someone is under 21 years old.
};

checkAge("Charles",21);
checkAge("Abby",27);
checkAge("James",18);
checkAge("John",17);

let Veggies = ["Carrots","Celery","Brocoli","Green beans","Corn"];

for (var i=0;i<Veggies.length;i++) {
    console.log(Veggies[i]); 
}   // Lists every string of the Veggies array

let pet ={name: "Capone",breed: "doberman"};
console.log(pet.name);
console.log(pet.breed);

let humans =[
    {
        name: 'Bill',age: 22
    },
    {
        name: 'Sarah', age: 17
    },
    {
        name: 'Joe', age: 26
    },
    {
        name: 'Jim', age: 16
    },
    {
        name: 'Tom', age: 21
    }
];

for(i=0;i<humans.length;i++) {
    checkAge(humans[i].name, humans[i].age);
    break;
}; // 

checkAge("Bill",22);
checkAge("Sarah",17);
checkAge("Joe",26);
checkAge("Jim",16);
checkAge("Tom",21);

function getLength (word) {
    var wordLength = word.length;
    if(word % 2==0) {
        console.log("The world is even!");
    }   else {
        return console.log("The world is an odd place!");
    }    
    return wordLength;
} // Checks the character count of string and prints odd or even console outputs.

getLength("Hello World");


