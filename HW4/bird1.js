class Bird1
{
	
    constructor(img)
    {
        // A bird is flying to left.
       
        this.x = width
        this.y = 30;
        this.size = random(60,80);
        this.speed= (0,1);
		this.high = (-1,1);
        this.bird1 = img;
		this.size = random(15,30);
    }
    
    display()
    {

	
      image(this.bird1, this.x,this.y, this.size,this.size);
 
    }
	move(){
		
		// flying to left, and this bird move up and down, 
		if(this.x>0){
			
			this.x = this.x - this.speed;
			this.y = this.y + random(-1,1);
		}
		
	}
	
    

}