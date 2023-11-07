//clear form
function clearForm(){
    document.getElementById("myForm").reset();
}

//alert window depending on gender 
function maleradiobutton(){
  checked=true;
        alert("Hello sir");
    }

function femaleradiobutton(){
  checked=true;
    alert("Hello Lady");
}



//text-field required message
function namefield() {
    var nameInput = document.getElementById('name');
    var nameError = document.getElementById('name-error');

    if (nameInput.value === '') {
      nameInput.classList.add('invalid');
      nameError.textContent = 'Name is required';
      nameError.style.display = 'inline';
    } else {
      nameInput.classList.remove('invalid');
      nameError.style.display = 'none';
    }
  }

  function emailfield() {
    var nameInput = document.getElementById('email');
    var nameError = document.getElementById('email-error');
    
    if (nameInput.value === '') {
      nameInput.classList.add('invalid');
      nameError.textContent = 'Email is required';
      nameError.style.display = 'inline';
    } else {
      nameInput.classList.remove('invalid');
      nameError.style.display = 'none';
    }
  }

  function telephonefield() {
    var nameInput = document.getElementById('telephonenumber');
    var nameError = document.getElementById('telephone-error');
    
    if (nameInput.value === '') {
      nameInput.classList.add('invalid');
      nameError.textContent = 'Please enter telephone number';
      nameError.style.display = 'inline';
    } else {
      nameInput.classList.remove('invalid');
      nameError.style.display = 'none';
    }
  }

  function organizationfield() {
    var nameInput = document.getElementById('Organization');
    var nameError = document.getElementById('organization-error');
    
    if (nameInput.value === '') {
      nameInput.classList.add('invalid');
      nameError.textContent = 'Organization is required';
      nameError.style.display = 'inline';
    } else {
      nameInput.classList.remove('invalid');
      nameError.style.display = 'none';
    }
  }

  function cityfield() {
    var nameInput = document.getElementById('city');
    var nameError = document.getElementById('city-error');
    
    if (nameInput.value === '') {
      nameInput.classList.add('invalid');
      nameError.textContent = 'Please enter city';
      nameError.style.display = 'inline';
    } else {
      nameInput.classList.remove('invalid');
      nameError.style.display = 'none';
    }
  }

  function webaddressfield() {
    var nameInput = document.getElementById('webaddress');
    var nameError = document.getElementById('webaddress-error');
    
    if (nameInput.value === '') {
      nameInput.classList.add('invalid');
      nameError.textContent = 'Please enter website address';
      nameError.style.display = 'inline';
    } else {
      nameInput.classList.remove('invalid');
      nameError.style.display = 'none';
    }
  }

  function feedbackfield() {
    var nameInput = document.getElementById('feedback');
    var nameError = document.getElementById('feedback-error');
    
    if (nameInput.value === '') {
      nameInput.classList.add('invalid');
      nameError.textContent = 'Please fill this field';
      nameError.style.display = 'inline';
    } else {
      nameInput.classList.remove('invalid');
      nameError.style.display = 'none';
    }
  }


  function enquiryfield() {
    var nameInput = document.getElementById('enquiry');
    var nameError = document.getElementById('enquiry-error');
    
    if (nameInput.value === '') {
      nameInput.classList.add('invalid');
      nameError.textContent = 'Please fill this field';
      nameError.style.display = 'inline';
    } else {
      nameInput.classList.remove('invalid');
      nameError.style.display = 'none';
    }
  }


  //state-dropdown
  
  function updatePromoCode() {
    var stateSelect = document.getElementById('state');
    var promoCodeInput = document.getElementById('promo-code');
    
    if (stateSelect.value !== '') {
      promoCodeInput.value = stateSelect.value + ' - PROMO';
    } else {
      promoCodeInput.value = '';
    }
  }


  //Form validation
  function validateForm() {
    // debugger;
    // event.preventDefault(); //    form submission
  
    var nameInput = document.getElementById('name');
    var emailInput = document.getElementById('email');
    var telephonenumber = document.getElementById('telephonenumber');
    var cityInput = document.getElementById('city');
    var webaddressInput = document.getElementById('webaddress');
    var feedbackInput = document.getElementById('feedback');
    var enquiryInput = document.getElementById('enquiry');
    var errorMessage = document.getElementById('error-message');

    if (nameInput.value === '' || emailInput.value === '' || Organization.value === ''  ) {
           errorMessage.textContent = 'Please fill all the required fields below.';
        } else {
           // Form is valid, you can proceed with form submission or further processing
      errorMessage.textContent = '';
      alert("sent successfully");
      // Submit the form or perform other actions
        document.getElementById('myForm').submit();
      
    
}
  }


// Add event listeners to the text fields
document.getElementById('name').addEventListener('input', clearErrorMessage);
document.getElementById('email').addEventListener('input', clearErrorMessage);
document.getElementById('telephonenumber').addEventListener('input', clearErrorMessage);
document.getElementById('Organization').addEventListener('input', clearErrorMessage);
document.getElementById('city').addEventListener('input', clearErrorMessage);
document.getElementById('webaddress').addEventListener('input', clearErrorMessage);
document.getElementById('feedback').addEventListener('input', clearErrorMessage);
document.getElementById('enquiry').addEventListener('input', clearErrorMessage);

// Function to clear the error message
function clearErrorMessage() {
  var nameInput = document.getElementById('name');
  var emailInput = document.getElementById('email');
  var telephonenumber = document.getElementById('telephonenumber');
  var Organization = document.getElementById('Organization');
  var cityInput = document.getElementById('city');
  var webaddressInput = document.getElementById('webaddress');
  var feedbackInput = document.getElementById('feedback');
  var enquiryInput = document.getElementById('enquiry');
  
  // Check if the text field is empty
  if (nameInput.value !== '') {
    nameInput.classList.remove('invalid');
    document.getElementById('name-error').style.display = 'none';
  }
  
  if (emailInput.value !== '') {
    emailInput.classList.remove('invalid');
    document.getElementById('email-error').style.display = 'none';
  }
  
  if (telephonenumber.value !== '') {
    telephonenumber.classList.remove('invalid');
    document.getElementById('telephone-error').style.display = 'none';
  }
  
  if (Organization.value !== '') {
    Organization.classList.remove('invalid');
    document.getElementById('organization-error').style.display = 'none';
  }
  
  if (cityInput.value !== '') {
    cityInput.classList.remove('invalid');
    document.getElementById('city-error').style.display = 'none';
  }
  
  if (webaddressInput.value !== '') {
    webaddressInput.classList.remove('invalid');
    document.getElementById('webaddress-error').style.display = 'none';
  }
  
  if (feedbackInput.value !== '') {
    feedbackInput.classList.remove('invalid');
    document.getElementById('feedback-error').style.display = 'none';
  }
  
  if (enquiryInput.value !== '') {
    enquiryInput.classList.remove('invalid');
    document.getElementById('enquiry-error').style.display = 'none';
  }
}













































  // function maleradiobutton(){
// if (male=true){
//     alert("Hello sir");

// }else (male=false)=>{
//     alert("Hello Lady"); 
// }

// }

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
