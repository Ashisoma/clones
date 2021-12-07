let len = document.getElementsByClassName("complete-line");
let visa = document.getElementById("visaType");
let uni = document.getElementById("university");
let count = document.getElementById("country");
let email = document.getElementById("email");

let p = 0;


uni.addEventListener( "change",addValue);
count.addEventListener( "change",addValue);
email.addEventListener( "change",addValue);
visa.addEventListener( "change",addValue);

function addValue() {
  p = p + 25;
  document.getElementsByClassName("complete-line").style.color = "blue";
  len.style.width = p +"%;";
  len.innerHtml = p + "%";
}