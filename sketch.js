function setup() {
  createCanvas(400, 400);
  angleMode(DEGREES);
  
}

function draw() {
  background(0);
  translate(200, 200);
  rotate(-90);
  let m = minute();
  let s = second();
  let h = hour();
  strokeWeight(8);
  stroke(255,100,100);
  noFill();
  let secondangle = map(s,0,60,0,360);
  arc(0, 0, 300, 300, 0, secondangle);
  push();
  rotate(secondangle);
  line(0,0,100,0);
  stroke(255,100,100);
  pop();
  
  strokeWeight(8);
  stroke(150, 100, 255);
  noFill();
  let minuteangle = map(m,0,60,0,360);
  arc(0,0,280,280,0,minuteangle);
  push();
  rotate(minuteangle);
  line(0,0,75,0);
  stroke(150, 100, 255);
  pop();
  
  strokeWeight(8);
  stroke(150,255,150);
  noFill();
  let hourangle = map ( h % 12,0,12,0,369);
  arc(0,0,260,260,0,hourangle);
  push();
  rotate(hourangle);
  line(0,0,50,0);
  stroke(150,255,150);
  pop();
  stroke(255);
  point(0,0);
}