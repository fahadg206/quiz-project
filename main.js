
const correctOne = document.getElementById('correct1');
const correctTwo = document.getElementById('correct2');
const correctThree = document.getElementById('correct3');
const answerOne = document.getElementById('answer1');
const answerTwo = document.getElementById('answer2');
const answerThree = document.getElementById('answer3');





function submitButton() {

    //Question 1 Code//
    if(correctOne.checked) {
        answerOne.innerHTML = "Correct!"
    } else {answerOne.innerHTML= "Incorrect."}

    //Question 2 Code//
    if(correctTwo.checked) {
        answerTwo.innerHTML = "Correct!"
    } else {answerTwo.innerHTML= "Incorrect."}

    //Question 3 Code//
    if(correctThree.checked) {
        answerThree.innerHTML = "Correct!"
    } else {answerThree.innerHTML= "Incorrect."}


}


