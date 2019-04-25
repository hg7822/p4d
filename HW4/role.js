class role
{
    constructor(img)
    {
        // creat a geometrical boy 
		
        this.x =0;
        this.y = 400-64;
        this.size = random(20,30);
        this.speed = 0;
        this.alpha = random(0,100);
		this.geoBoy = img;
		
    }
    
	// Display the main role 
    display()
    {
		
	 image(this.geoBoy, this.x,this.y);
		
		// tetsing part (forget this part)
		//push();
		//fill(255,0,0);
		//ellipse(this.x+32, this.y+32, 5, 5);
		//pop();
		
     
    }
    
	// the movement of main role
	move(){
		if (this.x < width ){
			
			this.x = this.x + this.speed;
			}
		
		
		
		
	}
	// if the "w" key is pressed, the role jump high for 10;	otherwise get the main role back to the ground, this.y = 336
	highs(){
		if(keyIsPressed && key == "w"){
		   this.y = this.y -10;
		   }
		else if(keyIsPressed && key == "s"){
			this.y=this.y+200;
		}
		
		else{
			this.y = 336;
			
		}
		
		// if the mainrole jump too high, and reach to this.y = 150, let it get back to ground. 
		if(this.y <140){
			
			this.y = 336
		}
	}
		
	

}