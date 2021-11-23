// Assignment code here

const specialCharacters = "!#$%&'()*+,-./:;<=>?@[\]^_`{|}~";

// Get references to the #generate element

const generateButton = document.getElementById("generate");

// Write password to the #password input

function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button

generateButton.addEventListener("click", writePassword);

// Window prompts

function generatePassword() {
  var passwordLength = prompt("What would you like to be your password lenght? It must be between 8 and 128 characters.");

  var numbers = confirm("Would you like to have numbers in your password?");

  var lowerCases = confirm("Would you like to have lower case letters in your password?");

  var upperCases = confirm("Would you like to have upper case letters in your password?");

  var special = confirm("Would you like to have special characters in your password?");

 
  var minimumCount = 0;

  var minNumbers = "";
  var minLowerCases = "";
  var minUpperCases = "";
  var minSpecialCharacters = "";


  // Functions
  var functionArray = {
    getNumbers: function() {
      return String.fromCharCode(Math.floor(Math.random() * 10 + 48));
    },

    getLowerCases: function() {
      return String.fromCharCode(Math.floor(Math.random() * 26 + 97));
    },

    getUpperCases: function() {
      return String.fromCharCode(Math.floor(Math.random() * 26 + 65));
    },

    getSpecialCharacters: function() {
      return specialCharacters[Math.floor(Math.random() * specialCharacters.length)]
    }

};

  // User selections

  if (numbers === true) {
    minNumbers = functionArray.getNumbers();
    minimumCount++;

  }

  if (lowerCases === true) {
    minLowerCases = functionArray.getLowerCases();
    minimumCount++;

  }

  if (upperCases === true) {
    minUpperCases = functionArray.getUpperCases();
    minimumCount++;

  }

  if (special === true) {
    minSpecialCharacters = functionArray.getSpecialCharacters();
    minimumCount++;

  }

  // empty string 
  var randomPassword = "";

  // random characters in the password

  for (let i = 0; i < (parseInt(passwordLength) - minimumCount); i++) {
    var randomNumber = Math.floor(Math.random() * 4);

    randomPassword += randomNumber;

  }

  
  randomPassword += minNumbers;
  randomPassword += minLowerCases;
  randomPassword += minUpperCases;
  randomPassword += minSpecialCharacters;


  return randomPassword;

}