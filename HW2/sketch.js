// HAO GE 
// IGME-609 Project 2
// Interactive Scene
// February 22 

var cloud1X = 80;
var cloud1Y =122;
var c1 = 60;
var c2 = 90;
var c3 = 106;
var c4 = 370;
var c5 = 422;
var c6 = 365;
var c7 = 394;
var c8 = 420;
var c9 = 334;

function setup() {
  createCanvas(600, 700);
}

function drawclouds(){
//clouds 
  noStroke();
  ellipse(cloud1X,cloud1Y,24,24);
  cloud1X = cloud1X +0.5; 
    
  push();
  noStroke();
  translate(c1,117);
  rotate(6); 
  ellipse(0,0,37,25);
  c1 = c1 +0.5;
  pop();
    
  ellipse(c2,122,24,24);
  c2 = c2+0.5;
  ellipse(c3,124,24,24);
  c3 = c3 +0.5;
  ellipse(c4,96,65,65);
  c4= c4-0.4;
  ellipse(c5,108,62,62);
  c5= c5-0.4;
  ellipse(c6,133,45,45);
  c6= c6-0.4;
  ellipse(c7,133,45,45);
  c7= c7-0.4;
  ellipse(c8,133,45,45);
  c8= c8-0.4;
  ellipse(c9,114,62,62);
  c9=c9-0.4;
}

function drawmark(){
// square with ? mark
  push();
  fill(226,142,53);
  rect(365,258,46,46);  
  pop();
  
  push();
  fill(0);
  ellipse(368,261,2.6,2.6);
  ellipse(368,299,2.6,2.6);
  ellipse(406,261,2.6,2.6);
  ellipse(406,299,2.6,2.6);
  fill(187,83,24);
  textSize(40);
  text("?",377,295);
  pop();
  
}

function drawmiddlewall(){
  // wall on the air
  push();
  fill(206,88,22);
  stroke(0);
  strokeWeight(1);
  
  for(var a=0; a<4;a++){
  var ds = 53;
  rect(ds= 32+ds*a,336,54,16);
}     
 /* rect(32,336,54,16);
  rect(85,336,54,16);
  rect(139,336,54,16);
  rect(193,336,54,16);*/
  
  
  for(var i=0; i<7;i++){
  var xp = 30;
  rect(xp= 32+xp*i,352,31,16);
  /*rect(32,352,31,16);
  rect(62,352,31,16);
  rect(92,352,31,16);
  rect(122,352,31,16);
  rect(152,352,31,16);
  rect(182,352,31,16);
  rect(213,352,33,16);
  */
  }
pop();
}

function drawmushroom(){
//mushroom
  push();
  fill(255);
  rect(212,303,15,33,0,0,10,10);
  pop();
  
  push();
  fill(220,45,23);
  ellipse(205,307,8.4,8.4);
  ellipse(221,294,9.6,9.6);
  ellipse(232,308,4,4);
  
  strokeWeight(1);
  point(240, 302);
  point(237, 299);
  point(230, 291);
  point(209,291);
  point(200,299);
  point(199,302);
  point(190,318);
  point(220,318);
  point(229,318);
  
  fill(246,161,67);
  beginShape();
  curveVertex(240, 302);
  //curveVertex(240, 302);
  curveVertex(240, 299);
  curveVertex(230, 291);
  curveVertex(209,291);
  //curveVertex(200,299);
  curveVertex(199,302);
  curveVertex(190,317);
  curveVertex(220,318);
  curveVertex(250,318);
  curveVertex(250,318);
  endShape(close);
	
  fill(220,45,23);
  ellipse(205,307,8.4,8.4);
  ellipse(221,297,9.6,9.6);
  ellipse(232,308,4,4);
  pop();
}

function drawgreencolomn(){
// green colomn 
  push();
  stroke(40,120,50);
  strokeWeight(2);
  fill(45,140,56);
  rect(196,545,89,17);
  rect(215,561,53,78);
  pop();
  
  //greeen mountain
  push();
  stroke(40,120,50);
  strokeWeight(2);
  fill(45,140,56);
  triangle(75,600,123,664,26,663);
  triangle(112,571,160,682,63,681);
  triangle(145,605,193,700,96,700);
  pop();
}

function drawmountainandground(){
//yellow mountain
  push();
  fill(253,233,82);
  noStroke();
  translate(450,625);
  rotate(1.57); 
  ellipse(0,0,153,120);
  pop();
  
  // black circels and rects in the yellow mountain
  push();
  fill(0);
  ellipse(420,580,10.6,10.6);
  rect(460,580,12,6);
  ellipse(470,578,8,15);
  pop();
  
  // ground
  push();
  fill(206,88,22);
  rect(0,640,321,71);
  rect(382,640,220,71); 
  pop();
}

function drawmario(){
  //supermario
  push();
  fill(223,46,22);
  rect(mouseX,mouseY-8,15,4);
  rect(mouseX-3,mouseY-4,32,4);
  
  //skii color
  fill(224,158,108);
  rect(mouseX,mouseY,21,17);
  rect(mouseX-2,mouseY+5,29,12);
  rect(mouseX+20,mouseY+9,10,3.5);
  rect(mouseX-11,mouseY+27,44,9);
  // black rects
  fill(0);
  rect(mouseX-3,mouseY,10,4);
  rect(mouseX+13,mouseY+1,3,7);
  rect(mouseX-5,mouseY+4,3.5,10);
  rect(mouseX-3,mouseY+11,4,3.5);
  rect(mouseX,mouseY+4,3,5);
  rect(mouseX,mouseY+8,5,3);
  rect(mouseX+16,mouseY+8,4,4);
  rect(mouseX+14,mouseY+12,14,2);
  
  // blue cloth
  fill(mouseX+70,mouseY-134,206);
  rect(mouseX-5,mouseY+17,32,4);
  rect(mouseX-7,mouseY+21,36,4);
  rect(mouseX-11,mouseY+24,44,4);
  rect(mouseX-5,mouseY+27,31,4);
  
  // red cloth
  fill(223,46,22);
  rect(mouseX+4,mouseY+17,3,12);
  rect(mouseX+15,mouseY+17,3,12);
  rect(mouseX,mouseY+26,24,8);
  rect(mouseX-5,mouseY+34,10,8);
  rect(mouseX+17,mouseY+34,10,8);
  
  //shoes
  fill(114,100,59);
  rect(mouseX-9,mouseY+42,10,4);
  rect(mouseX-12,mouseY+46,13,3);
  rect(mouseX+20,mouseY+42,10,6);
  rect(mouseX+20,mouseY+47,13,3);
  pop();
}
function draw()
{
  colorMode(RGB);
  background(202,221,239);
    
// the interaction happened when mario touch the square
  if(mouseX>365&&mouseX<411&&mouseY>258&&mouseY<304){
  background(56);
  textSize(18);
  fill(255);
  text("Nothing",360,258);
  }
  drawclouds();
  drawmark();
  drawmiddlewall();
  drawmushroom();
  drawgreencolomn();
  drawmountainandground();
  drawmario();
}
