# Hangman-Game
For this assignment we had to create a Hangman game. Our introduction begin with a rock, paper, scissors app that functioned the way it should. You would pick your selection and the computer would randomly pick something else. After a button click the computer would compare too decide a winner and either display an alert telling the user the outcome: win, loss, or tie. We then created a Hangman game once again utilising JavaScript, CSS3, and HTML5. This was when we were given ultimate creative freedom over our projects. Since Game of Thrones is one of my favorite shows I decided on that as the theme. I decided that the words user had to guess would require rudimentary knowledge of the shows characters as everyone that they would guess would be a major character. I built the page with HTML and CSS to make it look presentable. Then I delved into the JavaScript side of things. I created an array that held the names of all of the characters. I created another empty array that would hold the letters that someone had already guessed in order to keep track of the users guesses. It was when a keyboard stroke was released that button would get saved to the empty array and until the user lost or won the array would receive key strokes of their guesses. The user was given six chances to get the right answer. If they ended up hitting a key that was not part of the word, the character would be added to the array and compared with the correct answers, if a match was found it was inserted into the correct place or places. If it was incorrect it would be added to the counter and the chances would receives a -1 values and what was 6 tries becomes 5. When a new name is displayed I had a replacer in place which would display underscores until a correct guess was delivered and then the correct character would replace the underscore. We first used math.random in this assignment as each new name would be picked at random and displayed to the user. After a win or loss a reset function would run which would update the number of losses or wins which was another counter function and display a new set of underscores to figure out.
Tool used: CSS3, HTML5, JavaScript
