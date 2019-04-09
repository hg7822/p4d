function setup() {
  createCanvas(1000, 1000);
  background(255);
}

function draw() {
  //background(200,200,);
  
  //triangle left 
  fill(242,194,56);
  stroke(242,194,56);
  triangle(255,186,294,215, 264,235);
  noFill();
  
  // triangle right 
  fill(242,194,56);
  triangle(490,186, 450,215, 480,235);
  noFill();
  
  // face line 1
	line(294,215, 450,215);
  strokeWeight(2);
  
  //face line left
  strokeWeight(2);
  line(264,235, 264,352);
  
  //face line right 
  line(480,235, 480,352);
  
  // face line bottom 
  line(264,352, 480,352);
  
  
  // left circle
  fill(242,194,56);
  ellipse(324,254, 20, 20);
  noFill();
  
  // right circle 
  fill(242,194,56);
  ellipse(421,254, 20, 20);
  noFill();
  
 // nose 
  fill(242,194,56);
  ellipse(372,284, 20, 20);
  noFill();
   
  
  // three lines on the top
  line(352,215, 352,235);
  line(372,215, 372,235);
  line(392,215, 392,235);
  
  //  lines for the mouth
  line(372,305, 372,294);
  line(343,305, 401,305);
 
  
  // three lines on the left 
  line(264,303, 284,303);
  line(264,284, 284,284);
  line(264,323, 284,323);
  
  //  three line on the right 
  line(460,303, 480,303);
  line(460,284, 480,284);
  line(460,323, 480,323);
  
  // body
  quad(332,352, 410,352, 441,549,303,549);
  
  
  var a = 20;
  var xp= 352;
  //three lines on the bottom
  //for(var i =0, i<3, i++){
    
//  line(xp = xposition +a*i, 519, xp,549);
 
    
  line(352,519, 352,549);
  line(372,519, 372,549);
  line(392,519, 392,549);

  
  //left foot
  rect(352, 549, 20, 20, 0, 0, 8, 8);
  
  //right foot
  rect(372, 549, 20, 20, 0, 0, 8, 8);
  
  // tail
  triangle(303,549,195,461,195,441);  
  noFill();
  
  // body line 1 2 3
  line(329,372, 413,372);
  line(326,390, 415,390);
  line(320,429, 422,429);
   
 
}

