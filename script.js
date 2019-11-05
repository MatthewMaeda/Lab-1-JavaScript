//Declare and initialize the following variables with appropriate values
let name = "Mitch Cuckovich";
let age = 25;
let bday = "January 24";
Boolean("detroitGC");
const lifeEvents = ["I was born in Troy, Michigan.", //alt + shift + F this will format code on screen
                    "I went to Hope College", 
                    "I went to Junior Olympics when I was 10 years old. I placed 14th in the nation in the 800 meter event.", 
                    "I'm a graduate of the front-end bootcamp."];

//Write an if/else statement that runs one of two console.log methods
if("detroitGC" == true ) {
    console.log("My name is " + name + " and I am a student at Grand Circus in Detroit, Michigan. I am currently " + age + " years old and my birthday is on " + bday + ".");
} else {
    console.log("My name is " + name + " and I am a student at Grand Circus in Grand Rapids, Michigan. I am currently " + age + " years old and my birthday is on " + bday + ".");

}

//Write a for loop that starts at 0 and iterates by increments
for(let i = 0; i < lifeEvents.length; i++) {
    console.log(lifeEvents);
    break;
}

//Declare and initialize a variable named counter to the value of 0.
let counter = 0;
let currentNumber = true;

//Write a while loop that loops while true.
while(true) {
    //Declare a variable named randomNumber that is initialized to a random integer
    let randomNumber = Math.floor(Math.random() * 10) + 1;
    if(randomNumber !== 5) {
        console.log(randomNumber + " !== 5");
        counter++;
    } else {
        console.log(randomNumber + " === 5 It took counter iterations to randomly generate the number 5.");    
        counter++;
        break;
    }
    
} 