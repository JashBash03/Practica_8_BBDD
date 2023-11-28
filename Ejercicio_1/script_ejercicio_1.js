console.log("hola mundo")
function addText(){
    let newContent = document.querySelector("#inputText").value;
    let element = document.createElement("p");
    element.innerHTML = newContent;

    let container = document.querySelector("#result");
    container.appendChild(element);
}