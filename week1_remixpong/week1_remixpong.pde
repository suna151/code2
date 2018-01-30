float x, y, score=0;
float changeX=-5;
float changeY=-5;
int gameOver=0;
float multiplier=1.0;
int base=40;
void setup()
{
  size(760, 640);
  x=(int)random(width);
  y=height-base;
}

void draw()
{
  if (gameOver==0)
  {
    background(0); 
    text("SCORE "+score, width/2, height/2);
    stroke(23, 432, 12);
    fill(42, 123, 39);
    rect(mouseX, height-base, 100, base);
    rect(mouseX, 0, 100, base);
    ellipse(x, y, 10, 10);
    x=x+changeX;
    y=y+changeY;
    if (x<0 | x>width)
    {
      changeX=-changeX;
    }
    if (y<base)
    {
      if (x>mouseX && x<mouseX+200) {
        changeY=-changeY; //bounce
        score++;
        if ((score%3)==0)
        {
          changeX=multiplier*changeX;
          changeY=multiplier*changeY;
        }
      } else {
        gameOverSplash();
      }
    }

    if (y>height-base) {
      if (x>mouseX && x<mouseX+200) {
        changeY=-changeY; //bounce back
        score++;
        if ((score%3)==0)
        {
          changeX=multiplier*changeX;
          changeY=multiplier*changeY;
        }
      } else {
        gameOverSplash();
      }
    }
  } else {
    background(255);
    text("Game Over! Score: "+score, width/2, height/2);
  }
}
void gameOverSplash()
{
  gameOver=1;
}
void mouseClicked()
{
  changeY=-changeY;
  score=0;
  gameOver=0;
}


//researched how to make pong from http://drdoane.com/thinking-through-a-basic-pong-game-in-processing/
//refrenced pong idea from http://www.123mylist.coam/2013/12/basic-pong-game-using-processing.html