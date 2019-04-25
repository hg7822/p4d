class firstsmile
{
	
    constructor(img)
    {
        // Create a new square smile face with a default
        // x, y, size, and speed
        this.x = int(random(200, 250));
        this.y = 345;
        this.size = random(60,80);
       // this.rotation = random(2,3);
        this.firstsmile = img;
    }
    
    display()
    {

	
      image(this.firstsmile, this.x,this.y);
 
    }
	
    

}