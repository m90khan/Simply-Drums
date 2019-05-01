// To get button clicked data
let numberOfDrums = document.querySelectorAll(".drum").length;

for(let i =0; i < numberOfDrums; i++){
  document.querySelectorAll(".drum")[i].addEventListener("click", function (){
let buttonInnerHTML = this.innerHTML;
makeSound(buttonInnerHTML);
buttonAnimate(buttonInnerHTML);
  });
}
//keyboard press
document.addEventListener('keypress', function(event){
makeSound(event.key);
buttonAnimate(event.key);

});
// switch cases when a event happens to play
const makeSound = (key) => {
  switch (key){
    case 'w':
    let tom1 = new Audio('sounds/tom-1.mp3');
    tom1.play();
    break;
    case 'a':
    let tom2 = new Audio('sounds/tom-2.mp3');
    tom2.play();
    break;
    case 's':
    let tom3 = new Audio('sounds/tom-3.mp3');
    tom3.play();
    break;
    case 'd':
    let tom4 = new Audio('sounds/tom-4.mp3');
    tom4.play();
    break;
    case 'j':
    let tom5 = new Audio('sounds/snare.mp3');
    tom5.play();
    break;
    case 'k':
    let tom6 = new Audio('sounds/crash.mp3');
    tom6.play();
    break;
    case 'l':
    let tom7 = new Audio('sounds/kick-bass.mp3');
    tom7.play();
    break;
    default: console.log('wrong button');
  }
}
// animate the hover opacity given a certain key is pressed
const buttonAnimate = (currentKey) => {
  let currBtn = document.querySelector(`.${currentKey}`);
  currBtn.classList.add('pressed');
  setTimeout(function (){
    currBtn.classList.remove('pressed');
  },300);
}
