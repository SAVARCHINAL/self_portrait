
// Setup code goes here
function setup() {
  createCanvas(400, 400);
  background(78, 110, 67);
 }


// Draw code goes here
function draw() {
  

    //hair
    noStroke();
    fill(92, 71, 51); 
    ellipse(150, 175, 250, 290);
    ellipse(225, 155, 275, 290);
    rect(30, 200, 55, 505, 20);
    rect(55.3, 100, 300, 505, 20);
    
  //neck
noStroke();
fill (230, 202, 163);
rect(160,300,80,100);

//shirt
noStroke();
fill(253, 246, 233);
rect(160,370,80,100);

//stripes
fill(221, 133, 70);
rect(160,380,80,100);
fill(253, 246, 233);
rect(160,390,80,100);   


  //face
noStroke();
fill (249, 219, 176);
  ellipse(200, 185, 270);

 
  

  //eyebrow
noStroke();
fill(92, 71, 51); 
ellipse(130.5,110,50,10);
ellipse(269,110,50,10);

  //whites
noStroke ();
fill(247, 247, 255);
ellipse(135, 150, 50,20);
ellipse(265, 150, 50,20);

  //iris
fill(55, 112, 35)
ellipse(135, 150, 20);
ellipse(265, 150, 20);

  //pupils
fill(1);
ellipse(135, 150, 10);
ellipse(265, 150, 10);

  //nose
stroke (1);

// lips
noStroke();
fill(255, 84, 58);
arc(195,255,30,10,PI,0);
  arc(215,255,30,10,PI,0);
  arc(205,256,50,20,0,PI);

//blush
noStroke();
fill(223, 151, 129);
ellipse(270, 210, 50, 50);
ellipse(135, 210, 50, 50)



//nostril 
noStroke();
fill(1);
ellipse(195,220,10,8);
ellipse(215,220,10,8);








}

 





  




