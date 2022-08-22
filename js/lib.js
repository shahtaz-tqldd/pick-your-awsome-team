// getting provided input field number
function getElementInputField(eventId){
    const elementField = document.getElementById(eventId)
    const elementString = elementField.value;
    const getInputNumber = parseFloat(elementString)

    return getInputNumber;
}

// setting calculated number into an innertext
function setElementTextById(textId, value){
    const textElementField = document.getElementById(textId)
    textElementField.innerText = value
}
