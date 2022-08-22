function getElementInputField(eventId){
    const elementField = document.getElementById(eventId)
    const elementString = elementField.value;
    const getInputNumber = parseFloat(elementString)

    return getInputNumber;
}

function setElementTextById(textId, value){
    const textElementField = document.getElementById(textId)
    textElementField.innerText = value
}

document.getElementById('btn-calculate').addEventListener('click', function(){
    const playerBudget = getElementInputField('player-budget-field')
    const totalPlayerBudget = playerBudget * 5;
    setElementTextById('total-player-budget', totalPlayerBudget)
})