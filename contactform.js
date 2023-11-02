// for state promo-code
function myFunction() {
    let state = document.getElementById("state");
    let promotion_code = document.getElementById("promotion-code");
    let selected_state = state.value;
    promotion_code.value = `${selected_state}-PROMO`;
  }



//clear form
function myFunction(){
    document.getElementById("myForm").reset();
}

//alert window depending on gender 
function maleradiobutton(){
        alert("Hello sir");
    }

function femaleradiobutton(){
    alert("Hello Lady");
}

// function maleradiobutton(){
// if (male=true){
//     alert("Hello sir");

// }else (male=false)=>{
//     alert("Hello Lady"); 
// }

// }

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











