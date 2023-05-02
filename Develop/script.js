// Assignment Code
var generateBtn = document.querySelector("#generate");

function generatePassword () {
  // Prompts to gather criteria for password
  var charLength = prompt("How many characters will your password be? Enter a number between 8 and 128");
    if (
      charLength < "8" &&
      charLength > "128"
    ) {
      alert("Please choose a character length between 8 and 128");
      return generatePassword();
    }

  var lowerLetters = prompt("Would you like like to include lowercase letters in your password? Y = Yes & N = No");
  var upperLetters = prompt("Would you like like to include uppercase letters in your password? Y = Yes & N = No");
  var numeric = prompt("Would you like like to include numbers in your password? Y = Yes & N = No");
  var specialChar = prompt("Would you like like to include special characters in your password? Y = Yes & N = No");

  var lowercase = "abcdefghijklmnopqrstuvwxyz";
  var uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"; 
  var number = "0123456789"; 
  var special = "!\"#$%&'()*+,-./:;<=>?@[\]^_`{|}~"; 

  var random = Math.floor(Math.random() * lowercase.length);


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

