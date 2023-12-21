console.log(this);
// Assignment Code
var generateBtn = document.querySelector("#generate");

// Array of characters that are special included in password
var specialCharacters = ['+','=',')','(','*','&','^','%','$','#','@','!','?','/','|',':','{','}','\','>','<',','_','-', ];

// Array of uppercase characters included in the password
var upperCasedCharacters = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z',];

// Array of Lowercase characters included in password
var LowerCasedCharacters = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z']


function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
