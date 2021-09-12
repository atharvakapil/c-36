var canvas, backgroundImage;

var questions;

var question, contestant, quiz;


function setup(){
  canvas = createCanvas(850,400);
  database = firebase.database();
  quiz = new Quiz();
  quiz.start();
}


function draw(){
  background("pink");

}
function mousePressed(){
  this.message.html("Thank You, Your Answer Has Been Submitted");
       this.message.position(350, 350);
}