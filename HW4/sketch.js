// HAO GE 
// IGME-609 Project 4
// Geometrical Boy
// Game

var smileSquares = [];
var mainrole;
var width = screen.innerWidth;
var buttons;
var mysands = [];
var fontRegular; 
var fontBold;

var geoBoy;
var smile1;

var mysmile1;

function preload(){
	
	//geoBoy = loadImage('assets/geoBoy.png');
	smile1 = loadImage('assets/smile1.png');
}

function preload(){			
			//fontRegular = loadFont('assets/Helvetica.ttc');
			fontBold = loadFont('assets/Bold.ttf');			
}


function setup() {
  createCanvas(innerWidth, 600);
    
  // section 1, get instanaces from smile square
  for(var i = 0; i < 100; i++){
      smileSquares[i] = new squareSmile();
  }
  
  for(var i = 0; i < 60; i++){
       mysands[i] = new sand();
  }
	
  mainrole = new role();
  buttons = new startButton();
  mysmile1 = new firstsmile(smile1);
	
 
	
 
}

// if the mouse is inside the button and click the button

function mousePressed(){
	if(50<mouseX<230&& 450<mouseY<500){
		mainrole.speed = 2;
		buttons.size = 16;	
	}
	
}

function mouseReleased(){
	buttons.size = 24;
}

function draw() {
    background(255);
	
    // ground 
	push();
    strokeWeight(1);
    stroke(83,83,83); 
	line(0,400, innerWidth,400);
    pop();
	
    fill(83,83,83);
	//textFont(fontBold);
    textSize(24);
    text("GEOMETRICAL BOY ", 180,50);
	push();
	textAlign(LEFT);
	text("Do not touch these fake smiles", 290,470);
	text("Press W to help geometrical boy to get the star!", 290,495);
	pop();
	// decoration part 
	

	
    // section 1 
    for(var i = 0; i <smileSquares.length; i++){
         smileSquares[i].display();  
     }
	
    // diplay role 1 
	mainrole.display();
	mainrole.move();
	mainrole.highs();
	
	//display first smile block 
	
	mysmile1.display();
	// dispaly button
	buttons.display();
	
	// display sands 
	   for(var i = 0; i <mysands.length; i++){
		   mysands[i].display();
	       mysands[i].move();
     }
	
  
   // console.log(mainrole.size);
	
	for(var i=0; i<smileSquares.length;i++){
													// examples: let d = int(dist(x1, y1, x2, y2));
		let d = dist(mainrole.x,mainrole.y,smileSquares[i].x,smileSquares[i].y);
		let testlength = mainrole.size/2 + smileSquares[i].size/2;
		
		if(d < testlength){
			//mainrole.size=mainrole.size*2;
			
			mainrole.x = 0;
			mainrole.y = 300;
			
		}
	}
 

}












