class sand
{
	
    constructor()
    {
        // the first line of grand 
        this.x = random(0,1600);
        this.y = random(401,415);
        this.size = random(2,5);
        this.speed = 2;
        //this.alpha = random(0,100);
    }
    
    display()
    {
      
        // draw one sand
		push();
        fill(83,83,83);
        rect(this.x, int(this.y), int(this.size), 1);
        pop();
    }
	
	// make the first line of sand move to right, once it touch the edge, get it back to left. 
	move(){
		
		this.x = this.x +2;
		this.x %= width;
		
	}
	
    

}