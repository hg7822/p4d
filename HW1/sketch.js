// HAO GE 
// IGME-609 Project 1
// Self Portrait
// Janary 26 
function setup() {
  createCanvas(1000, 1000);
}

function draw() {
  colorMode(RGB);
  background(183,183,183);
  
 
  //HEAD ________________________
  strokeWeight(2.4);
  
  push();
  fill(216,105,43);
  ellipse(525,266, 108,108);
  pop();
  
  // hat triangle___________
  push();
  fill(37,134,183);
  triangle(558,226,525,254,545,273);
  pop();
  
   //bag___________
  rect(384,411,89,134,25,0,0,12);
  line(385,471, 454,465);
  line(398,481, 462,476);
  push();
  noFill();
  arc(460,502,118,118, 2.35,3.48);
  arc(490,502,118,118, 2.35,3.55);
  arc(461,440,118,118, 2.68,3.65);
  arc(490,440,118,118, 2.72,3.65);
  pop();
  
    // left arm___________
  push();
  beginShape();
  vertex(346,250);
  vertex(355,226);
  vertex(404,309);
  vertex(490,404);
  vertex(465,444);
  vertex(390,335);
  endShape(CLOSE);
   ellipse(356,225,10,8);
  ellipse(347,235,27);
  strokeWeight(1.5);
  line(348,227,342,223);
  line(345,228,338,225);
  line(342,231,336,229);
  line(338,235,334,233);
  strokeWeight(2.4);
  line(413,369,427,354);
  pop();
  
  //right arm___________
  push();
  beginShape();
  vertex(608,217);
  vertex(628,221);
  vertex(595,321);
  vertex(552,418);
  vertex(515,401);
  vertex(588,268);
  endShape(CLOSE);
  ellipse(606,207,10,8.5);
  ellipse(620,208,29,25);    
  strokeWeight(1.5);
  line(618,198,614,196);
  line(616,202,611,198);
  line(615,205,607,201);
  line(612,208,606,205);
  strokeWeight(2.4);
  line(587,339,562,324);
  //line(563,394,544,370);
  pop();
  
  
  //ears___________
  ellipse(417,325,18,15);
  ellipse(563,316,18,15);
  

  
 
  // body___________
  push();
  // fill(37,134,183);
  push();
  noStroke();
  quad(462,401, 546, 387,580,545, 465, 549);
  pop();
  
  // neck___________
  //rotate(PI/3.0);
  ellipse(502,395, 41,14);

  // hat front, and face___________
  push();
  ellipse(450,267, 124,120);
  ellipse(490,320, 140,152);
  pop();
  
  //keft eye___________
  push();
  fill(0);
  ellipse(465,306,6.5,6.5);
  pop();
  
  // right eye
  push();
  fill(0);
  ellipse(505,302,6.5,6.5);
  pop();
  
  // nose___________
  push();
  fill(0);
  ellipse(490,323,3,3);
  pop();

  //right leg___________
  quad(673,544,735,540,739,553,675,563);
  ellipse(751,535,35,73);
  line(743,510,749,514);
  line(738,518,747,523);
  ellipse(735,532,6,8);
  ellipse(729,530,8,6);
  
 // left leg___________ 
  quad(470,692,489,694,480,755,466,756);
  ellipse(473,776,32,50);
  line(743,510,749,514);
  line(738,518,747,523);
  ellipse(470,762,6,4);
  ellipse(476,765,6,8);
  line(469,780,476,780);
  line(467,787,480,787);
  
    // trousers___________
  push();
  fill(216,105,43);
  //anoStroke();
  beginShape();
  vertex(465,549);
  vertex(691,538);
  vertex(694,564);
  vertex(548,594);
  vertex(490,706);
  vertex(462,706);
  endShape(CLOSE);
  pop();
  
  
  //package/ orange___________
  push();
  stroke(216,105,43);
  rect(522,422,18,18,0,0,5,5);
  fill(216,105,43);
  ellipse(532,430, 5,5);
  pop();
  
  //mouth___________
  push();
  noFill();
  arc(490,318,70,70,0.5,2.2);
  arc(493,318,62,89,0.5,2.3);
  line(485,353,485,360);
  line(495,353,495,360);
  line(505,350,505,358);
  line(512,345,512,353);
  pop();
  
  // shy circles on the face
  push();
  noStroke();
  fill(216,105,43,150);
  ellipse(542,317,5,5)
  noFill();
  stroke(216,105,43, 150)
  ellipse(539,317,15,15) 
  
  noStroke();
  fill(216,105,43,150);
  ellipse(447,339,5,5)
  noFill();
  stroke(216,105,43, 150)
  ellipse(450,339,15,15)
  pop();

  //upper body stroke 
  push();
  beginShape();
  noFill();
  vertex(553,417);
  vertex(578,543);
  vertex(466,547);
  vertex(462,439);
  endShape(OPEN);
  pop();
}













