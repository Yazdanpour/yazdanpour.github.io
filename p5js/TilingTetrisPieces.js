let TetrisPieces = [];
let d = 50;
let TetrisPiece;
//let j = 0;
function setup() {
	//createCanvas(windowWidth, windowHeight);
	let canvas = createCanvas(1000,1000);
    canvas.parent('sketch1');
	angleMode(DEGREES);
	colorMode(HSB);
	background(120,50,87);
	TetrisPiece = new TetrisShape(mouseX,mouseY,d)
}

function draw() {
background(111,222,111);
	
	//draw grid lines 
	stroke(0)
	for(let i = 0; i<=width; i+=d){
		for(let j = 0; j<=height; j+=d){
			line(i,0,i,height)
			line(0,j,width,j)
		}
  }
	for (let i = 0; i < TetrisPieces.length; i++) {
		TetrisPieces[i].show();
		
	}
	TetrisPiece.display();
	
}

class TetrisShape{
  constructor(x,y,d){
		this.d = d;
		this.x = x;
		this.y = y;
		this.r = 0;
		this.color = color(random(0,360),random(0,100),random(0,100))
		this.type = int(random(0,7))
	//	this.type = 6
	}
	
// function chooseType(){
// 		return int(random(0,8))
// }
// 	chooseColor(){
// 		return color(random(0,255),random(0,255),random(0,255))
// }
	contains(px, py){
		if(this.x==px && this.y ==py){
			return true;
} else {
return false;
}
}
	
show(){
fill(this.color)
noStroke()
push() 

	translate(this.x,this.y)
switch(this.type){
	case 0:
	//I piece
	switch(this.r){
		case 0:
	    drawShadedRect(0,0,d,d, this.color),drawShadedRect(d,0,d,d,this.color),drawShadedRect(2*d,0,d,d,this.color),drawShadedRect(3*d,0,d,d,this.color)
			break;
	  case 1:
			drawShadedRect(0,0,d,d, this.color),drawShadedRect(0,d,d,d,this.color),drawShadedRect(0,2*d,d,d,this.color),drawShadedRect(0,3*d,d,d,this.color)
			break;
		case 2:
			drawShadedRect(0,0,d,d, this.color),drawShadedRect(d,0,d,d,this.color),drawShadedRect(2*d,0,d,d,this.color),drawShadedRect(3*d,0,d,d,this.color)
			break;
		case 3:
			drawShadedRect(0,0,d,d, this.color),drawShadedRect(0,d,d,d,this.color),drawShadedRect(0,2*d,d,d,this.color),drawShadedRect(0,3*d,d,d,this.color)
		default:
	}
		break;
	case 1:
	//T piece
		switch(this.r){
		case 0:
	    drawShadedRect(0,0,d,d,this.color),drawShadedRect(d,0,d,d,this.color),drawShadedRect(d,d,d,d,this.color),drawShadedRect(2*d,0,d,d,this.color)
			break;
	  case 1:
			drawShadedRect(0,0,d,d, this.color),drawShadedRect(0,d,d,d,this.color),drawShadedRect(-d,d,d,d,this.color),drawShadedRect(0,2*d,d,d,this.color)
			break;
		case 2:
			drawShadedRect(0,0,d,d, this.color),drawShadedRect(-d,0,d,d,this.color),drawShadedRect(-d,-d,d,d,this.color),drawShadedRect(-2*d,0,d,d,this.color)
			break;
		case 3:
			drawShadedRect(0,0,d,d, this.color),drawShadedRect(0,-d,d,d,this.color),drawShadedRect(d,-d,d,d,this.color),drawShadedRect(0,-2*d,d,d,this.color)
		default:
	}
	break;
	case 2:
	//S piece
		switch(this.r){
		case 0:
	   drawShadedRect(0,0,d,d,this.color),drawShadedRect(d,0,d,d,this.color),drawShadedRect(d,-d,d,d,this.color),drawShadedRect(2*d,-d,d,d,this.color)
			break;
	  case 1:
			drawShadedRect(0,0,d,d, this.color),drawShadedRect(0,d,d,d,this.color),drawShadedRect(d,d,d,d,this.color),drawShadedRect(d,2*d,d,d,this.color)
			break;
		case 2:
			drawShadedRect(0,0,d,d,this.color),drawShadedRect(d,0,d,d,this.color),drawShadedRect(d,-d,d,d,this.color),drawShadedRect(2*d,-d,d,d,this.color)
			break;
		case 3:
			drawShadedRect(0,0,d,d, this.color),drawShadedRect(0,d,d,d,this.color),drawShadedRect(d,d,d,d,this.color),drawShadedRect(d,2*d,d,d,this.color)
		default:
	}
	break;
  case 3:
  //Z piece
	switch(this.r){
		case 0:
	   drawShadedRect(0,0,d,d,this.color),drawShadedRect(d,0,d,d,this.color),drawShadedRect(d,d,d,d,this.color),drawShadedRect(2*d,d,d,d,this.color)
			break;
	  case 1:
			drawShadedRect(0,0,d,d, this.color),drawShadedRect(0,d,d,d,this.color),drawShadedRect(-d,d,d,d,this.color),drawShadedRect(-d,2*d,d,d,this.color)
			break;
		case 2:
			drawShadedRect(0,0,d,d,this.color),drawShadedRect(d,0,d,d,this.color),drawShadedRect(d,d,d,d,this.color),drawShadedRect(2*d,d,d,d,this.color)
			break;
		case 3:
			drawShadedRect(0,0,d,d, this.color),drawShadedRect(0,d,d,d,this.color),drawShadedRect(-d,d,d,d,this.color),drawShadedRect(-d,2*d,d,d,this.color)
		default:
	}
	break;
	case 4:
	//O piece
	drawShadedRect(0,0,d,d,this.color),drawShadedRect(d,0,d,d,this.color),drawShadedRect(0,d,d,d,this.color),drawShadedRect(d,d,d,d,this.color)
	break;
	case 5:
	//J piece
		switch(this.r){
		case 0:
	   drawShadedRect(0,0,d,d,this.color),drawShadedRect(d,0,d,d,this.color),drawShadedRect(2*d,0,d,d,this.color),drawShadedRect(2*d,d,d,d,this.color)
			break;
	  case 1:
			drawShadedRect(0,0,d,d, this.color),drawShadedRect(0,d,d,d,this.color),drawShadedRect(0,2*d,d,d,this.color),drawShadedRect(-d,2*d,d,d,this.color)
			break;
		case 2:
			drawShadedRect(0,0,d,d,this.color),drawShadedRect(-d,0,d,d,this.color),drawShadedRect(-2*d,0,d,d,this.color),drawShadedRect(-2*d,-d,d,d,this.color)
			break;
		case 3:
			drawShadedRect(0,0,d,d, this.color),drawShadedRect(0,-d,d,d,this.color),drawShadedRect(0,-2*d,d,d,this.color),drawShadedRect(d,-2*d,d,d,this.color)
		default:
	}
	break;
	case 6:
	//L piece
  		switch(this.r){
		case 0:
	   drawShadedRect(0,0,d,d,this.color),drawShadedRect(d,0,d,d,this.color),drawShadedRect(2*d,0,d,d,this.color),drawShadedRect(2*d,-d,d,d,this.color)
			break;
	  case 1:
			drawShadedRect(0,0,d,d, this.color),drawShadedRect(0,d,d,d,this.color),drawShadedRect(0,2*d,d,d,this.color),drawShadedRect(d,2*d,d,d,this.color)
			break;
		case 2:
			drawShadedRect(0,0,d,d,this.color),drawShadedRect(-d,0,d,d,this.color),drawShadedRect(-2*d,0,d,d,this.color),drawShadedRect(-2*d,d,d,d,this.color)
			break;
		case 3:
			drawShadedRect(0,0,d,d, this.color),drawShadedRect(0,-d,d,d,this.color),drawShadedRect(0,-2*d,d,d,this.color),drawShadedRect(-d,-2*d,d,d,this.color)
		default:
	}
	break;
	default: 
}
	pop()
}
	
display(){
fill(this.color)
noStroke()
push() 

translate(mouseX - mouseX%d,mouseY-mouseY%d)
switch(this.type){
	case 0:
	//I piece
	switch(this.r){
		case 0:
	    drawShadedRect(0,0,d,d, this.color),drawShadedRect(d,0,d,d,this.color),drawShadedRect(2*d,0,d,d,this.color),drawShadedRect(3*d,0,d,d,this.color)
			break;
	  case 1:
			drawShadedRect(0,0,d,d, this.color),drawShadedRect(0,d,d,d,this.color),drawShadedRect(0,2*d,d,d,this.color),drawShadedRect(0,3*d,d,d,this.color)
			break;
		case 2:
			drawShadedRect(0,0,d,d, this.color),drawShadedRect(d,0,d,d,this.color),drawShadedRect(2*d,0,d,d,this.color),drawShadedRect(3*d,0,d,d,this.color)
			break;
		case 3:
			drawShadedRect(0,0,d,d, this.color),drawShadedRect(0,d,d,d,this.color),drawShadedRect(0,2*d,d,d,this.color),drawShadedRect(0,3*d,d,d,this.color)
		default:
	}
		break;
	case 1:
	//T piece
		switch(this.r){
		case 0:
	    drawShadedRect(0,0,d,d,this.color),drawShadedRect(d,0,d,d,this.color),drawShadedRect(d,d,d,d,this.color),drawShadedRect(2*d,0,d,d,this.color)
			break;
	  case 1:
			drawShadedRect(0,0,d,d, this.color),drawShadedRect(0,d,d,d,this.color),drawShadedRect(-d,d,d,d,this.color),drawShadedRect(0,2*d,d,d,this.color)
			break;
		case 2:
			drawShadedRect(0,0,d,d, this.color),drawShadedRect(-d,0,d,d,this.color),drawShadedRect(-d,-d,d,d,this.color),drawShadedRect(-2*d,0,d,d,this.color)
			break;
		case 3:
			drawShadedRect(0,0,d,d, this.color),drawShadedRect(0,-d,d,d,this.color),drawShadedRect(d,-d,d,d,this.color),drawShadedRect(0,-2*d,d,d,this.color)
		default:
	}
	break;
	case 2:
	//S piece
		switch(this.r){
		case 0:
	   drawShadedRect(0,0,d,d,this.color),drawShadedRect(d,0,d,d,this.color),drawShadedRect(d,-d,d,d,this.color),drawShadedRect(2*d,-d,d,d,this.color)
			break;
	  case 1:
			drawShadedRect(0,0,d,d, this.color),drawShadedRect(0,d,d,d,this.color),drawShadedRect(d,d,d,d,this.color),drawShadedRect(d,2*d,d,d,this.color)
			break;
		case 2:
			drawShadedRect(0,0,d,d,this.color),drawShadedRect(d,0,d,d,this.color),drawShadedRect(d,-d,d,d,this.color),drawShadedRect(2*d,-d,d,d,this.color)
			break;
		case 3:
			drawShadedRect(0,0,d,d, this.color),drawShadedRect(0,d,d,d,this.color),drawShadedRect(d,d,d,d,this.color),drawShadedRect(d,2*d,d,d,this.color)
		default:
	}
	break;
  case 3:
  //Z piece
	switch(this.r){
		case 0:
	   drawShadedRect(0,0,d,d,this.color),drawShadedRect(d,0,d,d,this.color),drawShadedRect(d,d,d,d,this.color),drawShadedRect(2*d,d,d,d,this.color)
			break;
	  case 1:
			drawShadedRect(0,0,d,d, this.color),drawShadedRect(0,d,d,d,this.color),drawShadedRect(-d,d,d,d,this.color),drawShadedRect(-d,2*d,d,d,this.color)
			break;
		case 2:
			drawShadedRect(0,0,d,d,this.color),drawShadedRect(d,0,d,d,this.color),drawShadedRect(d,d,d,d,this.color),drawShadedRect(2*d,d,d,d,this.color)
			break;
		case 3:
			drawShadedRect(0,0,d,d, this.color),drawShadedRect(0,d,d,d,this.color),drawShadedRect(-d,d,d,d,this.color),drawShadedRect(-d,2*d,d,d,this.color)
		default:
	}
	break;
	case 4:
	//O piece
	drawShadedRect(0,0,d,d,this.color),drawShadedRect(d,0,d,d,this.color),drawShadedRect(0,d,d,d,this.color),drawShadedRect(d,d,d,d,this.color)
	break;
	case 5:
	//J piece
		switch(this.r){
		case 0:
	   drawShadedRect(0,0,d,d,this.color),drawShadedRect(d,0,d,d,this.color),drawShadedRect(2*d,0,d,d,this.color),drawShadedRect(2*d,d,d,d,this.color)
			break;
	  case 1:
			drawShadedRect(0,0,d,d, this.color),drawShadedRect(0,d,d,d,this.color),drawShadedRect(0,2*d,d,d,this.color),drawShadedRect(-d,2*d,d,d,this.color)
			break;
		case 2:
			drawShadedRect(0,0,d,d,this.color),drawShadedRect(-d,0,d,d,this.color),drawShadedRect(-2*d,0,d,d,this.color),drawShadedRect(-2*d,-d,d,d,this.color)
			break;
		case 3:
			drawShadedRect(0,0,d,d, this.color),drawShadedRect(0,-d,d,d,this.color),drawShadedRect(0,-2*d,d,d,this.color),drawShadedRect(d,-2*d,d,d,this.color)
		default:
	}
	break;
	case 6:
	//L piece
  		switch(this.r){
		case 0:
	   drawShadedRect(0,0,d,d,this.color),drawShadedRect(d,0,d,d,this.color),drawShadedRect(2*d,0,d,d,this.color),drawShadedRect(2*d,-d,d,d,this.color)
			break;
	  case 1:
			drawShadedRect(0,0,d,d, this.color),drawShadedRect(0,d,d,d,this.color),drawShadedRect(0,2*d,d,d,this.color),drawShadedRect(d,2*d,d,d,this.color)
			break;
		case 2:
			drawShadedRect(0,0,d,d,this.color),drawShadedRect(-d,0,d,d,this.color),drawShadedRect(-2*d,0,d,d,this.color),drawShadedRect(-2*d,d,d,d,this.color)
			break;
		case 3:
			drawShadedRect(0,0,d,d, this.color),drawShadedRect(0,-d,d,d,this.color),drawShadedRect(0,-2*d,d,d,this.color),drawShadedRect(-d,-2*d,d,d,this.color)
		default:
	}
	break;
	default: 
}
	pop()
}	
}

	function drawShadedRect(x,y,w,h,c){
		let incr = int(d/d)
		let strokeColorDark = color(hue(c),saturation(c),brightness(c)-27)
    let strokeColorLight =  color(hue(c),saturation(c)-13,brightness(c)+38)
		fill(0);
		rect(x,y,w,h);
		
		fill(strokeColorLight);
		rect(x+incr,y+incr,w-2*incr,h-2*incr);
		rect(x+2*incr,y+2*incr,w-4*incr,h-4*incr);
		rect(x+3*incr,y+3*incr,w-6*incr,h-6*incr);
		rect(x+4*incr,y+4*incr,w-8*incr,h-8*incr);
		
		fill(strokeColorDark);
		rect(x+incr,y+5*incr,w-6*incr,h-6*incr);
		rect(x+2*incr,y+6*incr,w-7*incr,h-7*incr);
		rect(x+3*incr,y+7*incr,w-8*incr,h-8*incr);
		rect(x+4*incr,y+8*incr,w-9*incr,h-9*incr);

		fill(c)
		rect(x+5*incr,y+5*incr,w-10*incr,h-10*incr);		
}

function keyPressed(){
	if(key == 'r'){
		TetrisPiece.r = (TetrisPiece.r + 1)%4;
	}
}
function mousePressed(){
TetrisPiece.x = mouseX - mouseX%d, TetrisPiece.y = mouseY- mouseY%d, 
TetrisPieces.push(TetrisPiece);
TetrisPiece = new TetrisShape(mouseX,mouseY,d)
}
