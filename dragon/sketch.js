var mydragon;
var dragon;

function preload(){
	dragon= loadImage('bluedragon.png');
}

function setup(){
	
	createCanvas(400,400);
	
	mydragon = new Dragon(dragon);
	mydragon.x = width/2;
	mydragon.y = height/2;
}

function draw(){
	background(0,0,200);
	
	mydragon.move();
	mydragon.display();
}
