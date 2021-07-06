let upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
let lower = "abcdefghijklmnopqrstuvwxyz";
let num = "1234567890";
let special = "!@#$%^&*()";

let init = window.alert("Welcome to the random password generator!");

var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// Start Function
function generatePassword() {
  // User Input
  passwordLength = prompt("How many characters would you like your password to be? Choose between 8 and 128");
  
  if(!passwordLength) {
    alert("Required value");

  } else if (passwordLength < 8 || passwordLength > 128) {
    passwordLength = prompt("You must choose between 8 and 128");
  
  } else { 
    confirmLower = confirm("Will this contain lower case letters?");
    confirmUpper = confirm("Will this contain upper case letters?");
    confirmNumber = confirm("Will this contain numbers?");
    confirmSpecial = confirm("Will this contain special characters?");
  };

  // No Criteria
  if (!confirmLower && !confirmUpper && !confirmNumber && !confirmSpecial) {
    userChoices = alert("You must choose a criteria");

  // 4 Criteria Selected
  } else if (confirmLower && confirmUpper && confirmNumber && confirmSpecial) {
    userChoices = lower.concat(upper, num, special);
  }

  // 3 Criteria Selected
  else if (confirmLower && confirmUpper && confirmNumber) {
    userChoices = lower.concat(upper, numbers);
  }
  else if (confirmLower && confirmUpper && confirmSpecial) {
    userChoices = lower.concat(upper, special);
  }
  else if (confirmLower && confirmNumber && confirmSpecial) {
    userChoices = lower.concat(num, special);
  }
  else if (confirmUpper && confirmNumber && confirmSpecial) {
    userChoices = upper.concat(num, special);
  }

  // 2 Criteria Selected
  else if (confirmLower && confirmUpper) {
    userChoices = lower.concat(upper);
  }
  else if (confirmLower && confirmNumber) {
    userChoices = lower.concat(num);
  }
  else if (confirmLower && confirmSpecial) {
    userChoices = lower.concat(special);
  }
  else if (confirmUpper && confirmNumber) {
    userChoices = upper.concat(num);
  }
  else if (confirmUpper && confirmSpecial) {
    userChoices = upper.concat(special);
  }
  else if (confirmNumber && confirmSpecial) {
    userChoices = num.concat(special);
  }

  // 1 Criteria Selected
  else if (confirmLower) {
    userChoices = lower;
  }
  else if (confirmUpper) {
    userChoices = blankUpper.concat(upper);
  }
  else if (confirmNumber) {
    userChoices = num;
  }
  else if (confirmSpecial) {
    userChoices = special;
  };

  // If password blank
  var passwordBlank = [];
  
  // Randomize
  for (var i = 0; i < passwordLength; i++) {
    var allChoices = userChoices[Math.floor(Math.random() * userChoices.length)];
    passwordBlank.push(allChoices);
  }

  // Return password
  var password = passwordBlank.join("");
  console.log("Your Pasword is: " + password);
  return password;
}
