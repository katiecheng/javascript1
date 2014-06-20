///////////////////////// Conditionals////////////////////////////////
var age = 29;
if (age > 35) {
    console.log("You can hold any public office!");
} else if (age < 35 && age >= 30) {
    console.log("You can run for Senate!");
} else if (age < 30 && age >= 25) {
    console.log("You can run for a Representative seat!");
} else if (age <25 && age >= 21) {
    console.log("You can run for some forms of public office!");
} else if (age <21 && age >=18) {
    console.log("You can't drink or run for office but you can go to war!");
} else {
    console.log("You have no voice as a citizen!");
}

///////////////////////////// Loops/////////////////////////////

// while
var x = 10;
while (x > 0) {
    console.log(x);
    x = x-2;
}

// for
var myLotteryNumbers = [4,8,15,16,23,42];
for (var i=0; i < myLotteryNumbers.length; i++){
    console.log("The next winning number is:" + myLotteryNumbers[i]);
}
console.log("I win the lottery!");

// for in
var mysteryActor = {
    "Labyrinth" : "Jareth the Goblin King",
    "Basquiat" : "Andy Warhol",
    "The Prestige" : "Nikola Tesla",
    "Arthur and the Invisibles" : "Emperor Maltazard",
    "SpongeBob SquarePants" : "L.R.H."
};

for (var movie in mysteryActor) {
    console.log("Our mystery actor appeared in " + movie + " as " + mysteryActor[movie] + ".");
}

console.log("Who was our mystery actor?");

//////////////////////////////data types///////////////////////////

//comments

/* 
multi
line
comments
*/

var aVariable;

var aNumber = 5;

var aFloatingPointNumber = 5.5;

var aString = "cats";

//can concatenate strings and numbers
//no format variables (aka %s), unlike Python
var phrase = "I have" + aFloatingPointNumber + " " + aString;

var emptyOnPurpose = null;

var emptyBecauseINeverDeclaredIt = undefined;
//undefined is bad

console.log(anotherEmptyVariable);
//console would say: undefined

var iHateCats = false;
var catsAreAwesome = true;


///////////////////////////// complex data types/////////////////////////////////
//Lists (are called arrays in Javascript)

var listOfMuppets = ["Kermit", "Dr. Teeth", "Gonzo", "Fozzie", "Animal", "Statler", "Waldorf"];
var fibs = [1,1,2,3,5,8,13,21,34];

//Arrays are complex, and contain multitudes (of types)

var multiTypeArray = ["things", 5, ["teeth"], {cats: 5, cucco: 2}];

//Length is a property of arrays

listOfMuppets.length;
//would output 7
fibs.length;
//would output 9

//List Slicing

//All the muppets that play instruments
var musicalMuppets = listOfMuppets.slice(0,5);
console.log(musicalMuppets);

var criticalMuppets = listOfMuppets.slice(-2);

var funnyMuppets = listOfMuppets.slice(0,3).concat(listOfMuppets.slice(4));

//Objects (aka dictionaries)

//Dictionaries (are called objects in Javascript (which is terrible))
var lonLonRanch = {
    cuccos : 100,
    horses : 5,
    eponas : 1,
    cows : 5,
    crazyOwners : 1
};
// Note that they don't have quotes around the keys, but otherwise look just like dictionaries. That's because they're pretty much used the same way. You don't have to use quotes when you try to get the key.

console.log(lonLonRanch.cuccos);
//Would write 100

//You can put quotes, especially if you need spaces:
var linksAdventures = {
    "The Legend of Zelda" : "NES",
    "Zelda 2" : "NES",
    "The Legend of Zelda: A link to the past" : "SNES"
};
//but then you have to access that property (it's called a property) like this:

console.log(linksAdventures["The Legend of Zelda"]);
//would output "NES"

var enterprise = {
    printCrew: function() {
        console.log("Capitan Jean Luc Picard is the only crew you need to know about.")
    },
    warp: function(bearing, warpFactor) {
        console.log("Heading bearing " + bearing + " at Warp Factor " + warpFactor);
    },
    designation: "NCC-1701-D",
    crewCompliment: 1014
};
//You can call the functions (which are really called methods) like this:

enterprise.warp("2, 3, mark 5", 8)
//"Heading bearing 2, 3, mark 5 at Warp Factor 8";

///////////////////////////functions/////////////////////////////////////

function aFunctionThatAddsAndReturnsTheValue(first, second) {
    return first + second;
}

aFunctionThatAddsAndReturnsTheValue(5,10);

// A function is really just a variable that contains code, so we can use another syntax to declare a function. Use whichever one you're comfortable with.

var aFunctionIsJustAVariableThatContainsCode = function() {
    console.log("hello, I'm a function running a console.log() statement.");
};

//prints the value of the variable, returns [Function]
console.log(
    aFunctionIsJustAVariableThatContainsCode);

//calls the variable, which is a function
aFunctionIsJustAVariableThatContainsCode();




// Whenever you see function(){} this is called a function literal. We can put it wherever we want a function.

//Javascript functions are special, though, because they're secretly OBJECTS underneath.

function myFn() {console.log("hello")};
//undefined

myFn();

myFn.description = "A function that prints hello";

myFn();

myFn.description;

//In JS, can pass functions to other functions as arguments

function batman(exclamation) {
    console.log("NaNaNaNa");
    exclamation();
}

//And then, we can pass a function we have previously declared

function obvious(){
    console.log("Batman!");
}

batman(obvious);

//OR we can declare the function right there (this is an "anonymous" function that is defined in-place)

batman(function() { 
    console.log("CAT MAN!");
});

batman("Batman"); 
// this one would NOT work, because "Batman" is not a function

/////////////////////////////// Exercise 01 - Translation ///////////////////////////

function sumOfMultiples(num) {

var sum = 0;

for (var i=0; i < num; i++) {
    if ((i % 3 === 0) || (i % 5 === 0)) {
        sum = sum + i
    }
}

console.log(sum);

}

sumOfMultiples(1001);

sumOfMultiples(4);
//returns 3

sumOfMultiples(6);
//returns 8

/////////////////////////////// Exercise 02 - Fibonacci Translation ///////////////////////////

/*Return a list of fibonacci numbers that go up to but not beyond the maximum number provided*/

function fibonacci_set(max) {
    if (max > 1) {
        var fib_list = [1];
        var current_fib = 1;
        while (current_fib < max) {
            fib_list.push(current_fib);
            current_fib = 
            fib_list[fib_list.length-1] + 
            fib_list[fib_list.length-2];
        }
        return fib_list;
    }
    else {
        return [1, 1];
    }
}

// Tell me if a number is even
function even(n){
    return n % 2 === 0;
}

function filter(fn, l) {
    var filteredList = [];
    
    for (var i=0; i < l.length; i++) {
        var num = l[i];
        if (fn(num) === true) {
            filteredList.push(num);
        }
    }
    return filteredList;
}

function sum(l) {
    var total = 0;
    
    for (var i=0; i < l.length; i++) {
        var num = l[i];
        total += num;
    }
    return total;
}

//find the sum of the even-valued terms.

console.log(sum(filter(even,fibonacci_set(4000000))))

console.log(fibonacci_set(9))
console.log(sum(filter(even,fibonacci_set(9))))

////////////////////////////////Exercise 03 ////////////////////////////////////////////

//write a function that returns any items in the array that are duplicated

function isInList(l, item) {
    var i = 0; //counter
    inList = false;
    while (i < l.length) {
        if (item === l[i]) {
            inList = true;
        } i +=1;
    } return inList;
}



function returnDuplicates(l) {
    var uniqueItems = []
    var duplicateItems = []
    for (var i=0; i < l.length; i++) {
        var item = l[i]
        if (isInList(uniqueItems, item)) {
            if (isInList(duplicateItems, item)) {
            } else {
                duplicateItems.push(item);
            }
        } else {
            uniqueItems.push(item);
        }
    } console.log(duplicateItems);
}


var votesToGoEatCake = [true, true, true, true]

returnDuplicates(votesToGoEatCake);
// prints [ true ]

var hackbrightStudents = ["katie", "amy", "jenny", "katie", "kelley", "katie", "amy"]

returnDuplicates(hackbrightStudents);
// prints [ 'katie', 'amy' ]

var classroomIds = ["47","12", "19", "22", "26", "99", "30", "50", "324", "003", "44", "33", "346", "354", "44", "235", "45", "34", "44", "590", "09", "099", "0", "1", "3", "33", "999", "9"]

returnDuplicates(classroomIds);
// prints [ '44', '33' ]

var randomJunkIFound = ["katie", "true", true, 19, "gargoyles", "!", 2 + 3, "2 + 3", 19, "19", 19 === "19", 6, false, false]

returnDuplicates(randomJunkIFound);
//prints [ 19, false ]


/////////////////////////////Exercise 04/////////////////////

var cat = {
        tiredness: 20,
        hunger: 20,
        loneliness: 3,
        happiness: 15,
        obedientness: -5000,
        feed: function(food){
            var feedDict = {
                'tuna': 10,
                'shrimp': 5,
                'catnip': -1,
                'water': 1
            };
            console.log("Om nom nom");
            this.hunger = this.hunger - feedDict[food];
            cat.print();
        },
        sleep: function(){
            console.log("zzzzzzzzZZZZ");
            this.tiredness = this.tiredness + 17;
            this.happiness = this.happiness + 2;
            cat.print();
        },
        pet: function(){
            console.log("prrrr");
            this.happiness = this.happiness + 10;
            this.loneliness = this.loneliness - 1;
            cat.print();
        },
        train: function(){
            console.log("learn things.");
            var randomNum = Math.random() * 1000
            this.obedientness = this.obedientness + randomNum;
            cat.print();
        },
        print: function(){
            console.log("tireness is "+ this.tiredness);
            console.log("hunger is " + this.hunger);
            console.log("loneliness is " + this.loneliness);
            console.log("happiness is " + this.happiness);
            console.log("obedientness is" + this.obedientness);
        }
};
