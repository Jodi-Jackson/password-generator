//event listener prompt question when button clicked
document.querySelector("#generate").addEventListener("click", writePassword);
// Arrays which are made up of numbers, symbols, uppercase and lowercase
var charNum = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var charSym = ["`", "~", "!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "_","-","+","{","}","[","]",";",";","'","<",">","?","/"];
var charLowerCase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var charUpperCase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];


//declare variables
var charLength = "";
var charSpecial;
var isNum;
var lowerCase;
var upperCase;

//prompt user what to include
function createPassword() {
    var charLength = 0;
    var charLength = (prompt("How many characters would you like your password to contain?"));
    while (charLength < 8 || charLength > 128  || NaN) {
        alert("Your must have minimum of 8 and maximum of 128 characters.\nPlease try again.");
        var charLength = (prompt("Please confim the number of characters you would like your password to contain?"));
        }

// Log to console
console.log(charLength);
// Confirms characters entered
alert(`Your password will have ${charLength} characters`);

//paramaters
var charSpecial = confirm("Click OK button, to include special characters OR cancel not to include.");
var isNum = confirm("Click OK button, to include numeric characters OR cancel not to include.");
var lowerCase = confirm("Click OK button, to include lowercase characters OR cancel not to include.");
var upperCase = confirm("Click OK button, to include uppercase characters OR cancel not to include.");
// Parameters based on users selection
if (lowerCase === false && upperCase === false && charSpecial === false && isNum === false) { 
    alert("You must choose at least one parmater");   
    var charSpecial = confirm("Click OK button, to include special characters OR cancel not to include.");
    var isNum = confirm("Click OK button, to include special characters OR cancel not to include.");
    var lowerCase = confirm("Click OK button, to include special characters OR cancel not to include.");
    var upperCase = confirm("Click OK button, to include special characters OR cancel not to include.");
}
//console log
}
var password = createPassword();