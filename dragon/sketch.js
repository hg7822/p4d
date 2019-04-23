var mydragon;
var img;

function preload(){
	img= loadImage('bluedragon.png');
}
function setup(){
	
	createCanvas(400,400);
	
	mydragon = new Dragon();
 	mydragon.x = width/2;
	mydragon.y = height/2;
}

function draw(){
	background(0,0,200);
	mydragon.move();
	mydragon.display();
}