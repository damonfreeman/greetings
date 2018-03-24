var inputBox1 = document.getElementById("input-box1");
var inputBox2 = document.getElementById("input-box2");
var textOutputBox = document.getElementById("text-output");
var submitButton = document.getElementById("submit-button");
var resetButton = document.getElementById("reset-button");
var greatTextBox = textOutputBox.innerHTML;

resetButton.addEventListener("click", function() {
  textOutputBox.innerHTML = greatTextBox;
});

submitButton.addEventListener("click", function() {
  var userText1 = inputBox1.value.toUpperCase();
  var userText2 = inputBox2.value;
  if(userText1 === "DAMON") {
    textOutputBox.innerHTML += "<p>" + userText + " is a practicing Software Engineer." + "</p>";
  } else {
    for(var i = 0; i < userText2 ; i++) {
      textOutputBox.innerHTML += "<p>" + "Hello, " + userText1 + " it is very nice to meet you." + "</p>";
    }
  }
});

