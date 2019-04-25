// HAO GE && JIAJIA LI
// IGME-609 Project 4
// Geometrical Boy
// Game


// for the role
var mainrole;
var geoBoy;

var width = screen.innerWidth;

// for buttons class
var buttons;

// for sand
var mysands = [];

//section 1
var mysmile1 = [];
var smile1;
var smile2;
var smile3;

//for sad2 - triangle sad face
var trianglesad1;
var trianglesad2;
var trianglesad3;
var trianglesad4;
var mysad =[];

// decoration bird 
var mybird1;
var mybird2;
var bird1;
var bird;

// decoration sun/ for sun class / also for the movement of sun 
var mysun;
var a = 0.5;
var r = 800;

// for coin class and move 

var mycoin;
var coin;
//var coinsize = 80;

function preload(){
	
	geoBoy = loadImage('assets/geoBoy.png');
	
	//section 1
	smile1 = loadImage('assets/smile1.png');
	smile2 = loadImage('assets/decosmile2.png');
	smile3 = loadImage('assets/decosmile3.png');
	
	// section 2 
	trianglesad1 = loadImage('assets/trianglesad1.png');
	trianglesad2 = loadImage('assets/trianglesad2.png');
	trianglesad3 = loadImage('assets/trianglesad3.png');
	trianglesad3 = loadImage('assets/trianglesad3.png');
	
	//decoration bird
	bird1 = loadImage('assets/bird1.png');
	bird2 = loadImage('assets/bird2.png');
	
	//decoaration sun
	mysun = loadImage('assets/sun.png');
	
	//section 4 
	coin = loadImage('assets/coin.png');
	
	
}



function setup() {
  createCanvas(innerWidth, 600);
    

  
	// my smiles 
	  for(var i = 0; i <1; i++){
      mysmile1[i] = new firstsmile(smile1);
  }
  
	
	// grand sands 
  for(var i = 0; i < 60; i++){
       mysands[i] = new sand();
  }
	
	// mysad faces 
	for(var i = 0; i < 3; i++){
       mysad[i] = new sadface(trianglesad1);
  }


  mycoin = new Coin(coin);	
  mybird1 = new Bird1(bird1);
  mybird2 = new Bird2(bird2);
  mainrole = new role(geoBoy);
  buttons = new startButton();
 
	
 
	
 
}

// if the mouse is inside the button and the mouse is pressed, shring the button 

function mousePressed(){
	if(50<mouseX<230&& 450<mouseY<500){
		mainrole.speed = 4;
		buttons.size = 16;	
	}
	
}

// if the mouse is released, the size of the button get back to original size 
function mouseReleased(){
	buttons.size = 24;
}


function draw() {
    background(255);
	
	// Sun move back and forward between this.x = 800 and this.x = 1200, and the speed is 0.5
	r = r +a;
	image(mysun,r, 40, 100,100);
	if(r<800){
		a = 0.5;
	}
	else if(r>1200){
		a = -0.5;
	}
	
	
	// draw decoration smiles in section 1
	image(smile2, 300, 30);
	image(smile3, 380, 100);
	
	// draw decoration triangle sad faces in section 2
	image(trianglesad2, 1020, 80);
	image(trianglesad3, 860, 20);
	
    // ground line 
	push();
    strokeWeight(1);
    stroke(83,83,83); 
	line(0,400, innerWidth,400);
    pop();
	
	
	// show the title of the game and the introduction 
    fill(83,83,83);
	//textFont(fontBold);
    textSize(24);
    text("GEOMETRICAL BOY ", 125,30);
	push();
	textAlign(LEFT);
	text("Do not touch these fake smiles", 290,470);
	text("Press W to help geometrical boy to get the coin!", 290,495);
	pop();
	
	// decoration birds 
	mybird1.display();
	mybird1.move();
	
	mybird2.display();
	mybird2.move();

	
	// display coin 
	mycoin.display();
   
	// check if mainrole get into the coin zone, if so, shrink coin and show text(YOU MADE IT!);
	
	if (1260<mainrole.x ){
		mycoin.size = 60
		textSize(18);
		textAlign(LEFT);
		text("YOU MADE IT!",1180,500);
	}
	else if(mainrole.x < 1260){
			mycoin.size = 80;
			}
	
	
    // diplay role 1 
	mainrole.display();
	mainrole.move();
	mainrole.highs();
	
	
	//mysmile1.display();
	 for(var i = 0; i <mysmile1.length; i++){
         mysmile1[i].display();  
     }
	
	// dispaly button
	buttons.display();
	
	// display sands 
	   for(var i = 0; i <mysands.length; i++){
		   mysands[i].display();
	       mysands[i].move();
     }
	
	// display mysad face
	   for(var i = 0; i <mysad.length; i++){
		  mysad[i].display();
	      mysad[i].move();
     }
  

	// Check if the the mainrole get touch with the square smile/ check the distant between mysmile and // mainrole, if the distance is less than 30, main role get back to original point.	
	for(var i=0; i<mysmile1.length;i++){
													// examples: let d = int(dist(x1, y1, x2, y2));
		let d = dist(mainrole.x+22,mainrole.y+32,mysmile1[i].x+25,mysmile1[i].y+25);
		let testlength = 30;
		
		if(d < testlength){
			
			
			mainrole.x = 0;
			mainrole.y = 300;
			
		}
	}
 
   // Check if the the mainrole get touch with the my sad faces / check the distant between mysad face
	//   and mainrole, if the distance is less than 15, main role get back to original point.	
	for(var i=0; i<mysad.length;i++){
													// examples: let d = int(dist(x1, y1, x2, y2));
		let c = dist(mainrole.x+22,mainrole.y+32,mysad[i].x+15,mysad[i].y+15);
		let testlength1 = 20;
		
		if(c < testlength1){
			
	   // 	console.log(c+" < "+testlength1+"? "+(c < testlength1));
			
			
			mainrole.x = 0;
			mainrole.y = 300;
			
		}
	}
	
	

}












