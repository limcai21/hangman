// Making An Array
var heterogram = ["SUBDERMATOGLYPHIC", "EXHAUSTINGLY", "DERMATOGLYPHICS", "CONJUGATEDLY", "HYDROPNEUMATICS", "HYDROMAGNETIC", "OVERMATCHING", "AMBLYGONITES", "SUBFORMATIVELY", "FLOWCHARTING"];
var drama = ["RIVERDALE", "EXTRACURRICULAR", "SIGNAL", "VAGABOND", "KINGDOM", "BIOHACKERS", "FRIENDS", "BUSTED", "LUCIFER", "STRANGER", "DARK"];
var movie = ["BLOODSHOT", "EXTRACTION", "TENET", "DEADPOOL", "RAMPAGE", "SKYSCRAPER", "TRANSFORMER", "ELI", "SEARCHING", "UNFRIENDED", "VENOM", "DUMBO", "JOKER", "MULAN", "PARASITE", "GREENLAND", "AQUAMAN", "HEREDITARY", "BAYWATCH", "PASSENGER", "SPILT", "COUNTDOWN", "BUMBLEBEE"];
var entertainmentApp = ["INSTAGRAM", "WHATSAPP", "TWITTER", "FACEBOOK", "TELEGRAM", "SNAPCHAT", "WECHAT", "WEIBO", "TIKTOK", "YOUTUBE", "SPOTIFY", "DEEZER"];
var country = ["UKRAINE", "BRAZIL", "DENMARK", "SAMOA", "COLOMBIA", "ICELAND", "SWITZERLAND", "SEYCHELLES", "URUGUAY", "PARAGUAY", "KIRIBATI", "AUSTRALIA"];     
var elements = ["MEITNERIUM", "OGANESSON", "KRYPTON", "MENDELEVIUM", "PROTACTINIUM", "PRASEODYMIUM", "SEABORGIUM", "UNUNHEXIUM", "UNUNTRIUM"];    
var games = ["CYBERPUNK", "PUBG", "ROBLOX", "PORTAL", "MINECRAFT", "OVERWATCH", "FIFA", "CONTROL", "FORTNITE", "HITMAN", "FALLOUT"];

// Make Specific Letters
var alphabetLetters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];

// Combine
var combineArrays = heterogram.concat(drama, movie, entertainmentApp, country, elements, games); 

// Randomly Choose A Word From Array Here ^
var randomWord = Math.floor(Math.random() * combineArrays.length);

// Pick A Word
var chosenWord = combineArrays [randomWord];

// Display Wrong Letters At The Bottom Textbox
var wrongInputLetter = [];

// Get Correct Letter Inside
var correctInputLetter = [];

// Make Underscore
var changeToUnderscore = [];

// Declare Some Variable 
var score = 0;
var failTimes = 0;
var i = 0;
var clickCounter = 0; 

// Enable Buttons
function enableLetterButton() { 
    document.getElementById("A").disabled = false;
    document.getElementById("B").disabled = false;
    document.getElementById("C").disabled = false;
    document.getElementById("D").disabled = false;
    document.getElementById("E").disabled = false;
    document.getElementById("F").disabled = false;
    document.getElementById("G").disabled = false;
    document.getElementById("H").disabled = false;
    document.getElementById("I").disabled = false;
    document.getElementById("J").disabled = false;
    document.getElementById("K").disabled = false;
    document.getElementById("L").disabled = false;
    document.getElementById("M").disabled = false;
    document.getElementById("N").disabled = false;
    document.getElementById("O").disabled = false;
    document.getElementById("P").disabled = false;
    document.getElementById("Q").disabled = false;
    document.getElementById("R").disabled = false;
    document.getElementById("S").disabled = false;
    document.getElementById("T").disabled = false;
    document.getElementById("U").disabled = false;
    document.getElementById("V").disabled = false;
    document.getElementById("W").disabled = false;
    document.getElementById("X").disabled = false;
    document.getElementById("Y").disabled = false;
    document.getElementById("Z").disabled = false;

    // Reset Button Color Back To Blue
    document.getElementById("A").style.backgroundColor = "blue";
    document.getElementById("B").style.backgroundColor = "blue";
    document.getElementById("C").style.backgroundColor = "blue";
    document.getElementById("D").style.backgroundColor = "blue";
    document.getElementById("E").style.backgroundColor = "blue";
    document.getElementById("F").style.backgroundColor = "blue";
    document.getElementById("G").style.backgroundColor = "blue";
    document.getElementById("H").style.backgroundColor = "blue";
    document.getElementById("I").style.backgroundColor = "blue";
    document.getElementById("J").style.backgroundColor = "blue";
    document.getElementById("K").style.backgroundColor = "blue";
    document.getElementById("L").style.backgroundColor = "blue";
    document.getElementById("M").style.backgroundColor = "blue";
    document.getElementById("N").style.backgroundColor = "blue";
    document.getElementById("O").style.backgroundColor = "blue";
    document.getElementById("P").style.backgroundColor = "blue";
    document.getElementById("Q").style.backgroundColor = "blue";
    document.getElementById("R").style.backgroundColor = "blue";
    document.getElementById("S").style.backgroundColor = "blue";
    document.getElementById("T").style.backgroundColor = "blue";
    document.getElementById("U").style.backgroundColor = "blue";
    document.getElementById("V").style.backgroundColor = "blue";
    document.getElementById("W").style.backgroundColor = "blue";
    document.getElementById("X").style.backgroundColor = "blue";
    document.getElementById("Y").style.backgroundColor = "blue";
    document.getElementById("Z").style.backgroundColor = "blue";
}

// Disable Buttons
function disableLetterButton() {
    document.getElementById("A").style.backgroundColor = "red";
    document.getElementById("B").style.backgroundColor = "red";
    document.getElementById("C").style.backgroundColor = "red";
    document.getElementById("D").style.backgroundColor = "red";
    document.getElementById("E").style.backgroundColor = "red";
    document.getElementById("F").style.backgroundColor = "red";
    document.getElementById("G").style.backgroundColor = "red";
    document.getElementById("H").style.backgroundColor = "red";
    document.getElementById("I").style.backgroundColor = "red";
    document.getElementById("J").style.backgroundColor = "red";
    document.getElementById("K").style.backgroundColor = "red";
    document.getElementById("L").style.backgroundColor = "red";
    document.getElementById("M").style.backgroundColor = "red";
    document.getElementById("N").style.backgroundColor = "red";
    document.getElementById("O").style.backgroundColor = "red";
    document.getElementById("P").style.backgroundColor = "red";
    document.getElementById("Q").style.backgroundColor = "red";
    document.getElementById("R").style.backgroundColor = "red";
    document.getElementById("S").style.backgroundColor = "red";
    document.getElementById("T").style.backgroundColor = "red";
    document.getElementById("U").style.backgroundColor = "red";
    document.getElementById("V").style.backgroundColor = "red";
    document.getElementById("W").style.backgroundColor = "red";
    document.getElementById("X").style.backgroundColor = "red";
    document.getElementById("Y").style.backgroundColor = "red";
    document.getElementById("Z").style.backgroundColor = "red";

    document.getElementById("A").disabled = true;
    document.getElementById("B").disabled = true;
    document.getElementById("C").disabled = true;
    document.getElementById("D").disabled = true;
    document.getElementById("E").disabled = true;
    document.getElementById("F").disabled = true;
    document.getElementById("G").disabled = true;
    document.getElementById("H").disabled = true;
    document.getElementById("I").disabled = true;
    document.getElementById("J").disabled = true;
    document.getElementById("K").disabled = true;
    document.getElementById("L").disabled = true;
    document.getElementById("M").disabled = true;
    document.getElementById("N").disabled = true;
    document.getElementById("O").disabled = true;
    document.getElementById("P").disabled = true;
    document.getElementById("Q").disabled = true;
    document.getElementById("R").disabled = true;
    document.getElementById("S").disabled = true;
    document.getElementById("T").disabled = true;
    document.getElementById("U").disabled = true;
    document.getElementById("V").disabled = true;
    document.getElementById("W").disabled = true;
    document.getElementById("X").disabled = true;
    document.getElementById("Y").disabled = true;
    document.getElementById("Z").disabled = true;
}

// Start Game
function startGame() {
    enableLetterButton();
    document.getElementById("hint").placeholder = "<< Click Hint If You Need Just Abit Of Help";
    document.getElementById("hintButton").disabled = false;
    document.getElementById("hintButton").style.backgroundColor = "blue";
    document.getElementById("hint").value = "";

    randomWord = Math.floor(Math.random() * combineArrays.length);
    chosenWord = combineArrays [randomWord];
    failTimes = 0;
    changeToUnderscore = [];
    wrongInputLetter = []; 
    correctInputLetter = [];
    document.getElementById("image").src = "img/0.png";
    document.getElementById("failTimes").value = failTimes;
    document.getElementById("outputBottom").placeholder = "Wrong Letter Will Output Here";

    // Changing All The Letters Into Underscore
    for (i = 0; i < chosenWord.length; i++) {
        changeToUnderscore[i] = "_"
    }

    // Removing The Commas Between The Underscore
    document.getElementById("outputTop").value = changeToUnderscore.join(" ");
    document.getElementById("outputBottom").value = "";
}


function resetGame() {
    score = 0;
    failTimes = 0;
    wrongInputLetter = [];
    correctInputLetter = [];
    document.getElementById("image").src = "img/0.png";
    document.getElementById("outputBottom").value = "";
    document.getElementById("start").disabled = false;
    document.getElementById("start").style.backgroundColor = "blue";
    enableLetterButton();
    startGame();
}

function hint() {
    if (heterogram.includes(chosenWord) === true) {
        document.getElementById("hint").value = "Heterogram";
    }
    if (drama.includes(chosenWord) === true) {
        document.getElementById("hint").value = "Netflix Series";
    }
    if (movie.includes(chosenWord) === true) {
        document.getElementById("hint").value = "Movie";
    }
    if (entertainmentApp.includes(chosenWord) === true) {
        document.getElementById("hint").value = "Entertainment App";
    }
    if (country.includes(chosenWord) === true) {
        document.getElementById("hint").value = "Country";
    }
    if (elements.includes(chosenWord) === true) {
        document.getElementById("hint").value = "Periodic Table Elements";
    }
    if (games.includes(chosenWord) === true) {
        document.getElementById("hint").value = "Games";
    }
}


function input(alphabetLetters) {
    // Check if correctInputLetter Has Is Included In chosenWord Letters
    if (!correctInputLetter.includes(alphabetLetters)) {

        // Check If chosenWord Contain Letters
        if (chosenWord.includes(alphabetLetters)) {

            // Push correctInputLetter Inside Empty Array So To Not Reuse
            correctInputLetter.push(alphabetLetters);

            // Checking For Repeated Letters In chosenWord
            for (var i = 0; i < chosenWord.length; i++) {
                if (alphabetLetters == chosenWord[i]) {
                    changeToUnderscore[i] = alphabetLetters;
                    document.getElementById(alphabetLetters).style.backgroundColor = "red"; 
                }
            }

            document.getElementById("outputTop").value = changeToUnderscore.join(" ");
            
            // Check For Winning
            if (changeToUnderscore.join("") == chosenWord) {
                score++;
                document.getElementById("score").value = score;
                document.getElementById("image").src = "img/7.png";
                document.getElementById("outputTop").value = "Good Job! The Answer Is: " + chosenWord.charAt(0).toUpperCase() + chosenWord.slice(1).toLowerCase();
                document.getElementById("outputBottom").value = "Click 'Start' To Continue";
                disableLetterButton();
                document.getElementById("hintButton").disabled = true;
                document.getElementById("hintButton").style.backgroundColor = "red";
                document.getElementById("hint").value = "Nice! :)";
            }
        }


        // Check For Losing
        else {
            failTimes++;
            document.getElementById("failTimes").value = failTimes;
            wrongInputLetter.push(alphabetLetters);
            correctInputLetter.push(alphabetLetters);
            document.getElementById("outputBottom").value = wrongInputLetter.join(" ");
            document.getElementById(alphabetLetters).style.backgroundColor = "red"; 

            if (failTimes === 1) {
                document.getElementById("image").src = "img/1.png";
                document.getElementById("hint").placeholder = "Why Not Try Hint?";
            }

            if (failTimes === 2) {
                document.getElementById("image").src = "img/2.png";
                document.getElementById("hint").placeholder = "You Sure 'Bout That?";
            }

            if (failTimes === 3) {
                document.getElementById("image").src = "img/3.png";
                document.getElementById("hint").placeholder = "Uh Oh...";
            }

            if (failTimes === 4) {
                document.getElementById("image").src = "img/4.png";
                document.getElementById("hint").placeholder = "Don't Say I Never Warn You...";
            }

            if (failTimes === 5) {
                document.getElementById("image").src = "img/5.png";
                document.getElementById("hint").placeholder = "Last Chance Already...";

            }

            if (failTimes === 6) {
                disableLetterButton();
                document.getElementById("hintButton").disabled = true;
                document.getElementById("hintButton").style.backgroundColor = "red";

                document.getElementById("hint").value = "Try Harder Next Time :( ";
                score = 0;
                document.getElementById("score").value = score;
                document.getElementById("outputTop").value = "It's Okay, Press 'Start' To Try Again";
                document.getElementById("outputBottom").value = "The Answer Is: " + chosenWord.charAt(0).toUpperCase() + chosenWord.slice(1).toLowerCase();
                document.getElementById("image").src = "img/6.png";
                $("start").click(resetGame());
            }
        }
    }

    else {
        alert ("You Have Pressed This Letter Before \nPlease Press Other Letters");
    }
}
