function clickedPlayerSelectButton(eventId, playername){
    document.getElementById(eventId).addEventListener('click', function(){
        const textElement = document.getElementById(playername)
        const playerName = textElement.innerText
    
        const playerNameContainer = document.getElementById('player-name-container')
        const li = document.createElement('li')
        li.innerText = playerName
        playerNameContainer.appendChild(li)
    
        const buttonClicked = document.getElementById(eventId)
        buttonClicked.classList.add('disabled')
    })
}

clickedPlayerSelectButton('btn-select-sakib', 'player-name-sakib')
clickedPlayerSelectButton('btn-select-mahmudullah', 'player-name-mahmudullah')
clickedPlayerSelectButton('btn-select-soumya', 'player-name-soumya')
clickedPlayerSelectButton('btn-select-liton', 'player-name-liton')
clickedPlayerSelectButton('btn-select-mash', 'player-name-mash')
clickedPlayerSelectButton('btn-select-mosaddek', 'player-name-mosaddek')
clickedPlayerSelectButton('btn-select-tamim', 'player-name-tamim')
clickedPlayerSelectButton('btn-select-mushfiq', 'player-name-mushfiq')
clickedPlayerSelectButton('btn-select-mostafiz', 'player-name-mostafiz')


