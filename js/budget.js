// Calculation of total budget of 5 players
document.getElementById('btn-calculate').addEventListener('click', function(){
    const playerBudget = getElementInputField('player-budget-field')
    const playerNumber = getTextElementById('player-number');
    const totalPlayerBudget = playerBudget * playerNumber;

    if(totalPlayerBudget === 0){
        alert('You Have not selected any Players')
    }
    else{
        setElementTextById('total-player-budget', totalPlayerBudget)
    }
})

// calculation of total expenses

document.getElementById('btn-calculate-total').addEventListener('click', function(){
    const managerBudget = getElementInputField('manager-budget-field')
    const coachBudget = getElementInputField('coach-budget-field')
    
    const playerBudget = getElementInputField('player-budget-field')
    const playerNumber = getTextElementById('player-number');
    const totalPlayerBudget = playerBudget * playerNumber;
 
    const totalBudget = managerBudget + coachBudget + totalPlayerBudget;

    setElementTextById('total-expense', totalBudget)
})