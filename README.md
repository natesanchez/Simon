# Simon
A re-creation of the classic Simon electronic game of lights and sounds in which players must repeat random sequences of lights by pressing the colored pads in the correct order.

# Technologies Used
HTML, CSS, Vanilla Javascript

# Functionality
1.) The game comprises of 3 arrays; the ai, the user, and a colors array.
2.) the ai array pulls in a random color from a function that takes the color array and returns a random color.
3.) An aiTurn function then goes through each item in the ai array and plays ans blinks the colors within.
4).) When its the user's turn, the user must fill up their array to match that of the ai array to score a point. (event listeners).
5.) If the user inputs an incorrect order, then the game will end with all lights turning red. this is done with a checkMatch function that is run after every user input.