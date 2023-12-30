
function generatePoem(event) {
    event.preventDefault()
    alert("Generating poem...")

    /*new Typewriter("#poem", {
    strings: "Kemi Oluwasanmi",
    autoStart: true,
    cursor: "",
    delay:1,
  });
  */
}


let poemFormElement = document.querySelector("#poem-form")

poemFormElement.addEventListener("submit", generatePoem)




