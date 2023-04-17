const form = document.getElementById('contact-form');
const name = document.getElementById('name');
const email = document.getElementById('email');
const phone = document.getElementById('phone');
const message = document.getElementById('message');

form.addEventListener('submit', (event) => {
  event.preventDefault();

  checkInputs();
});

function checkInputs() {
  const nameValue = name.value.trim();
  const emailValue = email.value.trim();
  const phoneValue = phone.value.trim();
  const messageValue = message.value.trim();

  if (nameValue === '') {
    setErrorFor(name, 'Name cannot be blank');
  } else {
    setSuccessFor(name);
  }

  if (emailValue === '') {
    setErrorFor(email, 'Email cannot be blank');
  } else if (!isEmail(emailValue)) {
    setErrorFor(email, 'Email is not valid');
  } else {
    setSuccessFor(email);
  }

  if (phoneValue === '') {
    setErrorFor(phone, 'Phone number cannot be blank');
  } else if (!isPhone(phoneValue)) {
    setErrorFor(phone, 'Phone number is not valid');
  } else {
    setSuccessFor(phone);
  }

  if (messageValue === '') {
    setErrorFor(message, 'Message cannot be blank');
  } else {
    setSuccessFor(message);
    alert(`Name: ${nameValue}\nEmail: ${emailValue}\nPhone: ${phoneValue}\nMessage: ${messageValue}`);
  }
}

function setErrorFor(input, message) {
  const formControl = input.parentElement;
  const error = formControl.querySelector('small');
  formControl.className = 'form-control error';
  error.innerText = message;
}

function setSuccessFor(input) {
  const formControl = input.parentElement;
  formControl.className = 'form-control success';
}

function isEmail(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

function isPhone(phone) {
  return /^\d{10}$/.test(phone);
}


	function validateForm() {
	  var name = document.forms['message-form']['full-name'],value;
 	  var date = document.forms['message-form']['birth-date'],value;
	  var gender = document.forms['message-form']['gender'],value;
      var gender = document.forms['message-form']['mail'];
      var gender = document.forms['message-form']['pone'];
	  var messages = document.forms['message-form']['messages'],value;
	  document.GetElementById("sender-full-name").innerText = name;
	  document.GetElementById("sender-birth-date").innerText = date;
	  document.GetElementById("sender-gender").innerText = gender;
      document.GetElementById("sender-mail").innerText = mail;
      document.GetElementById("sender-pone").innerText = pone;
	  document.GetElementById("sender-messages").innerText = messages;
	  return false; 
	}





