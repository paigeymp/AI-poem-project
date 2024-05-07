function generatePoem(event) {
  event.preventDefault();

  new Typewriter("#poem", {
    strings: "Roses are red",
    autoStart: true,
    delay: 100,
    cursor: "",
  });
}

let poemFormElememt = document.querySelector("#poem-generator-form");
poemFormElememt.addEventListener("submit", generatePoem);
