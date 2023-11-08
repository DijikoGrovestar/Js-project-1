//clear form
function clearForm() {
  document.getElementById("myForm").reset();
}

//alert window depending on gender
function maleradiobutton() {
  checked = true;
  alert("Hello sir");
}

function femaleradiobutton() {
  checked = true;
  alert("Hello Lady");
}

//text-field required message
function namefield() {
  var nameInput = document.getElementById("name");
  var nameError = document.getElementById("name-error");

  if (nameInput.value === "") {
    nameInput.classList.add("invalid");
    nameError.classList.remove("hidden");
    } else {
    nameInput.classList.remove("invalid");
    nameError.classList.add("hidden");
  }
}

function emailfield() {
  var nameInput = document.getElementById("email");
  var nameError = document.getElementById("email-error");

  if (nameInput.value === "") {
    nameInput.classList.add("invalid");
    nameError.classList.remove("hidden");
   
  } else {
    nameInput.classList.remove("invalid");
    nameError.classList.add("hidden");
  }
}

function telephonefield() {
  var nameInput = document.getElementById("telephonenumber");
  var nameError = document.getElementById("telephone-error");

  if (nameInput.value === "") {
    nameInput.classList.add("invalid");
    nameError.classList.remove("hidden");
  
  } else {
    nameInput.classList.remove("invalid");
    nameError.classList.add("hidden");
  }
}

function organizationfield() {
  var nameInput = document.getElementById("Organization");
  var nameError = document.getElementById("organization-error");

  if (nameInput.value === "") {
    nameInput.classList.add("invalid");
    nameError.classList.remove("hidden");
  } else {
    nameInput.classList.remove("invalid");
    nameError.classList.add("hidden");
  }
}

function cityfield() {
  var nameInput = document.getElementById("city");
  var nameError = document.getElementById("city-error");

  if (nameInput.value === "") {
    nameInput.classList.add("invalid");
    nameError.classList.remove("hidden");
  
  } else {
    nameInput.classList.remove("invalid");
    nameError.classList.add("hidden");
  }
}

function webaddressfield() {
  var nameInput = document.getElementById("webaddress");
  var nameError = document.getElementById("webaddress-error");

  if (nameInput.value === "") {
    nameInput.classList.add("invalid");
    nameError.classList.remove("hidden");
  } else {
    nameInput.classList.remove("invalid");
    nameError.classList.add("hidden");
  }
}

function feedbackfield() {
  var nameInput = document.getElementById("feedback");
  var nameError = document.getElementById("feedback-error");

  if (nameInput.value === "") {
    nameInput.classList.add("invalid");
    nameError.classList.remove("hidden");
  } else {
    nameInput.classList.remove("invalid");
    nameError.classList.add("hidden");
  }
}

function enquiryfield() {
  var nameInput = document.getElementById("enquiry");
  var nameError = document.getElementById("enquiry-error");

  if (nameInput.value === "") {
    nameInput.classList.add("invalid");
    nameError.classList.remove("hidden");
  } else {
    nameInput.classList.remove("invalid");
    nameError.classList.add("hidden");
  }
}




//state-dropdown
function updatePromoCode() {
  var stateSelect = document.getElementById("state");
  var promoCodeInput = document.getElementById("promo-code");

  if (stateSelect.value !== "") {
    promoCodeInput.value = stateSelect.value + " - PROMO";
  } else {
    promoCodeInput.value = "";
  }
}

//Form validation
function validateForm() {
  var nameInput = document.getElementById("name");
  var emailInput = document.getElementById("email");
  var telephonenumber = document.getElementById("telephonenumber");
  var cityInput = document.getElementById("city");
  var webaddressInput = document.getElementById("webaddress");
  var feedbackInput = document.getElementById("feedback");
  var enquiryInput = document.getElementById("enquiry");
  var errorMessage = document.getElementById("error-message");

  if (
    nameInput.value === "" ||
    emailInput.value === "" ||
    Organization.value === ""
  ) {
    errorMessage.textContent = "Please fill all the required fields below.";
  } else {
    // Form is valid, you can proceed with form submission or further processing
    errorMessage.textContent = "";
    alert("sent successfully");
    // Submit the form or perform other actions
    document.getElementById("myForm").submit();
  }
}


// function showAlert(radioButton) {
//   if (radioButton.checked) {
//      alert("You clicked: " + radioButton.value);
//                }         }

//.......
// function alertmessage() {
//   let gender = document.getElementsByName("gender");
//   for (let i = 0; i < gender.length; i++) {
//     if (gender[i].checked && gender[i].value == "male") {
//       alert("Hello Sir");
//     } else if (gender[i].checked && gender[i].value == "female") {
//       alert("Hello Lady");
//     }
//   }
// }
