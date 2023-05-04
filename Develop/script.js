// Assignment Code
var generateBtn = document.querySelector("#generate"); 
// Assignment of values so generate function call the various strings
var passwordKey = { 
  lowercase: "abcdefghijklmnopqrstuvwxyz",
  uppercase: "ABCDEFGHIJKLMNOPQRSTUVWXYZ", 
  numbers: "0123456789", 
  symbols: "!\"#$%&'()*+,-./:;<=>?@[\]^_`{|}~", 
}; 

//Primary function to generate password
function generatePassword() { 
  var passwordCharSet = "";
// Prompt to gather criteria for password
  var length = prompt("Enter a number from 8 to 128 for password length.");

// A condition in case they enter a number outside of 8-128
  if (
    length < "8" &&
    length > "128"
  ) {
    alert("Please choose a character length between 8 and 128");
    return generatePassword();
  };

// Series of confirm questions to gather input for password
  var lowercase = confirm("Would you like to use lowercase letters?");
  if (lowercase) {
    passwordCharSet += passwordKey.lowercase;
  };

  var uppercase = confirm("Would you like to use uppercase letters?");
  if (uppercase) {
    passwordCharSet += passwordKey.uppercase;
  };

  var symbols = confirm("Would you like to use symbols?");
  if (symbols) {
    passwordCharSet += passwordKey.symbols;
  };

  var numbers = confirm("Would you like to use numbers?");
  if (numbers) {
    passwordCharSet += passwordKey.numbers;
  };

// for loop to run through criteria of prompt and confirms to generate password
  var password = ""; 
  for (let i = 0; i < length; i++) {
    password += passwordCharSet[Math.floor(Math.random() * passwordCharSet.length)]
  }
  return password; 
}

// Writes password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}
// Adds an event listener to generate button
generateBtn.addEventListener("click", writePassword);
