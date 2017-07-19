var d_mult = 0.5;
var d_start = 200;
var min_circle = 10;
var c = 0;
var c_incr = 0.01;
var bg = true;

function setup() {
    createCanvas(600, 600);
    stroke(0);
    noFill();
    strokeWeight(1);
}

function draw() {
    c += c_incr;
    if(bg) background(255);
    d_mult = map(sin(c), -1, 1, 0.5, 0.7);
    draw_circle(300, 300, d_start, 0);
    // noLoop();
}

function draw_circle(x, y, d, lvl){
    // stroke(m);
    // ellipse(x, y, d2);
    d = d * d_mult;
    if(d >= min_circle){
        draw_circle(x + d, y    , d, lvl+1);
        draw_circle(x - d, y    , d, lvl+1);
        draw_circle(x    , y + d, d, lvl+1);
        draw_circle(x    , y - d, d, lvl+1);
    }
    d2 = d_start * pow(1/2, lvl);
    m = map(d2, d_start, 0, 0, 200);
    stroke(m);
    ellipse(x, y, d2);
}
