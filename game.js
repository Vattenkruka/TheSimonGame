var gamePattern =[];


var buttonColours = ["red", "blue", "green", "yellow"];



function nextSequence(){
  var min = Math.ceil(0);
  var max = Math.floor(3);
  var randomNumber = Math.floor(Math.random() *(max-min+1))+min;


  var randomChosenColour =[nextSequence()];

  gamePattern.push(randomChosenColour);
}
