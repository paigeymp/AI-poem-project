function displayPoem(response) {
  new Typewriter("#poem", {
    strings: response.data.answer,
    autoStart: true,
    delay: 1,
    cursor: "",
  });
}

function generatePoem(event) {
  event.preventDefault();

  let instructionsInput = document.querySelector("#user-instructions");
  let key = "a5c1a8d6ca8307bb18045a8ofa2at259";
  let prompt = `User Instructions: Generate a poem about ${instructionsInput.value}`;
  let context =
    "You are a poetry expert and love to write short poems. Please write a poem and separate each line with <br />. Do not include a title and do not mention HTML. Please provide it in HTML format. Please follow user instructions.";
  let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${key}`;

  console.log(`generating poem ${prompt}`);

  axios.get(apiUrl).then(displayPoem);
}

let poemFormElememt = document.querySelector("#poem-generator-form");
poemFormElememt.addEventListener("submit", generatePoem);
