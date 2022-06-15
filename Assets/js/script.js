//steps for creating a quiz
//step 1: user able to go to application and then start the quiz
//step 2: user should able to see the question and be able to select the option
//step 3; user able to see the timer
//steo 4: after answer a question, the score should be track
//step 5: after answer a question, able to go next question
//step 6: after answer the last question, able to see user's total score




// select all required elements
const start_btn = document.querySelector(".start_btn");
const info_box = document.querySelector(".info_box");
const exit_btn = info_box.querySelector(".buttons .quit");
const continue_btn = info_box.querySelector(".buttons .restart");
const quiz_box = document.querySelector(".quiz_box");
const result_box = document.querySelector(".result_box");
const option_list = document.querySelector(".option_list");
const time_line = document.querySelector(".header .time_line");
const timeText = document.querySelector(".time_left_txt");
const timeCount = document.querySelector(".timer .timer_sec");
const bottom_ques_counter = document.querySelector(".total_que");
let question_count=0
//if startQuiz button clicked 
start_btn.onclick = () => {
    info_box.classList.add("activeInfo"); //show info box
}

//if exitQuiz button clicked 
exit_btn.onclick = () => {
    info_box.classList.remove("activeInfo"); //hide info box
}

//if continueQuiz button clicked
continue_btn.onclick = ()=> {
    info_box.classList.remove("activeInfo"); //hide info box
    quiz_box.classList.add("activeQuiz"); //show quiz
    showQuestions(questions,question_count); //calling showQuestions function
    queCounter(1); //passing 1 parameter to queCounter
    startTimer(90); //calling startTimer function
    
}

function showQuestions(questions, index){
    var output = [];
    var answers;
    answers = [];
    for(let i = 0; i < questions[index].options.length; i++){
        answers.push(
            '<label>'
            +'<input type="radio" name="question+'+i+'" value="'+ i +'">'
            + i + ': '
            + questions[index].options[i]
        +'</label>'
    );
     }
    output.push(
        '<div class="question">' + questions[index].question + '</div>'
        +'<div class="answers">' + answers.join('') + '</div>'
        );

   
        quiz_box.innerHTML = output.join('') + "<footer><button class='next_btn'>Next Que</button></footer>";
}

//creating question and answers
let questions = [
    {
        numb: 1,
        question: "Javascript is an ___ language?",
        answer: "Object Oriented ",
        options: [
            "Object Oriented",
            "Object Based",
            "Procedual",
            "None of the above"
        ]

    },
    {
        numb: 2,
        question: "Which of the following keywords is used to define a variable in Javascript?",
        answer: "Both A and B",
        options: [
            "var",
            "let",
            "Both A and B",
            "None of the above"
        ]
    },
    {
        numb: 3,
        question: "Which of the following methods is used to access HTML elements using Javascript?",
        answer: "Both A and B",
        options: [
            "getElmentbyld",
            "getElementsByClassName()",
            "Both A and B",
            "None of the above"
        ]
    },
    {
        numb: 4,
        question: "Upon encountering empty statements, what does the Javascript Interpreter do?",
        answer: "Ignores the statements",
        options: [
            "Throws an error",
            "Gives a waring",
            "Ignores the statements",
            "None of the above"
        ]

    },
    {
        numb: 5,
        question: "Which of the following methods can be used to display data in some form using Javascript?",
        answer: "AlL of the above",
        options: [
            "document.write()",
            "console.log()",
            "window.alert()",
            "All of the above"
        ]
    },
    {
        numb: 6,
        question: "How can a datatype be declared to be a constant type?",
        answer: "const",
        options: [
            "const",
            "var",
            "let",
            "constant"
        ]

    },
    {
        numb: 7,
        question: "When the switch statement matches the expression with the given labels, how is the comparison done?",
        answer: "Both the datatype and the result of the expression are compared",
        options: [
            "Both the datatype and the result of the expression are compared",
            "Only the dataype of the expression is compared",
            "Only the value of the expression is compared ",
            "None of the above"
        ]

    },
    {
        numb: 8,
        question: "What does the Javascript 'debugger' statement do? ",
        answer: "All of the above",
        options: [
            "It will debug all the erros in the program at runtime",
            "It acts as a breakpoin in a program",
            "It will debug error in the current statement if any",
            " All of the above"
        ]

    },

];


let timeValue = 90;
let que_count = 0;
let user_numb = 1;
let userScore = 0;
let counter;
let counterLine;
let widthValue = 0;

const restart_quiz = result_box.querySelector(".buttons .restart");
const quit_quiz = result_box.querySelector(".buttons .quit");

//if restartQuiz button clicked
restart_quiz.onclick = () => {
    quiz_box.classList.add("activeQuiz"); //show quiz box
    result_box.classList.remove("activeResult"); //hide result box
    timeValue = 90;
    que_count = 0;
    que_numb = 1;
    userScore = 0;
    widthValue = 0;
    showQuestions(questions, quizContainer);
    queCounter(que_numb);
    clearInterval(counter);
    clearInterval(counterLine);
    startTimer(timeValue);
    startTimeLine(widthValue);
    timeText.textContent = "Time Left";
    next_btn.classList.remove("show");

    
    
    
    

    
    

    //creating a new span and div tag for quesion and option 
    let que_tag = '<span>' + questions[index].numb + ". " + questions[index].question + "</span>";
    let option_tag = "<div class='option'><span>" + question[index].options[0]
        + '</span></div>'
        + '<div class="option"><span>' + questions[index].options[1] + '</span></div>'
        + '<div class="option"><span>' + questions[index].options[2] + '</span></div>'
        + '<div class="option"><span>' + questions[index].options[3] + '</span></div>'
    que_text.innerHTML = option_tag;
    option_list.innerHTML = option_tag;

    const option = option_list.querySelectorAll(".option");

    for (i = 0; i < option.lenght; i++) {
        option[i].setAttribute("onclick", "optionSelected(this)");
    }
}
     quit_quiz.onclick = () => {
    window.location.reload(); //reload the current window
}
const next_btn = document.querySelector("footer .next_btn");
next_btn.onclick = () => {
    if (que_count < questions.lenght - 1) { //if question count is less than total question length
        que_count++;
        que_numb++;
        showQuetions(questions, quizContainer);
        queCounter(que_numb);
        clearInterval(counter);
        clearInterval(counterLine);
        startTimer(timeValue);
        startTimeLine(widthValue);
        timeText.textContent = "Time Left";
        next_btn.classList.remove("show");

    } else {
        clearInterval(counter);
        clearInterval(counterLine);
        showResult();

    }
}

let tickIconTag = '<div class="icon tick"><i class="fas fa-check"> </i></div>';
let crossIconTag = '<div class="icon cross"><i class="fas fa-times"></i></div>';

function optionSelected(answer) {
    clearInterval(counter);
    clearInterval(counterLine);
    let userAns = answer.textContent;
    let correcAns = questions[que_count].answer;
    const allOptions = option_list.children.length;

    if (userAns == correcAns) {

        userScore += 1;
        answer.classList.add("correct");
        answer.insertAdjacentHTML("beforeend", tickIconTag);
        console.log("Correct Answer");
        console.log("Your correct answers = " + userScore);
    } else {
        answer.classList.add("incorrect");
        answer.insertAdjacementHTML("beforeend", crossIconTag);

        console.log("Wrong Answer");

        for (i = 0; i < allOptions; i++) {
            if (option_list.children[i].textContent == correcAns) {
                option_list[i].setAttribute("class", "option correct");
                option_list[i].insertAdjacementHTML("beforened", tickIconTag);
                console.log("Auto selected correct answer.");
            }

        }

    }
    next_btn.classList.add("show"); //show the next option

}
function showResult() {
    info_box.classList.remove("activeInfo"); //hide info quiz
    quiz_box.classList.remove("activeQuiz"); //hide quiz box
    result_box.classList.add("activeResult"); //show result box
    const scoreText = result_box.querySelector(".score_text");
    if (userScore > 7) { //if user scored more than 7
        let scoreTag = '<span>and congrats!! , You got <p>' + userScore + '</p> out of <p>' + questions.length + '</p></span>';
        scoreText.innerHTML = scoreTag;

    }
    else if (userScore > 1) {
        let scoreTag = '<span> and nice , You got <p>' + userScore + '</p> out of <p>' + questions.length + '</p></span>';
        scoreText.innerHTML = scoreTag;

    }
    else { //if user scored less than 1 
        let scoreTag = '<span>and sorry , You got only <p>' + userScore + '</p> out of <p>' + questions.length + '</p></span>';
        scoreText.innerHTML = scoreTag;

    }
}
function startTimer(time) {
    counter = setInterval(timer, 1000);
    function timer() {
        timeCount.textContent = time; //changing the value of timeCount
        time--; //decrement the time value
        if (time < 9) { //if the timer is less than 9
            let addZero = timeCount.textContent;
            timeCount.textContent = "0" + addZero; //add a 0 before timeOver
        }
        if (time < 0) { //if the timer is less than 0 
            clearInterval(counter); //clear counter
            timeText.textContent = "Time Off";
            const allOptions = option_list.children.length; //getting all options
            let correcAns = questions[que_count].answer;
            for (i = 0; i < allOptions; i++) {
                if (option_list.children[i].textContent == correcAns) {
                    option_list.children[i].setAttribute("class", "option correct");
                    option_list.children[i].insertAdjacentHTML("beforeend", tickIconTag); //add tick icon to matched option
                    console.log("Time Off: Auto selected correct answer.");

                }
            }
            for (i = 0; i < allOptions; i++) {
                option_list.children[i].classList.add("disabled");
            }
            next_btn.classList.add("show"); // show the next button if user selected any option



        }
    }
}
function startTimeLine(time) {
    counterLine = setInterval(timer, 59);
    function timer() {
        time += 1; //upgrading time vlaue with 1 
        time_line.getElementsByClassName.width = time + "px";
        if (time > 549) { //if time value is greater than 549
            clearInterval(counterLine); //clear conterLine

        }
    }
}
function queCounter(index) {
    let totalQueCounTag = '<span><p>' + index + '</p> of <p>' + questions.length + '</p> Qustions</span>';
    bottom_ques_counter.innerHTML = totalQueCounTag;

    
}



