var hr, min, sec
var secAngle, minAngle, hrAngle 

function setup() {
  createCanvas(600,600)
  angleMode(DEGREES)
}

function draw() {
  background(0)
  text("Feed Back - https://forms.gle/65WFm8haEk3QmFgq7",15,20);    


  translate(300,300);
  
  noStroke();
  fill("white");
  textSize(25)

  text("3",200,10); 
  text("6",-5,220); 
  text("9",-220,10); 
  text("12",-15,-200);    
  
  hr = hour();
  min = minute();
  sec = second();

  rotate(-90)

  secAngle = map(sec,0,60,0,360);
  minAngle = map(min,0,60,0,360);
  hrAngle = map(hr%12,0,12,0,360);

  push();
  rotate(secAngle);
  stroke("blue");
  strokeWeight(2);
  line(0,0,200,0);
  pop();

  push();
  rotate(minAngle);
  stroke("green");
  strokeWeight(4);
  line(0,0,150,0);
  pop();

  push();
  rotate(hrAngle);
  stroke("red");
  strokeWeight(6);
  line(0,0,100,0);
  pop();

  strokeWeight(7);
  noFill()

  stroke(0,0,255);
  arc(0,0,460,460,0,secAngle);
  stroke("red");

  stroke(0,255,0);
  arc(0,0,480,480,0,minAngle);
  stroke("red");

  arc(0,0,500,500,0,hrAngle);
  stroke("green");
}