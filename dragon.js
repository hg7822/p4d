class Dragon
{
	construct(img)
	
	{
		this.x = 0;
		this.y = 0;
		//this.w = 30;
		//this.h = 30;
		
	    this.dragon = img;
		this.dragon.resize(width*.2,0);
		
		console.log(this.dragon.width);
		
	}
	
	move(){
		
		if(
			(mouseX >= this.x && mouseX <= this.x+this.dragon.width)
			&&
			(mouseY>= this.y && mouseY<=this.y+this.dragon.height)
			)
			
			{
				this.x = random(0,width);
				this.y = random(0,height);
				
			}
	}
	
	display(){
		
		//push();
		//fill(0,0,255);
		//rect(this.x, this.y, this.w,this.h);
		//pop();
	image(this.dragon, this.x,this.y);
	
	}
}
	