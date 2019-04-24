class startButton
{
	
    constructor()
    {
        // Create a new square smile face with a default
        // x, y, size, and speed
        this.x = 50;
        this.y = 450;
        this.size = 24;
      
    }
    
    display()
    {
      
    // start button
	
	textAlign(CENTER);
	textSize(this.size);
	text("START", this.x+90, this.y+35);
	
	
	
	noFill();
	strokeWeight(1);
	rect(this.x,this.y,180,50);
		

   //textFont(fontBold);
    }
	
    

}