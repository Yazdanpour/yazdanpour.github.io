var phi = (1+Math.sqrt(5))/2;
function setup() {
	let canvas = createCanvas(1000, 1000, WEBGL);
    canvas.parent('VaporwaveDodecahedron.js');
	camera(0, 0, 1000, 0, 0, 0, 0, 1, 0);
}

function draw() {
  backgroundColor = color(233, 221, 255);
  background(backgroundColor);
  rotateX(frameCount * 0.01);
  rotateY(frameCount * 0.01);
  stroke(0);
  strokeWeight(2);
  scale(15);

  let vertices =[
     createVector(phi, phi, phi),
     createVector(phi, phi, -phi),
     createVector(phi, -phi, phi),
     createVector(phi, -phi, -phi),
     createVector(-phi, phi, phi),
     createVector(-phi, phi, -phi),
     createVector(-phi, -phi, phi),
     createVector(-phi, -phi, -phi),
     createVector(0, (phi*phi), 1),
     createVector(0, (phi*phi), -1),
     createVector(0, -(phi*phi), 1),
     createVector(0, -(phi*phi), -1),
     createVector((phi*phi), 1, 0),
     createVector((phi*phi), -1, 0),
     createVector(-(phi*phi), 1, 0),
     createVector(-(phi*phi), -1, 0),
     createVector(1, 0, (phi*phi)),
     createVector(1, 0, -(phi*phi)),
     createVector(-1, 0, (phi*phi)),
     createVector(-1, 0, -(phi*phi))];

  let vaporwaveColors = [
    color(153, 51, 255), // purple
    color(255, 0, 255), // magenta
    color(0, 255, 255), // cyan
    color(255, 102, 102), // pink
    color(255, 0, 128), // hot pink
    color(255, 153, 0), // orange
    color(0, 255, 128), // mint green
    color(51, 255, 153), // green
    color(255, 255, 0), // yellow
    color(255, 51, 153), // pink-red
    color(255, 153, 255), // lavender
    color(0, 204, 204)     // teal
		];

  let faces = [
    [7, 11, 10, 6, 15],
    [6, 10, 2, 16, 18],
    [15, 6, 18, 4, 14],
    [18, 16, 0, 8, 4],
    [13, 2, 16, 0, 12],
    [11, 3, 17, 19, 7],
    [19, 17, 1, 9, 5],
    [9, 1, 12, 0, 8],
    [15, 7, 19, 5, 14],
    [11, 10, 2, 13, 3],
    [14, 5, 9, 8, 4],
    [17, 3, 13, 12, 1]];

  var j=0;
  for (let k = 0; k< faces.length; k++) {
    fill(vaporwaveColors[j]);
    beginShape();
     for (let i=0; i<5; i++) {
      vertex(10*vertices[faces[k][i]].x, 10*vertices[faces[k][i]].y, 10*vertices[faces[k][i]].z);
     }
    endShape(CLOSE);
    j+=1;
  }
}
