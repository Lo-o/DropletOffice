const form = document.getElementById("form");
const question = document.getElementById("question");
const option1 = document.getElementById("option1");
const option2 = document.getElementById("option2");
const option3 = document.getElementById("option3");
const option4 = document.getElementById("option4");
const correct_answer = document.getElementById("correct_answer");

formFields = [question, option1, option2, option3, option4, correct_answer];
let justTesting = "testing";

let dropletURL = "http://178.128.254.113:5566/api/v1/questions";
let localURL = "http://localhost:5566/api/v1/questions/";

function sendJSON(API_url = dropletURL) {
  formFields.forEach((element) => console.log(element));

  let fields = {};

  formFields.forEach((e) => {
    fields[e.id] = e.value;
  });

  fields = JSON.stringify(fields);

  console.log("sending data");
  console.log(fields);

  // Send the data
  jQuery.ajax({
    type: "POST",
    url: API_url,
    data: fields,
    success: function (data) {
      alert(JSON.stringify(data));
    },
    contentType: "application/json",
    dataType: "json",
  });

  return fields;
}

// Event listeners
form.addEventListener("submit", function (e) {
  e.preventDefault();

  console.log("pressed submit");

  sendJSON();
  form.reset();
});
