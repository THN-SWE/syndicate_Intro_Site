import './style.css';

function giveTextContent(text, element) {
    element.textContent = text;
    return element
}
function appendTohomeDiv(element,homeDiv) {
   homeDiv.appendChild(element)
}
function addClassestoElement(classes,element){
    for(const item of classes){
        element.classList.add(item)
    }
   
}
export {giveTextContent, appendTohomeDiv, addClassestoElement}