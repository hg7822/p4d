class firstsmile
{
	
    constructor(img)
    {
        // Create a new square smile face with a default
        // x, y, size, and speed
        this.x = 80;
        this.y = 300;
        this.size = random(30,50);
        
        this.Firstsmile = img;
    }
    
    display()
    {
      image(this.Firstsmile, this.x,this.y);
      
    }
	
    

}
