function setTextElementById(eventId, value){
    const textElement = document.getElementById(eventId)
    textElement.innerText = value + 1
}

function myFunction(element) {
    const playerName = element.parentNode.children[0].innerText
    const buttonClicked = element
    const playerNameContainer = document.getElementById('player-name-container')
    

    const numberOfPlayerSelected = document.querySelectorAll("#player-name-container li").length
    if( numberOfPlayerSelected >4){
        alert('Sorry You Can not add more than 5 Players')
        return;
    }
    const li = document.createElement('li')
    li.innerText = playerName
    playerNameContainer.appendChild(li)

    setTextElementById('player-number', numberOfPlayerSelected)

    buttonClicked.classList.add('disabled')
}
