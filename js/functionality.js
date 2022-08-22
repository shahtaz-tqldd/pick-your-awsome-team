
function myFunction(element) {
    // getting parent node of the button to access the name of the player
    const playerName = element.parentNode.children[0].innerText
    
    // 1. checking how many players are added into the selected player box
    // 2. giving alert if anyone wants to add more than 5 players
    const numberOfPlayerSelected = document.querySelectorAll("#player-name-container li").length
    if( numberOfPlayerSelected >4){
        alert('Sorry You Can not add more than 5 Players')
        return;
    }
    // creating & appending the new list of player that are clicked
    const playerNameContainer = document.getElementById('player-name-container')
    const li = document.createElement('li')
    li.innerText = playerName
    playerNameContainer.appendChild(li)

    // insert number of players are added into the selected player box
    setElementTextById('player-number', numberOfPlayerSelected + 1)

    // button disabling after click
    const buttonClicked = element
    buttonClicked.classList.add('disabled')
}
