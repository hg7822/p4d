// HAO GE 
// IGME-609 Project 3
// Explore your color plate
// March 26 

var lengthx = 50;
var lengthy = 50;
var bgcolor=220;

function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(bgcolor);
  
  // Draw the square that follows the mouse
  push();
  translate(mouseX,mouseY);
  rect(-25,-25,lengthx,lengthy)
  pop();

  // Draw a testing square in which user can get a random color
  rect(0,200,50,50);
  
 
  // if the key "W" pressed, the width of the choosing square will increase by 5%. 
  if(keyIsPressed && key == "w"){
  lengthx = lengthx +lengthx*0.05;
  }
  
   // if the key "h" pressed, the height of the choosing square will increase by 5%. 
  if(keyIsPressed && key == "h"){
  lengthy = lengthy +lengthy*0.05; 
  }
  
  // if the key "e" pressed, reset the choosing square. 
  if(keyIsPressed && key == "e"){
  lengthx = 50;
  lengthy = 50;
  }
  
  // if the mouse is in the square, draw four squares in four corners.
  if(mouseX<50&&mouseX>0&&mouseY>175&&mouseY<250){
    
  fill(random(0,255),random(0,255),random(0,255));  
  ellipse(0,0,50,50);
  ellipse(0,400,50,50);		
  ellipse(400,0,50,50);
  ellipse(400,400,50,50);   
  text("Move out from the square to check your color ", 80,240);
  }
  
  // draw five cirsle in a row 
  for(var a = 0; a <5; a++){
  push();  
  noFill();
  ellipse(200+5*a, 200+5*a, 280,280);
  pop();
  }
  
  // Show text "Move into the square to get a readable color";
  text("Move into the square to get a readable color = " + int(random(0,255)), 82,200);
  

}

