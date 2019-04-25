class sand
{
	
    constructor()
    {
        // the third line of grand 
        this.x = random(0,1600);
        this.y = 410
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
		// make the third sand of line move 
		this.x = this.x +1;
	}
	
    

}