# Python script to play rock, paper, scissors in command line
# Same as the html/javascript version but in python

# import required libraries

import random
# set random seed
random.seed(194729)

# Emulate a do-while loop
while True:
    # Prompt user to input a value of rock paper or scissors
    # Enter a choice(Rock(r), Paper(p), Scissors(s)):
    yourChoice = input("Enter a choice(Rock(r), Paper(p), Scissors(s)):")

    # List options
    gameOptions = {'r' : 'Rock',
                   'p': 'Paper',
                   's' :'Scissors'}

    # Print the value they chose
    if yourChoice not in gameOptions:
        print("Please choose a valid input ('r','p' or 's'")
        yourChoice = input("Enter a choice(Rock(r), Paper(p), Scissors(s)):")
    else:
        print("Your choice: " + gameOptions[yourChoice])

    # Print the value the computer chose
    computerChoice = random.choice(list(gameOptions.values()))
    print("Computer choice: " + computerChoice)

    # Print the winner
    if (yourChoice == 'r' and computerChoice == 'Scissors') or \
       (yourChoice == 'p' and computerChoice == 'Rock') or \
       (yourChoice == 's' and computerChoice == 'Paper'):
        print("Result: You win!")
    elif gameOptions[yourChoice] == computerChoice:
        print("Result: It's a tie!")
    else:
        print("Result: You lose!")

    # Prompt with choice to play again
    # Play again? (y / n):
    playAgain = input("Play again? (y / n)")
    if playAgain == 'n':
        break

