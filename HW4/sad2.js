class sadface
{
	
    constructor(img)
    {
        // a triangle sad face 
        this.x = random(400, 1200);
        this.y = 365;
        
        this.sadface = img;
    }
    
    display()
    {

	// display the triangle sad faces
      image(this.sadface, this.x,this.y);
		
		//testing part
		//push();
		//fill(0,0,255);
		//ellipse(this.x+15, this.y+15, 5, 5);
		//pop();
 
    }
	move(){
		
		// make the triangle sad faces move back and forward in random(-10,10) every frame. 
		this.x = this.x + random(-3,4);
		
	}
	
    

}
