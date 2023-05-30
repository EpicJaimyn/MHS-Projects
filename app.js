playSound("8d82b5_Pokemon_Theme_Song.mp3");
onEvent("Startbutton", "click", function(){
setScreen("choiceScreen");
});
onEvent("Fire", "click", function() {
  setScreen("deathScreen");
});
onEvent("water", "click", function(){
setScreen("rightScreen");
});
onEvent("grass", "click", function(){
setScreen("grasschoice");
});
onEvent("firechoice", "click", function( ) {
  setScreen("fire");
});
onEvent("grass", "click", function( ) {
  setScreen("grasschoice");
});
onEvent("button5", "click", function( ) {
  setScreen("BULB");
});
onEvent("water", "click", function( ) {
  setScreen("rightScreen");
});
onEvent("squirtle", "click", function( ) {
  setScreen("TURTLE");
});
onEvent("button3", "click", function( ) {
  setScreen("Turnback");
});
onEvent("button1", "click", function( ) {
  setScreen("Turnback");
});
onEvent("button7", "click", function( ) {
  setScreen("Turnback");
});
onEvent("reset", "click", function( ) {
  setScreen("startScreen");
});
onEvent("button4", "click", function( ) {
  setScreen("medicale");
});
onEvent("set", "click", function( ) {
  setScreen("startScreen");
});
onEvent("button2", "click", function( ) {
  setScreen("death");
});
onEvent("button11", "click", function( ) {
  setScreen("no");
});
onEvent("button8", "click", function( ) {
  setScreen("Turnback");
});
onEvent("button6", "click", function( ) {
  open("https://www.youtube.com/watch?v=dQw4w9WgXcQ");
});
