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
Struggling with creating specific and derivative variable names.
- Create array of objects with properties containing question, answer options array, and correct answer index.
- Define variables for html elements

- When START button is clicked:
- Clear/hide start button element, start timer and display first randomly chosen question.

- When an answer is clicked:
- If answered correctly: 
- Add 1 to user score, remove current question from questionsArray, load next question.
- If answered incorrectly:
- Subtract from remaining time, remove current question from questionsArray, load next question.
- load new question with function?

- When timer reaches 0:
- Clear question and div elements.
- Display how many correct answers out of questions asked.
- Display text entry for name with submit button
- enter name and score into scoreboard array.
- display start button

- When Highscore button is clicked:
- Display list of highscores???

### Links:
[Website preview]()<br>
[Link to deployed website]()

### Changelog:
#### index.html:
#### style.css:
#### script.js: