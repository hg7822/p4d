class squareSmile
{
	
    constructor()
    {
        // Create a new square smile face with a default
        // x, y, size, and speed
        this.x = random(200,600);
        this.y = 350;
        this.size = random(30,50);
        this.speed = 2;
        this.alpha = random(0,100);
    }
    
    display()
    {
      
        // Make our bubbls purple
		push();
        fill(0, 0, 255, this.alpha);
        noStroke();
        ellipse(int(this.x), int(this.y), int( this.size), int(this.size));
        pop();
    }
	
    

}