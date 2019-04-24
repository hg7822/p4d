class role
{
    constructor()
    {
        // Create a new square smile face with a default
        // x, y, size, and speed
        this.x = 0;
        this.y = 300;
        this.size = 30;
        this.speed = 0;
        this.alpha = random(0,100);
		//this.geoBoy = img;
		
    }
    
	// the main role 
    display()
    {
		
	 //image(this.geoBoy, this.x,this.y);
		
        push();
           // pur main role
        fill(83, 83, 83);
        noStroke();
		triangle(this.x +70,this.y+66,this.x+92,this.y+37, this.x+114,this.y+66);
		rect(this.x +83,this.y+66,18, 21);
		      // x =90 y =350
		fill(255);
        ellipse(this.x+90, this.y+50, 3, 3);
		ellipse(this.x+95, this.y+52, 3, 3);
		
		strokeWeight(1);
	    stroke(255);
		line(this.x+90,this.y+57,this.x+96, this.y+57);
		line(this.x+85,this.y+60,this.x+101, this.y+60);
		
		
		stroke(83,83,83);
		beginShape();
		strokeWeight(2);
		vertex(this.x+89, this.y+105);
		vertex(this.x+93, this.y+83);
		vertex(this.x+97, this.y+105);
		endShape();
	
        pop();
    }
    
	// the movement of main role
	move(){
		if (this.x < width ){
			
			this.x = this.x + this.speed;
			}
		
		
		
	}
	// if the space key is pressed, the role jump high for 30;	
	highs(){
		if(keyIsPressed && key == "w"){
		   this.y = this.y - 5;
		   }
		else if( keyIsPressed && key == "s"){
			this.y=this.y+2;
		}
		
		else{
			this.y = 300;
			
		}
	}
		
	

}