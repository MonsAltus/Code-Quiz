# Code-Quiz
A timed quiz to test basic coding knowledge in HTML, CSS, and Javascript.

### Description:
This page is designed to be a multiple choice quiz to test basic coding knowledge:
- Click the start button to begin the quiz.
- Click the button for the answer you choose.
- Correct answers will increase your score.
- Wrong answers will cost you time.
- When the timer reaches zero the game is over and you can enter you name into the scoreboard.


#### Pseudocode:
This project took a lot of reworking ideas and mental energy to figure out how I'd structure the code.
I sent a lot of time struggling with creating specific and derivative variable names.
A lot of the ideas I had for the project have yet to be implemented as they are in my head. 

Here's some of my thought process:
- Create array of objects with properties containing question, answer options array, and correct answer index.
- Define variables for html elements

- When START button is clicked:
- Hide start button and scoreboard elements, and start timer.
- Run function to choose random ojbect from the questions array.
- Display first randomly chosen question.

- When an answer is clicked:
- If answered correctly: 
- Add 1 to user score, remove current question from questionsArray, load next question.
- If answered incorrectly:
- Subtract from remaining time, remove current question from questionsArray, load next question.
- Choose new random questions and display it.

- When timer reaches 0:
- Hide question and div elements.
- Display how many correct answers the user got.
- Display scoreboard.
- Display form entry for name with submit button.
- enter name and score into scoreboard array.
- display start button after name is entered.


### Links:
[Website preview](./preview.png)<br>
[Link to deployed website](https://monsaltus.github.io/Code-Quiz/)

### Changelog:
#### index.html:
#### style.css:
#### script.js: