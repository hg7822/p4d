class sand2
{
	
    constructor()
    {
        // Create a new square smile face with a default
        // x, y, size, and speed
        this.x = random(0,1600);
        this.y = 413
        this.size = random(0,3);
        this.speed = 2;
        //this.alpha = random(0,100);
    }
    
    display()
    {
      
        // draw one sand
		push();
        fill(83,83,83);
        rect(this.x, this.y, int(this.size), 1);
        pop();
    }
	
	move(){
		
		// sands move in speed of 2
		this.x = this.x +2;
		
		// get thes sands back to the left
		this.x %= width;
		
	}
	
    

}