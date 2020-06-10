const form = document.getElementById("form");
const question = document.getElementById("question");
const option1 = document.getElementById("option1");
const option2 = document.getElementById("option2");
const option3 = document.getElementById("option3");
const option4 = document.getElementById("option4");
const correct_answer = document.getElementById("correct_answer");

formFields = [question, option1, option2, option3, option4, correct_answer];

function inputJSON() {
  formFields.forEach((element) => console.log(element));

  let formInputs = {};

  formFields.forEach((e) => {
    formInputs[e.id] = e.value;
  });

  formInputs = JSON.stringify(formInputs);
  return formInputs;
}

// Show input error message
function showError(input, message) {
  const formControl = input.parentElement;
  formControl.className = "form-control error";
  const small = formControl.querySelector("small");
  small.innerText = message;
}

// Show success outline
function showSuccess(input) {
  const formControl = input.parentElement;
  formControl.className = "form-control success";
}

// Check required fields
function checkRequired(inputArr) {
  inputArr.forEach(function (input) {
    if (input.value.trim() === "") {
      showError(input, `${getFieldName(input)} is required`);
    } else {
      showSuccess(input);
    }
  });
}

// Get fieldname
function getFieldName(input) {
  return input.id.charAt(0).toUpperCase() + input.id.slice(1);
}

function POSTdata(url = "http://178.128.254.113:5566/api/v1/questions") {
  xhr = new XMLHttpRequest();
  var url = url;
  xhr.open("POST", url, true);
  xhr.setRequestHeader("Content-type", "application/json");
  xhr.onreadystatechange = function () {
    if (xhr.readyState == 4 && xhr.status == 200) {
      var json = JSON.parse(xhr.responseText);
      console.log(json.email + ", " + json.name);
    }
  };
  var data = JSON.stringify(
    { "email": "tomb@raider.com", "name": "LaraCroft" },
  );
  xhr.send(data);
}

// Event listeners
form.addEventListener("submit", function (e) {
  e.preventDefault();

  console.log("pressed submit");
  console.log(option1);

  // checkRequired([username, email, password, password2]);
  // checkLength(username, 3, 15);
  // checkLength(password, 6, 25);
  // checkEmail(email);
  // checkPasswordsMatch(password, password2);
});
