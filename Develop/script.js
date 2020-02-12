
// Password Generator Javascript
// Feb-05-2020

// Acceptance Criteria
// GIVEN I need a new, secure password
// WHEN I click the button to generate a password
// THEN I am presented with a series of prompts for password criteria
// WHEN prompted for password criteria
// THEN I select which criteria to include in the password
// WHEN prompted for the length of the password
// THEN I choose a length of at least 8 characters and no more than 128 characters
// WHEN prompted for character types to include in the password
// THEN I choose lowercase, uppercase, numeric, and/or special characters
// WHEN I answer each prompt
// THEN my input should be validated and at least one character type should be selected
// WHEN all prompts are answered
// THEN a password is generated that matches the selected criteria
// WHEN the password is generated
// THEN the password is either displayed in an alert or written to the page


var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;

}
function generatePassword() {

  //===== SMAK script start here =============
  // Below is a list of all password Criteria:
  
  var pswLength = 0
  lowerCase = false
  upperCase = false
  numericCharacters = false
  specialCharacters = false

// Welcome message to user
alert("Welcome! You came to the right place to generate a secure random password. Well, let's get started :) ");

// ===== while statement: will continue to run as long as condition is true. User enters the length of psw (must be between 8-128 characters )======

while(pswLength > 128 || pswLength < 8){
  pswLength = prompt("Please enter your password length, mate :)")
  if(pswLength > 128 || pswLength < 8){
// if password does not fall within these parameters - alert is triggererd  (at least 8 characters and no more than 128 characters) 
    alert("Please enter a value between 8 and 128!")
   
  }
}

var criteriaList = []

while(lowerCase===false && upperCase===false && numericCharacters===false && specialCharacters===false){

 // ALERT - Ask if user wants Password WITH Lowercase 
  var lowerCase = confirm("Would you like your password to have lowercase characters??")

// User selected "OK" to lowercase character in psw...
  if(lowerCase){

    criteriaList.push('abcdefghijklmnopqrstuvwxyz'.split(''))
  }

 // ALERT - Ask if user want password with Uppercase
  var upperCase = confirm("Do you need upppercase characters in your password?")
  if(upperCase){

  // User selected "OK" to uppercase letters in psw...
    criteriaList.push('ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split(''))
  }
  // ALERT - Ask if user wants Password WITH Numbers
  var numericCharacters = confirm("Would you like your password to have numbers?")
  // User selected "OK" to numeric characters in psw...
  if(numericCharacters){
    criteriaList.push('0123456789Z'.split(''))
  }
    // ALERT - Ask if user wants Password WITH Special Characters
  var specialCharacters = confirm("Do you need special characters in your password?")

  // User selected "OK" to special characters in psw...
  if(specialCharacters){
    criteriaList.push('~`!@#$%^&*()_+-={}[]:";\'<>?,./|\\'.split(''))
  }
// Verify if none of the options were selected
  if(lowerCase===false && upperCase===false && numericCharacters===false && specialCharacters===false){
    alert(" Be sure to select atleast one lowercase, uppercase, numeric and/or special characters.")
  }
}
var flattenedArray = criteriaList.flat(1)
// console.log(flattenedArray)
// console.log( criteriaList)
// console.log( criteriaList.length)

var randompsw = []
for(var i = 0; i <criteriaList.length; i++){
  randompsw.push(criteriaList[i][Math.floor(Math.random() * criteriaList[i].length)])
}

var randoms = Array.from({length: pswLength-criteriaList.length}, () => Math.floor(Math.random() * flattenedArray.length));

for(var i = 0; i<randoms.length; i++){
  randompsw .push(flattenedArray[randoms[i]])
}
 return randompsw .join('');
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);