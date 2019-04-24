class firstsmile
{
	
    constructor(img)
    {
        // Create a new square smile face with a default
        // x, y, size, and speed
        this.x = 80;
        this.y = 300;
        this.size = random(30,50);
        
        this.firstsmile = img;
    }
    
    display()
    {
      image(this.firstsmile, this.x,this.y);
      
    }
	
    

}