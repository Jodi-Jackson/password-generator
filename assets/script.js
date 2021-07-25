//event listener prompt question when button clicked
document.querySelector("#generate").addEventListener("click", writePassword);
// Arrays which are made up of numbers, symbols, uppercase and lowercase
var charNum = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var charSym = ["`", "~", "!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "_","-","+","{","}","[","]",";",";","'","<",">","?","/"];
var charLowerCase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var charUpperCase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
