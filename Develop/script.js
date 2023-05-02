// Assignment Code
var generateBtn = document.querySelector("#generate");

function generatePassword () {
  var length = prompt("How many characters will your password be? Enter a number between 8 and 128");

  var lowerLetters = prompt("Would you like like to include lowercase letters in your password?");

  var upperLetters = prompt("Would you like like to include uppercase letters in your password?");

  var numeric = prompt("Would you like like to include numbers in your password?");

  var specialChar = prompt("Would you like like to include special characters in your password?");

  var lowercase = "abcdefghijklmnopqrstuvwxyz";

  var uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"; 

  var number = "0123456789"; 

  var special = "!\"#$%&'()*+,-./:;<=>?@[\]^_`{|}~"; 

  var random = Math.floor(Math.random() * lowercase.length);

  // for (var i = 0; i < )

  return ""; 
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}
 
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

