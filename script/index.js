var today = new Date();

const txtName = document.getElementById("name");
const txtDate = document.getElementById("date");

const txtMessage = document.getElementById("message");
const btn = document.getElementById("btn");

const displayName = document.getElementById('display-name');
const displayDate = document.getElementById('display-date');
const displayMessage = document.getElementById('display-message');

const displayRadio = document.getElementById('display_radio');
const radioBtns = document.querySelectorAll('input[name="radioItem"]');

const displayTime = document.getElementById('display-time');

function submitForm(e) {
e.preventDefault();

let inputName = txtName.value;
let inputDate = txtDate.value;
let inputMessage = txtMessage.value;
let selectedMenu;

let selectedDate = new Date(inputDate)
let date,month,year;
date = selectedDate.getDate();
month = selectedDate.getMonth() + 1;
year = selectedDate.getFullYear();

if(date < 10) {
date = '0' + date;
}

if (month < 10) {
month = '0' + month;
}

date = date.toString().padStart(2, '0');
month = month.toString().padStart(2, '0');
const resultDate = `${date}/${month}/${year}`

const currentTime = new Date().toString();

for(const radioBtn of radioBtns) {
 if(radioBtn.checked) {
  selectedMenu = radioBtn.value;
  break;
 }
}

displayName.innerHTML = inputName;
displayDate.innerText = resultDate;
displayMessage.innerHTML = inputMessage;
displayRadio.innerHTML = selectedMenu;
displayTime.innerHTML = currentTime;

txtName.value = '';
txtDate.value = '';
txtMessage.value = '';

}

btn.addEventListener('click', submitForm);


var slideIndex = 1;
showDivs(slideIndex);

function plusDivs(n) {
showDivs(slideIndex += n);
}

function showDivs(n) {
var i;
var x = document.getElementsByClassName("banner");
if (n > x.length) {
slideIndex = 1
}
if (n < 1) {
slideIndex = x.length
}
for (i = 0; i < x.length; i++) {
x[i].style.display = "none";
}
x[slideIndex - 1].style.display = "block";
}

setInterval(() => {
plusDivs(1)
}
, 3000);
