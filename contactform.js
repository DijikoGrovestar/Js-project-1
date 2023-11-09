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
function handleInput(inputId, errorMessage) {
  var input = document.getElementById(inputId);
  var error = document.getElementById(inputId + "-error");
  
  if (errorMessage) {
    error.textContent = errorMessage;
  } else {
    error.textContent = "";
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
