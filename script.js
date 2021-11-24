// Assignment code here
var minimumCount = 0;
var passLength = 0;
var minNumbers = "";
var minLowerCases = "";
var minUpperCases = "";
var minSpecialCharacters = "";
var randomPassword = "";

var specialCharacters = "!#$%&'()*+,-./:;<=>?@[\]^_`{|}~".split("");
var lowerCases = "qwertyuiopasdfghjklzxcvbnm".split("");
var upperCases = "QWERTYUIOPASDFGHJKLZXCVBNM".split("");
var numbers = "1234567890".split("");

// Array to hold characters
var prePassword = [];
var MasterPassword = [];

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

// Function to generate password

function generatePassword() {

  function passwordLength() {

    // Window prompts

    passLength = prompt("What would you like to be your password lenght? It must be between 8 and 128 characters.");

  if (passLength < 8 || passLength > 128) {
    alert("Please, choose amount of characters between 8 and 128");
    return passwordLength() 
    }
  console.log(passLength)

  }
    passwordLength(); 
  
  var numbers = confirm("Would you like to have numbers in your password?");
   
   if (numbers === true) {
   var minNumbers = numbers[Math.floor(Math.random() * numbers.length)];

    prePassword.push(minNumbers);
    
    MasterPassword = MasterPassword.concat(numbers)
    minimumCount++;
  }
  
  console.log(minNumbers)
    
    var lowerCases = confirm("Would you like to have lower case letters in your password?");

    if (lowerCases === true) {
     var minLowerCases = lowerCases[Math.floor(Math.random() * lowerCases.length)];

      prePassword.push(minLowerCases);
    
      MasterPassword = MasterPassword.concat(lowerCases)
      minimumCount = minimumCount+1;
  
    }

    console.log(minLowerCases)
  
    var upperCases = confirm("Would you like to have upper case letters in your password?");

    if (upperCases === true) {
     var minUpperCases = upperCases[Math.floor(Math.random() * upperCases.length)];

      prePassword.push(minUpperCases);
    
      MasterPassword = MasterPassword.concat(lowerCases)
      minimumCount = minimumCount+1;
       
    }

    console.log(minUpperCases)
  
    var special = confirm("Would you like to have special characters in your password?");

    if (special === true) {
     var minSpecialCharacters = specialCharacters[Math.floor(Math.random() * specialCharacters.length)];

      prePassword.push(minSpecialCharacters);
    
      MasterPassword = MasterPassword.concat(specialCharacters)
      minimumCount = minimumCount+1;

    }

    console.log(minSpecialCharacters)

    if (minimumCount === 0){
      alert("Please choose at least one group of the parameters")
      return passwordLength()
  }

  console.log(prePassword)
  console.log(MasterPassword)

 // random characters in the password

 var difference = passLength-minimumCount

 console.log(difference)

 for (i = 0; i < difference; i++) {
  var randomPassword = MasterPassword[Math.floor(Math.random() * MasterPassword.length)];
  prePassword.push(randomPassword);

  var newRandomPassword = prePassword.join("");
  
 }

 return newRandomPassword
 
  }



 

  
 


  

