var panel = $("#quiz-area");

var countStartNumber = 30;


// Question set
 var questions = [

    {
        question: "What was the first full length CGI movie?",
        answers: ["A Bug's Life", "Monsters Inc.", "Toy Story", "The Lion King"],
        correctAnswer: "Toy Story",
        image:"assets\toyStory.jpg"
    },

    {
        question: "In what year did the movie Sandlot come out?",
        answers: ["1991", "1999", "1997", "1993"],
        correctAnswer: "1993",
        image:"assets\"sandlot.jpg"
    },

];

// Variable to hold our setInterval
var timer;

var game = {

    questions: questions,
    currentQuestion: 0,
    counter: countStartNumber,
    correct: 0,
    incorrect: 0,
    
    countdown: function() {

        game.correct--;
        $("#counter-number").html(game.counter);
        if (game.counter == 0){

            console.log("TIME'S UP");
            game.timeUp()                                                                            

        }

    }

    loadQuestion: function() {
        
        timer = setInterval(game.counter, 1000);
        panel.html("<h2>" + questions[this.currentQuestion].questions + "</h2>");
        for (var i = 0; i < questions[this.currentQuestion].answers.length; i++) {
            panel.append("<button class='answer-button' id='button' data-name=''" +
            questions[this.currentQuestion].answers[i] + "'>'" +
            questions[this.currentQuestion].answers[i] + "</button>";

        }

    },

    nextQuestion: function() {

        game.counter = countStartNumber;
        $("#counter-number").html(game-counter);
        game.currentQuestion++;
        game.loadQuestion();

    }
},
 
timeUp: function() {

    

}

