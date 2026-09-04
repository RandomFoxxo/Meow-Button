const body = document.querySelector("body");
const theme = document.querySelectorAll("#colorMenu button");
const meowCounter = document.getElementById("meowCounter");
const woofCounter = document.getElementById("woofCounter");
const settingsBtn = document.getElementById("settingsButton");
const settingsMenu = document.querySelector(".settingsTab")
const resetBtn = document.querySelector(".resetBtn")

let settingsTab = false;

//save to local storage
let meowAmount = parseInt(localStorage.getItem("meowAmount")) || 0;
let woofAmount = parseInt(localStorage.getItem("woofAmount")) || 0;;

meowCounter.textContent = `Meow Counter: ${meowAmount}`;
woofCounter.textContent = `Woof Counter: ${woofAmount}`;

const meowSounds = [
    new Audio("./audio/Cat_meow.wav"),
    new Audio("./audio/Meow3.wav"),
    new Audio("./audio/Meow4.wav"),
    new Audio("./audio/Meow5.wav"),
    new Audio("./audio/Meow6.wav"),
    new Audio("./audio/Meow7.wav")
];

const woofSounds = [
    new Audio("./audio/DogBark1.wav"),
    new Audio("./audio/DogBark2.wav"),
    new Audio("./audio/DogBark3.wav"),
    new Audio("./audio/DogBark4.wav"),
    new Audio("./audio/DogBark5.wav"),
    new Audio("./audio/DogBark6.wav"),
    new Audio("./audio/DogBark7.wav"),
];

const bgColors = [
    "black",
    "pink",
    "lightblue",
    "lightgreen",
    "lightyellow",
    "crimson"
]

//Button functions
function meowAction() {
    let randomNumber = Math.round(Math.random() * 6);
    
    meowAmount += 1;
    meowCounter.textContent = "Meow Counter: " + meowAmount;
    
    localStorage.setItem("meowAmount", meowAmount);
    
    meowSounds[randomNumber].currentTime = 0;
    meowSounds[randomNumber].play();
    
    console.log(randomNumber);
};

function woofAction() {
    let randomNumber = Math.round(Math.random() * 7);
    
    woofAmount += 1;
    woofCounter.textContent = "Woof Counter: " + woofAmount;
    
    woofSounds[randomNumber].currentTime = 0;
    woofSounds[randomNumber].play();
    
    localStorage.setItem("woofAmount", woofAmount);
    
    console.log(randomNumber);
};

//Settings tab Functions
settingsBtn.addEventListener("click", function() {
    settingsTab = !settingsTab
        
    if (settingsTab) {
        settingsMenu.style.display = "flex";
    } else {
        settingsMenu.style.display = "none";
    }
})

//background setting buttons
theme.forEach(button => {
    button.addEventListener("click", function() {
        const selectedColor = this.textContent.toLowerCase();
        
        switch (selectedColor) {
        case "pink":
            body.style.backgroundImage = `linear-gradient(to bottom, ${bgColors[1]}, gray)`;
            break;

            case "black":
            body.style.backgroundImage = `linear-gradient(to bottom, ${bgColors[0]}, gray)`;
            break;

            case "blue":
            body.style.backgroundImage = `linear-gradient(to bottom, ${bgColors[2]}, gray)`;
            break;

            case "green":
            body.style.backgroundImage = `linear-gradient(to bottom, ${bgColors[3]}, gray)`;
            break;

            case "yellow":
            body.style.backgroundImage = `linear-gradient(to bottom, ${bgColors[4]}, gray)`;
            break;

            case "red":
            body.style.backgroundImage = `linear-gradient(to bottom, ${bgColors[5]}, gray)`;
            break;

        default: 
            body.style.backgroundImage = `linear-gradient(to bottom, ${bgColors[0]}, gray)`;
            break;
    }
    })
})

//reset setting
function resetAllCounters() {
    meowAmount = 0;
    woofAmount = 0;

    localStorage.removeItem("meowAmount");
    localStorage.removeItem("woofAmount");

    meowCounter.textContent = `Meow Counter: ${meowAmount}`;
    woofCounter.textContent = `Woof Counter: ${woofAmount}`;
}