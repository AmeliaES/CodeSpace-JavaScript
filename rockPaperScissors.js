function play(clicked_id) {

    // Print the id of the button pressed as "Your choice:"
    document.getElementById("yourChoice").innerHTML = "Your choice: " + clicked_id

    // Get the computer to choose one random value from the two remaining options
    let computerOptions; // define this variable before the if else statement
    // identify the options for each selection
    if(clicked_id == 'scissors'){
        computerOptions = ['rock', 'paper']
    }else if(clicked_id == 'rock'){
        computerOptions = ['scissors', 'paper']
    }else if(clicked_id == 'paper'){
        computerOptions = ['scissors', 'rock']
    }

    // pick a random value from the choices and display it as the computer choice
    let computerChoice = computerOptions[Math.floor(Math.random() * computerOptions.length)]
    document.getElementById("computerChoice").innerHTML = "Computer choice: " + computerChoice

    // determine the winner from the game
    if(clicked_id == 'scissors' && computerChoice == 'paper' ||
        clicked_id == 'paper' && computerChoice == 'rock' ||
        clicked_id == 'rock' && computerChoice == 'scissors'){
            document.getElementById("result").innerHTML = "Result: You win!"
        }else{
            document.getElementById("result").innerHTML = "Result: You loose!"
        }
        
}