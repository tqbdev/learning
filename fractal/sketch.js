var angle = 0;
var thin = 0.67;
var slider;
var h = 500;
var w = 500;
function setup() {
	createCanvas(h, w);	
	slider = createSlider(0, TWO_PI, PI / 4, 0.01);
}

function draw() {
	background(51);
	angle = slider.value();
	stroke(255);
	translate(h / 2, height);
	branch(120);
}

function branch(len) {
	line(0, 0, 0, -len);
	translate(0, -len);
	if (len > 3) {
		push();
		rotate(angle);
		branch(len * thin);
		pop();
		push();
		rotate(-angle);
		branch(len * thin);
		pop();
	}	
}