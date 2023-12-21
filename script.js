console.log(this);
// Assignment Code
var generateBtn = document.querySelector("#generate");

// Array of characters that are special included in password
var specialCharacters = ['+', '=', ')', '(', '*', '&', '^', '%', '$', '#', '@', '!', '?', '/', '|', ':', '{', '}', '\',' > ',' < ',', '_', '-',];

// Array of uppercase characters included in the password
var upperCasedCharacters = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z',];

// Array of Lowercase characters included in password
var LowerCasedCharacters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

// Array of numeric characters included in the password
var numericCharacters = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9',];

function generatePassword() {
  var characters = [];
  var result=[];

  do {
    characters = window.prompt("How Long would you like your password? Enter a number 8-128.")
    characters = parseInt(characters);
  } while (isNaN(characters) || characters < 8 || characters > 128)
  // if (characters >=8 && characters <= 128) {
    
  // } else {
  //   window.alert("try again later.");
  //   return "";
  // }
  var special = window.confirm("Do you want to include special characters?");
  if (special === true) {
    result = result.concat(specialCharacters);
  }
  var upper = window.confirm("Do you want to include upper case characters?");
  if(upper === true) {
    result = result.concat(upperCasedCharacters);
  }
  var lower = window.confirm("Do you want to include lower case characters?");
  if (lower === true) {
    result = result.concat(LowerCasedCharacters);
  }
  var number = window.confirm("Do you want to include numeric characters?");
  if (number === true) {
    result = result.concat(numericCharacters);
  }
  if (special == false && upper == false && lower == false && number == false) {
    window.alert("Invalid input, please choose at least one set of characters to generate password.")
    return generatePassword();
  }
  var password = "";
  for (var i = 0; i < characters; i++) {
    password +=result[Math.floor(Math.random()*result.length)];
  }
  return password


}

function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
