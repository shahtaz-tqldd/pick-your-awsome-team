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

// Calculation of total budget of 5 players
document.getElementById('btn-calculate').addEventListener('click', function(){
    const playerBudget = getElementInputField('player-budget-field')
    const totalPlayerBudget = playerBudget * 5;
    setElementTextById('total-player-budget', totalPlayerBudget)
})

// calculation of total expenses

document.getElementById('btn-calculate-total').addEventListener('click', function(){
    const managerBudget = getElementInputField('manager-budget-field')
    const coachBudget = getElementInputField('coach-budget-field')
    
    const playerBudget = getElementInputField('player-budget-field')
    const totalPlayerBudget = playerBudget * 5;
 
    const totalBudget = managerBudget + coachBudget + totalPlayerBudget;

    setElementTextById('total-expense', totalBudget)
})