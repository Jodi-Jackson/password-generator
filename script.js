// PW requirement a minimum 8 and a maximum of 128 characters.
//prompt questions when button is clicked
document.querySelector("#generate").addEventListener("click", writePassword);
// array values
var charNum = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var charSpec = ["`", "~", "!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "_","-","+","{","}","[","]",";",";","'","<",">","?","/"];
var charLowerCase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var charUpperCase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
// declare variables
var charLength = "";
var charSpecial;
var charIsNum;
var charIsLowerCase;
var charIsUpperCase;
//Prompt # of char
function createPassword() {
var charLength = 0;
var charLength = (prompt("How many characters would you like your password to contain? Please pick a number from 8 to 128."));
while (charLength < 8 || charLength > 128) {
alert("Your password must be at least 8 characters and no more than 128 characters. Please try again.");
var charLength = (prompt("Please enter the number of characters you would like your password to contain."));
}
// Log to console
console.log(charLength);
// read back number of characters
alert(`Your password will have ${charLength} characters`);
// Password parameters
var charSpecial = confirm("Click OK button to include special characters or click cancel not to include special characters.");
var charIsNum = confirm("Click OK button to include numeric characters or click cancel not to include numeric characters.");
var charIsLowerCase = confirm("Click OK button to include lowercase characters or click cancel not to include lowercase characters.");
var charIsUpperCase = confirm("Click OK button to include uppercase characters or click cancel not to include uppercase characters.");
// Parameters based on users selection
if (charIsLowerCase === false && charIsUpperCase === false && charSpecial === false && charIsNum === false) {
alert("You must choose at least one.");
var charSpecial = confirm("Click OK button to include special characters or click cancel not to include special characters.");
var charIsNum = confirm("Click OK button to include numeric characters or click cancel not to include numeric characters.");
var charIsLowerCase = confirm("Click OK button to include lowercase characters or click cancel not to include lowercase characters.");
var charIsUpperCase = confirm("Click OK button to include uppercase characters or click cancel not to include uppercase characters.");
}


var charPassword = []
//output of user selection
if (charSpecial) {
    charPassword = charPassword.concat(charSpec)
    }
if (charIsNum) {
charPassword = charPassword.concat(charNum)
}
if (charIsLowerCase) {
charPassword = charPassword.concat(charLowerCase)
}
if (charIsUpperCase) {
charPassword = charPassword.concat(charUpperCase)
}
// get random char from array
var randomPassword = ""
for (var i = 0; i < charLength; i++) {
randomPassword = randomPassword + charPassword[Math.floor(Math.random() * charPassword.length)];

}
return randomPassword;
}
// Write password to the #password input
function writePassword() {
var password = createPassword();
var txtPassword = document.querySelector("#password");
txtPassword.value = password;
}
