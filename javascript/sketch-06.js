function setup(){
    createCanvas(1000, 1000);
    background(179, 219, 255);

    fill(140, 50, 66);
    stroke(255);
    strokeWeight(10);
    ellipse(170, 600, 40, 600);

    fill(300, 100, 1);
    stroke(255);
    strokeWeight(10);
    arc(150, 150, 600, 600, 0, HALF_PI);
    pop();

    fill(30, 160, 129);
    stroke(255);
    strokeWeight(10);
    arc(454, 150, 600, 600, 0, QUARTER_PI);

    fill(94, 125, 130);
    stroke(255);
    strokeWeight(10);
    triangle(660, 355, 752, 165, 770, 890);
    
}



function keyPressed(){
    if (key == 's'){
        saveCanvas("sketch-06", "png");
    }
}