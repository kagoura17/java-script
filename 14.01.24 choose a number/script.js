const input = document.querySelector("input");
const button = document.querySelector("button");
const message = document.querySelector(".message");
const chances = document.querySelector("#chances");
const randomNum = Math.floor(Math.random() * 100);
let chance = chances.innerHTML;
console.log(randomNum);
input.focus();
chance = 10;
function clickbutton() {
  chance--;
  
  // winning or loosing
  if (input.value < randomNum) {
    message.textContent = "your number is too low";
    message.style.color = "red";
    chances.textContent = chance;

  } else if (input.value > randomNum) {
    chances.textContent = chance;
    message.textContent = "your number is too hight";
    message.style.color = "red";
  } else if (input.value == randomNum) {
    message.textContent = "CONGRATULATION YOU WON";
    message.style.color = "green";
    button.addEventListener("click", function () {
      window.location.reload();
    });
    button.textContent = "reload";
  }
  // decrease of chances

  if (chance <= 0) {
    message.textContent = "you lost";
    message.style.color = "red";
    button.addEventListener("click", function () {
      window.location.reload();
    });
    button.textContent="retry"
  }
  console.log(chance);
}

// const input=document.querySelector("input");
// const button=document.querySelector("button");
// const textContent=document.querySelector(".textContent");
// let inputValue = input.value;

// input.focus();
// let randomNum = Math.floor(Math.random() * 100);
// let chance = 10;

// function clickbutton(){

// function inputValue() {
// if (inputValue == randomNum) {
//     textContent = "Congratulations";}
//     else if (inputValue<randomNum){
//         textContent= "your guess is too low"}
//     else if (inputValue>randomNum){
//         textContent= "your guess is too high"}
// }
// }
