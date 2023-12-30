
let poemFormElement = document.querySelector("#poem-form")
let poemElement = document.querySelector("#poem")

poemFormElement.addEventListener("submit", generatePoem)

function displayPoem(response) {
    //console.log(response.data)
   

    poemElement.innerHTML = response.data.answer

     new Typewriter("#poem", {
    strings: response.data.answer,
    autoStart: true,
    cursor: "",
    delay:1,
  });
  
}

function generatePoem(event) {
    event.preventDefault()
    poemElement.innerHTML = "Generating poem, hang on a sec...";
    let inputValue = document.querySelector("#word").value;
 console.log(inputValue);
 let apiKey= "c9c7oc64f71481aa1fa0f40af020b3t6";
let prompt = `Write a poem about ${inputValue} and display only in HTML format breaking into new lines and paragraphs.`;
let context= "You are an assistant that has extensive love poem writing experience. You are writing a poem for a client who wants its short and sweet."

let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`
axios.get(apiUrl).then(displayPoem)
   
}


