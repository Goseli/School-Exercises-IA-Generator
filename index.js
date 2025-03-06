function displayExercise(response) {
  new Typewriter("#exercise", {
    strings: response.data.answer,
    autoStart: true,
    delay: 1,
    cursor: "",
  });
}

function generateExercises(event) {
  event.preventDefault();

  let searchInput = document.querySelector("#search");
  let apiKey = "d5tab6f2acf0b7fa7e95a21d1043o46b";
  let context =
    "You are an expert professor and love to give exercises to your students grow. Your mission is to generate around 10 questions with a unique answer, increasing the dificulty and with alternatives, separating each alternative from the questions with <br /> and the questions from another questions with a <br />. Make sure to follow the user search and let the awswers from each exercise on the final of the text inside a <strong> element. Do not write anything besides exercises.";
  let prompt = `User search is: Generate school exercises about ${searchInput.value}`;
  let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

  let exerciseElement = document.querySelector("#exercise");
  exerciseElement.style.display = "block";
  exerciseElement.innerHTML = `<div class="generating">✍🏻 Generating exercises for you...</div>`;

  console.log("Generating poem...");
  console.log(`prompt: ${prompt}`);
  console.log(`context: ${context}`);

  axios.get(apiUrl).then(displayExercise);
}

let name = prompt("What's your name?");
let formElement = document.querySelector("#form");
formElement.addEventListener("submit", generateExercises);

if (name) {
  document.getElementById("name").textContent = name;
} else {
  document.getElementById("name").textContent = "Guest";
}
