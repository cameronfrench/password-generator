// Assignment Code
var generateBtn = document.querySelector("#generate");

function generatePassword ()
  var length = prompt("How many characters will your password be? Enter a number between 8 and 128");
  var charType = prompt("Enter a character type: special, numeric, uppercase, lowercase.");
  var lowercase = "abcdefghijklmnopqrstuvwxyz";
  var uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"; 
  var number = "0123456789"; 
  var special = "!\"#$%&'()*+,-./:;<=>?@[\]^_`{|}~"


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

