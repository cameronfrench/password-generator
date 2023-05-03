// Assignment Code
var generateBtn = document.querySelector("#generate"); 
// Assignment of values so function call the various strings
var passwordKey = { 
  lowercase: "abcdefghijklmnopqrstuvwxyz",
  uppercase: "ABCDEFGHIJKLMNOPQRSTUVWXYZ", 
  numbers: "0123456789", 
  symbols: "!\"#$%&'()*+,-./:;<=>?@[\]^_`{|}~", 
}; 

function generatePassword() { 
  var passwordCharSet = "";
 // Prompts to gather criteria for password
  var length = prompt("Enter a number from 8 to 128 for password length.");

  if (
    length < "8" &&
    length > "128"
  ) {
    alert("Please choose a character length between 8 and 128");
    return generatePassword();
  };

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

  var password = ""; 
  for (let i = 0; i < length; i++) {
    password += passwordCharSet[Math.floor(Math.random() * passwordCharSet.length)]
  }
  return password; 
}

console.log(generatePassword)

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
