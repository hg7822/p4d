class Bird2
{
	
    constructor(img)
    {
        //// A bird is flying to right.
        this.x = 0
        this.y = 200;
        this.size = random(60,80);
        this.speed= (0,1);
		this.high = (-2,2);
        this.bird1 = img;
		this.size = random(10,30);
    }
    
    display()
    {

	
      image(this.bird1, this.x,this.y,this.size,this.size);
 
    }
	move(){
		
		// flying to right, and this bird move up and down, 
		if(this.x<width){
			
			this.x = this.x + this.speed;
			this.y = this.y + random(-2,2);
		}
		
	}
	
    

}