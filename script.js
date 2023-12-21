console.log(this);
// Assignment Code
var generateBtn = document.querySelector("#generate");

// Array of characters that are special included in password
var specialCharacters = ['+','=',')','(','*','&','^','%','$','#','@','!','?','/','|',':','{','}','\','>','<',','_','-', ];

//Array of uppercase characters included in the password
var uppercasedCharacters = 


function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
