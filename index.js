// question 1 ;

let number = prompt("Enter A Number with . For Example 3.222");


document.write("<h2> Number : " , number  , " <br> round of : " , Math.round(number) , "<br> floor of : " , Math.floor(number) , "<br> ceil of : " , Math.ceil(number) );


// question 2 

let negativeFloat = prompt("enter a negative number either i convert a number to negative")

if (negativeFloat > 0){
    negativeVal = negativeFloat * -1
}
document.write("<h2> Number : " , negativeVal , "</h2>");
document.write("<h2> Round of : " , Math.round(negativeVal)  , "</h2>");
document.write("<h2> Floor Value : " , Math.floor(negativeVal)  , "</h2>");
document.write("<h2> Ceil value : " , Math.ceil(negativeVal)  , "</h2>");
// question 3 

let input = +prompt("enter a number to check it absolute value");

let absoluteVal = Math.abs(input);

document.write("<h2> the absolute value of " , input , " is " , absoluteVal );

// question 4 ;

let diceVal1 = Math.floor( Math.random() * 6 + 1);
let diceVal2 = Math.floor( Math.random() * 6 + 1);

document.write("<h2> First Dice Value is : " , diceVal1 , "</h2>");
document.write("<h2> Second Dice Value is : " , diceVal2 , "</h2>");

// question 5 ;

let coins = Math.random();

let result = coins < 0.5 ? "Heads" : "Tails";

if (coins > 0.5){
    document.write("<h2> coin value is  heads </h2>")
}else{
    document.write("<h2> coin value is tails </h2>")
}

// document.write(coins)


// question 6 ; 

let randomNum = Math.floor(Math.random() * 100 + 1);

document.write("<h2>",randomNum , "</h2>");

// question 7

let userInput = prompt("Enter your weight:");
let weightInKgs;

if (userInput.toLowerCase().includes("kgs") || userInput.toLowerCase().includes("kilograms")){
    weightInKgs = Number(userInput);
}else{
    weightInKgs = Number(userInput);
}


document.write("<h1>Your weight is " + weightInKgs.toFixed(2) + " kgs.</h1>");




// question 8 
let secretNum = 8;

let guessSecretNum = Number(prompt("Guess A Number Between 1 to 10"));

while (true) {

    if (guessSecretNum === secretNum){
        alert("Correct! You guessed the right number");
            break;
    }

 else if (isNaN(guessSecretNum)) {
    alert("You did not enter a number");
} else {
    alert("Incorrect! Keep guessing");
}
guessSecretNum = Number(prompt("Guess again between 1 to 10"));

}

