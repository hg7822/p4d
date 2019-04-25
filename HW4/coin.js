class Coin
{
	
    constructor(img)
    {
        // Create a coin at the final station 
        this.x = 1300
        this.y = 240;
        this.size = 80;
		this.high = (-1,1);
        this.coin = img;
		
    }
    
    display()
    {

	
     image(this.coin,this.x, this.y, this.size,this.size);
 
    }

		
}
	
    

