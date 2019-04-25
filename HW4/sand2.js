class sand2
{
	
    constructor()
    {
        // the second line of sand 
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
		
		//make the second line of sand move to right, once it touch the edge, get it back to left. 
		
		// sands move in speed of 2
		this.x = this.x +2;
		
		// get thes sands back to the left
		this.x %= width;
		
	}
	
    

}